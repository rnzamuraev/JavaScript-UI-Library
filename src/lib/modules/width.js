import $ from "../core";
import { _content } from "../services/_content";
import { _errThisElements } from "../services/_error";

$.prototype.width = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (content !== "" && !content) {
      _errThisElements(this, "width");
      return window.getComputedStyle(this[i]).width;
    }

    this[i].style.width = _content(content);
  }

  return this;
};

// $.prototype.height = function (value) {
//   for (let i = 0; i < this.length; i++) {
//     if (!this[i].style) {
//       continue;
//     }

//     this[i].style.height = value;
//   }

//   return this;
// };

// $.prototype.maxHeight = function (value) {
//   for (let i = 0; i < this.length; i++) {
//     if (!this[i].style) {
//       continue;
//     }

//     this[i].style.maxHeight = value;
//   }

//   return this;
// };
