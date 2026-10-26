# Cognitive Modelling: Introduction to the Concept

Jami Pekkanen · LDA-C302 Cognitive Modelling Concepts · 26 October 2026

Lightly edited lecture transcript. Fillers, repetitions and false starts have been cleaned up; unrelated break conversation is omitted. The spoken explanations and qualifications are retained. Times refer to the trimmed recording, starting with the lecture welcome. This is an edited automatic transcript, not a fully checked verbatim record.

## Welcome and course practicalities

[00:00:01]

Hello and good afternoon. Nice to see so many of you here. For one reason or another, we have doubled the registrations this year, so we have 55 students. The classroom fits only 36. Luckily, there are some people on Zoom, so hopefully everybody doesn't come here and you don't have to sit on the floor.

To start, I can see some cognitive scientists. I'm from cognitive science myself, but it looks like there are a lot of people from other disciplines and faculties.

[00:00:45]

Who is not from cognitive science but is from the central campus? Quite a few. How many are from Kumpula? And how many are from somewhere other than the central campus or Kumpula? Everybody's from either one. How did you hear about this in Kumpula? We had a real influx of students from there, in computer science or data science.

Student: I found it in Sisu. It's in the programme that I need for my studies.

Very nice. Welcome to the central campus and cognitive science, and this very old building with weird paintings and statues.

[00:01:42]

Let's get started. First, we'll go over some practicalities and a basic introduction to the course. Here are the course personnel. My name is Jami Pekkanen. I am currently a university lecturer in cognitive science, substituting for Otto Lappi, who is on a research sabbatical. We will also have Juraj Šimko on this course. Today he is not here because he's on a trip, so I will be handling this lecture, but he will join us in further sessions. Officially, it's just me and Juraj, but there is constantly the spirit of Otto lying around.

[00:02:33]

You will see that later. In a lot of the video lectures, you will see that he has prepared a lot of the course material. He used to run this, but we are updating it as we go. You will be seeing and hearing a lot of Otto too.

Very briefly, what are the objectives of the course? What should you learn here? The goal is that you will develop a conceptual understanding of cognitive models, or some techniques of cognitive modelling. What cognitive modelling more exactly is will become apparent later.

[00:03:23]

The important thing is that this is a conceptual understanding. We won't go very deep into the technicalities of the methods. You will understand how they work and how we could use them to study and model human or some other entity's behaviour.

If you are from computer science and have studied machine learning, or are from physics and have studied dynamical systems, the technical coverage will be very light. Hopefully, you can also appreciate how you could apply your existing skills to modelling behaviour and the information processing of cognitive systems.

[00:04:11]

Importantly, we will learn to appreciate what assumptions we put in the models and how they relate to other theories of cognitive systems and cognitive behaviour. We will also briefly discuss how to evaluate them empirically, so we can assess whether they actually model some system that we want them to model.

We will understand the limits of modelling: how narrow the things we really can model with these are. We cannot model a whole human or a whole cat, so we will have to be very careful about which slices of behaviour we model with these computational models.

[00:05:05]

We will also discuss what benefits, what extra explanatory and understanding powers, computational modelling of cognition brings.

Then the practicalities. Every week we will have this meeting. Now I will give a lecture, but most sessions will go like this: before the session, there are video lectures, usually two, that you will watch. Then there are checkpoint exercises, which are two-alternative questions that relate to, and should be answerable from, the lectures. Here, live, we have Q&A sessions where we go through the questions, relate them back to the lectures and discuss them further.

[00:06:06]

There are also quite a few supplementary resources and readings in Moodle if you want to look further. Many of the lectures refer to these, so you can read up on what is referred to.

We meet every Monday, every week of this period, and most of the online stuff will be happening in Moodle, which you hopefully can access. It should be in student registration mode. Were you able to register in Moodle?

[00:06:52]

Student: I was able to add myself to the Moodle area, but all of these checkpoint quizzes and lecture slides say they're not available.

I still haven't updated this year. They will come after each Monday's lecture. We will release the videos and questions that should be done by the next lecture.

Then the course schedule. Here you may see why we are using this structure instead of having straight lectures.

[00:07:43]

We will cover symbolic modelling, reinforcement learning, Bayesian modelling and information theory. We'll go quite deep into dynamical systems because Juraj is an expert in them. Then some control theory, predictive processing and various kinds of neural networks.

