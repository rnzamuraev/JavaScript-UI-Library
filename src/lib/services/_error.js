export function _errElements(elem, method) {
  if (elem.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, передано более 1 элемента, __${method}__ (${elem})
        - Received more than 1 element node, __${method}__ (${elem})
      `
    );
  }
}
