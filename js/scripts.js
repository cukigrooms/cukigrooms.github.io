/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
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
            offset: 74,
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

     // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#galerija a.gallery-box' });

});


 document.addEventListener('DOMContentLoaded', function() {
    // Create a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(function(mutationsList, observer) {
        mutationsList.forEach(function(mutation) {
            // Look for the specific element with the combined classes
            const poweredByButton = document.querySelector('.feed-powered-by-es.es-widget-branding.es-widget-branding-slider');
            const brandingText = document.querySelector('.es-widget-branding-text');
            const brandingImage = document.querySelector('img[src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"]');
    
            if (poweredByButton) {
                poweredByButton.style.setProperty('display', 'none', 'important'); // Force display: none with !important
            }
            if (brandingText) {
                brandingText.style.setProperty('display', 'none', 'important'); // Force display: none with !important
            }
            if (brandingImage) {
                brandingImage.style.setProperty('display', 'none', 'important'); // Force display: none with !important
            }
            
        });
    });

    // Start observing the body for changes (added child elements)
    observer.observe(document.body, { childList: true, subtree: true });

    // Optional: Disconnect after 2.5 seconds (optional for cleanup)
    setTimeout(() => observer.disconnect(), 2500);  // Stop observing after 2.5 seconds
});