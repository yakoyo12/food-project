let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onlick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

document.querySelector('#search-icon').onclicl = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onlick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });