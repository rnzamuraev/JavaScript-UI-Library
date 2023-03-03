import $ from "../core";

$.prototype.style = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style + "." + value;
    console.log(this[i].style + "." + value);
  }

  return this;
};

$.prototype.width = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    console.log((this[i].style.width = value));
    this[i].style.width = value;
  }

  return this;
};

$.prototype.height = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.height = value;
  }

  return this;
};

// $.prototype.height = function (value) {
//   for (let i = 0; i < this.length; i++) {
//     if (!this[i].style) {
//       continue;
//     }

//     this[i].style.overflowY = value;
//   }

//   return this;
// };