As a new addition this year, we will have a live lecture about large language models, from the perspective of whether and how, and in what properties, they could be used to model human behaviour, for example. We have quite a bit of stuff to cover, so that's why we'll have to do it in those online lectures.

[00:08:33]

Then we have the quizzes. The quizzes as such are not that hard to do. They're more for you to assess whether you have figured out the stuff. You can probably pass the course quite easily if you just want to go through it, but I invite you to think a bit deeper. When you go to the questions, ask: do I know why this claim is correct or incorrect?

The checkpoint exercises are claims, and you have to say whether each claim is correct or incorrect. You get feedback on the answer, whether it was right or wrong, and that gives you some ideas about what to study further.

[00:09:40]

We will take at least the most difficult ones, based on the answer statistics, and discuss them here. We will go back to the lectures to see the rationale for the answers. Instructions will be provided in Moodle a bit later.

The course will be graded with a final exam, handled in Examinarium. By the way, do you have Examinarium in Kumpula as well, or do you have to come here? You don't have to come here? Good. The exam itself will be very similar to the assignment questions.

[00:10:33]

Some may even be the same, so it may pay off to pay attention to the assignment questions, but there will also be new ones. In the exam, you also have to give brief explanations: a rationale for why you selected the option that you did.

Exact dates will be in Moodle later. We usually open Examinarium and keep it open quite a long time, probably until January. If you need your grade earlier than that, do it earlier and contact us so we can grade you earlier.

[00:11:25]

This covers the practicalities. Soon we will enter the lecture proper, but are there any questions about the practicalities, theme or learning objectives of the course?

Student: What is already open in Moodle is the course readings, which are books. Are these for getting a deeper understanding of a specific topic, or are they intended for the exam or checkpoint questions?

They are more intended for deeper study.

[00:12:21]

You should be able to answer the questions based on the material in the lectures. You may want to read up on them because in a lecture you can only say so much. Especially when lectures refer to some material, you may want to look up the link in Moodle, and of course if you're interested in further studies. There is a lot of material and papers, not particularly well organised, but you can take a look and use the lecture references to get hints about what to read.

## What is cognitive?

[00:13:04]

This lecture won't have a quiz of its own. You will have a quiz about the two video lectures. This is an introduction to cognitive modelling as a field. What is cognitive modelling, and why do we do it? What are the benefits? And why not do it: when would you not want to use cognitive modelling? We will also very briefly go into how, but the how will be covered more in the rest of the course.

[00:13:49]

We won't go into specific techniques now, but motivate and frame what cognitive modelling is. The rest of the lecture will mostly answer the question: what is cognitive modelling? We have some why in there as well.

We have these two terms, cognitive and modelling, which may be unclear and whose meanings may depend on the context. To hint at that, I have capitalised them. We are defining what they both mean for the purposes of this course.

[00:14:44]

Let's decompose this by first asking: what is cognitive? When this question is asked, there is an ambiguity that you may not appreciate. Especially in how English works, this can be two different questions.

We can ask what entities are cognitive: what organisms or systems are cognitive in some sense? Or we can ask what makes something cognitive: what is the property of the system, or as we will see, a behaviour, that is cognitive, or something underlying the behaviour?

[00:15:39]

It's not necessarily a property of an entity. It can be more a property of some kind of process, for example. Let's start with the easier question. I'm not sure if it's easier, but people will have more intuitions about it: what entities are cognitive?

We haven't defined cognitive. That is the whole point, so this may start a bit circularly. For now, you can take it from your intuition: what is intelligent? What kinds of entities are intelligent or smart in some sense?

[00:16:28]

How many of you think that humans are cognitive or intelligent agents, or do cognitive or intelligent things? People may vary in their level of intelligence, but here we don't necessarily mean intelligence as such. If you take a typical person, what are their capabilities for conducting tasks compared to other kinds of systems? Compared to the video projector, we may be quite a bit more intelligent. The differences between these classes are the point here.

[00:17:21]

This is often what separates cognitive science from psychology. In psychology, the point of interest is often differences between individuals. We study variation between individuals and where it could come from. How can we theorise about it? In cognitive science, we're usually interested in how classes of systems work, not necessarily the differences within that class.

With this prelude, how many of you think that humans in general, or at least some humans, if you're thinking about somebody in particular right now...

[00:18:13]

