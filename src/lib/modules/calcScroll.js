import $ from "../core";

$.prototype.calcScroll = function () {
  const div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  return scrollWidth;
};
