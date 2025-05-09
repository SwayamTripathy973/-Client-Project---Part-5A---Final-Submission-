document.addEventListener('DOMContentLoaded', function() {

    // --- CONTACT FORM HANDLING ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Basic validation (can be more sophisticated)
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (formMessage) {
                formMessage.classList.remove('hidden', 'success', 'error'); // Reset classes

                if (name === '' || email === '' || message === '') {
                    formMessage.textContent = 'Please fill out all fields.';
                    formMessage.classList.add('error');
                } else if (!isValidEmail(email)) {
                    formMessage.textContent = 'Please enter a valid email address.';
                    formMessage.classList.add('error');
                } else {
                    // Simulate form submission success
                    formMessage.textContent = 'Thank you! Your message has been sent.';
                    formMessage.classList.add('success');
                    contactForm.reset(); // Clear the form
                }
                formMessage.classList.remove('hidden');

                // Optionally hide message after a few seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.classList.remove('success', 'error');
                }, 5000);
            }
        });
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // --- TESTIMONIAL CYCLER ---
    const testimonialContainer = document.getElementById('testimonial-container');
    const nextTestimonialBtn = document.getElementById('next-testimonial-btn');
    let testimonials = [];
    let currentTestimonialIndex = 0;

    if (testimonialContainer && nextTestimonialBtn) {
        testimonials = testimonialContainer.querySelectorAll('.testimonial');

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.remove('active-testimonial');
                testimonial.style.display = 'none'; // Ensure it's hidden
                if (i === index) {
                    testimonial.classList.add('active-testimonial');
                    testimonial.style.display = 'block'; // Ensure it's shown
                }
            });
        }

        if (testimonials.length > 0) {
            showTestimonial(currentTestimonialIndex); // Show the first one initially

            nextTestimonialBtn.addEventListener('click', function() {
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
                showTestimonial(currentTestimonialIndex);
            });
        } else if (nextTestimonialBtn) { // Ensure button exists before trying to hide it
             // If no testimonials, hide the button
            nextTestimonialBtn.style.display = 'none';
        }
    }


    // --- DAILY SPECIALS ON HOME PAGE ---
    const specialItemElement = document.getElementById('special-item');
    const getNewSpecialBtn = document.getElementById('get-new-special');

    if (specialItemElement && getNewSpecialBtn) {
        const specials = [
            "Vanilla Bean Latte with a hint of cardamom.",
            "Warm Blueberry Scone, fresh from the oven!",
            "Avocado Toast with everything bagel seasoning.",
            "Iced Caramel Macchiato - perfect for a sunny day.",
            "Chocolate Croissant - double the chocolate, double the fun!",
            "Seasonal Fruit Tart with custard filling.",
            "Spiced Chai Latte, made with our secret blend."
        ];
        let currentSpecialIndex = 0; // To cycle through specials

        function displaySpecial() {
            // Cycle through specials
            currentSpecialIndex = (currentSpecialIndex + 1) % specials.length;
            specialItemElement.textContent = specials[currentSpecialIndex];
        }

        // Set initial special from the list (optional, if you want to override HTML)
        // if (specials.length > 0) {
        //    specialItemElement.textContent = specials[0];
        // }


        getNewSpecialBtn.addEventListener('click', displaySpecial);
    }

    // Note: The dynamic WCAG link population is handled by small script blocks
    // directly in each HTML file for robustness, ensuring each page's link
    // is correctly set even if this global script encounters an issue or is deferred.
    // Example:
    // var wcagLinkEl = document.getElementById('wcagLinkId');
    // if (wcagLinkEl) {
    //     wcagLinkEl.href = 'https://wave.webaim.org/report#/' + encodeURIComponent(window.location.href);
    // }

    console.log("Cozy Corner Cafe Script Loaded!");
});
