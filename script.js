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

// ========================================
// TOP 5 CREATOR LIST TOGGLE
// ========================================

const top5Toggle = document.getElementById("top5Toggle");
const premtimTop5 = document.getElementById("premtimTop5");
const muhametTop5 = document.getElementById("muhametTop5");
const top5CreatorName = document.getElementById("top5CreatorName");

if (top5Toggle && premtimTop5 && muhametTop5 && top5CreatorName) {
    top5Toggle.addEventListener("click", () => {
        const showingPremtim = !premtimTop5.hidden;
        const currentList = showingPremtim ? premtimTop5 : muhametTop5;
        const nextList = showingPremtim ? muhametTop5 : premtimTop5;

        currentList.hidden = true;
        nextList.classList.remove("is-entering");
        nextList.hidden = false;
        void nextList.offsetWidth;
        nextList.classList.add("is-entering");
        nextList.addEventListener("animationend", event => {
            if (event.target === nextList) {
                nextList.classList.remove("is-entering");
            }
        }, { once: true });

        const activeCreator = showingPremtim ? "Muhamet" : "Premtim";
        const nextCreator = showingPremtim ? "Premtim" : "Muhamet";

        top5CreatorName.textContent = `${activeCreator}'s Top 5`;
        top5Toggle.textContent = `Show ${nextCreator}'s Top 5`;
    });
}

/* =========================================
   INSKINO MOVIES CATALOGUE
========================================= */

const movieGrid = document.getElementById("catalogMovieGrid");

if (movieGrid) {

    const movieCards = Array.from(
        movieGrid.querySelectorAll(".catalog-card")
    );

    const searchInput = document.getElementById("movieSearch");
    const genreButtons = document.querySelectorAll(".genre-filter");

    const yearFilter = document.getElementById("yearFilter");
    const ratingFilter = document.getElementById("ratingFilter");

    const sortSelect = document.getElementById("sortMovies");

    const movieCount = document.getElementById("movieCount");
    const noMovies = document.getElementById("noMovies");

    const clearFilters = document.getElementById("clearFilters");
    const resetMovieSearch = document.getElementById("resetMovieSearch");

    let activeGenre = "all";


    // FILTER AND SORT MOVIES
    function updateMovieCatalogue() {

        const searchValue = searchInput.value
            .trim()
            .toLowerCase();

        const selectedYear = yearFilter.value;
        const minimumRating = Number(ratingFilter.value);

        let visibleMovies = [];

        movieCards.forEach(movie => {

            const title = movie.dataset.title.toLowerCase();

            const genres = movie.dataset.genres.split(" ");

            const year = movie.dataset.year;

            const rating = Number(movie.dataset.rating);

            const matchesSearch =
                title.includes(searchValue) ||
                genres.some(genre => genre.includes(searchValue));

            const matchesGenre =
                activeGenre === "all" ||
                genres.includes(activeGenre);

            const matchesYear =
                selectedYear === "all" ||
                year === selectedYear;

            const matchesRating =
                rating >= minimumRating;

            const isVisible =
                matchesSearch &&
                matchesGenre &&
                matchesYear &&
                matchesRating;

            movie.hidden = !isVisible;

            if (isVisible) {
                visibleMovies.push(movie);
            }

        });


        // SORT MOVIES
        const sorting = sortSelect.value;

        visibleMovies.sort((a, b) => {

            switch (sorting) {

                case "rating":
                    return Number(b.dataset.rating) -
                           Number(a.dataset.rating);

                case "newest":
                    return Number(b.dataset.year) -
                           Number(a.dataset.year);

                case "oldest":
                    return Number(a.dataset.year) -
                           Number(b.dataset.year);

                case "alphabetical":
                    return a.dataset.title.localeCompare(
                        b.dataset.title
                    );

                default:
                    return Number(a.dataset.popularity) -
                           Number(b.dataset.popularity);

            }

        });


        // UPDATE GRID ORDER
        visibleMovies.forEach(movie => {
            movieGrid.appendChild(movie);
        });


        // UPDATE RESULTS COUNT
        movieCount.textContent =
            `Showing ${visibleMovies.length} of ${movieCards.length} movies`;


        // EMPTY STATE
        noMovies.hidden = visibleMovies.length !== 0;

    }


    // GENRE BUTTONS
    genreButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeGenre = button.dataset.genre;

            genreButtons.forEach(item => {

                const isActive = item === button;

                item.classList.toggle("active", isActive);

                item.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            });

            updateMovieCatalogue();

        });

    });


    // SEARCH
    searchInput.addEventListener("input", updateMovieCatalogue);


    // YEAR FILTER
    yearFilter.addEventListener("change", updateMovieCatalogue);


    // RATING FILTER
    ratingFilter.addEventListener("change", updateMovieCatalogue);


    // SORTING
    sortSelect.addEventListener("change", updateMovieCatalogue);


    // RESET FILTERS
    function resetFilters() {

        searchInput.value = "";
        yearFilter.value = "all";
        ratingFilter.value = "0";
        sortSelect.value = "popular";

        activeGenre = "all";

        genreButtons.forEach(button => {

            const isActive = button.dataset.genre === "all";

            button.classList.toggle("active", isActive);

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        });

        updateMovieCatalogue();

    }

    clearFilters.addEventListener("click", resetFilters);

    resetMovieSearch.addEventListener("click", resetFilters);


    // INITIALIZE
    updateMovieCatalogue();

}
