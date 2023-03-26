import { _content } from "./_content";

export function _getValue(elem, styleName) {
  switch (styleName) {
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
    case "height":
      return elem.height;
    case "maxHeight":
      return elem.maxHeight;
    case "scrollHeight":
      console.log(elem);
      console.log(styleName);
      console.log(elem.scrollHeight);
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
    case "height":
      elem.height = val;
      return;
    case "maxHeight":
      elem.maxHeight = val;
      return;
    case "scrollHeight":
      elem.scrollHeight = val;
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
