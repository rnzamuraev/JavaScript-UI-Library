import $ from "../core";

$.prototype.dropdownUp = function (unit = "px", display = "") {
  for (let i = 0; i < this.length; i++) {
    console.log($(this[i]).find("[data-id]"));
    const id = $(this[i]).find("[data-id]").getAttr("data-id");
    const toggle = $(this[i]).find("[data-toggle-drop]");
    // const allClose = $(this[i]).find("[data-close]");
    const allClose = $("[data-close]");
    const allMenu = $("[data-menu]");
    const allToggle = $("[data-toggle-drop]");
    const menu = $(this[i]).find("[data-menu]");

    toggle.on("click", (e) => {
      e.preventDefault();

      if (toggle.getAttr("data-toggle-drop") !== "true") {
        openDropdown(menu);
        // openDropdown(this[i]);
      } else {
        closeDropdown();
      }

      // Закрываем все dropdown при открытии нового если они включены в группу
      for (let j = 0; j < allMenu.length; j++) {
        if ($(allMenu[j]).getAttr("id") !== id) {
          if (!$(allMenu[j]).hasAttr("data-one")) {
            console.log($("[data-menu]"));
            // $(allMenu[j]).maxHeight("0");

            // if ($(allMenu[j]).hasAttr("data-active")) {
            //   $(allMenu[j]).setAttr("data-active", "false");
            // }
            checkDataActive(allMenu[j], "false");
          }

          if ($(allToggle[j]).getAttr("data-id") !== id) {
            if (!$(allToggle[j]).hasAttr("data-one")) {
              $(allToggle[j]).setAttr("data-toggle-drop", "false");
            }
          }
        }
      }
    });

    // Закрываем все дроп-меню при нажатии на пункт меню
    for (let j = 0; j < allClose.length; j++) {
      $(allClose[j]).on("click", () => {
        for (let k = 0; k < allMenu.length; k++) {
          $(allToggle[k]).setAttr("data-toggle-drop", "false");

          checkDataActive(allMenu[k], "false");
        }
      });
    }

    // Получаем высоту drop-menu
    function getHeight(elem) {
      console.log(elem);
      const height = elem.scrollHeight();
      // const height = $(elem).find("[data-menu]").scrollHeight();
      console.log(height);
      let val;

      if (unit !== "px") {
        val = height / 16 + unit;
      } else {
        val = height + unit;
      }

      return val;
    }

    // Открываем dropdown
    function openDropdown(elem) {
      toggle.setAttr("data-toggle-drop", "true");

      checkDataActive(`#${id}`, "true", getHeight(elem));
    }

    // Закрываем dropdown
    function closeDropdown() {
      toggle.setAttr("data-toggle-drop", "false");

      checkDataActive(`#${id}`, "false");
    }

    // Проверяем на наличие активного елемент
    function checkDataActive(elem, check, maxHeight = "0") {
      if ($(elem).hasAttr("data-active")) {
        $(elem).setAttr("data-active", check);
        $(elem).maxHeight(maxHeight);
        // console.log(elem);
        // console.log($(elem));
        // console.log(maxHeight);
        // $(elem).maxHeight();
      } else {
        $(elem).toggle(display);
        // console.log(elem);
        // console.log($(elem));
      }
    }
  }
};

// $("[data-dropdown]").dropdownUp("rem", "flex");
