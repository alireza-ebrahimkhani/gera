//hamburger icon toggle
let header_hamIco = document.querySelector(".header-hamIco");
let header_line = document.querySelector(".header-hamIco-line");
let header_menuBox = document.querySelector(".header-menuBox");
let header_menu = document.querySelector(".header-menu");
let header_assist = document.querySelector(".header-assist");
let header_sign = document.querySelector(".header-sign");
let menu_is_open = false;
header_hamIco.addEventListener("click", () => {
  header_line.classList.toggle("header-hamIco-line--open");
  header_menu.classList.toggle("header-menu--open");
  header_menuBox.classList.toggle("header-menuBox--open");
  header_assist.classList.toggle("header-assist--open");
  header_sign.classList.toggle("header-sign--open");
  menu_is_open = true;
});

///translate switch toggle
let header_switch = document.querySelector(".header-translate-switch");
let header_pin = document.querySelector(".header-translate-pin");
header_switch.addEventListener("click", () => {
  header_pin.classList.toggle("header-translate-pin--active");
});