How many think that humans are cognitive or intelligent? Almost everybody. The human is the prototypical object of study in cognitive science, so this wouldn't be that sensible if we didn't think of humans as cognitive systems or entities.

How about large language models, or how they are implemented in chatbots? Are these cognitive systems or entities? Hands up who thinks so. We are getting a bit more split. How many think they are not? It seems a lot of you are on the fence, which is probably a good thing.

[00:19:14]

You don't want to be saying willy-nilly that something is intelligent or not intelligent. You see that constantly in public discussions and, sadly, even in philosophy: we have a very strong gut feeling about what is intelligent and what is not, and then we form arguments based on that. Here we can have a deeper analysis of what would be cognitive or intelligent.

How about cats? There is a specific cat here, but you probably don't know her very well, so you can answer about cats in general.

[00:19:57]

How many of you think that cats are intelligent or cognitive agents? I think a few more hands than for humans. We will be seeing Pyllervö a bit more in this lecture too.

How about delivery robots, those things that autonomously or semi-autonomously go around? I don't know how much there is some Wizard of Oz online helping them cross roads. Let's say they can mostly autonomously go around and deliver their stuff. How many of you think these are intelligent or cognitive systems?

[00:20:43]

Student: I think it's cognitive but not intelligent.

That is a distinction. I started by mixing up intelligence and cognitive, so that's an entirely proper perspective. Quite a few say this is a cognitive system.

How about bacteria? Are bacteria intelligent or cognitive systems? Do they have significant information processing going on, which they use to conduct their business? We have a few tentative hands. Let's see if I can give you an answer or a perspective that may make this question easier.

[00:21:40]

But before that, I forgot this example: how many of you think that thermostats are cognitive or intelligent? Just these mechanical thermostats. I think many work based on how metals expand with temperature, but they still manage to keep rooms roughly at a comfortable temperature. How many think thermostats are intelligent and cognitive systems? We have some. I won't spoil how I think yet; we will see later.

We have been asking whether some entities as such are cognitive or intelligent.

[00:22:37]

I think this is a hard question and not necessarily a fruitful one. We are not usually interested in the entities themselves, at least in cognitive science. I think a more useful definition is that a cognitive entity is one that exhibits some intelligent behaviour. We move from the entity as such into studying what kind of behaviour it exhibits in its environment.

I started with intelligence being your gut feeling, and this may sound circular. I have said that cognitive is intelligent, so it wants to exhibit cognitive behaviour, which almost starts to sound like a tautology. But the important point is the behaviour versus the entity that exhibits it.

## Intelligent behaviour

[00:23:54]

We will go further into defining what we mean by intelligent behaviour in this sense. In cognitive science in general, this could be a good working definition for many perspectives.

Now the question is: what is intelligent behaviour? We had this working definition, or my proposal, that entities that exhibit intelligent behaviour are cognitive entities. There is a definition by Otto Lappi. I don't know if it's his original; I think it may be, or it may be adapted from somewhere. We can put certain criteria on what we call intelligent behaviour.

[00:24:56]

More exactly, intelligent behaviour is adaptive, goal-oriented, in some sense complex, and happens in partially predictable environments. The idea of these criteria is to rule out things that don't seem to be fruitful objects of study in cognitive science.

We can start with adaptive. Why would we want to study only adaptive systems? There are purely open-loop systems that get no feedback from the environment. You let them run, and they just run as they were pre-programmed.

[00:26:02]

For example, when you set your washing machine off, unless it's a very fancy one, it will just run whatever program has been pre-programmed into it. It won't adapt to how clean the stuff is, what is there, or whether the water spurts out. It doesn't care; it just runs the whole thing.

Usually, we don't think of such systems as very intelligent. It seems to exhibit something we could call behaviour, but it doesn't seem very adaptive, and that seems to rule it out as a cognitive or intelligent system.

[00:26:54]

The second criterion is that the behaviour is somehow goal-oriented. A bad example is a rock. A rock can exhibit behaviour: it will fall if you throw it or push it off a ledge. But it doesn't seem to have any goal. We know what will happen to it. It has maybe this telos, a certain destiny, but it doesn't seem to do anything to fulfil that goal. There doesn't seem to be anything within the rock that wants to, or actively pursues, falling as it does.

[00:27:53]

