function greet(greeting) {
  let clickMeButton = document.getElementById("b1");
  clickMeButton.innerHTML = "You clicked me!";
  console.log(greeting, "C11!!");
}

function changeColor(color) {
  let clickMeButton = document.getElementById("b2");
  clickMeButton.style.background = color;
}
