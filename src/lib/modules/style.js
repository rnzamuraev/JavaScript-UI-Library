import $ from "../core";

$.prototype.width = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    console.log((this[i].style.width = value));
    this[i].style.width = value;
  }

  return this;
};

$.prototype.height = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.height = value;
  }

  return this;
};

$.prototype.maxHeight = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.maxHeight = value;
  }

  return this;
};