If you see a rock falling down and it tries to keep up, tries to levitate, then it could start to seem like there's something more. This is a smarter rock than the others that just fall.

Then we have the environment. The behaviour has to be adaptive and goal-oriented in a complex and partially predictable environment. Complex here means something like the cognitive system being, in a sense, simpler than its environment.

[00:28:51]

It's not necessarily complexity as such, but the balance, the difference between the environment and the organism. In machine learning, we have this big problem of overfitting. You can take a huge model, put some dataset into it, and it will memorise the whole corpus. If you test it on the training corpus, it will always give the exact right answers. But in the parameters, you may have more degrees of freedom. The model can be more complex than the task it is trying to do.

[00:29:43]

In a sense, it doesn't have to do anything intelligent.

[An interruption with the slides.]

Is this intelligent behaviour or not? I don't know if it's trying to sabotage intentionally, or if it's saying that I have to move on with the slides.

If we have a huge neural network or a huge decision tree that just memorises all the answers, then in the task of trying to predict that dataset, it doesn't seem very intelligent.

[00:30:31]

It doesn't have to make any choices, in a sense. It can just look things up, and it's more complex than the system. We will discuss information theory, and then we can even quantify how the neural network is more complex than the dataset if you overtrain it badly enough.

The final criterion is that it has to operate in a partially predictable environment. To understand this, let's think of something behaving in a perfectly predictable environment.

[00:31:29]

The system can predict all the consequences of its actions at each time. It knows exactly what will come in the future, so it's fully predictable. In that case, it's usually probably more complex too, but we start to look at something like a rock. We look at systems that are deterministic and governed by rules that don't seem to have to process information intelligently. They would probably behave perfectly. You could think that the universe is intelligent or something.

[00:32:29]

This is more to limit the phenomena of interest for cognitive science and cognitive modelling. We are not studying those kinds of behaviours that can be stated directly as this sort of physical, perfect system. Of course, one thing is that you probably don't have this in reality. You have it in some computer tasks: if you model how to play some games, like chess, for example. Well, not chess...

[00:33:11]

In chess, you still have the other party that you cannot predict, and maybe even yourself that you cannot predict. Let's say you play tic-tac-toe with yourself. If you could predict yourself, you could fully predict the game of tic-tac-toe, and maybe it wouldn't be interesting to study as a cognitive system.

I have been hinting at this: we went from describing entities as cognitive or intelligent to describing some kinds of behaviours in some environments as cognitive or intelligent.

## Intelligence as a perspective

[00:34:06]

A pretty smart guy made a point about this already in 1948. How many of you are familiar with the guy in the picture? Great. If you are not, read up on him and his papers as well.

This is from a paper, *Intelligent Machinery*, from 1948. Apart from this, in 1948, when there practically were no computers yet, it laid out the basis of machine learning. It made separations between learning systems and programmed systems, and it even discussed reinforcement learning.

[00:34:54]

Of course, not in those terms. Reinforcement learning came later, let's say in the 1980s or 1990s in its current form.

In the very last section of this paper, the second-to-last paragraph, the section is titled “Intelligence as an Emotional Concept”. Turing writes:

> The extent to which we regard something as behaving in an intelligent manner is determined as much by our own state of mind and training as by the properties of the object under consideration.

[00:35:55]

Turing was kind of of the opinion that intelligence is not a property of the object, or even a property of some behaviour, but more a perspective. You could say it's an opinion. Sometimes it's quite an emotionally based opinion, as Turing hints in the title. Intelligence has moral things and all sorts of other things tied into it, and these get mixed up in many discussions.

Sorry, I'm going to run out of battery.

[00:36:49]

[Break to connect the laptop power. Unrelated room conversation omitted.]

[00:39:17]

Let's continue. I think some people left for a break, but you can fill them in when they come back. We left off with this quote and were discussing how intelligence, often in everyday use of the word and also in some philosophical uses, sadly, is tied up with all sorts of other things, like how you value something or what its moral status is.

[00:40:37]

We will skip all of that here, but keep in mind Turing's insight: what is intelligent is a joint property of the one who assesses the intelligence and the system itself.

I would rather say that analysing or thinking of something as a cognitive system is a perspective you take on a system. That perspective is that it exhibits behaviour that it can be useful to try to explain or predict with some kind of information processing. That is what I say is cognitive: a perspective on certain systems.

[00:41:37]

