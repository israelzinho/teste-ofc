document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
            // Close dropdown if mobile menu is closed
            if (!navLinks.classList.contains("active")) {
                dropdown.classList.remove("active");
            }
        });
    }

    // Toggle dropdown for lawyers (mobile and desktop)
    if (dropdown) {
        dropbtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Only toggle if in mobile view or if it's a click on desktop
            if (window.innerWidth <= 767 || event.pointerType === "mouse") {
                dropdown.classList.toggle("active");
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function(event) {
            if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });

        // Handle hover for desktop dropdown
        if (window.innerWidth > 767) {
            dropdown.addEventListener("mouseenter", function() {
                dropdown.classList.add("active");
            });
            dropdown.addEventListener("mouseleave", function() {
                dropdown.classList.remove("active");
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                }
                // Close dropdown if open
                if (dropdown.classList.contains("active")) {
                    dropdown.classList.remove("active");
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission (example - in a real scenario, this would send data to a backend)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Formulário enviado com sucesso! Em breve entraremos em contato.");
            contactForm.reset();
        });
    }
});

