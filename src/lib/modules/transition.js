import $ from "../core";
import { _errElements } from "../services/_error";
import { _content } from "../services/_content";

$.prototype.overflow = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (content !== "" && !content) {
      _errElements(this, "overflow");
      console.log(
        "получить overflow: ",
        window.getComputedStyle(this[i]).overflow
      );
      return window.getComputedStyle(this[i]).overflow;
    }

    this[i].style.overflow = _content(
      content,
      this[i].style.overflow
    );
  }

  return this;
};
