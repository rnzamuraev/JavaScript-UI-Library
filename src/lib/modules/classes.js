import $ from "../core";

$.prototype.addClass = function (...classNemes) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...classNemes);
  }
  return this;
};

$.prototype.removeClass = function (...classNemes) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    // console.log(this[i].classList);
    if (!this[i].classList || this[i] == undefined) {
      continue;
    }
    this[i].classList.remove(...classNemes);
  }
  return this;
};

$.prototype.toggleClass = function (classNeme) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNeme);
  }
  return this;
};

$.prototype.contains = function (classNeme) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    if (this[i].classList.contains(classNeme)) {
      return true;
    } else {
      return false;
    }
  }
  return this;
};
