
/* =========================================================
   SREYA BISWAKARMA — PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navbar nav");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navigationLinks = document.querySelectorAll(".navbar nav a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navigation) {

            navigation.classList.remove("open");

        }

    });

});


/* =========================================================
   3. CURSOR GLOW EFFECT
========================================================= */

const cursorGlow = document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;

        cursorGlow.style.top = `${event.clientY}px`;

    });

}


/* =========================================================
   4. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(6, 8, 13, 0.92)";

        navbar.style.borderBottomColor =
            "rgba(49, 133, 255, 0.15)";

    } else {

        navbar.style.background =
            "rgba(6, 8, 13, 0.72)";

        navbar.style.borderBottomColor =
            "rgba(255, 255, 255, 0.09)";

    }

});


/* =========================================================
   5. ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 200;


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = sectionId;

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");


        const target = link.getAttribute("href");


        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   6. REVEAL ELEMENTS WHEN THEY ENTER THE SCREEN
========================================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-copy"
);


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   7. PROJECT CARD INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;


        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   8. HERO BUTTON — SMALL INTERACTION
========================================================= */

const primaryButton =
    document.querySelector(".button.primary");


if (primaryButton) {

    primaryButton.addEventListener("mouseenter", () => {

        primaryButton.querySelector("span").style.transform =
            "translate(3px, -3px)";

    });


    primaryButton.addEventListener("mouseleave", () => {

        primaryButton.querySelector("span").style.transform =
            "";

    });

}


/* =========================================================
   9. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector("footer span:first-child");


if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Shreya Biswakarma`;

}


/* =========================================================
   10. PAGE LOADED
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});
