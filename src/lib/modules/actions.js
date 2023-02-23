import $ from "../core";

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!content) {
      return this[i].innerHTML;
    }
    this[i].innerHTML = content;
  }
  return this;
};
