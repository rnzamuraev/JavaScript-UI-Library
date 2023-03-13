import $ from "../core";

// html
$.prototype.html = function (content) {
  _err(this, "html");

  for (let i = 0; i < this.length; i++) {
    if (!content) {
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
  _err(this, "text");

  for (let i = 0; i < this.length; i++) {
    if (!content) {
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
    if (!content) {
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

//
function _content(content, value) {
  if (content == " ") {
    value = "";
  } else {
    value = content;
  }

  return value;
}

function _err(elem, name) {
  if (elem.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, передано более 1 элемента, __${name}__ (${elem[0]})
        - Received more than 1 element node, __${name}__ (${elem[0]})
      `
    );
  }
}
