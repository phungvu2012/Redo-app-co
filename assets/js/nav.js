var mainNav = document.getElementById("main-nav");

window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        mainNav.classList.add("bg-gradient-purple");
    }
    else {
        mainNav.classList.remove("bg-gradient-purple");
    }
})