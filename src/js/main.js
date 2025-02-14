document.getElementById("load-more").addEventListener("click", function() {
    alert("More projects will be loaded here in the future!");
});
document.getElementById("contact-form-unique").addEventListener("submit", (e)=> {
    e.preventDefault();
    alert("Form submitted successfully!");
});
document.getElementById("current-year").textContent = new Date().getFullYear();

// select elements for DOM manipulation
const menuIconContainer = document.getElementById('menu-icon-container');
const navBar = document.querySelector('.show-navbar');
const hireButton = document.querySelector('.hire-me-btn');
const hireContainer = document.querySelector('.hire-div');

if (hireButton && hireContainer) {
    hireButton.addEventListener('click', () => {
        hireContainer.classList.toggle('show-hire-btn');
    });
}



('menu-icon-container');
console.log(menuIconContainer)
// open Navbar function
const openNavBar = () =>{

navBar.classList.toggle('show-navbar');
}

menuIconContainer.addEventListener('click',openNavBar);

window.addEventListener("scroll", function () {
    const scrollBtn = document.querySelector(".scroll-up-btn");
    const footer = document.querySelector("footer");
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
        scrollBtn.classList.add("show-scroll-btn");
    } else {
        scrollBtn.classList.remove("show-scroll-btn");
    }
});

document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


