import $ from "../core";

$.prototype.tab = function (tabActive, contentActive) {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", ({ target }) => {
      if ($(target).hasAttr("data-tab")) {
        $(target)
          .addClass(tabActive)
          .siblings()
          .removeClass(tabActive)
          .closest(".tab")
          .find("[data-tabcontent]")
          .removeClass(contentActive)
          .eq($(target).index())
          .addClass(contentActive);
        // console.log(
        // $(target)
        // .addClass(tabActive)
        // .siblings()
        // .removeClass(tabActive)
        // .closest(".tab")
        // .find("[data-tabcontent]")
        // .removeClass(contentActive)
        // .eq($(target).index())
        // .addClass(contentActive)
        // );
      }
    });
  }
};

$("[data-tabpanel]").tab(
  "tab__item-active",
  "tab__content-active"
);
