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
