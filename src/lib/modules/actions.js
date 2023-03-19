import $ from "../core";

// eq - находит елемент по указанному индексу
$.prototype.eq = function (ind) {
  if (!ind && ind !== 0) {
    throw new Error(
      `
      - Что-то пошло не так, такого индекса нет, __eq__ (${ind})
      - No such index, __eq__ (${ind})
      `
    );
  }

  const elem = this[ind];

  const objLength = Object.keys(this).length; //Создаем копию обьекта со всеми элементами
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = elem;
  this.length = 1;
  return this;
};

// index - находит индекс элемента на котором было совершено действие
$.prototype.index = function () {
  const parent = this[0].parentNode;
  // const childs = [...parent.children];
  const childs = parent.children;

  // const findMyIndex = (elem) => {
  //   return elem == this[0];
  // };

  const findMyIndex = (elem) => {
    for (let i = 0; i < childs.length; i++) {
      if (childs[i] == elem) {
        return i;
      }
    }
  };

  // return childs.findIndex(findMyIndex);
  return findMyIndex(this[0]);
};

// find - получает все дочерние элементы по заданному селуктору
$.prototype.find = function (selector) {
  if (!selector) {
    throw new Error(
      `
      - Что-то пошло не так, селектор небыл передан, __find__ (${selector})
      - Selector failed, __find__ (${selector})
    `
    );
  }
  // console.log(selector);
  // console.log(this);
  let counter = 0;
  let arr = [];

  const copiObj = Object.assign({}, this);

  for (let i = 0; i < copiObj.length; i++) {
    delete this[i];
    arr[i] = copiObj[i].querySelectorAll(selector);
    // console.log(arr);

    if (arr[i].length == 0) {
      continue;
    }

    // console.log(arr.length);
    for (let j = 0; j < arr[i].length; j++) {
      this[counter] = arr[i][j];
      counter++;
      // console.log(arr[i][j]);
      // console.log(j);
    }
  }
  // console.log(this);
  // console.log(counter);
  // this.length = counter;
  // const objLength = Object.keys(this).length;
  // for (; numberOfIndex < objLength; numberOfIndex++) {
  //   delete this[numberOfIndex];
  // }

  this.length = counter;
  console.log(this);
  return this;
};

// find
// $.prototype.find = function (selector) {
//   let numberOfIndex = 0;
//   let counter = 0;

//   const copiObj = Object.assign({}, this);
//   // console.log(copiObj);

//   for (let i = 0; i < copiObj.length; i++) {
//     // delete this[i];
//     const arr = copiObj[i].querySelectorAll(selector);
//     console.log(arr);

//     if (arr.length == 0) {
//       continue;
//     }

//     console.log(arr.length);
//     for (let j = 0; j < arr.length; j++) {
//       this[counter] = arr[j];
//       counter++;
//       // console.log(arr[j]);
//     }
//     // console.log(this);
//     numberOfIndex += arr.length;
//     console.log(numberOfIndex);
//   }
//   console.log(this);
//   console.log(counter);
//   console.log(numberOfIndex);
//   this.length = numberOfIndex;
//   console.log(this.length);
//   const objLength = Object.keys(this).length;
//   for (; numberOfIndex < objLength; numberOfIndex++) {
//     delete this[numberOfIndex];
//   }

//   // this.length = counter;
//   console.log(this);
//   return this;
// };

// closest - находит ближайший родительский контайнер по указанному селектору,
// или сам элемент если он подходит по селектору, возвращает первыйнайденный контайнер
$.prototype.closest = function (selector) {
  if (!selector) {
    return this;
  }

  console.log(selector);
  console.log(this);
  let counter = 0;
  let arr = [];

  // const copiObj = Object.assign({}, this);
  // console.log(copiObj);

  for (let i = 0; i < this.length; i++) {
    arr[i] = this[i].closest(selector);

    console.log(arr);
    console.log(arr[i]);
    if (arr[i] == null) {
      continue;
    }

    console.log(arr);
    this[counter] = arr[i];
    console.log(this);
    counter++;
  }

  const objLength = Object.keys(this).length;
  // this.length = counter;

  for (let i = 1; i < objLength; i++) {
    delete this[i];
  }

  this.length = 1;
  console.log(this);
  return this;
};

// siblings - находим всех соседей елемента на котором было совершено действие,
// кроме самого элемента
$.prototype.siblings = function () {
  let counter = 0;

  const copiObj = Object.assign({}, this);
  const arr = copiObj[0].parentNode.children;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == copiObj[0]) {
      continue;
    }

    this[counter] = arr[i];
    counter++;
  }

  this.length = counter;
  // const objLength = Object.keys(this).length;
  // for (;counter < objLength; counter++) {
  //   delete this[counter];
  // }

  return this;
};

