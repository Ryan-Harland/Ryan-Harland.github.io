---
layout: post
title:  "Prototyping Toybox"
summary: "An Unreal Engine plugin that allows global messaging and gameplay events without code"
date: '2025-01-16 00:00:00 +0000'
role: Solo Developer
technologies: ['C++', 'Unreal Engine', 'Quartz', 'Cloudflare']
thumbnail: assets/img/posts/prototyping-toybox.webp
permalink: /projects/Prototyping-Toybox/
visibility: true
hidden-from-recents: false
featured: true
released: true
---

### Project Showreel

<link rel="stylesheet" href="{{site.url}}{{site.baseurl}}/assets/css/lite-yt-embed.css" />
<script src="{{site.url}}{{site.baseurl}}/assets/js/lite-yt-embed.js"></script>

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 10px;">
  <lite-youtube videoid="sTVtjq-Qlug" playlabel="Prototyping Toybox Showcase" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></lite-youtube>
</div>

### Key Responsibilities
- Created a global messaging system that allows actors to communicate through a subsystem
- Created a custom place actor panel for plugin actors
- Created an actor component that can respond to messages and execute a response chain
- Created a number of responses, such as transform tweens, playing sounds, playing VFX, spawning actors, creating UI elements, and more
- Created <a href="https://prototyping-toolbox.pages.dev" target="_blank">web documentation</a> containing a full Blueprint API reference as well as scripting guides using Quartz, deployed through Cloudflare Pages
- Deployed a live version of the tool to a focus group of users
- Setup a test level showcasing abilities that can be made out of box, as well as examples extended with scripting

### Project Summary

This project had many challenges throughout it's development. As this was one of the first projects I had to deploy to users to gather feedback, great care and iteration was taken in designing the interface, documentation and sample level. I made sure to explain every decision made in the setup and scripting, as well as ensuring that a number of different use cases were setup to show the plugin's versatility across game genres, as opposed to other "No code" project templates. Without a single script the plugin showcases detonating mining explosives, activating a parkour puzzle, a movable block puzzle and turning on lights. With only minimal scripting, this is expanded to showcase a poison gas cloud, a speed boost and a portal. This is also done to show it's interactiveness with any other system on the market, as it can be trivially integrated into anything.

<img class="inline-center" src="{{site.url}}{{site.baseurl}}/assets/img/posts/prototyping-toybox/response-component.webp" alt="In-editor screenshot showing the setup of a particular response"/>
<p style="font-size: 13px; text-align: center;"><i>Here a component waits for the `Platforms.Triggered` tag to be broadcast. The user can set up a chain of responses to execute, customizing a number of properties about them. In this instance, the user can change the tween's end point, as well as it's type, what actor should be tweened to that position, and whether it should loop infinitely</i></p>

Gameplay tags were chosen as the communication method as they're easy to make, update and use in code, as well as their nested hierarchy being intuitive and easy for anyone to understand. This plugin's aim was to increase prototyping speed for anyone, whether they are a veteran or beginner, so implicit understanding was also critical to get right.

I initially faced some challenges creating some of the responses as well. Particularly with the tween response, as it was the first one whose behaviour should actively execute even if it isn't the current one in the chain. To solve this I implemented some standard actor functionality on response UObjects, allowing them to register with the world's tick, as well as providing them with a mechanism to have world context for scripting purposes. This persistent nature lead to some bugs that were quickly stomped out.

<img class="inline-center" src="{{site.url}}{{site.baseurl}}/assets/img/posts/prototyping-toybox/response-subclass.webp" alt="In-editor screenshot showing a subclass of a response"/>
<p style="font-size: 13px; text-align: center;"><i>Here a blueprint subclasses the base response object. The response provides a 1-shot execute event, similar to `Begin Play`. Despite this being a UObject, all typical actor facilities are available, such as nodes that require a world context, as well as the ability to tick</i></p>

In the future, I'd like to extend this project to reduce the need for scripting further, by allowing logical breaks, such as conditions and variable access. Conditionally activating the rest of the chain, as well as being able to modify actor properties would even further expand the utility of this, and the ease of integration with any other framework. I'd also possibly look at creating custom slate UI elements to help prevent the somewhat confusing nesting that is currently present.