You don't have to think, “Is this intelligent or not?” You can try: if I explain how this works with some sort of algorithm, does it work? If it works, you have a good perspective on it. If it doesn't, you probably don't want to use the cognitive approach.

We will move to the second part of the big question of the lecture: what is modelling? Before that, are there any questions or comments about this first part, what is cognitive?

## What is modelling?

[00:42:26]

Then we can move to the question: what is modelling? Here I will discuss modelling in general. There is a lot of modelling that is not cognitive modelling. What do we do, or what do we mean, when we model something? Especially, what do we mean in this course? It may mean different things in different contexts.

Now we see Pyllervö, but famously, we know that it is not the cat. This is a picture of the cat. It's some sort of representation of the cat.

[00:43:31]

How does it differ? I think the artist may have some more philosophical or artistic point, but to me the question is: what can we do with the real cat that we cannot do with the picture of the cat?

Obviously, the picture somehow relates to the cat itself. The cat was part of the causal chain of how I managed to take this picture. But it also captures some properties of the cat that we can analyse here, so I don't have to bring the cat here to see those properties.

[00:44:18]

For example, we see that it seems to exhibit whitish or blackish colour, at least in the lighting environment it was filmed in. It seems to have two eyes, a nose, ears and a tail. It seems here to have three legs, but actually the cat has all four legs. I don't know if it's hidden behind there, but some cats do this weird stance where they hide their leg.

That was an example where we could have a mismatch of properties of the representation and the cat.

[00:45:04]

Here we cannot see one hind leg. With this representation, we cannot say whether the cat has three or four legs. We sometimes also have a three-legged cat who has had one leg amputated. If you take a photo from a similar angle, you couldn't really say whether it has a leg amputated or not. This representation does not share, or at least does not inform us about, this property of the cat: the number of legs.

[00:45:57]

We are missing a lot of things that we could study with the cat proper. But a cat has literally countless properties. You could invent properties that you can ascribe to a cat, that it has or does not have. That's not very useful for understanding it.

Instead, we want to pick out some properties for some purpose: to understand or predict the behaviour of a cat, or how the cat would relate to another phenomenon. But only in this very strict sense: you take these properties, and your selection of properties has limits on what it can say about the cat.

[00:46:53]

In general, if we have some question under study, we try to find properties we can use. We have to be able to robustly extract them, and then be able to use them somehow. For example, if there is a special treatment only for three-legged cats, we would have to figure out the property of how many legs it has.

“Understand” is a very wishy-washy word, and maybe I shouldn't have used it. Here, use and understand are used jointly, meaning that we have knowledge of how these properties work.

[00:47:57]

For example, if we take the mass of the cat, we know quite a bit about the cat with just that one property, because we can relate it to gravity or inertia. In that sense, we can understand the cat within the context of gravity by picking out that one property.

Let's take another modelling example. I said that we have only a picture of the cat, and we cannot see whether she has three or four legs.

[00:48:42]

We could have a useful representation that solves this problem if, for example, we make a 3D model of the cat. If we had taken the photo from this perspective, we couldn't see it. But because the model has these geometric, three-dimensional properties that allow us to rotate it, it's in a sense a better model for this purpose: finding out how many legs the cat has.

[00:49:28]

We reduce some properties. For example, it's less realistic than the cat. It's not even that accurate a model of a cat. It's clearly rendered. It loses some properties of how light interacts with the fur, although we try to capture some of these with the simulated fur. But now we have a different representation of the cat, which could be used as a model to study properties of the cat.

What other uses could there be for this 3D model?

[00:50:23]

Let's say we want to make a bronze statue of the cat, because why not? Then we have to get the bronze. It may be quite expensive; I don't know how much bronze costs. To make the bronze statue, we have to order at least a volume of bronze that we could use. I don't know how you sculpt a bronze statue. Maybe you put it in a mould or something. Anyway, you would need to know the volume of the cat.

[00:51:03]

As Archimedes already figured out, we could put the cat in a bathtub. But there are things you cannot do in practice, because Pyllervö would get extremely angry and you'd probably end up with wounds. We could have more ethical or practical ways, which we do when we have this 3D model. Because we have this enclosed mesh of the cat, we can know its volume.

One particularly difficult way of figuring out the volume is to mould it into a ball, assuming it doesn't compress or anything.

[00:51:57]

