// // JavaScript Document

// $('.service_owl').owlCarousel({
//     loop:true,
//     margin:10,
// 	dots:false,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:3.1,
//             nav:true,
//             loop:true
//         }
//     }
// })


$( document ).ready(function(){

  $('.slide_owl').owlCarousel({
      loop:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:1,
              nav:true,
              loop:true
          }
      }
  })
});




