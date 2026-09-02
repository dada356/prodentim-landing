document.addEventListener("DOMContentLoaded", function () {

    // Fade Animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold:0.2
    });

    sections.forEach((section)=>{
        observer.observe(section);
    });

});


// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});