Then you can measure one property: the radius. You probably measure the diameter and divide it by two. We can connect that to our previous knowledge of how geometry works and compute the volume from the radius.

At least according to this model, we would need about 3.4 litres of bronze to make the statue. I would maybe get a bit extra here. I'm not very sure about the model's geometric fidelity. With that, we could order the bronze.

But let's say, for some reason, we need to ship 27 cats like Pyllervö.

[00:53:00]

Then we need to figure out how big a box we need. With these hard economic times, we have to be very efficient and order only the minimal box that will squeeze the 27 cats into it.

We have this nice model, from which we have the volume. From the volume alone, with some more geometry, we can figure out that the cat would make a cube of around 15 centimetres per side. We also know that cubes, or rectangular shapes of the same proportions, make optimal packing.

[00:53:59]

If we somehow manage to squash the kittens into cubes... I think there was some bad meme about doing this with kittens back in the early 2000s. But no cats were harmed here. I didn't try this on the cat. That's a benefit of having the model, so I don't have to put her in a rectangular jar. I think that was the meme.

We can connect our knowledge that cubes produce optimal packing, and we also know from the real world that cats pack quite well.

[00:54:41]

They're quite nimble, and probably they will almost optimally pack if you really squeeze them into the box. From these properties and with this background knowledge, we know that if we stack them up three by three by three, the cats will fit snugly and efficiently in a box of about 45 centimetres per side.

I don't know if the cats would like it, but with these hard times we all have to make painful decisions, so we may have to squeeze the cats into the exact minimum box they will fit in.

[00:55:29]

We will do more with less. That covers the modelling part with the cat example. You could say more about modelling as a concept, but the critical thing to understand is that when we model, we want to get useful properties for some purpose, which we can use and understand based on other knowledge that we have.

The deeper important point is that when we study a model of a system, or study a system with a model, we don't study the whole system. We study some assumed similarity between the model and the system under study.

[00:56:27]

You should be very careful about whether the properties are correctly extracted and whether the system works in the same way as you model it. This is often not that well appreciated. You come up with models of how something could behave, and that becomes the model of how humans do some stuff, but they may be totally wrong.

I think this will be discussed later: cognitive science started with the classical cognitive science idea that humans work as symbol systems. You stack up a lot of if-then rules, and then you can explain how human cognition works.

[00:57:29]

But that turned out, maybe not wrong, but at least not a very good way of trying to explain human cognition. There's more about that in the symbolic modelling lecture, and even some questions. We can come back to this in the next Q&A.

Any questions about modelling in general? If not, we can move on. We have tried to arrive at some working definition or criteria for what is cognitive, what we mean by it in this course and context, and what is modelling.

## Cognitive modelling and the perception-action loop

[00:58:30]

Not all modelling is cognitive modelling, and not all cognitive study is modelling. As a detour, you can do a cognitive study of systems without having a cognitive model as such. You can see how a system reacts to some stimulus, how the cat reacts to some stimulus, for example, and make a note of those relationships. It's not really modelling in the computational sense that we are trying to do here.

[00:59:23]

Modelling is only one way of doing cognitive science, but this is where we focus now. What is the cognitive modelling we are focusing on?

A very common, almost knee-jerk reaction when you are asked to make a cognitive model of a system, or analyse it cognitively, is the so-called perception-action loop. To study this information processing, which is our interest here, the mechanism of how cognition works, we have to isolate it from other parts of the totality that the thing under study happens to be in.

[01:00:23]

We make a split between the agent and the environment. I should have drawn a line, but somewhere around here goes a line where we separate them. What is the environment, what is the agent, and where do you draw the line? Often, it's not clear at all.

When you study humans, you could think that it's the physical extent, somewhere where the flesh turns into air, that defines the agent as a human and what the environment is.

[01:01:10]

When we study information processing, that is not usually a very useful way of splitting the environment from the agent. For example, some branches of cognitive science, the classical branch, which has been criticised a lot for this, think that just the brain is the system.

There's this so-called “brain in a vat” criticism or implicit assumption in much of the older cognitive science. There, everything else, the body and the eyes, everything not in the brain, would be the [environment].

[01:01:58]

The body would be part of the environment. The actions wouldn't be somebody hitting a table, but sending neural impulses that form a cascade that makes this happen. If you study a human, you can make the divide within the human, so the body is in the environment.

