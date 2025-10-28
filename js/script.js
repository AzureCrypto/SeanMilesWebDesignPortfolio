

// ========== Mobile Menu Toggle ==========

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰";
    toggleBtn.classList.add("menu-toggle");

    document.querySelector("header").insertBefore(toggleBtn, nav);

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});



// ========== Project Background Image URL Grabber ==========

document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        const img = card.querySelector("img");
        if (img) {
            const imgSrc = img.getAttribute("src");
            card.style.backgroundImage = `url('${imgSrc}')`;
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";
            card.style.backgroundRepeat = "no-repeat";
            img.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.getElementById("projects");
    const projectCards = document.querySelectorAll(".project-card");

    const originalBackground = projectSection.style.backgroundImage;

    projectCards.forEach(card => {
        const img = card.querySelector("img");
        const imgSrc = img.getAttribute("src");

        card.addEventListener("mouseenter", () => {
            projectSection.style.backgroundColor = "#808080";
            projectSection.style.backgroundImage = `linear-gradient(rgba(120, 120, 120, 0.75), rgba(120, 120, 120, 0.75)), url('${imgSrc}')`;
            projectSection.style.backgroundSize = "cover";
            projectSection.style.backgroundPosition = "center";
        });

        card.addEventListener("mouseleave", () => {
            projectSection.style.backgroundImage = originalBackground;
        });
    });
});



// ========== Form Validation ==========

document.addEventListener("submit", (e) => {
    const form = e.target;
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Thank you for your message!");
    }
});