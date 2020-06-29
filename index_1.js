const toggleBtn = document.querySelector(".toggle");
let menu = document.querySelector(".header__box");

function activeBox() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
