//Задание 1
function showMessage(text) {
  console.log(text);
}
showMessage(`Я учу JavaScript!`);

//Задание 2
function button_right() {
  document.getElementById("image").src = "assets/comingKitten.jpg";
}
function button_left() {
  document.getElementById("image").src = "assets/kitten.jpg";
}

//Задание 3
function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Год является високосным (366 дней)");
      }
    }
  } else {
    console.log("Год не високосный (у него 365 дней).");
  }
}

leapYear(2022);
