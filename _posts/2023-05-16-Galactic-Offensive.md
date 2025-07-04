---
layout: post
title:  "Galactic Offensive"
summary: "A 2D boss-rush space game I made as my second-year project"
date: '2022-05-16 00:00:00 +0000'
role: Solo Developer
technologies: ['C++', 'DirectX 11', 'AssImp']
thumbnail: /assets/img/posts/galactic-offensive.png
permalink: /projects/Galactic-Offensive/
visibility: true
hidden-from-recents: false
featured: false
---

### Key Responsibilities
- Implemented encrypted highscores with an XOR cipher
- Implemented multithreaded model loading using Assimp and a custom built thread pool
- Implemented a random arbitrary attack system using function pointers
- Implemented a simple click based GUI
- Utilised windows messages to track text input 

### Project Summary

The main menu was unique to last years project. Firstly, it presented the problem of a UI solution, so for this I opted to use a simple sprite class I had made, making use of DX11 Shader Resource Views and added some simple click handling with callback functions. The main challenge of this menu was allowing it to work with 3D models, which was an involved process. 

Firstly, DirectX had to be setup to draw models rather than simple flat shapes. Secondly, a popular third party library for asset importing had to be used, for this project I opted for Assimp, due to it's widespread use. Lastly, a concurrency system was needed, so that loading the assets wouldn't cause the main thread to stall, making the game appear to freeze and become unresponsive. To tackle this challenge, I opted to use my threadpool that I made as part of a different module's final assessment, which worked very nicely for my needs.

Using this threadpool allowed me to write a simple worker function to handle the loading of the assets into memory and then queue the job and allow the model to render when it's ready. Fortunately, due to the lightweight nature of the model, it loads almost instantly on most modern hardware. During this time, we make sure to also preload other needed resources and allocate any memory needed for the game, allowing us to have preloaded models, textures, and pooled objects in order to make runtime spawning of these nearly instant. 


<img class="inline-center" src="/assets/img/posts/galactic-offensive/main-menu.png" alt-text="In-game screenshot showing the main menu"/>
<p style="font-size: 13px; text-align: center;"><i>The main menu, showing interactive buttons as well as 3D meshes and lighting</i></p>

The gameplay also presented a number of challenges. Performance wasn't as much of a concern here, as all necessary optimisation steps had been completed before the game loads. Making sure object pooling was used allowed a lot more freedom in how the game was played. Despite this however, a debug view was still implemented, toggled by pressing a function key. 

This was invaluable in the development process, as it allowed me to visualise collision radii, see the current frametime and framerate, as well as input key statuses, player velocity and co-ordinates, as well as active bullets. The lattermost element was critical to ensure that my object pool was big enough for the amount of bullets used, as exceeding the cap would severely dampen the difficulty of later bosses.

<img class="inline-center" src="/assets/img/posts/galactic-offensive/debug-menu.png" alt-text="In-game screenshot showing the debug menu"/>
<p style="font-size: 13px; text-align: center;"><i>The debug menu, showing helpful information as well as providing visualisation for collision</i></p>

Since the game was developed as a boss-rush style game, only a single enemy is present at once. The player has a finite number of hit points, which decrease on colliding with an enemy bullet. Score increases based on time spent, but also functions as a currency, where health can be restored for a score penalty. This creates an interesting dynamic where the player can choose to risk the run for a better high score, or if they want to take a small penalty and play it safe at the risk of being unable to take the top spot. It also introduces an emergent behaviour where a player may try to avoid damage, and keep the boss alive for as long as possible to reach that high score.

Each boss increases in difficulty with attack variations. Each has a static number of "gun" vectors, from which a bullet can shoot. Attack patterns are predefined, but randomly chosen, making use of a vector of function pointers, from which a random attack can be called. This was critical in avoiding repetition and increasing challenge in later bosses, allowing a gap in fire for a keen-eyed player to dodge through.

<img class="inline-center" src="/assets/img/posts/galactic-offensive/game.png" alt-text="In-game screenshot showing one of the boss fights"/>
<p style="font-size: 13px; text-align: center;"><i>The game screen, showing the purchasable power up and the different enemy attack patterns</i></p>

The high score table was certainly the easiest, but one of the most fun parts of this project. High scores are all stored in an encrypted .csv file, encrypted with a simple XOR cipher. Since this is an offline arcade game, security wasn't a paramount concern, however I still wanted it to be moderately inconvenient to cheat high scores. On writing and loading highscores they get serialized and correctly displayed in game, but to a spreadsheet or text editor they appear as unrecognizable junk.

I also decided to make this game over screen different based on the player's outcome. If you beat all bosses, you are greeted with a congratulations, and a spinning trophy, otherwise it is a simple "Better Luck Next Time!". This end screen also presented a similar challenge in the main menu, with me having to adapt and learn how to manipulate the positions of meshes with DirectX. This was initially harder than it seemed, as graphics programming is not my strongest skillset, however overcoming this challenge was a fun dive into some of the parts of the API.

When compared to high scores in my last project greater care was taken for keyboard input as well, listening for windows messages and interpreting the values passed, taking specific keycodes such as backspace to manipulate the entered data.

<img class="inline-center" src="/assets/img/posts/galactic-offensive/game-over.png" alt-text="In-game screenshot showing the ending for beating all bosses"/>
<p style="font-size: 13px; text-align: center;"><i>The ending screen, whether you get a congratulatory message depends on whether you survived or not</i></p>