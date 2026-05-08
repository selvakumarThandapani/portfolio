// Scroll animation
const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


// Typing Animation
const textArray = [
  "Java Full Stack Developer",
  "Backend Developer",
  "Frontend Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function type() {

  currentText = textArray[index];

  if (!isDeleting) {

    typingElement.textContent =
      currentText.substring(0, charIndex++);

    if (charIndex > currentText.length) {
      isDeleting = true;

      setTimeout(type, 1000);
      return;
    }

  } else {

    typingElement.textContent =
      currentText.substring(0, charIndex--);

    if (charIndex < 0) {

      isDeleting = false;
      index++;

      if (index >= textArray.length) {
        index = 0;
      }
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
// Hamburger Menu
const hamburger =
  document.querySelector(".hamburger");

const navLinks =
  document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});
/* Particle JS */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    size: {
      value: 3
    },

    color: {
      value: "#38bdf8"
    },

    line_linked: {
      enable: true,
      color: "#38bdf8"
    },

    move: {
      speed: 2
    }
  },

  interactivity: {

    events: {

      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});