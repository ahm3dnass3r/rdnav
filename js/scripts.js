/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
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

});

function active(){
console.log("done");
}
services = document.getElementById("servicesT");
agency = document.getElementById("agencyT");
about = document.getElementById("aboutT") ;
branches = document.getElementById("branchesT") ;
contact = document.getElementById("contactT") ;

function removeActive(){
    services.classList.remove("active");
    agency.classList.remove("active");
    about.classList.remove("active");
    branches.classList.remove("active");
    contact.classList.remove("active");
}


services.addEventListener('click', () => { 
    // specify the action to take when the div is clicked
    console.log('services was clicked!');
    removeActive();
    services.classList.add("active");

  });

agency.addEventListener('click', () => { 
    // specify the action to take when the div is clicked
    console.log('agency was clicked!');
    removeActive();
    agency.classList.add("active");
  });
  about.addEventListener('click', () => { 
    // specify the action to take when the div is clicked
    console.log('about was clicked!');
    removeActive();
    about.classList.add("active");
});
  branches.addEventListener('click', () => { 
    // specify the action to take when the div is clicked
    console.log('branches was clicked!');
    removeActive();
    branches.classList.add("active");
  });
  contact.addEventListener('click', () => { 
    // specify the action to take when the div is clicked
    console.log('contact was clicked!');
    removeActive();
    contact.classList.add("active");
  });
