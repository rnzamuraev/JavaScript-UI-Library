import $ from "../core";
// import getWidthInUnit from "../modules/getWidthInUnit";

$.prototype.slider = function (time = "0", unit = "px") {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    const btnPrev = $(this[i]).find("[data-btn='prev']");
    const btnNext = $(this[i]).find("[data-btn='next']");
    const dots = $(this[i]).find("[data-indicators]").children();
    const slides = $(this[i]).find("[data-slide]");
    const slidesWrap = $(this[i]).find("[data-slides]");
    slidesWrap.style("transition", "none");
    const slidesArr = [];
    let slideIndex = 0;
    let dir;

    const width = window
      .getComputedStyle(this[i].querySelector("[data-slides]"))
      .width.replace(/\D/g, "");
    const widthUnit = $().getWidthInUnit(width, unit);

    for (let j = 0; j < slides.length; j++) {
      $(slides[j]).setAttr(`data-slide-to="${j}"`).style("width", widthUnit);

      slidesArr[j] = slides[j];
      slides[j].remove();
    }

    const newSlidesWrap = $()
      .create("div")
      .show("flex")
      .style("height", "100%")
      .setAttr("data-track-id", `${i}`)
      .parentAppend(slidesWrap);

    console.log(slidesWrap[0]);

    newSlidesWrap.append(slidesArr[slideIndex]);
    // .append(slidesArr[slideIndex], slidesArr[slideIndex + 1])
    // .prepend(slidesArr[slidesArr.length - 1])
    // .style("transform", `translateX(-${width}${unit})`);

    // btnPrev.on("click", handlerPrevSlide);
    // btnNext.on("click", handlerNextSlide);
    // dots.on("click", handlerDot);
    onBtns();
    if (time !== 0) {
      newSlidesWrap.on("transitionend", moveSlide);
    }

    function handlerPrevSlide(e) {
      e.preventDefault();
      // $(this).disabled(time + 50);
      dir = -1;

      if (slideIndex - 1 < 0) {
        slideIndex = slidesArr.length - 1;
      } else {
        slideIndex--;
      }

      setActiveDot();
      if (time == 0) {
        setSlides();
        return;
      }

      prevSlide();
      offBtns();
    }

    function handlerNextSlide(e) {
      e.preventDefault();
      // $(this).disabled(time + 50);
      dir = 1;

      if (slideIndex + 1 > slidesArr.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      setActiveDot();
      if (time == 0) {
        setSlides();
        return;
      }

      nextSlide();
      offBtns();
    }

    function handlerDot(e) {
      console.log("кнопки работают");
      e.preventDefault();
      if ($(this).index() == slideIndex) {
        return;
      }

      if (time == 0) {
        slideIndex = $(this).index();
        setActiveDot();
        setSlides();
        return;
      }

      if ($(this).index() < slideIndex) {
        dir = -1;
        slideIndex = $(this).index();
        prevSlide();
      } else if ($(this).index() > slideIndex) {
        dir = 1;
        slideIndex = $(this).index();
        nextSlide();
      }

      setActiveDot();
      offBtns();
    }

    function moveSlide() {
      if (dir === -1) {
        setSlides();
      } else if (dir === 1) {
        setSlides();
        showSlide(0);
      }

      setTime("none");
      onBtns();
    }

    function prevSlide() {
      newSlidesWrap.prepend(slidesArr[slideIndex]);
      showSlide(-1);
      setTimeout(() => timeout(`${time}ms`, 0));
    }

    function nextSlide() {
      newSlidesWrap.append(slidesArr[slideIndex]);
      setTimeout(() => timeout(`${time}ms`, -1));
    }

    function timeout(val, n) {
      setTime(val);
      showSlide(n);
    }

    function showSlide(n) {
      newSlidesWrap.style("transform", `translateX(${n * width}${unit})`);
    }

    function setTime(val) {
      newSlidesWrap.style("transition", val);
    }

    function setActiveDot() {
      dots.removeAttr("data-active");
      $(dots[slideIndex]).setAttr("data-active", "active");
    }

    function setSlides() {
      $($("[data-slider]")[i]).find(`[data-track-id="${i}"]`).children().remove();
      newSlidesWrap.append(slidesArr[slideIndex]);
    }

    function onBtns() {
      btnPrev.on("click", handlerPrevSlide);
      btnNext.on("click", handlerNextSlide);
      dots.on("click", handlerDot);
    }

    function offBtns() {
      btnPrev.off("click", handlerPrevSlide);
      btnNext.off("click", handlerNextSlide);
      dots.off("click", handlerDot);
    }
  }
};

// $("[data-slider]").slider();
