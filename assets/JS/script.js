/* Move to new section */

function handleSectionDisplay() {
    var hash = window.location.hash.substr(1) || 'home';
    
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = hash === sections[i].id ? 'block' : 'none';
    }

    var activeSection = document.getElementById(hash);
    
    // Scroll to top of active section
    if (activeSection) {
        activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
// handle the display when the page loads
document.addEventListener('DOMContentLoaded', handleSectionDisplay);
// handle the display when the hash changes
window.addEventListener('hashchange', handleSectionDisplay);

window.addEventListener('hashchange', function () {
    var hash = window.location.hash.substr(1);

    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    var activeSection = document.getElementById(hash);
    activeSection.style.display = 'block';

    // Scroll to top of active section
    activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.location.hash = '#home';


/* responsive navbar */

function openNavBtn() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
}

function toggleNav() {
    var width = document.getElementById("mySidenav").style.width;
    if (width == "250px") {
        document.getElementById("mySidenav").style.width = "0";
    } else {
        document.getElementById("mySidenav").style.width = "250px";
    }
}

/* Navbar color on scroll */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#181818"; // Change to any color
    } else {
        document.getElementById("navbar").style.backgroundColor = "#1f1f1f80";
    }
}


/* Enlarge CV */
$(".enlarge-button").click(function () {
    $(".cv-doc").toggleClass('enlarged');
});




/* Opacity for sections */
/* not working
$(document).ready(function () {
    // Initially show only the home section
    $('#home').show();

    // Setup click event on navigation links
    $('navbar a').on('click', function (event) {
        event.preventDefault();

        // Fade out the current section
        $('section:visible').fadeOut(function () {
            // After the fadeOut completes, change the window hash and fade in the new section
            window.location.hash = event.target.hash;
            $(event.target.hash).fadeIn();
        });
    });
});
*/