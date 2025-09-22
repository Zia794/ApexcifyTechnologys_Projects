const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      display.value = "";
    } else if (button.textContent === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += button.textContent;
    }
  });
});

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  if (
    (event.key >= 0 && event.key <= 9) ||
    ["+", "-", "*", "/", ".", "(", ")"].includes(event.key)
  ) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key.toLowerCase() === "c") {
    display.value = "";
  }
});
