import $ from "../core";

$.prototype.animateOverTimeOpacity = function (
  dur,
  cb,
  fin
) {
  let timeStart; // начальное время

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart; // сколько времени прошло
    let complection = Math.min(timeElapsed / dur, 1); // завершение анимации

    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.animateOverTimeHeight = function (
  dur,
  cb,
  fin
) {
  let timeStart; // начальное время

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart; // сколько времени прошло
    let complection = Math.min(timeElapsed / dur, 1); // завершение анимации

    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.fade = (dur, display, fin) => {
  console.log(this);
  console.log(this.length);

  for (let i = 0; i < this.length; i++) {
    function _fade() {
      if (window.getComputedStyle(this[i]) === "none") {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
          this[i].style.opacity = complection;
        };

        return _fadeIn;
      } else {
        const _fadeOut = (complection) => {
          this[i].style.opacity = 1 - complection;

          if (complection >= 1) {
            this[i].style.display = "none";
          }
        };

        return _fadeOut;
      }
    }

    const animate = this.animateOverTime(dur, _fade, fin);
    requestAnimationFrame(animate);
  }
};
