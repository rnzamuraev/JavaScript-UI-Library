//** _errThisElements **//
export function _errThisElements(thisEl, method) {
  console.log("_errThisElements");
  console.log(thisEl);
  if (thisEl.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, метод используется более чем на одном элементе, __${method}__ $(${thisEl})
        - Method is used on more than one element, __${method}__ $(${thisEl})
      `
    );
  }
}

//** _errThisUndefined **//
export function _errThisUndefined(thisEl, method) {
  console.log("_errThisUndefined");
  console.log(thisEl);
  if (thisEl === undefined || thisEl.length < 1) {
    throw new Error(
      `
        - Что-то пошло не так, метод используется на пустом элементе, __${method}__ $(${thisEl})
        - Method is used on an empty element, __${method}__ $(${thisEl})
      `
    );
  }
}

//** _errThisNotTaggName **//
export function _errThisNotTagName(thisEl, method) {
  console.log("_errThisNotTaggName");
  console.log(thisEl);
  if (!thisEl.tagName) {
    throw new Error(
      `
        - Что-то пошло не так, метод используется для неправильного элемента, __${method}__ $(${thisEl})
        - The method is being used on the wrong element, __${method}__ $(${thisEl})
      `
    );
  }
}

//** _errArgUndefined **//
export function _errArgUndefined(arg, method) {
  console.log("_errArgUndefined");
  console.log(arg);
  if (arg === undefined || arg.length < 1) {
    throw new Error(
      `
        - Что-то пошло не так, метод не получил никаких аргументов, __${method}__ (${arg})
        - The method did not receive any arguments, __${method}__ (${arg})
      `
    );
  }
}

//** _errArgNotSelector **//
export function _errArgNotSelector(selector, method) {
  console.log("_errArgNotSelector");
  console.log(selector);
  if (!document.querySelector(selector)) {
    throw new Error(
      `
        - Что-то пошло не так, такого селектора не существует, __${method}__ (${selector})
        - No such selector exists, __${method}__ (${selector})
      `
    );
  }
}

//** _errArgNotTagName **//
export function _errArgNotTagName(arg, method) {
  console.log("_errArgNotTagName");
  console.log(arg);
  if (!arg.tagName) {
    throw new Error(
      `
        - Что-то пошло не так, аргумент передан неправильно, __${method}__ (${arg})
        - Argument passed incorrectly, __${method}__ (${arg})
      `
    );
  }
}

//**????? **/
// export function _errorThis(thisEl, method) {
//   if (thisEl === undefined || thisEl.length < 1) {
//     throw new Error(
//       `
//         - Что-то пошло не так, метод используется на пустом элементе, __${method}__ (${thisEl})
//         - Method is used on an empty element, __${method}__ (${thisEl})
//       `
//     );
//   }

//   if (thisEl.length > 1) {
//     throw new Error(
//       `
//         - Что-то пошло не так, метод используется более чем на одном элементе, __${method}__ (${thisEl})
//         - Method is used on more than one element, __${method}__ (${thisEl})
//       `
//     );
//   }
// }

// export function _errorArgument(arg, method) {
//   if (arg === undefined || arg.length < 1) {
//     throw new Error(
//       `
//         - Что-то пошло не так, метод не получил никаких аргументов, __${method}__ (${arg})
//         - The method did not receive any arguments, __${method}__ (${arg})
//       `
//     );
//   }

//   if (!arg.tagName) {
//     throw new Error(
//       `
//         - Что-то пошло не так, аргумент передан неправильно, __${method}__ (${arg})
//         - Argument passed incorrectly, __${method}__ (${arg})
//       `
//     );
//   }
// }
