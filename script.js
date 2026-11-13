const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navActions = document.querySelector(".nav-actions");

const navItems = navLinks.querySelectorAll("a");
const indicator = navLinks.querySelector(".nav-indicator");

// Move the underline to the selected link
function moveIndicator(link) {
    const navRect = navLinks.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;

    indicator.style.transform =
        `translateX(${linkRect.left - navRect.left}px)`;
}

// Set active navigation link
function setActive(link) {
    navItems.forEach(item => item.classList.remove("active"));

    link.classList.add("active");

    moveIndicator(link);
}

// Detect the current page
const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const activeLink = [...navItems].find(link => {
    const linkPage = new URL(link.href).pathname.split("/").pop();
    return linkPage === currentPage;
});

// Initialize active link
const selectedLink = activeLink || navItems[0];

setActive(selectedLink);

// Follow clicks
navItems.forEach(link => {
    link.addEventListener("click", () => {
        setActive(link);
    });
});

// Recalculate underline on resize
window.addEventListener("resize", () => {
    moveIndicator(selectedLink);
});

// Mobile menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    navActions.classList.toggle("show", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// ========================================
// PASSWORD SHOW / HIDE
// ========================================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (passwordInput && togglePassword) {

    togglePassword.addEventListener("click", () => {

        const isPassword = passwordInput.type === "password";

        passwordInput.type = isPassword ? "text" : "password";

        togglePassword.textContent = isPassword ? "Hide" : "Show";

        togglePassword.setAttribute(
            "aria-label",
            isPassword ? "Hide password" : "Show password"
        );

    });

}

// ========================================
// REGISTER: SHOW / HIDE PASSWORD
// ========================================

document.querySelectorAll(".password-toggle[data-target]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;
            const passwordField = document.getElementById(targetId);

            if (!passwordField) return;

            const isPassword =
                passwordField.type === "password";

            passwordField.type = isPassword ? "text" : "password";

            button.textContent = isPassword ? "Hide" : "Show";

            button.setAttribute(
                "aria-label",
                isPassword ? "Hide password" : "Show password"
            );

        });

    });


// ========================================
// REGISTER: PASSWORD CONFIRMATION
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    const password = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    function validatePasswords() {

        if (confirmPassword.value === "") {
            confirmPassword.setCustomValidity("");
            return;
        }

        if (password.value !== confirmPassword.value) {

            confirmPassword.setCustomValidity(
                "Passwords do not match."
            );

        } else {

            confirmPassword.setCustomValidity("");

        }

    }

    password.addEventListener("input", validatePasswords);
    confirmPassword.addEventListener("input", validatePasswords);

    registerForm.addEventListener("submit", event => {

        validatePasswords();

        if (!registerForm.checkValidity()) {
            event.preventDefault();
            registerForm.reportValidity();
        }

    });

}

/* =========================================
   INSKINO FEATURED MOVIE SLIDER
========================================= */

const featuredSlider = document.getElementById("featuredSlider");

if (featuredSlider) {

    const slides = featuredSlider.querySelectorAll(".feature-slide");
    const dots = document.querySelectorAll("#sliderDots button");

    const previousButton = document.getElementById("previousSlide");
    const nextButton = document.getElementById("nextSlide");
    const counter = document.getElementById("sliderCounter");

    let currentSlide = 0;

    function showSlide(index) {

        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {

            const isActive = i === currentSlide;

            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));

        });

        dots.forEach((dot, i) => {

            const isActive = i === currentSlide;

            dot.classList.toggle("active", isActive);

            if (isActive) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }

        });

        counter.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

    }

    previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            const index = Number(dot.dataset.slide);

            showSlide(index);

        });

    });

    // Initialize slider
    showSlide(0);

}

// ========================================
// DYNAMIC COPYRIGHT YEAR
// ========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
