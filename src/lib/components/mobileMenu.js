import $ from "../core";

$.prototype.mobileMenu = function () {
  for (let i = 0; i < this.length; i++) {
    const btnBurger = $(this[i]).find("[data-open='modal']");
    const id = btnBurger.getAttr("data-target");
    const menu = $(`#${id}`);
    const menuAllClose = $(this[i]).find("[data-close]");
    const dropmenu = $(this[i]).find("[data-menu]");
    const allToggle = $("[data-toggle-drop]");
    console.log(id);
    console.log(btnBurger);
    console.log(menuAllClose);
    console.log(dropmenu);

    btnBurger.on("click", () => {
      burgerCloseAnimate();
      menuToggle();
    });

    for (let j = 0; j < menuAllClose.length; j++) {
      $(menuAllClose[j]).on("click", () => {
        // $(this[i])
        //   .find("[data-menu]")
        //   .setAttr("data-active", "false");
        // console.log("click");
        menu.setAttr("data-active", "false");
        $("body").overflow(" ");
        btnBurger.setAttr("data-active", "false");
        console.log($(this[i]).find("[data-menu]"));
        // dropmenu.hide();
        // dropClose();
      });
    }
    // menuAllClose;

    function burgerCloseAnimate() {
      if (btnBurger.hasAttr("data-active")) {
        if (btnBurger.getAttr("data-active") === "false") {
          btnBurger.setAttr("data-active", "true");
        } else {
          btnBurger.setAttr("data-active", "false");
        }
      }
    }

    function menuToggle() {
      if (menu.getAttr("data-active") === "false") {
        menu.setAttr("data-active", "true");
        $("body").overflow("hidden");
        // $("body").overflow();
      } else {
        menu.setAttr("data-active", "false");
        $("body").overflow("");
        // dropmenu.hide();
        dropClose();
      }

      // const body = $("body").overflow("hidden");
    }

    function dropClose() {
      for (let i = 0; i < allToggle.length; i++) {
        $(allToggle[i]).setAttr("data-toggle-drop", "false");
      }
      dropmenu.maxHeight("0");
    }
  }
};

// $("[data-mobile]").mobileMenu();
