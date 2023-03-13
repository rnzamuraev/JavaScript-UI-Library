import $ from "../core";

$.prototype.maskPhone = function (delimiter = " ") {
  for (let i = 0; i < this.length; i++) {
    if (
      delimiter == "-" ||
      delimiter == " " ||
      delimiter == ""
    ) {
      const matrix = `+7 (___)${delimiter}___${delimiter}__${delimiter}__`;

      function createMask(e) {
        // const matrix = "+7 (___) ___ __ __";
        let def = matrix.replace(/\D/g, ""); // 7
        let val = this.value.replace(/\D/g, "");
        let i = 0;

        if (def.length >= val.length) {
          val = def;
        }

        console.log(val);
        this.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ""
            : a;
        });

        if (e.type === "focus") {
          setCursorPosition(this.value.length, this);
        } else if (
          e.type === "input" &&
          this.value[1] !== def
        ) {
          this.value = `+7 (${
            this.value[1]
          }${this.value.slice(5)}`;
        } else if (e.type === "blur") {
          thisLength(this);
          if (this.value.length <= 2) {
            this.value = "";
          }
        }
      }

      function setCursorPosition(pos, elem) {
        elem.focus();

        if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
          const range = elem.createTextRange();

          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
        }
      }

      function thisLength(elem) {
        let num = elem.value.replace(/\D/g, "").length;
        elem.setAttribute("data-num", num);
      }

      this[i].addEventListener("focus", createMask);
      this[i].addEventListener("input", createMask);
      this[i].addEventListener("blur", createMask);
    } else {
      throw new Error(
        `
          - Что-то пошло не так, не допустимое значение, __maskPhone__ (${delimiter})
          - Invalid value, __maskPhone__ (${delimiter})
        `
      );
    }
  }
};

$("input[name='phone']").maskPhone();
// console.log($("input[name='phone']"));
