import $ from "../core";

$.prototype.accordion = function (
  active,
  padding = 0,
  direction = false
) {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", (e) =>
      toggleAccordion(e, this[i])
    );
  }

  function toggleAccordion({ target }, elem) {
    if (
      $(target).hasAttr("data-btn") &&
      $(target).parent().hasAttr("data-toggle-accordion")
    ) {
      console.log(elem);
      const parent = $(target).parent();
      const Toggles = $(elem).find(
        "[data-toggle-accordion]"
      );
      let ind;

      parent.addClass("active");

      for (let i = 0; i < Toggles.length; i++) {
        if ($(Toggles[i]).contains("active")) {
          ind = i;
        }
      }

      parent.removeClass("active");

      const content = $(elem)
        .find("[data-content]")
        .eq(ind);

      if (content.contains(active)) {
        content.removeClass(active);
        content[0].style.maxHeight = "0px";
      } else {
        if (direction === true) {
          $(elem)
            .find("[data-content]")
            .removeClass(active);
          $(elem).find("[data-content]").maxHeight("0px");
        }

        content.addClass(active);
        content.maxHeight(
          content[0].scrollHeight + padding + "px"
        );
      }

      console.log("content: ", content[0]);
      console.log(ind);
    }
  }
};

$("[data-accordion]").accordion(
  "accordion__content-active",
  40,
  true
);
