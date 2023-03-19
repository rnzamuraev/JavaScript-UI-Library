import $ from "../core";

$.prototype.modal = function () {
  const scrolling = $().calcScroll();
  const body = document.body.style;

  for (let i = 0; i < this.length; i++) {
    const targetId = $(this[i]).getAttr("data-target");

    $(this[i]).on("click", (e) => {
      e.preventDefault();
      const dataActive = $(e.target)
        // $(this[i])
        .closest("[data-active]")
        .getAttr("data-active");

      // console.log(
      //   $(e.target)
      //     .closest("[data-active]")
      //     .getAttr("data-active")
      // );

      if ($(this[i]).hasAttr("data-burger")) {
        $(targetId).show("block");

        if (dataActive === "false") {
          $(this[i]).setAttr("data-active", "true");
        } else if (dataActive === "true") {
          console.log(e.target);
          $(this[i]).setAttr("data-active", "false");
          // оптимизировать //
          body.overflow = "";
          body.paddingRight = 0;
          $(targetId).hide();
        }
      } else {
        $(targetId).show("flex");
      }

      body.overflow = "hidden";
      body.paddingRight = `${scrolling}px`;
    });

    $(targetId).on("click", (e) => {
      console.log(e.target);
      closeTheModal(e, targetId);
    });
  }

  function closeTheModal(e, targetId) {
    if (e.target.hasAttribute("data-close")) {
      // if (
      //   $("[data-burger]").getAttr("data-active") == "true"
      // ) {
      //   $("[data-burger]").setAttr("data-active", "false");
      //   // $("[data-burger]").removeAttr("data-close");
      // }
      close();
      return;
    }

    if (e.target.getAttribute("id") === targetId.slice(1)) {
      close();
      return;
    }

    function close() {
      body.overflow = "";
      body.paddingRight = 0;
      $(targetId).hide();
    }
  }
};

// $("[data-open='modal']").modal();
