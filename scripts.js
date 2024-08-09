document.addEventListener('DOMContentLoaded', function () {
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
});
