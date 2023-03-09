import $ from "../core";

$.prototype.fadeToggle = function (
  dur,
  display = "block",
  fin
) {
  for (let i = 0; i < this.length; i++) {
    if (
      window.getComputedStyle(this[i]).display === "none"
    ) {
      this.fadeIn(dur, display, fin);
    } else {
      this.fadeOut(dur, fin);
    }
  }

  return this;
};
