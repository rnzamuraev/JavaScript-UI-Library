import $ from "../core";

$.prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    // console.error("Не был передан eventName или callback");
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};

$.prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    // console.error("Не был передан eventName или callback");
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
