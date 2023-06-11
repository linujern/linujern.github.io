/* Mute Functionality
function muteUnmute() {
    var video = document.getElementById('background-video');
    var button = document.getElementById('muteButton');

    if (video.muted) {
        video.muted = false;
        button.style.backgroundImage = "url('images/volume-down.png')";
    } else {
        video.muted = true;
        button.style.backgroundImage = "url('images/volume-mute.png')";
    }
}

 Mute Position 
window.onresize = adjustButtonPosition;

function adjustButtonPosition() {
    var video = document.getElementById('background-video');
    var button = document.getElementById('muteButton');

    button.style.bottom = (window.innerHeight - video.getBoundingClientRect().bottom) + video.getBoundingClientRect().bottom/30 + 'px'; // The '40' should be replaced with the desired distance from the bottom of the video
    button.style.width = (video.getBoundingClientRect().bottom / 20) + 'px';
    button.style.height = button.style.width;
}*/


/* Move to new section */

window.addEventListener('hashchange', function () {
    var hash = window.location.hash.substr(1);

    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    document.getElementById(hash).style.display = 'block';
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

/* Navbar scroll */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#181818"; // Change to any color
    } else {
        document.getElementById("navbar").style.backgroundColor = "#1f1f1f80";
    }
}

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