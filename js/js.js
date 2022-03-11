//**  hamburger icon toggle  **//
let header = document.querySelector(".header");
let header_hamIco = document.querySelector(".header-hamIco");
let header_line = document.querySelector(".header-hamIco-line");
let header_menuBox = document.querySelector(".header-menuBox");
let header_menu = document.querySelector(".header-menu");
let header_assist = document.querySelector(".header-assist");
let logo = document.querySelector(".logo");

let menu_is_open = false;
header_hamIco.addEventListener("click", () => {
  document.querySelector(':root').classList.toggle("dark");
  header_line.classList.toggle("header-hamIco-line--open");
  header_menu.classList.toggle("header-menu--open");
  header_menuBox.classList.toggle("header-menuBox--open");
  header_assist.classList.toggle("header-assist--open");
  logo.classList.toggle("logo--menu");
  menu_is_open = true;
});

//**  translate switch toggle  **//

let header_switch = document.querySelector(".header-translate-switch");
let header_pin = document.querySelector(".header-translate-pin");

header_switch.addEventListener("click", () => {
  header_pin.classList.toggle("header-translate-pin--active");
  let fa_text = document.querySelectorAll(".FA");
  fa_text.forEach(thisFA => {
    thisFA.classList.toggle("FA--show");
  });
  
});


//**  contact  **//
let contact = document.querySelector(".contact-btn");
let contact_is_open = false;
contact.addEventListener("click", () => {
  document.querySelector(".contact").classList.toggle("contact--open");

  contact_is_open = true;
});

