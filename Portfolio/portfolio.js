
const navEl = document.querySelector ('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 56) {
            navEl.classList.add ('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove ('navbar-scrolled');
    }
} )

// return to Homepage

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

const formData = new FormData(this);


// fetch(this.action, {
//     method: this.method,
//     body: formData,
// }).then(response => {
//     if (response.ok) {
//         alert("Form submitted successfully!");
//         window.location.href = "portfolio.html"; // Redirect to home page (adjust the path as needed)
//     } else {
//         alert("There was a problem submitting the form.");
//     }
// }).catch(error => {
//     alert("There was a problem submitting the form.");
//     console.error("Error:", error);
// });

// });
