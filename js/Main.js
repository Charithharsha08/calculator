console.log("Load Main.js");

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function clearMostRecentEntry() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
    if (
      display.value === "Infinity" ||
      display.value === "NaN" ||
      display.value === "undefined"
    ) {
      display.value = "Error";
    }
  } catch (error) {
    display.value = "Error";
  }
}
