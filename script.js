let menu = document.querySelector("nav ul");
let menuBar = document.querySelector("nav .menu-icon");
let iconMenu = document.querySelector("nav .menu-icon i");

menuBar.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (iconMenu.className == "fa-solid fa-bars") {
    iconMenu.className = "fa-solid fa-xmark";
    iconMenu.style.transition = "all 0.3s ease-in-out";
  } else {
    iconMenu.className = "fa-solid fa-bars";
  }
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
