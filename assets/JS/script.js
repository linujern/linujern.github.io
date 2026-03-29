/* Sidenav toggle */
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";
}

/* Navbar color on scroll */
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#181818";
    } else {
        navbar.style.backgroundColor = "#1f1f1f80";
    }
}

/* Enlarge CV (index.html only) */
$(document).ready(function () {
    $(".enlarge-button").click(function () {
        $(".cv-doc").toggleClass('enlarged');
    });
});