You can also do it another way. There is the so-called extended cognition idea. If I have two big numbers to divide and I have to do long division, which I haven't been able to do in 30 years, I take a pencil and paper and use them to compute.

[01:02:56]

Then you can think of the paper and the markings on it as part of the same cognitive system. Where we draw the agent versus the environment also extends to that note-taking stuff.

When we discuss cognition, we discuss things like short-term memory. We can take notes and externalise our memory. Studying how the computation is done by the human doesn't really make sense if you don't take into account that they use this external memory.

[01:03:53]

What is cognitive modelling? The goal could be put as modelling information processing that turns perception into action. We are studying what happens in here. What is the information processing? What kind of algorithm, for example, could turn perceptions into actions?

Cars have adaptive cruise control systems that try to keep a fixed distance to the car ahead. You could have a very simple one that measures the distance with a laser, for example. If the distance is too close, it slows down; if it's too large, it speeds up.

[01:05:04]

We have the perception, the laser range measurement. We process the information by computing whether the distance is too long or too short. Then it takes some action, like increasing acceleration or sending an electrical signal to the car's controlling computer to do that.

It happens in this road environment: it accelerates, the tyres grip the ground, and so on.

[01:05:46]

It has some effects, and then we get a new range measurement, a new percept, and on we go. That would be a simple system we can analyse using this decomposition.

You could also call this “the rules of behaviour”. What are the rules that govern the behaviour of something? That could be a better shorthand than this mouthful. Let's get another example of how we could analyse some behaviour with this cognitive framework or decomposition of the perception-action loop.

[01:06:53]

One thing before we go there. This is the knee-jerk reaction when you try to decompose a system, the usual frame when you try to understand something cognitively, especially model it. But there are approaches where there is no clean separation. The dynamics of the environment and the agent are so closely tied that it doesn't make sense to try to isolate the agent from the environment.

We may discuss some of this. Philosophically, you may hear about enactivism, for example. That is a view that it's more the totality of the environment, where there could be some agent or not.

[01:08:01]

There is also an older strand in psychology, ecological psychology, especially Gibsonian psychology. It takes this view that it's fundamentally the interaction of the organism or system and its environment, in a sense where you cannot even tell where one ends and the other begins.

With that caveat, we can get back to the frog. Hands up, how many of you think a frog is a cognitive entity? Almost everyone. The frog exhibits some intelligent behaviour, which was adaptive, goal-oriented behaviour in a complex, partially predictable environment.

## A cognitive model of catching a fly

[01:09:12]

We will encounter the frog again in some of the lectures. I'm not sure which one, maybe when we discuss neural networks. What kind of information processing happens within the frog, maybe its brain or however it's implemented, has been the subject of considerable debate in cognitive science and philosophy. It's still a very hot topic in philosophy. I have been part of one paper, but I think it's a bit of a stupid debate, so don't go too deep into that.

[01:09:58]

There was this paper, and I sadly forget who wrote it, where they took frogs and showed them different spot patterns. With certain kinds of patterns, I think just on a screen, the frogs lashed their tongues out. The idea is that it probably lashes out its tongue to try to catch the fly and eat it.

But the frog sees just a blob. These were quite simple blobs. For some blobs, it lashes out its tongue, and for some, it doesn't.

[01:10:59]

How does it figure this out? What are the blobs that its fly detector detects as flies? There is a proposal that it has a so-called net convexity detector. If you have some sort of shape, you have to be able to figure out its outline, but it also has to have high net convexity.

Net convexity refers to how it's shaped, that there aren't these steep angles. For example, a circle would have quite high net convexity. This will be discussed a bit further later.

[01:11:54]

It's not important what it really is, but that there is this system that tries to detect blobs that the frog gets into its retina, into its eye. They have a geometrical property that is used to figure out when there's a fly in its field. If it detects one, it can take the action, which here would be a tongue strike in the direction where it sees it, relative to the eye position and so on.

This could be one cognitive analysis. You could even model this by running a computer vision program that takes these different inputs, tries to detect net convexity, and outputs: now lash out the tongue.

[01:12:54]

If you make that kind of program, you can show the frog the same inputs that you give to the program and see whether, in the same cases, more or less most of the time depending on your criteria, the program lashes out. Whether the program detects the flies that the frog does would be an empirical study of this model.

