import $ from "../core";

$.prototype.form = function (phpFile) {
  for (let i = 0; i < this.length; i++) {
    const form = this[i];
    // const arrInputs = $(form).find("input[data-reg]");
    const inputs = $(form).find("input");
    const validInputsArr = [];
    const url = phpFile;
    console.log(form);
    console.log(inputs);
    //

    for (let i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).hasAttr("data-reg")) {
        $(inputs[i]).setAttr("is-valid", "0");

        $(inputs[i]).on("focus", inputHandler);
        $(inputs[i]).on("input", inputHandler);
        $(inputs[i]).on("blur", inputHandler);

        validInputsArr.push(inputs[i]);
      }
    }

    // $(form).on("input", inputHandler);

    $(form).on("submit", formSubmit);

    function inputHandler(e) {
      if ($(e.target).hasAttr("is-valid")) {
        const inputReg = $(e.target).getAttr("data-reg");
        const inputValue = getValueInput(e);
        const reg = new RegExp(inputReg);
        const label = getLabel(e);

        console.log(inputValue);

        // if (e.type === "focus") {
        // if (label !== null) {
        // label.html(" ");
        // setLabelHtml(e, label);
        // }
        // } else
        // if (e.type == "blur") {
        //   console.log("blur");
        //   regTestInput(e, reg, inputValue, label);
        // }
        setAttrIsValid(e, reg, inputValue, label);
      }
    }

    function getValueInput(e) {
      let inputValue;

      if ($(e.target).getAttr("name") === "phone") {
        inputValue = e.target.value.replace(/\D/g, "");
      } else {
        inputValue = e.target.value;
      }

      return inputValue;
    }

    function getLabel(e) {
      if ($(e.target).hasAttr("data-label")) {
        const id = $(e.target).getAttr("data-label");
        let label = $(id);
        return label;
      }

      return null;
    }

    function setAttrIsValid(e, reg, inputValue, label) {
      if (label !== null) {
        // if (e.type === "focus") {
        //   label.html(" ");
        // }

        // if (e.type == "blur") {
        //   regTestInput(e, reg, inputValue, label);
        //   if ($(e.target).setAttr("is-valid", "0")) {
        //     label.html("Не верно заполнено поле");
        //     if (e.target.value === "") {
        //       label.html(" ");
        //     }
        //   } else {
        //     label.html(" ");
        //   }
        if (e.type === "focus") {
          label.html(" ");
        } else if (e.type == "blur") {
          regTestInput(e, reg, inputValue, label);
        }
      } else {
        $(e.target).setAttr("is-valid", "1");
      }
    }

    function regTestInput(e, reg, inputValue, label) {
      if (reg.test(inputValue)) {
        $(e.target).setAttr("is-valid", "1");
        label.html(" ");
      } else {
        $(e.target).setAttr("is-valid", "0");
        label.html("Не верно заполнено поле");
        if (e.target.value === "") {
          label.html(" ");
        }
      }
    }

    function formSubmit(e) {
      e.preventDefault();

      console.log(validInputsArr);
      const isAllValid = [];
      const dataForm = formData(form);

      validInputsArr.forEach((input) => {
        isAllValid.push(input.getAttribute("is-valid"));
      });

      const isValid = isAllValid.reduce((acc, val) => {
        console.log(acc);
        console.log(val);
        return acc * val;
      });

      console.log(isValid);
      console.log(Number(isValid));
      console.log(Boolean(Number(isValid)));
      if (Boolean(Number(isValid))) {
        console.log("Boolean(Number(isValid))");
        sendForm();
        // formReset();
      }
    }

    function sendForm() {
      const dataForm = formData(form);

      let res = new XMLHttpRequest();

      res.onreadystatechange = function () {
        // if (xhr.readyState === 4) {
        //   if (xhr.status === 200) {
        //     console.log("Отправлено");
        //     formReset();
        //     showMessage("Данные отправлены!");
        //   }
        // }
        if (res.readyState === 1) {
          // onSpinner();
        }

        if (res.readyState === 4) {
          // offSpinner();
          if (res.status === 200) {
            console.log("Отправлено");
            // offSpinner();
            formReset();
            // showMessage("Данные отправлены!");
          }
        }

        if (!res.ok) {
          throw new Error(
            `
              - Что-то пошло не так, не удалось получить fetch( ${url} ), статус: ${res.status}
              - Could not fetch( ${url} ), status: ${res.status}
            `
          );
        }
      };

      res.open("POST", url, true);
      res.send(dataForm);
    }

    // async function sendForm() {
    //   const dataForm = formData(form);

    //   // $()
    //   //   .post(url, dataForm)
    //   //   .then((data) => console.log(data));

    //   let res = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error(
    //       `
    //     - Что-то пошло не так, не удалось получить fetch( ${url} ), статус: ${res.status}
    //     - Could not fetch( ${url} ), status: ${res.status}
    //   `
    //     );
    //   }

    //   return await res.json(JSON.parse(data));
    // }

    function formData(data) {
      return new FormData(data);
    }

    function formReset() {
      form.reset();
    }

    // test
    $("#btn-submit").on("click", () => {
      console.log(validInputsArr);
    });

    console.log(form);
  }
};

// $("[data-form]").form();
