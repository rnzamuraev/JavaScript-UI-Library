// export default function getWidthInUnit(num, unit) {
import $ from "../core";

$.prototype.getWidthInUnit = function (num, unit) {
  let width;

  if (unit !== "px") {
    width = num / 16 + unit;
    console.log(width);
  } else {
    width = num + unit;
    console.log(width);
  }

  return width;
};
