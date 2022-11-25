
// Mobile nav - hamburger menu

// grabbing existing HTML elements
const burgerMenu = document.querySelector(".hamburgerMenu i");
// const slideOutMenu = document.querySelector(".slideOut");
const slideOutNav = document.querySelector(".hamburgerNav");
const logo = document.querySelector(".hamburgerNav .logo");
//add another class to header when user click icon
// const header= document.querySelector("header");

// function
function toggleNav() {
    burgerMenu.classList.toggle("fa-bars");
    burgerMenu.classList.toggle("fa-times");
    // slideOutMenu.classList.toggle("menuActive");
    slideOutNav.classList.toggle("navActive");
    logo.classList.toggle("noLogo");
    // header.classList.toggle("headerDown");
}

// call function after user clicks on icon
// event listener
burgerMenu.addEventListener("click", () => {
    toggleNav();
});

// toggle again when user clicks nav link
const navLinkOne = document.querySelector(".navLinkOne");
const navLinkTwo = document.querySelector(".navLinkTwo");
const navLinkThree = document.querySelector(".navLinkThree");
const navLinkFour = document.querySelector(".navLinkFour");
const navLinkFive = document.querySelector(".navLinkFive");

// event listener for a tags inside burger menu
navLinkOne.addEventListener("click", () => {
    toggleNav();
});
navLinkTwo.addEventListener("click", () => {
    toggleNav();
});
navLinkThree.addEventListener("click", () => {
    toggleNav();
});
navLinkFour.addEventListener("click", () => {
    toggleNav();
});
navLinkFive.addEventListener("click", () => {
    toggleNav();
});


// event listener for clearing input once form submitted
const formEl = document.querySelector("form");
const inputName = document.querySelector("input[name=userName]");
const inputEmail = document.querySelector("input[name=userEmail]");
const textArea = document.querySelector("textarea");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    inputName.value = "";
    inputEmail.value = "";
    textArea.value = "";
})


