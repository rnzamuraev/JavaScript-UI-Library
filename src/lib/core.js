const $ = function (selector) {
  // console.log(new $.prototype());
  console.log(new $.prototype.init());
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    console.log(this);
    return this; // {}
  }

  // Object.assign(this, document.querySelectorAll(selector));
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;

  return this;
};
console.log($.prototype);
$.prototype.init.prototype = $.prototype;
console.log($.prototype);
console.log($.prototype.init);
console.log($.prototype.init.prototype);

window.$ = $;

export default $;
