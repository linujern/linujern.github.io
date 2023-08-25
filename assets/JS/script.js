/* Move to new section */

function handleSectionDisplay() {
    var hash = window.location.hash.substr(1) || 'home';
    
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        // Always show the contact section, hide others based on the hash
        sections[i].style.display = (hash === sections[i].id || sections[i].id === 'contact') ? 'block' : 'none';
    }

    var activeSection = document.getElementById(hash);
    
    // Scroll to top of active section
    if (activeSection) {
        activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

window.addEventListener('hashchange', function () {
    var hash = window.location.hash.substr(1);

    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        // If the section is not the active section or the contact section, hide it.
        if (sections[i].id !== hash && sections[i].id !== 'contact') {
            sections[i].style.display = 'none';
            
            // Pause any videos in the section
            var videos = sections[i].getElementsByTagName('video');
            for (var j = 0; j < videos.length; j++) {
                videos[j].pause();
            }

            // Find any iframes (YouTube videos) and reload them
            var iframes = sections[i].getElementsByTagName('iframe');
            for (var j = 0; j < iframes.length; j++) {
                var iframe = iframes[j];
                var iframeSrc = iframe.src;
                iframe.src = iframeSrc; 
            }
        }
    }

    var activeSection = document.getElementById(hash);
    activeSection.style.display = 'block';

    // Scroll to top of active section
    activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// handle the display when the page loads
document.addEventListener('DOMContentLoaded', handleSectionDisplay);
// handle the display when the hash changes
window.addEventListener('hashchange', handleSectionDisplay);

window.location.hash = '#home';

// scroll to bottom of page
document.getElementById("scrollToBottom").addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight);
});



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

/* Show/Hide p Section */
$(document).ready(function(){
    $(".collapse-button").click(function(){
      var paragraph = $(this).parent().next();
      paragraph.toggle();
      if (paragraph.is(":visible")) {
        $(this).text("Hide");
      } else {
        $(this).text("Show");
      }
    });
  });
  

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