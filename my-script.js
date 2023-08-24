window.addEventListener("scroll", function scrollNavbar() {
    let nav = document.querySelector("#myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.classList.add("topNavbar-scrolled");
    } else {
        nav.classList.remove("topNavbar-scrolled");
    }
});

const menuIcon =  document.getElementById("menuIcon");
const topNavbar = document.getElementById('myNavbar');
const navLinks = document.querySelectorAll(".topNavbar a");

menuIcon.addEventListener('click', () => {
    console.log("you click on menuIcon")
    topNavbar.classList.toggle('responsive');
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    menuIcon.querySelector('i').classList.toggle('fa-times');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("you click on a")
        if (link.id !== "menuIcon") {
            console.log("you click on a")
            topNavbar.classList.remove('responsive'); // Hide the menu
            menuIcon.querySelector('i').classList.remove('fa-times');
            menuIcon.querySelector('i').classList.add('fa-bars');
        }
    });
});
