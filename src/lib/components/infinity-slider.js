import $ from "../core";

$.prototype.infinitySlider = function (unit = "px", time = "1s ease-in-out") {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    const btnPrev = $(this[i]).find("[data-btn='prev']");
    const btnNext = $(this[i]).find("[data-btn='next']");
    const dots = $(this[i]).find("[data-slide-to]");
    const slides = $(this[i]).find("[data-slide]");
    const slidesWrap = $(this[i]).find("[data-slides]");
    const areaOfVisibility = $($("[data-infinity-slider]")[i]).find("[data-show]");
    let transition = $(this[i]).find("[data-slides]").style("transition");
    console.log(transition);
    if (transition.slice(0, 6) == "all 0s") {
      console.log("анимация отклчена");
      transition = "all 0.01ms";
    }
    // .slise(0, 6);
    console.log(transition.slice(0, 6));
    console.log($(this[i]).find("[data-slides]").style("transition"));
    // slidesWrap.transition(`none`);
    slidesWrap.style("transition", "none");

    const width = window
      .getComputedStyle(this[i].querySelector("[data-show]"))
      .width.replace(/\D/g, "");
    console.log(width);
    const widthUnit = $().getWidthInUnit(width, unit);
    console.log(widthUnit);
    let slideIndex = 0;
    let direction = -1;

    slidesWrap.style("width", `${100 * +slides.length}%`);

    for (let i = 0; i < slides.length; i++) {
      console.log(slides[i]);
      $(slides[i]).style("width", widthUnit);
    }

    btnPrev.on("click", prevSlide);
    btnNext.on("click", nextSlide);
    slidesWrap.on("transitionend", moveSlide);

    for (let j = 0; j < dots.length; j++) {
      $(dots[j]).on("click", (e) => handlerDot(e, dots[j]));
    }

    function prevSlide(e) {
      e.preventDefault();

      if (direction === -1) {
        areaOfVisibility.style("justifyContent", "flex-end");
        slidesWrap.append($($("[data-infinity-slider]")[i]).find("[data-slides]").firstChild());
        direction = 1;
      }

      changeSlide(direction);
    }

    function nextSlide(e) {
      e.preventDefault();

      if (direction === 1) {
        // $($("[data-infinity-slider]")[i]).find("[data-show]").style("justifyContent", "flex-start");
        areaOfVisibility.style("justifyContent", "flex-start");
        slidesWrap.prepend($($("[data-infinity-slider]")[i]).find("[data-slides]").lastChild());
        direction = -1;
      }

      changeSlide(direction);
    }

    function moveSlide() {
      console.log("end");

      if (direction === 1) {
        slidesWrap.prepend($($("[data-infinity-slider]")[i]).find("[data-slides]").lastChild());
      } else if (direction === -1) {
        slidesWrap.append($($("[data-infinity-slider]")[i]).find("[data-slides]").firstChild());
      }

      changeSlide(0);
    }

    function changeSlide(n) {
      let val;
      if (n === 0) {
        val = "none";
      } else {
        val = transition;
      }

      slidesWrap.style("transition", val).style("transform", `translate(${n * width}px)`);
      // slidesWrap.style("transform", `translate(${n * width}px)`);
    }
  }
};

// $("[data-infinity-slider]").infinitySlider();
