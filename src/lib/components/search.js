import $ from "../core";

$.prototype.search = function () {
  for (let i = 0; i < this.length; i++) {
    const input = $(this[i]).find("[data-input-search]");
    const clear = $(this[i]).find("[data-clear-search]");

    $(this[i])
      .find("[data-toggle-search]")
      .on("click", () => {
        clear.hide();
        $(this[i]).toggleClass("active");
      });

    input.on("input", () => {
      if (input.valLength() >= 1) {
        clear.show();
      } else {
        clear.hide();
      }
    });

    clear.on("click", () => {
      input.val(" ");
      clear.hide();
    });
  }
};
$("[data-search]").search();
