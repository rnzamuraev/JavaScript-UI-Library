import { _content } from "./_content";

export function _getValue(elem, styleName) {
  switch (styleName) {
    case "backgroundColor":
      return elem.backgroundColor;
    case "display":
      return elem.display;
    case "margin":
      return elem.margin;
    case "padding":
      return elem.padding;
    case "justifyContent":
      return elem.justifyContent;
    case "transition":
      return elem.transition;
    case "transform":
      return elem.transform;
    case "width":
      return elem.width;
    case "maxWidth":
      return elem.maxWidth;
    case "minWidth":
      return elem.minWidth;
    case "height":
      return elem.height;
    case "maxHeight":
      return elem.maxHeight;
    case "minHeight":
      return elem.minHeight;
    case "scrollHeight":
      return elem.scrollHeight;
    // case "html":
    //   return elem.innerHTML;
    // case "text":
    //   return elem.textContent;
    // case "val":
    //   return elem.value;
  }
}

export function _setValue(elem, styleName, value) {
  const val = _content(value);

  switch (styleName) {
    case "backgroundColor":
      elem.backgroundColor = val;
      return;
    case "display":
      elem.display = val;
      return;
    case "padding":
      elem.padding = val;
      return;
    case "margin":
      elem.margin = val;
      return;
    case "justifyContent":
      elem.justifyContent = val;
      return;
    case "transition":
      elem.transition = val;
      return;
    case "transform":
      elem.transform = val;
      return;
    case "width":
      elem.width = val;
      return;
    case "maxWidth":
      elem.maxWidth = val;
      return;
    case "minWidth":
      elem.minWidth = val;
      return;
    case "height":
      elem.height = val;
      return;
    case "maxHeight":
      elem.maxHeight = val;
      return;
    case "minHeight":
      elem.minHeight = val;
      return;
    // case "html":
    //   elem.innerHTML = val;
    //   return;
    // case "text":
    //   elem.textContent = val;
    //   return;
    // case "val":
    //   elem.value = val;
    //   return;
  }
}
