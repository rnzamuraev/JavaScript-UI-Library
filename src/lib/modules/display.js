import $ from "../core";

$.prototype.show = function (display = "") {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = display;
  }

  return this;
};

$.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
};

$.prototype.toggle = function (display = "") {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = display;
    } else {
      this[i].style.display = "none";
    }
  }

  return this;
};
