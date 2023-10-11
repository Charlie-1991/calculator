let displayTotal = "";
let display = document.getElementById("display");

function calcButton(number) {
  displayTotal = displayTotal + number;
  display.value = displayTotal;
}

function clearButton() {
  displayTotal = "";
  display.value = displayTotal;
}
