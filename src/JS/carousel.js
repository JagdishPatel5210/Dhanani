

// import $ from "jquery";
// import "slick-carousel/slick/slick.css"; // Slick Carousel CSS
// import "slick-carousel/slick/slick-theme.css"; // Optional, for the theme
// import "slick-carousel";

// resolve: {
//     alias: {
//       jquery: require.resolve("jquery")
//     }
//   }

//   $('.carousel').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     dots: true,
//     prevArrow: $('.fa-chevron-left'),
//     nextArrow: $('.fa-chevron-right'),
//           responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
  
//           ]
//   })


// import $ from 'jquery';
// $('.multi-item-carousel').carousel({
//   interval: false
// });

// // for every slide in carousel, copy the next slide's item in the slide.
// // Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   } else {
//   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });
  

import $ from 'jquery';

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) next = $(this).siblings(':first');
  next.children(':first-child').clone().appendTo($(this));
});
$('.multi-item-carousel .item').each(function(){
  var prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(':last');
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});

