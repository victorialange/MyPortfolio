
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
burgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    toggleNav();
});

// toggle again when user clicks nav link
const navLinkOne = document.querySelector(".navLinkOne");
const navLinkTwo = document.querySelector(".navLinkTwo");
const navLinkThree = document.querySelector(".navLinkThree");
const navLinkFour = document.querySelector(".navLinkFour");
const navLinkFive = document.querySelector(".navLinkFive");

// event listener for a tags inside burger menu
navLinkOne.addEventListener("click", (event) => {
  
    toggleNav();
});
navLinkTwo.addEventListener("click", (event) => {
   
    toggleNav();
});
navLinkThree.addEventListener("click", (event) => {
 
    toggleNav();
});
navLinkFour.addEventListener("click", (event) => {
    
    toggleNav();
});
navLinkFive.addEventListener("click", (event) => {

    toggleNav();
});

// clearing the form after clicking go back when submitting via formspree
// information taken from formspree help: https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

// this will unfortunately not work because this is causing the form to clear its input before it is being processed/handled by formspree

// event listener for clearing input once form submitted
// const formEl = document.querySelector("form");
// const inputName = document.querySelector("input[name=userName]");
// const inputEmail = document.querySelector("input[name=userEmail]");
// const textArea = document.querySelector("textarea");


// formEl.addEventListener("submit", (event) => {
//     // event.preventDefault();
//     if (inputName.value && inputEmail.value && textArea.value) {
//        inputName.value = ""; 
//        inputEmail.value = ""; 
//        textArea.value = "";
//     }

// })



// const formEl = document.querySelector("form");


// trying out input value of subject and console logging
// document.querySelector("input[name=subject]").addEventListener("change", (event) => {
//     event.preventDefault();
//     const subjectInput = document.querySelector("input[name=subject]").value;
//     // console.log(userSubject.value);
//     // console.log(subjectInput);
// })








