# etuala.js

> Etuala stands for **foreground** in Finnish

etuala.js is a modern approach to modals, ready for being built into your HTML5 & CSS3 website. It's super light & blazing fast (8kb minified & gzipped).

Inspired by [Avgrund]("https://github.com/hakimel/Avgrund").

All animations are carefully made in CSS. Therefore etuala.js can only show its whole beauty in modern browsers. But it should also work in older ones.

## Usage
* Get your copy of [etuala.js]("link to etual").
* Link to etuala.min.js & etuala.min.css in your HTML (you may also include it into your own existing files for performance reasons).  

> There is also a SCSS file for easy customisation - just choose your own values for the variables at the top & convert it to css!

> Be sure also to include sizzle.min.js if you choose to use the non-minified version of etuala.js!

* An etuala-modal is always made visible by a trigger (it's up to you what you want to use - every clickable element can be a trigger).
* Add `data-etuala-trigger="foo"` to your trigger and `class="etuala" data-etuala="foo"` to your modal.
* Initialize etuala.js in your own Javascript with `Etuala.init()`
* As soon as someone clicks on the trigger, the modal is shown.

## Contact
For any questions, ask me on twitter [@nenebale]("http://twitter.com/nenebale")

## License

Copyright (c) 2013 [Webcake Development & Design]("http://www.webcake.ch/")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.