// Based on Francesco Trillini's work

/*
 * Copyright MIT © <2013> <Francesco Trillini>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var self = window;

;(function(self) {

  var canvas,
    context,
    art = [],
    nextArt = [],
    mouse = { x: -99999, y: -99999 },
    layout = 0,
    FPS = 60,

    /*
    * List colors.
    */

    colors = ['#FFB4B4', '#98F2C1', '#7CEDFF', '#FFF1B9'];

  /*
  * Init.
  */

  function init() {
    var slideshowContainer = document.querySelector('.swarm');
    canvas = document.createElement('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    slideshowContainer.appendChild(canvas);
    // Browser supports canvas?
    if (!!(capable)) {
      context = canvas.getContext('2d');
      // Events
      if ('ontouchmove' in window) {
        canvas.addEventListener('touchup', onTouchUp, false);
        canvas.addEventListener('touchmove', onTouchMove, false);
      }
      else {
        canvas.addEventListener('mousemove', onMouseMove, false);
      }
      window.addEventListener("resize", debounce(function (e) {
        onResize();
      }));
      updateArt(0.7, 0.5); // should be the same as hero
      loop();
    } else {
      console.error('Sorry, browser does not support canvas');
    }
  }

  /*
  * Checks if browser supports canvas element.
  */

  function capable() {
    return canvas.getContext && canvas.getContext('2d');
  }

  /*
  * On resize window event.
  */

  function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Reset the art particles, and align again on the center of screen
    nextArt = [];
    updateArt();
  }

  function scrollX() {
    return window.pageXOffset || window.document.documentElement.scrollLeft;
  }

  function scrollY() {
    return window.pageYOffset || window.document.documentElement.scrollTop;
  }

  /*
  * Debounce events
  */

  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 200, event);
    };
  }

  /*
  * Mouse move event.
  */

  function onMouseMove(event) {
    event.preventDefault();
    mouse.x = event.pageX - (scrollX() + canvas.getBoundingClientRect().left);
    mouse.y = event.pageY - (scrollY() + canvas.getBoundingClientRect().top);
  }

	/*
  * Touch up event.
  */

  function onTouchUp(event) {
    event.preventDefault();
    // Reset mouse position
    mouse = {
      x: -99999,
      y: -99999
    };
  }

	/*
  * Touch move event.
  */

  function onTouchMove(event) {
    event.preventDefault();
    mouse.x = event.touches[0].pageX - (scrollX() + canvas.getBoundingClientRect().left);
    mouse.y = event.touches[0].pageY - (scrollY() + canvas.getBoundingClientRect().top);
  }

  /*
  * Create art particles.
  * @param seed.
  */

  function createArtParticles(seed) {
    for (var quantity = 0, len = seed; quantity < len; quantity++) {

      var radius = randomBetween(0, 2);
      var hasBorn = radius > 0 || radius < 2 ? false : true;

      var color = colors[~~(Math.random() * colors.length)];

      art.push({

        x: canvas.width * 0.5,
        y: canvas.height * 0.5,

        hasBorn: hasBorn,

        ease: 0.04 + Math.random() * 0.06,
        bornSpeed: 0.07 + Math.random() * 0.07,

        alpha: 0,
        maxAlpha: 0.5 + Math.random() * 0.5,

        radius: radius,
        maxRadius: 2,

        color: color,
        interactive: false

      });

      art = shuffle(art);

    }
  }

  /*
  * Update the current art to a new one.
  */

  function updateArt(artPercX, artPercY) {

    // Clear immediately the screen
    clear();
    nextArt = [];

    var art = document.querySelector(".latest-scroll-detected + .art") ? document.querySelector(".latest-scroll-detected + .art") : document.querySelector(".section-visible + .art");

    var artPosX = (artPercX ? canvas.width * artPercX : canvas.width * 0.5) - art.width / 2;
    var artPosY = (artPercY ? canvas.height * artPercY : canvas.height * 0.5) - art.height / 2;

    context.drawImage(art, artPosX, artPosY);

    var surface = context.getImageData(0, 0, canvas.width, canvas.height);

    for (var width = 0; width < surface.width; width += randomBetween(2, 8)) {
      for (var height = 0; height < surface.height; height += randomBetween(2, 8)) {
        var color = surface.data[(height * surface.width * 4) + (width * 4) - 1];
        // The pixel color is white? So draw on it...
        if (color === 255) {
          nextArt.push({
            x: width,
            y: height,
            // orbit: randomBetween(0, 1),
            orbit: 0,
            angle: 0
          });
        }
      }
    }

    nextArt = shuffle(nextArt);

    var seed = nextArt.length;
    // Recreate art particles, based on this seed
    createArtParticles(seed);

  }

  window.updateArt = updateArt;

  /*
  * Transitions handler.
  */

  function updateTransition() {
    [].forEach.call(nextArt, function (particle, index) {
      if (!art[index].interactive) {
        art[index].x += ((particle.x + Math.cos(particle.angle + index) * particle.orbit) - art[index].x) * 0.08;
        art[index].y += ((particle.y + Math.sin(particle.angle + index) * particle.orbit) - art[index].y) * 0.08;
      } else {
        art[index].x += ((mouse.x + Math.sin(particle.angle) * 30) - art[index].x) * 0.08;
        art[index].y += ((mouse.y + Math.cos(particle.angle) * 30) - art[index].y) * 0.08;
      }
      particle.angle += 0.08;
    });

    // Remove extra particles
    if (nextArt.length < art.length) {
      var extra = [].slice.call(art, nextArt.length, art.length);

      // Remove extra art particles
      for (var index = 0; index < extra.length; index++)
        art.splice(index, 1);

    }
  }

  /*
  * Loop logic.
  */

  function loop() {
    clear();
    update();
    render();
    requestAnimFrame(loop);
  }

  /*
  * Clear the whole screen.
  */

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  /*
  * Update the particles.
  */

  function update() {

    updateTransition();

    [].forEach.call(art, function (particle, index) {
      particle.alpha += (particle.maxAlpha - particle.alpha) * 0.05;
      if (particle.hasBorn) {
        particle.radius += (0 - particle.radius) * particle.bornSpeed;
        if (Math.round(particle.radius) === 0)
          particle.hasBorn = false;
      }

      if (!particle.hasBorn) {
        particle.radius += (particle.maxRadius - particle.radius) * particle.bornSpeed;
        if (Math.round(particle.radius) === particle.maxRadius)
          particle.hasBorn = true;
      }
      distanceTo(mouse, particle) <= particle.radius + 30 ? particle.interactive = true : particle.interactive = false;
    });
  }

  /*
  * Render the particles.
  */

  function render() {
    [].forEach.call(art, function (particle, index) {
      context.save();
      context.globalAlpha = particle.alpha;
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  }

  /*
  * Distance between two points.
  */

  function distanceTo(pointA, pointB) {
    var dx = Math.abs(pointA.x - pointB.x);
    var dy = Math.abs(pointA.y - pointB.y);
    return Math.sqrt(dx * dx + dy * dy);
  }

	/*
  * Useful function for random integer between [min, max].
  */

  function randomBetween(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  }

  /*
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

	/*
  * Request new frame by Paul Irish.
  * 60 FPS.
  */

  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / FPS);
      };
  })();

  window.addEventListener ? window.addEventListener('load', init, false) : window.onload = init;

})(self);