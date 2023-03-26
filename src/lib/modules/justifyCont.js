import $ from "../core";
import { _errThisElements } from "../services/_error";
import { _content } from "../services/_content";

$.prototype.justifyCont = function (value) {
  _errThisElements(this, "transition");
  console.log(this);
  console.log(value);

  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (!value) {
      console.log(this[i]);
      console.log(window.getComputedStyle(this[i]).transition);
      this[i] = window.getComputedStyle(this[i]).transition;
      console.log(this[i]);
      console.log(this);
      return this;
    }

    if (value === "") {
      this[i].style.transition = "";
    } else {
      console.log(value);
      this[i].style.transition = value;
    }
  }
  console.log(this[0]);
  console.log(this);
  return this;
};
