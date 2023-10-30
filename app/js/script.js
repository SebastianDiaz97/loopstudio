let menu = document.querySelector(".header__menu");
let close = document.querySelector(".header__close");
let main = document.querySelector(".main");
let fondo = document.querySelector(".fondo");
let header = document.querySelector(".header");
let aaaaaa = document.querySelector(".galery__titulo");

console.log(aaaaaa.scrollWidth);

let aa = document.querySelectorAll("a");
aa.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log("click");
    event.preventDefault();
  });
});

if (document.documentElement.scrollWidth < 769) {
  menu.addEventListener("click", (e) => {
    main.classList.add("disable");
    fondo.classList.add("disable");
    header.classList.add("menuMobile");
  });
  close.addEventListener("click", (e) => {
    main.classList.remove("disable");
    fondo.classList.remove("disable");
    header.classList.remove("menuMobile");
  });
}
