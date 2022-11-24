
// Mobile nav - hamburger menu

// grabbing existing HTML elements
const burgerMenu = document.querySelector(".hamburgerMenu i");
const navLinks = document.querySelector(".navLinks");

// function
function toggleNav() {
    burgerMenu.classList.toggle("fa-bars");
    burgerMenu.classList.toggle("fa-times");
    navLinks.classList.toggle("navActive");
}

// call function after user clicks on icon
// event listener
burgerMenu.addEventListener("click", () => {
    toggleNav();
});

// toggle again when user click nav link
const navLinkOne = document.querySelector(".navLinkOne");
const navLinkTwo = document.querySelector(".navLinkTwo");
const navLinkThree = document.querySelector(".navLinkThree");
const navLinkFour = document.querySelector(".navLinkFour");

// event listener for a
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