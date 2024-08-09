document.addEventListener('DOMContentLoaded', function () {
    // Initially hide all sections except the photo and About Me
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('about')) {
            section.style.display = 'none';
        }
    });

    // Add background color to sections
    document.querySelectorAll('section').forEach(function (section) {
        section.classList.add('highlight');
    });

    // Change header text color
    document.querySelector('.header-text h1').classList.add('header-highlight');
    document.querySelector('.header-text p').classList.add('header-highlight');

    // Add hover effect to project links
    document.querySelectorAll('.project a').forEach(function (link) {
        link.addEventListener('mouseover', function () {
            link.style.backgroundColor = '#4CAF50';
        });
        link.addEventListener('mouseout', function () {
            link.style.backgroundColor = '#333';
        });
    });

    // Add padding to the container
    document.querySelectorAll('.container').forEach(function (container) {
        container.style.padding = '20px';
    });

    // Smooth scrolling for navigation links and show/hide sections
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Show the target section and hide others
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
