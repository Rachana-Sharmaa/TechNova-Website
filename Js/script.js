// For dark screen
const toggleButton = document.getElementById("toggle_theme");

toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

//  On scroll show and hide button

let arrowScroll = document.getElementById("arrow");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        arrowScroll.style.display = "flex";
    } else {
        arrowScroll.style.display = "none";
    }
});

// For Show and Hide bar

var menuBar = document.getElementById("bar");
var navMenu = document.querySelector(".menu");
var overlayScreen = document.querySelector(".overlay");
var crossBar = document.querySelector("#closeBar");
console.log(crossBar);
menuBar.addEventListener("click", () => {
    navMenu.classList.add("open-menu");
    overlayScreen.classList.add("show-overlay");
});

overlayScreen.addEventListener("click", () => {
    navMenu.classList.remove("open-menu");
    overlayScreen.classList.remove("show-overlay");
});

crossBar.addEventListener("click", () => {
    navMenu.classList.remove("open-menu");
    overlayScreen.classList.remove("show-overlay");
});
