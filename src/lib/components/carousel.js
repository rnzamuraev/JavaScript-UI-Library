import $ from "../core";
import getWidthInUnit from "../modules/getWidthInUnit";

$.prototype.carousel = function (unit = "rem") {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    const btnPrev = $(this[i]).find("[data-btn='prev']");
    const btnNext = $(this[i]).find("[data-btn='next']");
    const dots = $(this[i]).find("[data-slide-to]");
    const slides = $(this[i]).find("[data-slide]");
    const slidesWrap = $(this[i]).find("[data-slides]");

    const width = window
      .getComputedStyle(this[i].querySelector("[data-slides]"))
      .width.replace(/\D/g, "");
    const widthUnit = $().getWidthInUnit(width, unit);
    let slideIndex = 0;
    // const translate = -((width * slideIndex) / 16) + unit;
    // console.log(translate);

    slidesWrap.style("width", `100 * ${+slides.length}%`);

    for (let i = 0; i < slides.length; i++) {
      $(slides[i]).style("width", widthUnit);
    }

    btnPrev.on("click", (e) => prevSlide(e));
    btnNext.on("click", (e) => nextSlide(e));

    for (let j = 0; j < dots.length; j++) {
      $(dots[j]).on("click", (e) => handlerDot(e, dots[j]));
    }

    function prevSlide(e) {
      e.preventDefault();

      if (slideIndex <= 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = slideIndex - 1;
      }

      console.log(slideIndex);
      changeSlide();
      changeDot();
    }

    function nextSlide(e) {
      e.preventDefault();

      if (slideIndex >= slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex = slideIndex + 1;
      }

      changeSlide();
      changeDot();
    }

    function changeSlide() {
      slidesWrap.style("transform", `translateX(-${(width * slideIndex) / 16}${unit})`);
    }

    function changeDot() {
      dots.removeClass("active");
      for (let i = 0; i < dots.length; i++) {
        if ($(dots[i]).getAttr("data-slide-to") == slideIndex) {
          $(dots[i]).addClass("active");
        }
      }
    }

    function handlerDot(e, dot) {
      e.preventDefault();

      dots.removeClass("active");
      $(dot).addClass("active");
      slideIndex = +$(dot).getAttr("data-slide-to");
      changeSlide();
    }
  }
};

// $("[data-carousel]").carousel();
