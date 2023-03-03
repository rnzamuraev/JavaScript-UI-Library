import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = $(this[i]).getAttr("id");

    $(this[i]).on("click", () => {
      $(`[data-toggle-id="${id}"]`).toggle("flex");
    });
  }
};

$(".dropdown__toggle").dropdown();
