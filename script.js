
// =========================================================
// 2. CONTACT FORM VALIDATION LOGIC
// =========================================================

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (fullName === "" || email === "" || phone === "" || message === "") {
            showFeedback("⚠️ Please fill in all fields. No box can be left empty!", "error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showFeedback("⚠️ Please enter a valid email address (e.g., name@example.com).", "error");
            return;
        }

        const digitsOnlyPattern = /^[0-9]+$/;
        if (!digitsOnlyPattern.test(phone)) {
            showFeedback("⚠️ Phone number must contain ONLY numbers (no letters, spaces, or symbols).", "error");
            return;
        }

        showFeedback("✅ Thank you, " + fullName + "! Your message has been sent successfully.", "success");
        contactForm.reset();
    });
}

function showFeedback(text, type) {
    formFeedback.textContent = text;
    formFeedback.className = "feedback-msg " + type;
}


// =========================================================
// 3. PROJECT CASE STUDY MODAL (POPUP)
// =========================================================
const projectDetails = [
    {
        org: "Lingawa • EdTech Development",
        title: "Gamified Educational Resources",
        desc: "Collaborated with product and curriculum teams to build interactive web-based language games for children. Used prompt engineering with Claude, ChatGPT, and OpenAI to generate, adapt, and debug HTML5, CSS, and JavaScript game mechanics.",
        impact: "Accelerated interactive content production and made learning indigenous Igbo vocabulary fun and engaging for young diaspora learners."
    },
    {
        org: "Lingawa • Product & UI Design",
        title: "Product Design & Educational Content",
        desc: "Managed the digital product backlog using Agile/Scrum workflows and designed user-friendly wireframes, interactive lesson slide decks, and landing pages in Figma and Canva.",
        impact: "Developed a structured sentence-construction visual technique across 2,000+ lessons that increased student speaking proficiency by 70% and translation productivity by 60%."
    },
    {
        org: "Women Techsters BootCamp (Tech4Dev)",
        title: "Data Analysis & Visualization Group Project",
        desc: "Worked in a cross-functional data team to gather raw datasets, perform data cleaning and transformation in Power Query and Excel, and design interactive Power BI dashboards.",
        impact: "Delivered a comprehensive visual report highlighting key trends and actionable recommendations for decision-makers."
    },
    {
        org: "Cybersafe Foundation DigiGirls",
        title: "Data Analysis Training Project (SQL & Excel)",
        desc: "Applied SQL queries in PostgreSQL alongside Microsoft Excel pivot tables and statistical functions to explore, clean, and analyze structured datasets.",
        impact: "Translated complex database outputs into clear, easy-to-understand business insights for non-technical stakeholders."
    }
];

function openProjectModal(index) {
    const modal = document.getElementById("projectModal");
    if (!modal) return;
    document.getElementById("modalOrg").textContent = projectDetails[index].org;
    document.getElementById("modalTitle").textContent = projectDetails[index].title;
    document.getElementById("modalDesc").textContent = projectDetails[index].desc;
    document.getElementById("modalImpact").textContent = projectDetails[index].impact;
    modal.style.display = "flex";
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (modal) modal.style.display = "none";
}
// =========================================================
// 4. ORGANIZED MOBILE HEADER, HAMBURGER MENU & RICH FOOTER
// =========================================================
function initModernUI() {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        // 1. Create right-side circular buttons (Theme Toggle + Hamburger Menu)
        const navControls = document.createElement("div");
        navControls.className = "nav-controls";

        const themeBtn = document.createElement("button");
        themeBtn.className = "circle-icon-btn";
        themeBtn.id = "themeToggleBtn";
        themeBtn.title = "Switch Theme";

        const menuBtn = document.createElement("button");
        menuBtn.className = "circle-icon-btn mobile-menu-btn";
        menuBtn.id = "mobileMenuBtn";
        menuBtn.innerHTML = "&#9776;"; // ☰ Hamburger icon
        menuBtn.title = "Toggle Menu";

        navControls.appendChild(themeBtn);
        navControls.appendChild(menuBtn);
        navbar.appendChild(navControls);

        // 2. Theme Switcher Logic with LocalStorage & Flash Prevention
        const savedTheme = localStorage.getItem("queeneth_theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark-mode-html");
            document.body.classList.add("dark-mode");
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }

        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            document.documentElement.classList.toggle("dark-mode-html");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("queeneth_theme", isDark ? "dark" : "light");
            themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        });

        // 3. Mobile Hamburger Dropdown Logic
        menuBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            navLinks.classList.toggle("mobile-open");
            menuBtn.innerHTML = navLinks.classList.contains("mobile-open") ? "&times;" : "&#9776;";
        });

        // Close dropdown when tapping anywhere outside
        document.addEventListener("click", function(e) {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove("mobile-open");
                menuBtn.innerHTML = "&#9776;";
            }
        });
    }

    // 4. Upgrade Footer to Rich Multi-Section Layout on All 5 Pages
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <h3>Queeneth Okoro</h3>
                    <p>Bridging Data Science, Product Design, and EdTech Through Innovation.</p>
                </div>

                <div class="footer-section">
                    <h4>Quick links</h4>
                    <div class="footer-circle-links">
                        <a href="index.html" title="Home">🏠</a>
                        <a href="about.html" title="About Me">👤</a>
                        <a href="projects.html" title="Projects">📁</a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="footer-circle-links">
                        <a href="https://www.linkedin.com/in/queeneth-oboh-152464207/" target="_blank" title="LinkedIn">in</a>
                        <a href="mailto:queenethoboh@gmail.com" title="Email">✉️</a>
                        <a href="contact.html" title="Contact Form">📞</a>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2026 Queeneth Okoro. All Rights Reserved</p>
                </div>
            </div>
        `;
    }
}

initModernUI();
// =========================================================
// 5. DYNAMIC JAVASCRIPT SCROLL-REVEAL ANIMATION
// =========================================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        ".content-card, .project-card, .hero-bio-card, .stat-box"
    );

    const observerOptions = {
        threshold: 0.12, // Triggers when 12% of the card is visible
        rootMargin: "0px 0px -30px 0px"
    };

    const scrollObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                // Staggered delay for smooth cascading effect
                setTimeout(function() {
                    entry.target.classList.add("js-scroll-visible");
                }, index * 90);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(function(el) {
        el.classList.add("js-scroll-hidden");
        scrollObserver.observe(el);
    });
}

initScrollAnimations();
