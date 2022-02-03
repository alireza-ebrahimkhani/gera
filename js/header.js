//hamburger icon toggle
let header_hamIco = document.querySelector(".header-hamIco");
let header_line = document.querySelector(".header-hamIco-line");
let menu_is_open = false;
header_hamIco.addEventListener("click", () => {
  header_line.classList.toggle("header-hamIco-line--open");
  menu_is_open = true;
});

///translate switch toggle
let header_switch = document.querySelector(".header-translate-switch");
let header_pin = document.querySelector(".header-translate-pin");
header_switch.addEventListener("click", () => {
  header_pin.classList.toggle("header-translate-pin--active");
});
