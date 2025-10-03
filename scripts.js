document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({behavior:'smooth'});
        });
    });

    // Scroll-to-top button
    const scrollToTopBtn=document.createElement('button');
    scrollToTopBtn.innerHTML='↑';
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
        window.scrollTo({top:0,behavior:'smooth'});
    });

    // Section reveal animation
    const sections=document.querySelectorAll('section');
    const revealSection=function(entries,observer){
        const [entry]=entries;
        if(!entry.isIntersecting) return;
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
    };
    const sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:0.1});
    sections.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.add('section-hidden');
    });

    // Dark Mode Toggle
    const darkModeToggle=document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')){
            darkModeToggle.textContent='☀️';
        }else{
            darkModeToggle.textContent='🌙';
        }
    });

    // Typing effect for header tagline
    const tagline=document.querySelector('header p');
    const text=tagline.textContent;
    tagline.textContent='';
    let i=0;
    function typeEffect(){
        if(i<text.length){
            tagline.textContent+=text.charAt(i);
            i++;
            setTimeout(typeEffect,50);
        }
    }
    typeEffect();
});
