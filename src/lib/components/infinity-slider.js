import $ from "../core";
import getWidthInUnit from "../modules/getWidthInUnit";

$.prototype.infinitySlider = function (unit = "rem", time = "1s ease-in-out") {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    const slider = $(this[i]);
    const btnPrev = $(this[i]).find("[data-btn='prev']");
    const btnNext = $(this[i]).find("[data-btn='next']");
    const dots = $(this[i]).find("[data-slide-to]");
    const slides = $(this[i]).find("[data-slide]");
    const slidesWrap = $(this[i]).find("[data-slides]");
    const transition = $(this[i]).find("[data-slides]").style("transition");
    // slidesWrap.transition(`none`);
    slidesWrap.style("transition", "none");
    console.log($($("[data-infinity-slider]")[i]).find("[data-slides]").style("transition"));

    const width = window
      .getComputedStyle(this[i].querySelector("[data-show]"))
      .width.replace(/\D/g, "");
    console.log(width);
    const widthUnit = $().getWidthInUnit(width, unit);
    console.log(widthUnit);
    let slideIndex = 0;

    slidesWrap.style("width", `${100 * +slides.length}%`);

    for (let i = 0; i < slides.length; i++) {
      console.log(slides[i]);
      $(slides[i]).style("width", widthUnit);
    }

    btnPrev.on("click", prevSlide);
    btnNext.on("click", nextSlide);

    for (let j = 0; j < dots.length; j++) {
      $(dots[j]).on("click", (e) => handlerDot(e, dots[j]));
    }

    function prevSlide(e) {
      e.preventDefault();
      slidesWrap.style("transition", `all ${time}`);

      console.log("prevBtn");
      changeSlide(1);
    }

    function nextSlide(e) {
      e.preventDefault();
      slidesWrap.style("transition", `all ${time}`);

      console.log("nextBtn");
      changeSlide(-1);
    }

    slidesWrap.on("transitionend", moveSlide);

    function moveSlide() {
      console.log("end");
      const firstChild = $($("[data-infinity-slider]")[i]).find("[data-slides]").firstChild();
      // console.log(firstChild);
      slidesWrap.append(firstChild);
      // slidesWrap[0].style.transition = "none";
      slidesWrap.style("transition", `all 0s ease 0s`);

      // console.log($($("[data-infinity-slider]")[i]).find("[data-slides]").transition());

      changeSlide(0);
    }

    function changeSlide(n) {
      slidesWrap.style("transform", `translate(${n * width}px)`);
    }

    // function prevSlide(e) {
    //   e.preventDefault();

    //   if (slideIndex <= 0) {
    //     slideIndex = slides.length - 1;
    //   } else {
    //     slideIndex = slideIndex - 1;
    //   }

    //   console.log(slideIndex);
    //   changeSlide(1);
    //   changeDot();
    // }

    // function nextSlide(e) {
    //   e.preventDefault();

    //   if (slideIndex >= slides.length - 1) {
    //     slideIndex = 0;
    //   } else {
    //     slideIndex = slideIndex + 1;
    //   }

    //   changeSlide(-1);
    //   slidesWrap.append(slides[0]);

    //   changeDot();
    // }

    // function changeSlide(n) {
    //   slidesWrap.transform(`translateX(${(n * width) / 16}${unit})`);
    // }

    // function changeDot() {
    //   dots.removeClass("active");
    //   for (let i = 0; i < dots.length; i++) {
    //     if ($(dots[i]).getAttr("data-slide-to") == slideIndex) {
    //       $(dots[i]).addClass("active");
    //     }
    //   }
    // }

    // function handlerDot(e, dot) {
    //   e.preventDefault();

    //   dots.removeClass("active");
    //   $(dot).addClass("active");
    //   slideIndex = +$(dot).getAttr("data-slide-to");
    //   changeSlide();
    // }
  }
};

// $("[data-infinity-slider]").infinitySlider();
