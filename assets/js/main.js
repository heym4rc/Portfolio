/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const autoplayButton = document.querySelector(".swiper-autoplay-button");
const autoplayIcon = autoplayButton.querySelector("i");

autoplayButton.addEventListener("click", () => {
  if (swiperPortfolio.autoplay.running) {
    swiperPortfolio.autoplay.stop();
    autoplayIcon.classList.remove("uil-pause");
    autoplayIcon.classList.add("uil-play");
  } else {
    swiperPortfolio.autoplay.start();
    autoplayIcon.classList.remove("uil-play");
    autoplayIcon.classList.add("uil-pause");
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
          document
              .querySelector('nav ul li a[href*=' + sectionId + ']')
              .classList.add('active-link')
      } else {
          document
              .querySelector('nav ul li a[href*=' + sectionId + ']')
              .classList.remove('active-link')
      }
  }
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function scrollHeader() {
    if (this.window.scrollY >= navHeight) {
        // more height than header
        header.classList.add('scroll-header')
    } else {
        // less height than header
        header.classList.remove('scroll-header')
    }
}

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.querySelector('.scrollup')
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

// Add click event listener for scroll-up button
const scrollUpButton = document.querySelector('.scrollup')
if (scrollUpButton) {
  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
  scrollActive()
  scrollHeader()
  scrollUp()
})