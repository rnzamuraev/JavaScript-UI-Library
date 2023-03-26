import $ from "../core";
// import { _getValue, _setValue } from "../services/_switchValue";
import { _content } from "../services/_content";
import { _errThisElements } from "../services/_error";

// html
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errThisElements(this, "html");

      return this[i].innerHTML;
    }

    this[i].innerHTML = _content(content);
  }

  return this;
};

// text
$.prototype.text = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errThisElements(this, "text");
      return this[i].textContent;
    }

    this[i].textContent = _content(content);
  }

  return this;
};

// value
$.prototype.val = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errThisElements(this, "val");
      return this[i].value;
    }

    this[i].value = _content(content);
  }

  return this;
};

// valLength
$.prototype.valLength = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    return this[i].value.length;
  }
};

// leng
$.prototype.leng = function () {
  for (let i = 0; i < this.length; i++) {
    return this[i].length;
  }
};
