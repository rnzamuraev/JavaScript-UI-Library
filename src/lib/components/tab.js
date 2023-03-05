import $ from "../core";

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", ({ target }) => {
      if ($(target).hasAttr("data-tab")) {
        $(target)
          .addClass("tab__item-active")
          .siblings()
          .removeClass("tab__item-active")
          .closest(".tab")
          .find("[data-tabcontent]")
          .removeClass("tab__content-active")
          .eq($(target).index())
          .addClass("tab__content-active");
      }
    });
  }
};

$("[data-tabpanel]").tab();
