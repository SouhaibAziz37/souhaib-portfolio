# Souhaib Aziz — Frontend Developer Portfolio

A creative, responsive personal portfolio built with HTML5, CSS3, and vanilla JavaScript for an internship assignment.

## Features

- Home, About, Skills, Projects, and Contact sections
- Responsive desktop, tablet, and mobile layouts
- Mobile navigation menu with Escape-key and outside-click handling
- Active navigation link based on the visible section
- Scroll reveal effects, with reduced-motion support
- Skills cards and three project showcase cards with images
- Client-side contact form validation and accessible error feedback
- Semantic HTML, focus styles, skip link, and descriptive image alt text
- No frontend framework or build step required

## Project structure

```text
souhaib-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── COMPLETION-REPORT.md
└── assets/
    └── (optional local images)
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. For a smoother development workflow, use Visual Studio Code with the Live Server extension.

No package installation or build command is required.

## Customize before submission

- Replace the sample project concepts with projects you have actually built.
- Update project links to real GitHub repositories or live demos.
- Replace the email placeholder with your preferred contact email.
- Replace image URLs with your own licensed images or local files if preferred.
- Adjust the skill labels and descriptions to reflect your actual experience.
- Test every section and form state before publishing.

## Publish with GitHub Pages

1. Create a GitHub repository named `souhaib-portfolio` (or another name you prefer).
2. Add `index.html`, `style.css`, `script.js`, `README.md`, and `COMPLETION-REPORT.md`.
3. Commit and push the files to the repository's `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment settings, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site. Copy the published URL and test it on desktop and mobile.

GitHub's interface may change; if the menu labels differ, consult GitHub Pages documentation: https://docs.github.com/pages

## Screenshot checklist

Capture screenshots after testing the deployed version:

- Desktop: full page or separate screenshots at approximately 1440 × 900
- Tablet: approximately 768 × 1024
- Mobile: approximately 390 × 844 and, if possible, 360 × 800
- Capture the Home/Hero, Skills/Projects, and Contact areas
- Make sure the mobile menu is shown in at least one mobile screenshot
- Make sure images have loaded and no form error messages are accidentally left visible

Chrome DevTools: open DevTools → toggle device toolbar → choose a device or enter a custom viewport → capture a screenshot. You can also use **Capture full size screenshot** from the DevTools command menu.

## Contact form note

The form currently performs browser-side validation only. It does not email or store submissions. To receive messages, connect a backend or a form provider and configure it securely. Never put private API keys in frontend JavaScript.

## Final QA

- [ ] All navigation links work
- [ ] Mobile menu opens, closes, and closes after selecting a link
- [ ] Layout has no horizontal overflow at 360px, 390px, 768px, and 1440px
- [ ] All three project images load
- [ ] Invalid and valid form inputs show the expected feedback
- [ ] Keyboard focus is visible
- [ ] Browser console has no errors
- [ ] Project descriptions and links are accurate
