import $ from "../core";

$.prototype.dropdown = function (display) {
  for (let i = 0; i < this.length; i++) {
    const id = $(this[i]).find("[data-toggle-id]").getAttr("data-toggle-id");
    console.log("id: ", id);

    $(this[i])
      .find("[data-toggle]")
      .on("click", (e) => {
        e.preventDefault();

        $(`#${id}`).toggle(display);
        // $(`#${id}`).toggleClass("active");
        // $(`#${id}`).fadeToggle(
        //   500,
        //   display
        // );
        // this.disabled(500);

        // if ($("[data-menu]").getAttr("id") !== id) {
        //   console.log($("111"));
        //   $("[data-menu]").hide();
        // }

        for (let i = 0; i < $("[data-toggle]").length; i++) {
          if ($($("[data-menu]")[i]).getAttr("id") === id) {
            console.log("continue");
            continue;
          }

          console.log("hide");
          $($("[data-menu]")[i]).hide();
          // $($("[data-toggle-dropdown]")[i]).fadeOut(1000);
        }

        console.log($(this[i]).find("[data-close]"));
      });

    $(this[i])
      .find("[data-close]")
      .on("click", (e) => {
        e.preventDefault();

        console.log($(this[i]).find("[data-close]"));
        $($("[data-menu]")[i]).hide();
      });
    // if ($(this[i]).hasAttr("data-close")) {
    //   console.log($(e.target).hasAttr("data-close"));
    //   // $(`#${id}`).hide();
    //   $($("[data-menu]")[i]).hide();
    //   return;
    // }
  }
};

// $("[data-dropdown-toggle]").dropdown("flex");
