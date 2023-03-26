import $ from "../core";
import getWidthInUnit from "../modules/getWidthInUnit";

$.prototype.slider = function (unit = "rem") {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    const btnPrev = $(this[i]).find("[data-btn='prev']");
    const btnNext = $(this[i]).find("[data-btn='next']");
    const dots = $(this[i]).find("[data-slide-to]");
    const slides = $(this[i]).find("[data-slide]");
    const slidesWrap = $(this[i]).find("[data-slides]");
    const slidesArr = [];
    let slideIndex = 0;
    let offset = 0;

    // divWrapSlides[0].style.position = "relative";
    // divWrapSlides.;

    const width = window
      .getComputedStyle(this[i].querySelector("[data-slides]"))
      .width.replace(/\D/g, "");
    const widthUnit = $().getWidthInUnit(width, unit);
    // const translate = -((width * slideIndex) / 16) + unit;
    // console.log(translate);
    for (let j = 0; j < slides.length; j++) {
      $(slides[j]).style("width", widthUnit);

      slidesArr[j] = slides[j];
      slides[j].remove();
      console.log(slides);
    }
    console.log(slidesArr[slideIndex]);

    // showSlide();
    // addNewSlide(-1);

    // const newSlides = $(this[i]).find("[data-slides]").children();
    // newWrapSlides.width(100 * +newSlides.length + "%");
    // function showSlide() {
    //   slidesWrap.append(slidesArr[slideIndex]);
    // }

    // const getSlides = () => {
    //   console.log($(this[i]));

    const newSlidesWrap = $()
      .create("div")
      .show("flex")
      .style("height", "100%")
      .setAttr("data-id", `slider-${i}`)
      .style("position", "absolute")
      .parentAppend(slidesWrap);

    addNewSlide(0);
    //

    //   div.width(100 * +newSlides.length + "%");
    //   // slidesWrap.width(100 * +newSlides.length + "%");

    //   console.log(slidesArr[slideIndex]);
    //   console.log(newSlides);

    //   // for (let j = 0; j < slides2.length; j++) {
    //   //   console.log(slides2[j]);
    //   // if (unit !== "px") {
    //   //   $(slides2[j]).width(width / 16 + unit);
    //   //   console.log(slides2[j]);
    //   // } else {
    //   //   $(slides2[j]).width(width + unit);
    //   // }
    //   // }
    // };
    // getSlides();

    // slidesWrap.width(100 * +slides.length + "%");

    // for (let j = 0; j < slides.length; j++) {
    //   console.log(slides[j]);
    //   if (unit !== "px") {
    //     $(slides[j]).width(width / 16 + unit);
    //     console.log(slides[j]);
    //   } else {
    //     $(slides[j]).width(width + unit);
    //   }
    // }

    function addNewSlide() {
      const slide = slidesArr[slideIndex];
      console.log(newSlidesWrap.append(slide));
      slide.style.zIndex = 1;
      slide.style.left = 100 * offset + "%";
    }

    btnPrev.on("click", (e) => prevSlide(e));
    btnNext.on("click", (e) => nextSlide(e));

    for (let j = 0; j < dots.length; j++) {
      $(dots[j]).on("click", (e) => handlerDot(e, dots[j]));
    }

    const prevSlide = (e) => {
      e.preventDefault();
      // newSlidesWrap[0].style.transition = "all ease 1s";

      if (slideIndex <= 0) {
        slideIndex = slidesArr.length - 1;
      } else {
        slideIndex = slideIndex - 1;
      }
      console.log(slideIndex);

      // changeSlide();
      offset = 1;
      console.log(offset);
      changeDot();
      addNewSlide();

      const newSlides = $(this[i]).find("[data-id]").children();
      // const newSlides = $(this[i]).find("[data-slides]").children();
      console.log(newSlides);
      // let offset2 = 0;

      for (let j = 0; j < newSlides.length; j++) {
        newSlides[j].style.left = 100 * j - 100 + "%";
      }
      // newSlides[0].style.left = "-100%";
      // newSlides[1].style.left = "0%";
      newSlides[0].remove();
    };

    function nextSlide(e) {
      e.preventDefault();
      // getSlides();

      if (slideIndex >= slidesArr.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex = slideIndex + 1;
      }
      console.log(slideIndex);

      // changeSlide();
      offset = -1;
      console.log(offset);
      changeDot();
      addNewSlide();
    }

    function changeSlide() {
      console.log(
        slidesWrap.style("transform", `translateX(-${(width * slideIndex) / 16}${unit})`)
      );
      slidesWrap.style("transform", `translateX(-${(width * slideIndex) / 16}${unit})`);
    }

    function changeDot() {
      dots.removeAttr("data-active");
      for (let i = 0; i < dots.length; i++) {
        if ($(dots[i]).getAttr("data-slide-to") == slideIndex) {
          $(dots[i]).setAttr("data-active", "active");
        }
      }
    }

    function handlerDot(e, dot) {
      e.preventDefault();
      // getSlides();

      dots.removeAttr("data-active");
      $(dot).setAttr("data-active", "active");
      slideIndex = +$(dot).getAttr("data-slide-to");
      changeSlide();
    }
  }
};

$("[data-slider]").slider();