// prevSibling - находит элемент стоящий перед применяемым
$.prototype.prevSibling = function () {
  if (this.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, передано более 1 элемента, __prevSibling__ (${this})
        - Received more than 1 element node, __prevSibling__ (${this})
      `
    );
  }

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].previousElementSibling;

    if (this[i] == null) {
      return null;
    }
  }

  return this;
};

// hextSibling - находит элемент стоящий после применяемого
$.prototype.nextSibling = function () {
  if (this.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, передано более 1 элемента, __nextSibling__ (${this})
        - Received more than 1 element node, __nextSibling__ (${this})
      `
    );
  }

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].nextElementSibling;

    if (this[i] == null) {
      return null;
    }
  }

  return this;
};

// parent - получает родительский элемент
$.prototype.parent = function () {
  if (this.length > 1) {
    throw new Error(
      `
      - Что-то пошло не так, передано более 1 элемента, __parent__ (${this})
      - Received more than 1 element node, __parent__ (${this})
    `
    );
  }

  // console.log(this);
  // console.log(this[0].parentNode);
  // if (!node) {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].parentNode;
  }
  // } else {
  //   for (let i = 0; i < node.length; i++) {
  //     this[i] = node[i].parentNode;
  //   }
  // }

  console.log(this);
  return this;
};

// children - находит всех детей заданного елемента или
$.prototype.children = function () {
  console.log(this);
  if (this.length > 1) {
    throw new Error(
      `
        - Что-то пошло не так, передано более 1 элемента, __children__ (${this})
        - Received more than 1 element node, __children__ (${this})
      `
    );
  }

  let counter = 0;
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    arr[i] = this[i].children;
    console.log(arr[i]);

    if (!arr[i].length) {
      continue;
    }

    for (let j = 0; j < arr[i].length; j++) {
      this[counter] = arr[i][j];
      counter++;
    }
  }

  this.length = counter;

  if (this.length == 0) {
    delete this[0];
  }

  console.log(this);
  return this;
};

// create
$.prototype.create = function (node) {
  console.log(node);
  console.log(node);
  if (!node && createElement == node.tagName) {
    return this;
  }

  // if (!node[0].tagName) {
  //   console.log("!node.tagName");
  //   return this;
  // }

  this[0] = document.createElement(node);
  this.length = 1;
  return this;
};

// parentAppend
$.prototype.parentAppend = function (parent) {
  if (parent.length == 0) {
    console.log("!parent.length");
    return this;
  }

  for (let i = 0; i < parent.length; i++) {
    if (!parent[i].tagName) {
      continue;
    }

    if (parent[i].appendChild) {
      parent[i].appendChild(this[0]);
    } else {
      parent[i].append(this[0]);
    }
  }

  return this;
};

// $.prototype.replace = function (val1, val2 = null) {
//   console.log(val1);
//   console.log(val2);
//   if (!val1 ) {
//     throw new Error(
//       `
//         - Что-то пошло не так, не было передано 1 или более значений, __replace__ (${val1}, ${val2})
//         - Received more than 1 element node, __replace__ (${val1}, ${val2})
//       `
//     );
//   } else if (this.length > 1) {
//     throw new Error(
//       `
//         - Что-то пошло не так, передано более 1 элемента, __replace__ (${this})
//         - Received more than 1 element node, __replace__ (${this})
//       `
//     );
//   }

//   for (let i = 0; i < this.length; i++) {
//     if (!this[i].replace) {
//       continue;
//     }

//     if (val2 == null) {
//       console.log("this[i].replace(" + val1 + ", '');");
//       this[i].replace(val1, "");
//     } else {
//       console.log("this[i].replace(val1, val2);");
//       this[i].replace(val1, val2);
//     }
//   }

//   console.log(this);
//   return this;
// };

// $.prototype.append = function (...child) {
//   const arr = [...child];
//   const newArr = [];
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     console.log(typeof arr[i]);
//     if (arr[i].tagName) {
//       console.log("hello 2");
//     } else if (
//       typeof arr[i] == "object" &&
//       arr[i] !== null &&
//       !arr[i].tagName
//     ) {
//       console.log("hello");
//     } else {
//       console.log("continue");
//       continue;
//     }
//   }

//   if (parent.length == 0) {
//     console.log("!parent.length");
//     return this;
//   }

//   for (let i = 0; i < parent.length; i++) {
//     if (!parent[i].tagName) {
//       continue;
//     }

//     if (parent[i].appendChild) {
//       parent[i].appendChild(this[0]);
//     } else {
//       parent[i].append(this[0]);
//     }
//   }

//   return this;
// };
