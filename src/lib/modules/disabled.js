import $ from "../core";

$.prototype.disabled = function (time) {
  for (let i = 0; i < this.length; i++) {
    // if (!time && time !== 0) {
    //   throw new Error(
    //     `
    //   - Что-то пошло не так, время не задано, __disabled__ (${time})
    //   - Time not set, __disabled__ (${time})
    //   `
    //   );
    // }

    if (!time) {
      this[i].setAttribute("disabled", "disabled");
      return;
    }

    console.log(time);
    this[i].setAttribute("disabled", "disabled");
    setTimeout(() => {
      this[i].removeAttribute("disabled");
    }, time);
  }
};
