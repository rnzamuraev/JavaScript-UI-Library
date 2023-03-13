import $ from "../core";

$.prototype.dropdown = function (display) {
  for (let i = 0; i < this.length; i++) {
    const id = $(this[i]).getAttr("id");

    $(this[i]).on("click", () => {
      // $(`[data-toggle-id="${id}"]`).toggle(display);
      $(`[data-toggle-id="${id}"]`).fadeToggle(
        1000,
        display
      );
      this.disabled(1000);

      console.log($("[data-toggle-id]").length);

      for (
        let i = 0;
        i < $("[data-toggle-id]").length;
        i++
      ) {
        if (
          $($("[data-toggle-id]")[i]).getAttr(
            "data-toggle-id"
          ) == id
        ) {
          continue;
        }

        // $($("[data-toggle-id]")[i]).hide();
        $($("[data-toggle-id]")[i]).fadeOut(1000);
      }
    });
  }
};

$("[data-dropdown-toggle]").dropdown("flex");
