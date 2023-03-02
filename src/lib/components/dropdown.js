import $ from "../core";

$.prototype.dropdown = function () {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
  }
};

$(".dropdown").dropdown();
