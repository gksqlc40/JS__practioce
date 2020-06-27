const input = document.querySelector("#night_day");
const body = document.querySelector("body");

function sBtn() {
  if (document.querySelector("#night_day").value === "night") {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("#night_day").value = "day";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("#night_day").value = "night";
  }

  function xx() {
    const select = input.onclick;
    select.addEventListener("click", sBtn);
  }
  xx();
}
