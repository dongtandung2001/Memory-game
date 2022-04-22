# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Tan Dung Dong

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/ajar-scratch-address

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)
Win game after repeat sequence of 8 notes:

![ezgif-3-d15d558a4b](https://user-images.githubusercontent.com/40316606/164524921-095945e2-1bd9-47aa-8aed-e1c82256e557.gif)

Lose game with 3 chances

![Screen-Recording-2022-04-20-at-4-2](https://user-images.githubusercontent.com/40316606/164343753-fe0c911d-6a10-48bb-b730-13e7ecb0871a.gif)
Time limit of 20 seconds:

![Screen-Recording-2022-04-20-at-4-3](https://user-images.githubusercontent.com/40316606/164344042-38513c97-97cc-45c8-9048-9b50f51dd021.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    
      I mostly searched for some html css syntax on https://www.w3schools.com 

      I am also self-studying HTML CSS and JS on https://codewithmosh.com

      I looked for errors on https://stackoverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

      I think one of the challenges was implementing the ticking clock. I followed the instructions on w3school about the syntax, I tried several times, however, the clock kept speeding up after each sequence. It ticked faster than it was supposed to. For eg: the first clue was normal, when it came to the second sequence clue, the clock started to count down faster. It kept increasing the speed of counting for the next sequences. I set a new interval on startGame() and at the end of guess(btn);

      Then I read about this on stackoverflow, one of the guys pointed out that since the first interval has not been cleared yet, you already start the new interval, that’s why the interval is twice the speed. 

      At first, I tried to temporarily solve the problem by clearing the interval at the beginning of the guess function, and starting the new interval at the end. It solved the speed up problem but whenever the button was clicked, the clock stopped for a moment. This looked like a bug to me and I did not like it.

      Eventually, I figured out that I should have not started the new interval at the end of the guess function, but rather, after the user correctly finishes guessing a clue sequence. Instead of clearing intervals every time the button is clicked, I only have to clear after the user correctly finishes guessing a clue sequence as well.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    Most of the content about web development is pretty straight forward up to now. However, I am always curious about how to secure the web. I know how to set up the web and make it into production, however, securing the web is a thing to me. I always wonder how people secure their webs. It is a really nice topic for me to learn. Since when you surf the internet, safety is always the priorty.

    One more thing is how the front-end developer and back-end developer can connect their code together. I had 3 projects that were APIs but I don't know how web developer can use that API as to expose data to the UI.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

    If I had more hours to work on this project, I would have the secret patterns be the patterns of any songs where each button is a note in the piano’s keyboard instead of being generated simply by Math.random. And each button is a key in the piano It makes the game more interesting to play. 
    
    And I would add some sound and lighting effects when the time is about to end and change the Chance countdown to a heart instead of counting numbers.

    I would let the user choose the difficulty to play. As the difficulty increases, the time between clues decreases, the pattern’s length increases. I would do this by adding the _select_ tag in a _form_ to get the user input about the difficulty. Then assign time to clueHoldTime, cluePauseTime, nextClueWaitTime, and pattern according to the choice of user.


## Interview Recording URL Link
[My 5-minute Interview Recording]
https://www.loom.com/share/8c74ff807161429789c3899f4a8eb4b6


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
