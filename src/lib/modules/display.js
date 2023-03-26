import $ from "../core";

$.prototype.show = function (display = "") {
  _for(this, _display, display);

  return this;
};

$.prototype.hide = function () {
  _for(this, _display, "none");

  return this;
};

$.prototype.toggle = function (display = "") {
  _for(this, _toggle, display);

  return this;
};

function _toggle(el, val, i) {
  if (getComputedStyle(el[i]).display == "none") {
    _display(el, val, i);
  } else {
    _display(el, "none", i);
  }
}

function _display(el, val, i) {
  el[i].style.display = val;
}

function _for(el, fn, val) {
  for (let i = 0; i < el.length; i++) {
    if (!el[i].style) {
      continue;
    }

    fn(el, val, i);
  }
}

// $.prototype.toggleDisplay = function (display = "") {
//   for (let i = 0; i < this.length; i++) {
//     if (!this[i].style) {
//       continue;
//     }

//     if (getComputedStyle(this[i]).display == "none") {
//       this[i].style.display = display;
//     } else {
//       this[i].style.display = "none";
//     }
//   }

//   return this;
// };
