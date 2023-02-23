import $ from "../core";

$.prototype.width = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

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
