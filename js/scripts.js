/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('submitSuccessMessage');
    const errorMessage = document.getElementById('submitErrorMessage');

    if (contactForm) {
        // Initialize EmailJS with your credentials
        emailjs.init('kAJWqGT_xm0LFC03f');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Hide any previous messages
            successMessage.classList.add('d-none');
            errorMessage.classList.add('d-none');

            // Prepare email parameters
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                phone_number: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                to_email: 'ahmedibrahim1106@gmail.com' // Your email address
            };

            // Send email using EmailJS
            emailjs.send(
                'service_vkuqco2', // Your EmailJS service ID
                'template_xhbapwt', // Your EmailJS template ID
                templateParams
            ).then(function(response) {
                // Show success message
                successMessage.classList.remove('d-none');
                errorMessage.classList.add('d-none');

                // Reset form
                contactForm.reset();

                // Reset button
                submitButton.textContent = 'Send';
                submitButton.disabled = false;

                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                // Show error message
                errorMessage.classList.remove('d-none');
                successMessage.classList.add('d-none');

                // Reset button
                submitButton.textContent = 'Send';
                submitButton.disabled = false;

                console.log('FAILED...', error);
            });
        });
    }

});
