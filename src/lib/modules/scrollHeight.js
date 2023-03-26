import $ from "../core";
import { _content } from "../services/_content";
import { _errThisElements } from "../services/_error";

$.prototype.scrollHeight = function () {
  for (let i = 0; i < this.length; i++) {
    return this[i].scrollHeight;
  }

  return this;
};
