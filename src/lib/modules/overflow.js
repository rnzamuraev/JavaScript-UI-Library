import $ from "../core";
import { _content } from "../services/_content";
import { _errThisElements } from "../services/_error";

$.prototype.overflow = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (content !== "" && !content) {
      _errThisElements(this, "overflow");
      console.log("получить overflow: ", window.getComputedStyle(this[i]).overflow);
      return window.getComputedStyle(this[i]).overflow;
    }

    this[i].style.overflow = _content(content);
  }

  return this;
};
