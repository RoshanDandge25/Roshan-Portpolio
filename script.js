const menuIcon = document.querySelector("#menu-icon");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");
const body = document.body;

menuIcon.addEventListener("click", () => {
    header.classList.toggle("active");
    body.classList.toggle("menu-active"); // Toggle body scroll
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
        body.classList.remove("menu-active");
    });
});

// ✅ Updated: Qualification tab logic using event delegation
document.getElementById('tab-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('qualification-button')) {
        const section = e.target.getAttribute('data-section');

        // Hide all sections
        document.getElementById('education').style.display = 'none';
        document.getElementById('experience').style.display = 'none';
        document.getElementById('services').style.display = 'none';

        // Remove active class from all buttons
        document.querySelectorAll('.qualification-button').forEach(btn => {
            btn.classList.remove('qualification__active');
        });

        // Show selected section
        const selected = document.getElementById(section);
        selected.style.display = section === 'services' ? 'block' : 'grid';

        // Activate clicked button
        e.target.classList.add('qualification__active');
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value,
    };

    const response = await fetch('https://formspree.io/f/mzzbldyo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Error: Failed to send message.');
    }
});
