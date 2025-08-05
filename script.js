 // toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles icon change
    navbar.classList.toggle('active'); // Toggles navbar visibility
};


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Fixed 'herf' to 'href'
            });
            // active sections for animation on scrollY
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); // Corrected 'heafer' to 'header'

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

    
    


}

function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More"; // Change back to "Read More"
    }
}

let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScroll(); // Your scrolling logic
            isScrolling = false;
        });
    }
    isScrolling = true;
});