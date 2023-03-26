import $ from "../core";
import { _errThisElements } from "../services/_error";

$.prototype.transform = function (value) {
  _errThisElements(this, "transform");

  console.log(this);
  console.log(value);
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (!value) {
      // console.log(window.getComputedStyle(this[i]));
      this[i] = window.getComputedStyle(this[i]).transform;
      console.log(this);
      return this;
    }

    if (value === "") {
      this[i].style.transform = "";
    } else {
      console.log(value);
      this[i].style.transform = value;
    }
  }

  console.log(this);
  return this;
};
