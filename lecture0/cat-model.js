import {createCatViewer} from './assets/cat-model/cat-viewer.mjs?v=bronze-finish-1';

const slides = [...document.querySelectorAll('.cat-model-slide')];
let slide = slides[0];
const container = slide.querySelector('.cat-model');
const status = container.querySelector('.cat-model-status');
let viewer;
let loading;
let presentedSlide = null;

function preloadModel() {
  if (!loading) {
    loading = createCatViewer(container, {
      autoStart: false,
      modelUrl: new URL('./assets/cat-model/cat.glb?v=original-restored-1', import.meta.url),
      frameReference: {
        getBoundingClientRect: () => slide.querySelector('.cat-camera-frame').getBoundingClientRect()
      },
      idle: true,
      autoBlink: true,
      eyeMotion: true,
      shadow: true,
      interactive: true,
      fur: 'strands'
    }).then(cat => {
      viewer = cat;
      // Idle posture, blinking and gaze run while the slide is visible.
      cat.setMorph('cat');
      cat.setCamera({
        position: [0.381323, 0.357363, 0.482621],
        target: [-0.011891, 0.122197, 0.060146],
        fov: 37
      }); // Perspective zoom is 1; the supplied position determines the distance.
      cat.canvas.setAttribute('aria-label', 'Standing 3D model of Pyllervö');

      status.hidden = true;
      showModel();
      return cat;
    }).catch(error => {
      status.textContent = 'The 3D model could not load. Serve the slides over HTTP and check WebGL support.';
      console.error('Cat viewer:', error);
      return null;
    });
  }
  return loading;
}

function showModel() {
  const active = slides.find(candidate => !candidate.hidden);
  if (!active) {
    if (viewer) {
      viewer.pause();
      // Cancel any unfinished transition before leaving the model sequence.
      if (presentedSlide) {
        viewer.setMorph(presentedSlide.dataset.catShape || 'cat');
        viewer.setFinish(presentedSlide.dataset.catFinish || 'original', {duration: 0});
      }
    }
    presentedSlide = null;
    return;
  }
  slide = active;
  // Reuse one canvas/context across the consecutive model slides.
  if (container.parentElement !== slide) slide.prepend(container);
  if (viewer) {
    viewer.resize();
    const shape = slide.dataset.catShape || 'cat';
    if (presentedSlide !== slide) {
      const packing = slide.dataset.catPacking === '27';
      viewer.setPacking(false);
      const previousShape = presentedSlide?.dataset.catShape || 'cat';
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      viewer.setFinish(slide.dataset.catFinish || 'original', {
        duration: presentedSlide && !reducedMotion ? 900 : 0
      });
      if (!packing && presentedSlide && previousShape !== shape && !reducedMotion) {
        // The viewer interrupts an in-flight morph from its current shape.
        void viewer.morphTo(shape, {duration: 1600});
      } else {
        // Direct links and first loads start in the slide's complete state.
        viewer.setMorph(shape);
      }
      if (packing) viewer.setPacking(true, {animate: !reducedMotion});
      presentedSlide = slide;
    }
    const label = slide.dataset.catPacking === '27'
      ? '3 by 3 by 3 stack of 27 Pyllervö cubes'
      : shape === 'cat' ? '3D model of Pyllervö' : `${shape} with the same volume as Pyllervö`;
    container.setAttribute('aria-label', `Interactive ${label}: drag to rotate, right-drag to pan, scroll to zoom`);
    viewer.canvas.setAttribute('aria-label', label);
    viewer.play();
  }
}

window.addEventListener('slidechange', showModel);
window.addEventListener('pagehide', () => viewer?.pause());
// Fetch and prepare once at page load, including direct links to later slides.
showModel();
preloadModel();
