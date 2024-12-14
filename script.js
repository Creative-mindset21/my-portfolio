// !===== ABOUT TABS =====
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    target.classList.add("active");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
  });
});

//! CONTACT FORM
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactSubject = document.getElementById("subject");
const contactMessage = document.getElementById("message");
const errorMessage = document.getElementById("error-message");

errorMessage.textContent = "Input required fields";

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    errorMessage.textContent = "Input required fields";
    console.log(errorMessage);
  } else {
    emailjs
      .sendForm(
        "service_gojvbpv",
        "template_489kuwd",
        "#contact-form",
        "tItnUrD_Ciq5V3pXn"
      )
      .then(
        () => {
          errorMessage.classList.add("color-first");
          errorMessage.textContent = "Message sent ✔️";

          setTimeout(() => {
            errorMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("SOMETHING WENT WRONG...", error);
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
});

//! DATE UPDATE
const today = new Date();
const footerCopyright = document.getElementById("footer-copyright");

footerCopyright.innerHTML = `&copy; ${today.getFullYear()}. All rights reserved`;

console.log(footerCopyright);

//! BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

//! SHOW SCROLL UP BUTTON
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

//! MENU FUNCTIONALITY
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
