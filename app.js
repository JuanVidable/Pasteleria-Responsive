// test
const btn = document.getElementById("btn");
const menu = document.querySelector('.nav__menu');
const acerca = document.getElementById("acerca");
const servicios = document.getElementById("servicios");


btn.addEventListener('click', function(){
    menu.classList.toggle("show");
})

acerca.addEventListener('click', function(){
    window.scrollTo(0,2000);
    
    
    if(innerWidth<=800){
        menu.classList.toggle("show");
    }
})

servicios.addEventListener('click', function(){
    if(innerWidth >= 1400){
        window.scrollTo(0,850);
    }else if(innerWidth>= 980){
        window.scrollTo(0,750);
    }else if(innerWidth>300){
        window.scrollTo(0,500)
    }
    if(innerWidth<=800){
        menu.classList.toggle("show");
    }
    
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});




