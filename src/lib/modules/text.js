import $ from "../core";
import { _content } from "../services/_content";
import { _errElements } from "../services/_error";

// html
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errElements(this, "html");
      return this[i].innerHTML;
    }

    this[i].innerHTML = _content(
      content,
      this[i].innerHTML
    );
  }

  return this;
};

// text
$.prototype.text = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errElements(this, "text");
      return this[i].innerHTML;
    }

    this[i].textContent = _content(
      content,
      this[i].textContent
    );
  }

  return this;
};

// value
$.prototype.val = function (content) {
  _err(this, "val");

  for (let i = 0; i < this.length; i++) {
    if (content !== "" && !content) {
      _errElements(this, "val");
      return this[i].value;
    }

    this[i].value = _content(content, this[i].value);
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
