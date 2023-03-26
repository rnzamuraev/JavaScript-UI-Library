import $ from "../core";
import { _errThisElements, _errThisUndefined, _errArgUndefined } from "../services/_error";
import { _getValue, _setValue } from "../services/_switchValue";

$.prototype.style = function (styleName, value) {
  _errThisUndefined(this[0], "style");
  _errArgUndefined(styleName, "style");

  console.log("this: ", this);
  console.log("value: ", value);
  console.log("styleName: ", styleName);

  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (value !== "" && !value) {
      _errThisElements(this, "style");
      console.log(this[i]);
      console.log(styleName);

      return _getValue(window.getComputedStyle(this[i]), styleName);
    }

    _setValue(this[i].style, styleName, value);
  }
  console.log(this[0]);
  console.log(this);
  return this;
};

$.prototype.getStyle = function (styleName) {
  _errThisElements(this, "getStyle");
  _errThisUndefined(this[0], "getStyle");
  _errArgUndefined(styleName, "getStyle");

  for (let i = 0; i < this.length; i++) {
    return _getStyle(window.getComputedStyle(this[i]), styleName);
  }
};
