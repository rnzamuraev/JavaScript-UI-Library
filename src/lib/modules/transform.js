import $ from "../core";

$.prototype.transform = function (value) {
  console.log(this);
  console.log(value);
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (!value) {
      // console.log(window.getComputedStyle(this[i]));
      this[i] = window.getComputedStyle(this[i]).transform;
      console.log(this);
      return this;
    }

    console.log(value);
    this[i].style.transform = value;
    console.log(this[i]);
  }
  console.log(this);

  //  if (!selector) {
  //    throw new Error(
  //      `
  //     - Что-то пошло не так, селектор небыл передан, __find__ (${selector})
  //     - Selector failed, __find__ (${selector})
  //   `
  //    );
  //  }
  return this;
};
