// targeting the elements
let unitType = document.getElementById("unitType");

let fromUnit = document.getElementById("fromUnit");

let toUnit = document.getElementById("toUnit");

let inputValue = document.getElementById("inputValue");

// targeting the options for to and from units
let fromUnitOption1 = document.querySelector(".fromUnit1");
let fromUnitOption2 = document.querySelector(".fromUnit2");

let toUnitOption1 = document.querySelector(".toUnit1");
let toUnitOption2 = document.querySelector(".toUnit2");

let result = document.querySelector(".result-container");

unitType.addEventListener("change", function (e) {
  // if unit type distance is selected, show the options for from and to units
  if (e.target.value === "Distance") {
    fromUnitOption1.innerHTML = "Kilometers";
    fromUnitOption1.value = "Kilometers";

    fromUnitOption2.innerHTML = "Miles";
    fromUnitOption2.value = "Miles";

    toUnitOption1.innerHTML = "Miles";
    toUnitOption1.value = "Miles";

    toUnitOption2.innerHTML = "Kilometers";
    toUnitOption2.value = "Kilometers";
  }
  //   if unit type weight is selected, show the options for from and to units
  else if (e.target.value === "Weight") {
    fromUnitOption1.innerHTML = "Kilograms";
    fromUnitOption1.value = "Kilograms";

    fromUnitOption2.innerHTML = "Pounds";
    fromUnitOption2.value = "Pounds";

    toUnitOption1.innerHTML = "Pounds";
    toUnitOption1.value = "Pounds";

    toUnitOption2.innerHTML = "Kilograms";
    toUnitOption2.value = "Kilograms";
  }
  //   if unit type temperature is selected, show the options for from and to units
  else if (e.target.value === "Temperature") {
    fromUnitOption1.innerHTML = "Celsius";
    fromUnitOption1.value = "Celsius";

    fromUnitOption2.innerHTML = "Fahrenheit";
    fromUnitOption2.value = "Fahrenheit";

    toUnitOption1.innerHTML = "Fahrenheit";
    toUnitOption1.value = "Fahrenheit";

    toUnitOption2.innerHTML = "Celsius";
    toUnitOption2.value = "Celsius";
  }
});

document.getElementById("convertButton").addEventListener("click", function () {
  // console.log(result.style.display = "block");

  // if the unit type is distance, convert the value from one unit to another
  if (unitType.value === "Distance") {
    if (fromUnit.value === "Kilometers" && toUnit.value === "Miles") {
      let answer = inputValue.value * 0.621371;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Kilometers is equal to ${answer.toFixed(2)} Miles`;
      result.style.display = "block";
    } else if (fromUnit.value === "Miles" && toUnit.value === "Kilometers") {
      let result = inputValue.value / 0.621371;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Miles is equal to ${result} Kilometers`;
      result.style.display = "block";
    }
  }
  // if the unit type is weight, convert the value from one unit to another
  else if (unitType.value === "Weight") {
    if (fromUnit.value === "Kilograms" && toUnit.value === "Pounds") {
      let answer = inputValue.value * 2.20462;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Kilograms is equal to ${answer.toFixed(2)} Pounds`;
      result.style.display = "block";
    } else if (fromUnit.value === "Pounds" && toUnit.value === "Kilograms") {
      let result = inputValue.value / 2.20462;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Pounds is equal to ${result} Kilograms`;
      result.style.display = "block";
    }
  }

  // if the unit type is temperature, convert the value from one unit to another
  else if (unitType.value === "Temperature") {
    if (fromUnit.value === "Celsius" && toUnit.value === "Fahrenheit") {
      let answer = (inputValue.value * 9) / 5 + 32;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Celsius is equal to ${Math.round(answer)} Fahrenheit`;
      result.style.display = "block";
    } else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Celsius") {
      let result = ((inputValue.value - 32) * 5) / 9;
      document.getElementById(
        "result"
      ).innerHTML = `${inputValue.value} Fahrenheit is equal to ${result} Celsius`;
      result.style.display = "block";
    }
  }

    // if the unit type is not selected, show an alert message
    else {
        alert("Please select a unit type");
    }
});

document.getElementById("clearButton").addEventListener("click", function () {
    // clear the input value and hide the result container
    inputValue.value = "";
    result.style.display = "none";
    document.getElementById("result").innerHTML = "";
})
