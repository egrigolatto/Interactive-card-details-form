'use strict';

const cardNumber = document.getElementById("number_card-front");
const cardName = document.getElementById("name_card-front");
const cardMonth = document.getElementById("month_card-front");
const cardYear = document.getElementById("year_card-front");
const CardCvc = document.getElementById("cvc_card-back");

const btn_enviar = document.getElementById("submit_btn");

const form = document.getElementById("form");

const inputName = document.getElementById("card_name");
const inputNumber = document.getElementById("card_number");

const inputDateMonth = document.getElementById("date_month");
const inputDateYear = document.getElementById("date_year");

const inputCvc = document.getElementById("input_cvc");

const thank = document.getElementById("thank");
const btnContinue = document.getElementById("btn-continue");

inputName.addEventListener("input", updateCardName);
inputNumber.addEventListener("input", updateCardNumber);
inputDateMonth.addEventListener("input", updateCardExpiration);
inputDateYear.addEventListener("input", updateCardExpiration);
inputCvc.addEventListener("input", updateCardSecurity);

function updateCardName() {
    const name = inputName.value;
    cardName.innerText = name || "e.g. Jane Appleseed";
}
function updateCardNumber() {
    const number = inputNumber.value;
    const formattedCardNumber = number.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
    inputNumber.value = formattedCardNumber;
    cardNumber.innerText = formattedCardNumber ? formattedCardNumber : "0000 0000 0000 0000";
}

function updateCardExpiration() {
    const month = inputDateMonth.value;
    const year = inputDateYear.value;
    cardMonth.innerText = month || "00";
    cardYear.innerText = year || "00"
}

function updateCardSecurity() {
    const cvc = inputCvc.value;
    CardCvc.innerText = cvc || "000";
}



btn_enviar.addEventListener("click", ()=>{

    const name = inputName.value;
    const number = inputNumber.value;
    const month = inputDateMonth.value;
    const year = inputDateYear.value;
    const cvc = inputCvc.value;

    const nameError = document.getElementById("nameError");
    const numberError = document.getElementById("numberError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");
    const cvcError = document.getElementById("cvcError");

    nameError.innerText = "";
    numberError.innerText = "";
    monthError.innerText = "";
    yearError.innerText = "";
    cvcError.innerText = "";

    if (name === "" || name.length < 6) {
        nameError.innerText = "Can't be blank";
        inputName.style.borderColor = "red";
      } else {
        inputName.style.borderColor = "";
    }
    
    if (number === "" || number.length !== 19 || !/^\d{4} \d{4} \d{4} \d{4}$/.test(number)) {
      numberError.innerText = "Wrong format, numbers only";
      inputNumber.style.borderColor = "red";
    } else {
        inputNumber.style.borderColor = "";
    }

    if (month === "" || isNaN(month) || Number(month) > 12) {
      monthError.innerText = "Can't be blank";
      inputDateMonth.style.borderColor = "red";
    } else {
        inputDateMonth.style.borderColor = "";
    }

    if (year === "" || isNaN(year) || year.length !== 2) {
      yearError.innerText = "";
      inputDateYear.style.borderColor = "red";
    } else{
        inputDateYear.style.borderColor = "";
    }

    if (cvc === "" || cvc.length !== 3 || isNaN(cvc)) {
      cvcError.innerText = "Can't be blank";
      inputCvc.style.borderColor = "red";
    } else {
        inputCvc.style.borderColor = "";
    }

    if (
        name !== "" &&
        name.length >= 6 &&
        number !== "" &&
        number.length === 19 &&
        /^\d{4} \d{4} \d{4} \d{4}$/.test(number) &&
        month !== "" &&
        !isNaN(month) &&
        Number(month) <= 12 &&
        year !== "" &&
        !isNaN(year) &&
        year.length === 2 &&
        cvc !== "" &&
        cvc.length === 3 &&
        !isNaN(cvc)
      ) {
        form.style.display = "none";
        thank.style.display = "block";
      }
});

btnContinue.addEventListener("click", function() {
    form.reset();
    cardName.innerText = "e.g. Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00"
    CardCvc.innerText =  "000";
    form.style.display = "block";
    thank.style.display = "none";
  });





