import $ from "../core";

$.prototype.getAttr = function (attributeName) {
  if (!attributeName) {
    console.log("!attributeName");
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attributeName)) {
      return this[i].getAttribute(attributeName);
    }
  }
  return this;
};

$.prototype.setAttr = function (attributeName, attribute) {
  if (!attributeName || !attribute) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, attribute);
  }
  return this;
};

$.prototype.hasAttr = function (attributeName) {
  if (!attributeName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attributeName)) {
      return true;
    } else {
      return false;
    }
  }
  return this;
};

$.prototype.removeAttr = function (attributeName) {
  if (!attributeName) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    // if (!this[i].hasAttribute(attributeName)) {
    //   return this;
    // }

    this[i].removeAttribute(attributeName);
  }

  return this;
};
