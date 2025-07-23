// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Service Details Data
function redirectToService(serviceKey) {
    window.location.href = `service.html?service=${serviceKey}`;
}





// Send Us a Message

document.addEventListener("DOMContentLoaded", function () {
    if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") return;

    emailjs.init("NsufDWBTc4fQ-OaLg");

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return; // Prevent error if form doesn't exist

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const phone = document.getElementById("contactPhone").value;
        const service = document.getElementById("contactService").value;
        const message = document.getElementById("contactMessage").value;

        const params = {
            name,
            email,
            phone,
            service,
            message
        };

        emailjs.send("service_wehelpsolutions", "template_587xctf", params)
            .then(function () {
                showToast("Message sent successfully!", "success");
                contactForm.reset();
            }, function (error) {
                showToast("Failed to send message. Please try again.", "error");
                console.error("EmailJS Error:", error);
            });
    });

    function showToast(message, type = "success") {
        const toast = document.getElementById("whs-toast");
        if (!toast) return;

        toast.textContent = message;
        toast.className = `whs-toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("whsNavToggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
        // Toggle menu open/close
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleBtn.classList.toggle("whs-active");
            navMenu.classList.toggle("whs-active");
        });

        // Prevent closing when clicking inside the nav menu
        navMenu.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Close menu when clicking outside
        document.addEventListener("click", () => {
            if (navMenu.classList.contains("whs-active")) {
                navMenu.classList.remove("whs-active");
                toggleBtn.classList.remove("whs-active");
            }
        });

        // Close menu on nav link click
        const navLinks = navMenu.querySelectorAll(".whs-nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("whs-active");
                toggleBtn.classList.remove("whs-active");
            });
        });
    }
});
