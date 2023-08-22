window.addEventListener("scroll", function scrollNavbar() {
    let nav = document.querySelector("#myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.classList.add("topNavbar-scrolled");
    } else {
        nav.classList.remove("topNavbar-scrolled");
    }
});
