//desaparecendo com a navbar no scroll
const nav = document.querySelector(".main-header");
let lastScrollY = window.scrollY; //0 esta na pos inicial

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY){
        nav.classList.add("nav--hidden");
        console.log(window.scrollY);
    }else{
        nav.classList.remove("nav--hidden");
        console.log(window.scrollY);
    }

    lastScrollY = window.scrollY;
})

// Carrosel do feature
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
           
        },
        1000:{
            items:3,
            
        }
    }
});

// Carrosel do screenshots
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
           
        },
        1000:{
            items:4,
            
        }
    }
});
