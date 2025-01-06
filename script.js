// JavaScript functionality for your chess tournament website

// Example: Accordion or additional interactive features

document.addEventListener('DOMContentLoaded', () => {
    // Example interactive behavior
    const accordions = document.querySelectorAll('.accordion-section');

    accordions.forEach((accordion) => {
        const header = accordion.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const isActive = accordion.classList.contains('active');

            // Close all other accordions
            accordions.forEach((acc) => acc.classList.remove('active'));

            // Toggle current accordion
            if (!isActive) {
                accordion.classList.add('active');
            }
        });
    });

    console.log('Script loaded successfully. Ready for interactions.');
});
