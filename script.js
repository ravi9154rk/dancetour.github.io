let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');
let searchbar = document.querySelector('#search-bar');
let searchform = document.querySelector('#search-form');





menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

searchbar.onclick = () =>{
    searchform.classList.toggle('active')
}



































// $('.slides').slick({
//     dots: false,
//     infinite: false,
//     autoplay:true,
//     arrows:false,   
//     speed: 200,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
     
//     ]
//   });