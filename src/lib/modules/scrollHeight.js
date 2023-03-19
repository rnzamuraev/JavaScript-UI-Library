import $ from "../core";
import { _content } from "../services/_content";
import { _errElements } from "../services/_error";

$.prototype.scrollHeight = function (content) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].style) {
    //   continue;
    // }

    // if (content !== "" && !content) {
    //   _errElements(this, "height");
    //   return window.getComputedStyle(this[i]).height;
    // }

    // this[i].style.height = _content(
    //   content,
    //   this[i].style.height
    // );
    return this[i].scrollHeight;
  }

  return this;
};