That's what makes this modelling a science: you should empirically evaluate whether your model actually behaves the same way as the system it's supposed to be modelling.

## The cognition of a thermostat

[01:13:52]

Then we get into the perhaps provocative example of the thermostat. This is also a subject of considerable debate in some corners of philosophy. Is a thermostat a cognitive system?

My view, as I established, is that it's not the thermostat that is cognitive, and maybe not even the behaviour. The question is whether it makes sense to try to understand some behaviour of the thermostat using this information-processing perspective. With thermostats, you can clearly draw this perception-action loop.

[01:14:52]

You have the thermostat in some room, and it makes readings of the temperature. It can be entirely mechanical, like a metallic strip expanding or contracting depending on temperature. Then it makes some sort of computation.

Here, this would be a P-controller, or proportional controller, which we will encounter later as well. The thermostat is set to some target, here T₀. You can see it's 20 degrees. It has observed, perceived, the temperature. It computes their difference and tries to move it towards the desired temperature.

[01:15:53]

Exactly like you could use in the car that follows the other car automatically. We have this computation, but importantly, the computation doesn't necessarily happen as such. There's no computer in these physical thermostats. But it exhibits this property that we can approximate it using an equation that you can turn into a computation.

It has a goal. In some sense it seems to adapt to its environment. If the temperature increases, it cools down if it's too high, and so on.

[01:16:53]

There is variation and partially predictable change in the environment. We can assume that the temperature doesn't immediately spike up to 1,000 degrees Celsius. We know something about how the temperature will behave.

Of course, we cannot fully predict it, because then we'd have to do an approximate weather forecast in a very complex system. We can only predict some statistical behaviour of how it will operate in the future.

[01:17:41]

There's the complexity, but the thermostat is clearly a simpler system than the room itself and all the air and stuff in it. From this perspective, it seems to fit all the criteria for our intelligent behaviour. If you use those criteria and accept that it fulfils them, you would logically have to admit that it exhibits intelligent behaviour in this sense.

Have I managed to convince anybody now that the thermostat is a cognitive system? Hands up. I'll have to keep pressing on this point.

## Finding the rules of behaviour

[01:18:44]

We will close with another excerpt from the same paper. This is even the same paragraph; it continues exactly from the previous one. Turing writes that if we are able to explain and predict the behaviour of something, or there seems to be little underlying plan, we have little temptation to imagine intelligence. With the same object, it is possible that one person would consider it intelligent and another would not. The one who deems it intelligent has not found out the rules of its behaviour.

[01:19:42]

If someone doesn't understand the system, doesn't understand the information processing, the rules of behaviour, then they think the system is intelligent.

Here we come to the thermostat idea. Maybe you don't deem it intelligent because you think you understand how it works. It's somehow simple. Its rules of behaviour are something you can grasp quite easily, and then you don't have to apply this perspective of intelligence. It's not useful to think of it analogously to things you think are intelligent, like humans or animals, which have very complicated behaviour and are better analysed somehow else.

[01:20:47]

This relates to many old sayings in machine learning, or AI, as it was called before it was called machine learning and then AI again. That's another historical thing. There was this common wisdom that when you have a computer system that seems to do something complicated, and its behaviour is hard to figure out, people think that system may be intelligent. But once you understand how it ticks inside, once you understand its rules of behaviour, you suddenly think it's not an intelligent system.

[01:21:39]

Once AI becomes understood, it stops being intelligence. I will try to flip this around: the better you understand the system, the more you can appreciate its intelligence, like the very smart and elegant mechanical thermostat.

That wraps up the content. For next time, watch the symbolic modelling lecture, watch the reinforcement learning lecture, and complete the checkpoint exercises in Moodle. I would prefer that you do them by Friday morning, because we have to run the statistics and plan the Q&A session with those. We have a Monday lecture, so I don't want to ruin all my weekends.

[01:22:49]

I'll probably put the deadline there, but if you really can't manage it, you can return them later. We will discuss the questions and go over the lectures you just watched.

Any questions about the practicalities or what was discussed, or comments?

Student: The checkpoint exercises are not yet in Moodle, right?

Yes. That's to be expected, but they should be there. I will put them there today and send an email when they are up.

[01:23:34]

Usually, we try to set them up beforehand, but now I didn't have the time. Thank you, enjoy Otto's lectures, and we will see you next week. Thanks to the chat too.
