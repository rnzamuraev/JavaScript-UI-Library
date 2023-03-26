import { _errArgNotSelector } from "./services/_error";
const $ = function (selector) {
  return new $.prototype.init(selector);
};

// Есдине селектор не передан, то возвращает пустой обьект // {}
$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    // Object.assign(this, selector);
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;

  _errArgNotSelector(selector, "$");
  // if (this.length == 0) {
  //   throw new Error(
  //     `
  //     - Что-то пошло не так, такого селектора не существует, $(${selector})
  //     - No such selector exists, ${$}(${selector})
  //     `
  //   );
  // }

  return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;
