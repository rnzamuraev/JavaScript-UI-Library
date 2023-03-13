import $ from "../core";

$.prototype.fadeIn = function (dur = 1, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const animate = this.animateOverTimeOpacity(
      dur,
      _fadeIn,
      fin
    );
    requestAnimationFrame(animate);
  }

  return this;
};

// $.prototype.fadeIn = function (dur = 1, display, fin) {
//   for (let i = 0; i < this.length; i++) {
//     this[i].style.display = display || "block";

//     const _fadeIn = (complection) => {
//       this[i].style.height = complection;
//     };

//     const animate = this.animateOverTime(dur, _fadeIn, fin);
//     requestAnimationFrame(animate);
//   }

//   return this;
// };
