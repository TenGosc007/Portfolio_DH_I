const hamburgerMenu = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".header-container__nav");
const btn = document.querySelector("#toTopBtn");

function toggleMenu() {
  if (hamburgerMenu.checked) {
    nav.style.top = "-1rem";
    nav.style.opacity = "1";
  } else {
    nav.style.top = "-240px";
    nav.style.opacity = "0";
  }
}

function hideMenu() {
  if (innerWidth <= 900) {
    nav.style.top = "-240px";
    nav.style.opacity = "0";
    hamburgerMenu.checked = false;
  }
}

console.log(window.innerWidth);

function onResize() {
  nav.style.opacity = "1";
}

const topFunction = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("resize", onResize);

hamburgerMenu.addEventListener("change", toggleMenu);
nav.addEventListener("click", hideMenu);

btn.addEventListener("click", topFunction);
