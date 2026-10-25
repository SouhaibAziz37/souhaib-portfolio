/* Souhaib Aziz Portfolio — interactions and form validation */
"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

function closeMenu() {
  if (!menuToggle || !navLinks) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navItems.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isCurrent);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
}

// Reveal content as it enters the viewport. Keep content visible if unsupported.
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Contact form validation. This demo does not send data to a server.
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

const validators = {
  name(value) {
    if (!value.trim()) return "Please enter your name.";
    if (value.trim().length < 2) return "Name must contain at least 2 characters.";
    return "";
  },
  email(value) {
    if (!value.trim()) return "Please enter your email address.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(value.trim())) return "Enter a valid email address, such as alex@example.com.";
    return "";
  },
  message(value) {
    if (!value.trim()) return "Please enter a message.";
    if (value.trim().length < 10) return "Message must contain at least 10 characters.";
    return "";
  }
};

function validateField(field) {
  const errorElement = document.querySelector(`#${field.name}-error`);
  const errorMessage = validators[field.name](field.value);
  field.setAttribute("aria-invalid", String(Boolean(errorMessage)));
  if (errorElement) errorElement.textContent = errorMessage;
  return !errorMessage;
}

if (contactForm) {
  const fields = ["name", "email", "message"].map((name) => contactForm.elements.namedItem(name));

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.hasAttribute("aria-invalid")) validateField(field);
      if (feedback.classList.contains("error")) {
        feedback.className = "form-feedback";
        feedback.textContent = "Demo form: validation works locally; sending requires a backend or form service.";
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      feedback.className = "form-feedback error";
      feedback.textContent = "Please fix the highlighted fields and try again.";
      const firstInvalid = fields.find((field) => field.getAttribute("aria-invalid") === "true");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    feedback.className = "form-feedback success";
    feedback.textContent = "Validation successful! This demo does not send messages yet. Connect a backend or form service to receive submissions.";
  });
}

// Keep the footer year current.
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
