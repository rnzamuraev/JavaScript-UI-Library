import $ from "../core";

$.prototype.modal = function () {
  const scrolling = $().calcScroll();
  const body = document.body.style;

  for (let i = 0; i < this.length; i++) {
    const targetId = $(this[i]).getAttr("data-target");

    $(this[i]).on("click", (e) => {
      e.preventDefault();

      if ($(this[i]).hasAttr("data-hamburger")) {
        $(targetId).show("block");
      } else {
        $(targetId).show("flex");
      }

      body.overflow = "hidden";
      body.paddingRight = `${scrolling}px`;
    });

    $(targetId).on("click", (e) => {
      closeTheModal(e, targetId);
    });
  }

  function closeTheModal(e, targetId) {
    if (e.target.hasAttribute("data-close")) {
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
      $(targetId).hide("none");
      // console.log("click");

      // $(targetId).off("click", (e) =>
      //   closeTheModal(e, targetId)
      // );
    }
  }
};

$("[data-open='modal']").modal();
