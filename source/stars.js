/*
* Title: stars.js
* Author: Nathaniel S. Marshall
* Last Updated: Tuesday, July 23, 2014
*
* Description: Twinkle twinkle little star.
*/

function Stars(container) {
  this.container = container;
}

Stars.prototype.calculatePosition = function() {
  return Math.floor((Math.random()*100)+1);
};

Stars.prototype.start = function() {
  var that = this;
  this.interval = setInterval(function() {

    var starElement = document.createElement('div');

    //Adds required attributes to the star element.
    starElement.className += 'star';
    starElement.style.top = that.calculatePosition() + '%';
    starElement.style.left = that.calculatePosition() + '%';

    //Adds the star element to the DOM.
    that.container.appendChild(starElement);

    //Removes the star from the DOM after tiemout.
    setTimeout(function() {
      that.container.removeChild(that.container.getElementsByClassName('star')[0]);
    },4700);
  }, 300);
};

Stars.prototype.stop = function() {
  clearInterval(this.interval);
};
