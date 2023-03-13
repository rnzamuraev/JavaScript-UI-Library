import $ from "../core";

$.prototype.fadeOut = function (dur = 1, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;

      if (complection >= 1) {
        this[i].style.display = "none";
      }
    };

    const animate = this.animateOverTimeOpacity(
      dur,
      _fadeOut,
      fin
    );
    requestAnimationFrame(animate);
  }

  return this;
};
