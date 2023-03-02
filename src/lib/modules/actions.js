import $ from "../core";

// html
$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!content) {
      return this[i].innerHTML;
    }
    this[i].innerHTML = content;
  }
  return this;
};

// value
$.prototype.val = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (!content) {
      return this[i].value;
    }
    if (content == " ") {
      this[i].value = " ";
    } else {
      this[i].value = content;
    }
  }
  return this;
};

// length
$.prototype.leng = function () {
  for (let i = 0; i < this.length; i++) {
    return this[i].value.length;
  }
  // return this;
};

// eq
$.prototype.eq = function (ind) {
  if (!ind) {
    return this;
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

// index
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
        return i + 1;
      }
    }
  };

  // return childs.findIndex(findMyIndex);
  return findMyIndex(this[0]);
};

// find
$.prototype.find = function (selector) {
  // let numberOfIndex = 0;
  let counter = 0;

  const copiObj = Object.assign({}, this);

  for (let i = 0; i < copiObj.length; i++) {
    delete this[i];
    let arr = copiObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    // numberOfIndex += arr.length;
  }

  // const objLength = Object.keys(this).length;
  // for (;numberOfIndex < objLength; numberOfIndex++) {
  //   delete this[numberOfIndex];
  // }

  this.length = counter;

  return this;
};

// closest
$.prototype.closest = function (selector) {
  if (!selector) {
    return this;
  }

  let counter = 0;
  let arr = [];

  const copiObj = Object.assign({}, this);

  for (let i = 0; i < copiObj.length; i++) {
    arr[i] = this[i].closest(selector);

    console.log(arr);
    if (arr[i] == null) {
      continue;
    }

    console.log(arr);
    this[counter] = arr[i];
    console.log(this);
    counter++;
  }

  const objLength = Object.keys(this).length;
  this.length = counter;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  console.log(this);

  return this;
};

// siblings
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

$.prototype.append = function (...child) {
  const arr = [...child];
  const newArr = [];
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(typeof arr[i]);
    if (arr[i].tagName) {
      console.log("hello 2");
    } else if (
      typeof arr[i] == "object" &&
      arr[i] !== null &&
      !arr[i].tagName
    ) {
      console.log("hello");
    } else {
      console.log("continue");
      continue;
    }
  }

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
