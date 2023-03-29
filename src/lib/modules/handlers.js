import $ from "../core";

$.prototype.on = function (eventName, callback, capture = false) {
  if (!eventName || !callback) {
    // console.error("Не был передан eventName или callback");
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    this[i].addEventListener(eventName, callback, capture);
  }
  return this;
};

$.prototype.off = function (eventName, callback, capture = false) {
  if (!eventName || !callback) {
    // console.error("Не был передан eventName или callback");
    return this;
  }

  console.log(this);
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback, capture);
  }
  return this;
};
