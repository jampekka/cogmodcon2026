/* Complete slide states, with optional native crossfades between them. */
(() => {
  'use strict';
  const stage = document.querySelector('.stage');
  const slides = [...document.querySelectorAll('.slide')];
  if (!stage || !slides.length) return;
  let current = 0;
  let requested = 0;
  let revision = 0;
  let initialized = false;
  let transition = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const transitionsEnabled = new URLSearchParams(location.search).get('transitions') !== 'off';
  // Each entry describes the boundary AFTER this slide, in forward order.
  // Reverse navigation uses the same boundary with the opposite direction.
  const sectionExits = {
    'practical-questions': 'vertical',
    'intelligent-behavior-definition': 'horizontal',
    'cognitive-is-as-cognitive-does': 'vertical',
    'what-is-modelling': 'horizontal',
    'modelling-cat-stack': 'vertical',
    'thermostat-loop': 'horizontal',
    'finding-behavior-rules': 'vertical'
  };
  const carouselSlides = new Set([
    'cognitive-things', 'cognitive-chatbots', 'cognitive-cat',
    'cognitive-delivery-robots', 'cognitive-bacteria', 'cognitive-thermostats',
    'cognitive-intelligent-behavior'
  ]);
  function clearTransitionStyle() {
    const data = document.documentElement.dataset;
    delete data.textTransition;
    delete data.slideTransition;
    delete data.transitionAxis;
    delete data.transitionDirection;
  }
  function selectTransition(destination) {
    const data = document.documentElement.dataset;
    const from = slides[current].id, to = slides[destination].id;
    const axis = sectionExits[slides[Math.min(current, destination)].id];
    data.slideTransition = axis ? 'section' : carouselSlides.has(from) && carouselSlides.has(to) ? 'carousel' : 'text';
    data.transitionAxis = axis || 'horizontal';
    data.transitionDirection = destination > current ? 'forward' : 'backward';
    const pair = [from, to];
    data.textTransition = pair.includes('lecture-proper') && pair.includes('what-is-cognitive-modelling') ? 'reorder' : 'plain';
    if (pair.includes('this-is-not-a-cat') && pair.includes('cat-as-representation')) {
      data.textTransition = 'cat-figure';
    }
    if (pair.includes('what-makes-cognitive') && pair.includes('intelligent-behavior-definition')) {
      data.textTransition = 'definition-drop';
    }
    if (pair.includes('modelling-cat-shape') && pair.includes('modelling-cat-3d')) {
      data.slideTransition = 'slow-fade';
    }
  }


  // Keep bookmarks to the former reveal/carousel states useful.
  const oldStates = {
    'what-is-cognitive-modelling/1': 'what-is-cognitive',
    'what-is-cognitive-modelling/2': 'cognitive-questions',
    'cognitive-things/1': 'cognitive-chatbots',
    'cognitive-things/2': 'cognitive-cat',
    'cognitive-things/3': 'cognitive-delivery-robots',
    'cognitive-things/4': 'cognitive-bacteria',
    'cognitive-things/5': 'cognitive-thermostats',
    'cognitive-things/6': 'cognitive-intelligent-behavior',
    'intelligent-behavior-heading': 'intelligent-behavior-definition',
    'what-makes-cognitive/1': 'intelligent-behavior-definition'
  };
  function fit() {
    stage.style.setProperty('--slide-scale', String(Math.min(innerWidth / 1600, innerHeight / 900)));
  }
  function commit(index) {
    if (initialized && index === current) return;
    initialized = true;
    const previousId = slides[current].id;
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.hidden = !active;
      slide.inert = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    if (document.activeElement?.closest('[hidden]')) document.activeElement.blur();
    const id = slides[current].id;
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    window.dispatchEvent(new CustomEvent('slidechange', {detail: {id, index: current, previousId}}));
  }
  function show(index, {animate = true, force = false} = {}) {
    const destination = Math.max(0, Math.min(slides.length - 1, index));
    if (!force && initialized && destination === requested) return;
    requested = destination;
    const requestRevision = ++revision;
    // A skipped transition still runs its update callback. Revision checks below
    // stop that callback from overwriting a newer, already committed slide.
    const interrupted = transition !== null;
    if (transition) transition.handle.skipTransition();
    const modelToModel = slides[current].classList.contains('cat-model-slide') &&
      slides[destination].classList.contains('cat-model-slide');
    if (!animate || !initialized || interrupted || modelToModel ||
        Math.abs(destination - current) !== 1 || !transitionsEnabled ||
        reducedMotion.matches || document.hidden || !document.startViewTransition) {
      clearTransitionStyle();
      commit(destination);
      return;
    }
    selectTransition(destination);
    const pending = {handle: null};
    transition = pending;
    try {
      pending.handle = document.startViewTransition(() => {
        if (requestRevision === revision) commit(destination);
      });
    } catch {
      if (transition === pending) { transition = null; clearTransitionStyle(); }
      if (requestRevision === revision) commit(destination);
      return;
    }
    // A skipped animation rejects ready, but the DOM update can still succeed.
    pending.handle.ready.catch(() => {});
    const settled = () => {
      if (transition !== pending) return;
      transition = null;
      clearTransitionStyle();
      // Navigation remains usable even if the browser abandons the transition.
      if (requestRevision === revision) commit(destination);
    };
    pending.handle.finished.then(settled, settled);
  }
  function settleImmediately() {
    if (transition) show(requested, {animate: false, force: true});
  }
  function fromHash() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = ''; }
    const id = oldStates[hash] || hash.split('/')[0];
    show(Math.max(0, slides.findIndex(slide => slide.id === id)), {animate: false, force: true});
  }
  const next = () => show(requested + 1);
  const previous = () => show(requested - 1);
  window.addEventListener('resize', () => { settleImmediately(); fit(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) settleImmediately(); });
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) settleImmediately(); });
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest?.('input, textarea, select, button, a, video, audio, [contenteditable]:not([contenteditable="false"]), [data-interactive]')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      if (event.key === ' ' && event.shiftKey) previous(); else next();
    } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault(); previous();
    } else if (event.key === 'Home') { event.preventDefault(); show(0, {animate: false, force: true}); }
    else if (event.key === 'End') { event.preventDefault(); show(slides.length - 1, {animate: false, force: true}); }
  });
  window.deck = {
    next, previous,
    goTo(id) {
      const index = slides.findIndex(slide => slide.id === id);
      if (index < 0) return false;
      show(index, {animate: false, force: true}); return true;
    },
    get state() { return {id: slides[current].id, index: current, count: slides.length}; }
  };
  fit();
  fromHash();
})();
