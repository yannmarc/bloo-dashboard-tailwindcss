// mobile hamburger

const menuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.nav-menu');
const navlinks = document.querySelectorAll('.nav-menu ul li');

let activeButton = null;


menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle("active-menu");
})

navlinks.forEach(navLink => {
    navLink.addEventListener("click", (e) => {
        navLink.classList.add("active");
        if (activeButton != null && activeButton != e.currentTarget) {
            activeButton.classList.remove("active");
        }

        activeButton = e.currentTarget;
    })
});



