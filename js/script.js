const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn-login-popup");
const dropdownBtnPopup = document.querySelector(".dropdown-menu .btn-login-popup");
const iconClose = document.querySelector(".icon-close");
const dropdownMenu = document.querySelector(".dropdown-menu");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn ion-icon");
const card = document.querySelector(".card");
const cardImg = document.querySelector(".card-img");
const cardText = document.querySelector(".card-text");


registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});

dropdownBtnPopup.addEventListener("click", () => {
    dropdownMenu.classList.remove("open")
    toggleBtnIcon.setAttribute("name", "menu");
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
});

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    if (isOpen == true) {
        toggleBtnIcon.setAttribute("name", "close");
    } else {
        toggleBtnIcon.setAttribute("name", "menu");
    }
}

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function addData() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Registration Successful");
}

function checkData() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let getEmail = localStorage.getItem("userEmail")
    let getPassword = localStorage.getItem("userPassword")

    if (email == getEmail) {
        if (password == getPassword) {
            alert("Login Successful");
        } else {
            alert("Login Failed, Incorrect password");
        }
    } else {
        alert("Login Failed, Incorrect email");
    }
}