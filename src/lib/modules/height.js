import $ from "../core";
import { _content } from "../services/_content";
import { _errElements } from "../services/_error";

$.prototype.height = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (content !== "" && !content) {
      _errElements(this, "height");
      return window.getComputedStyle(this[i]).height;
    }

    this[i].style.height = _content(
      content,
      this[i].style.height
    );
  }

  return this;
};

$.prototype.maxHeight = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (content !== "" && !content) {
      _errElements(this, "height");
      return window.getComputedStyle(this[i]).maxHeight;
    }

    this[i].style.maxHeight = _content(
      content,
      this[i].style.maxHeight
    );

    // this[i].style.maxHeight = value;
  }

  return this;
};
