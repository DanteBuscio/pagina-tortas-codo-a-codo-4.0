const navSlide = () => { 
    const burga = document.querySelector('.burga');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');

    burga.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });

        //burga animada
        burga.classList.toggle("toggle");

    });
}

navSlide();