---
layout: post
title:  "Asteroids: Reimagined"
summary: "A modernised version of the retro classic developed as my first-year project"
date: '2022-05-16 00:00:00 +0000'
role: Solo Developer
technologies: ['C++', 'SFML', 'SQLite3']
thumbnail: /assets/img/posts/asteroids-reimagined.png
permalink: /projects/Asteroids-Reimagined/
visibility: true
hidden-from-recents: false
featured: false
---

### Project Showreel

<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 10px;">
  <iframe
    src="https://www.youtube.com/embed/VSbpBIYiwyY"
    title="ALERT Showreel"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>

### Key Responsibilities
- Created 8 directional movement with omni-directional shooting
- Created system for multiple asteroid types
- Created all art assets and SFX
- Created performant particle system
- Created bullet and object pooling system
- Used SQLite3 for creating a highscore database
- Created powerup system

## Project Summary

The main menu for the game didnt present many challenges. It functions as a way to avoid jumping straight into the action. When the user decides they want to start the game, the game changes the state of a state machine to allow the game to start on the next frame. Making the art for the main menu was quite fun. I used Adobe Photoshop to create the background splash screen, and I sourced the pixel font from a royalty free font website. I also managed to find some free music loops that fit extremely well with the theme of the game. After the core functionality was implemented, I also decided to add some vanity changes such as making the text scroll, and wrap around when it goes out of bounds. 

<img class="inline-center" src="/assets/img/posts/asteroids/main-menu.png" alt-text="Main Menu"/>
<p style="font-size: 13px; text-align: center;"><i>The main menu of the game, with scrolling text and an image background</i></p>

The gameplay is where the majority of the problems lied with this project. Since this was built with only the use of SFML and no engine to support it, things like collision handling had to be implemented. One of my main initial challenges was trying to write an efficient particle system, so that I could render a number of particles at the same time, and avoiding reallocating memory. In hindsight this is one element I could have improved on.

This project also served as a steep learning curve for many aspects of game programming. One of the initial skills this taught me very quickly was efficient use of documentation, with vector math being a close second, to allow bullets to travel towards the cursor. This project also got me familiarised with library dependencies and debugging. Since I had a small amount of spare time at the end, I also decided to implement a few more features, such as powerups (health, cash, and a laser burst), as well as a new explosive asteroid, that would actively chase the player down.

The game also features a number of sound effects which were created by me using a free software called BFXR.

<img class="inline-center" src="/assets/img/posts/asteroids/game.png" alt-text="Game Screen"/>
<p style="font-size: 13px; text-align: center;"><i>The game screen, showcasing score, power ups and the lives counter</i></p>

Implementing the highscore table was fun, and also had it's fair share of bugs. This used SQLite3 for the database backend, and sent vaious queries which were then parsed into something SFML could use with text. It took a fair amount of playing around to figure out the proper formatting needed, and the proper display widths, but overall I feel it turned out well.

<img class="inline-center" src="/assets/img/posts/asteroids/hi-scores.png" alt-text="End Screen"/>
<p style="font-size: 13px; text-align: center;"><i>The high score screen, showing the name of the user, their score, overall accuracy and number of kills</i></p>