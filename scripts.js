const menuBtn = document.getElementById('menuBtn');
const linkContainer = document.getElementById('links'); 
const menuImg = menuBtn.firstElementChild;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('header').style.marginTop = `${document.getElementById('navbar').clientHeight}px`

    menuBtn.addEventListener('click', () => {
        if(linkContainer.style.display === 'none') {
            linkContainer.style.display = 'flex'
            menuImg.src = '/Poorna2604.github.io/close.svg'
        } else {
            linkContainer.style.display = 'none'
            menuImg.src = '/Poorna2604.github.io/menu.svg'
            
        }
    })
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const sections = document.querySelectorAll('section');
    const revealSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1,
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.add('section-hidden');
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeToggleImg = darkModeToggle.firstElementChild
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(themeToggleImg.src.endsWith('dark_mode.svg')){
            themeToggleImg.src = '/Poorna2604.github.io/light_mode.svg'
        } else {
            themeToggleImg.src = '/Poorna2604.github.io/dark_mode.svg'
        }
    });
});
