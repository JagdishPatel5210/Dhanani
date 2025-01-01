// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';


// var swiper = new Swiper(".mySwiper", {
// 	effect: "coverflow",
// 	centeredSlides: true,
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false
// 	},
// 	loop: true,
// 	slidesPerView: "2",
// 	coverflowEffect: {
// 		rotate: 0,
// 		stretch: 30,
// 		depth: 100,
// 		modifier: 5,
// 		slideShadows: true
// 	},
// 	navigation: {
// 		prevEl: ".swiper-button-prev",
// 		nextEl: ".swiper-button-next"
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: false
// 	}
// });


// import $ from "jquery";

// $(document).ready(function() {
//     function initCarousel($container, config) {
//       const $items = $container.find('.carousel-item');
//       const itemCount = $items.length;
//       let currentIndex = 0;
//       let autoPlayInterval;
  
 
//       config = $.extend({
//         visibleItems: 3,
//         autoPlay: true,
//         autoPlayDelay: 3000,
//         secondaryPosition: 'right', 
//         overlap: false, 
//         overlapRatio: 0.8, 
//         mainItemWidth: 0.6 
//       }, config);
  
//       function updateCarousel() {
//     const containerWidth = $container.width();
//     const visibleItems = Math.min(config.visibleItems, itemCount);
//     const mainItemWidth = containerWidth * config.mainItemWidth;
//     const secondaryItemWidth = (containerWidth - mainItemWidth) / (visibleItems - 1);
    
//     const mainPosition = config.mainItemPosition || 'center'; 
  
//     $items.each(function(index) {
//       const offset = (index - currentIndex + itemCount) % itemCount;
//       let width, left, top, zIndex, opacity, scale;
  
//       if (offset < visibleItems) {
//         if (offset === 0) {
        
//           width = mainItemWidth;
//           if (mainPosition === 'center') {
//             left = (containerWidth - mainItemWidth) / 2;
//           } else { 
//             left = 0;
//           }
//           zIndex = visibleItems + 1;
//           opacity = 1;
//           scale = 1;
//         } else {
//           width = secondaryItemWidth;
//           if (mainPosition === 'center') {
//             if (offset <= visibleItems / 2) {
//               left = (containerWidth - mainItemWidth) / 2 - (visibleItems / 2 - offset + 0.5) * secondaryItemWidth;
//             } else {
//               left = (containerWidth + mainItemWidth) / 2 + (offset - visibleItems / 2 - 0.5) * secondaryItemWidth;
//             }
//           } else { 
//             left = mainItemWidth + (offset - 1) * secondaryItemWidth;
//           }
//           zIndex = visibleItems - offset;
//           opacity = 1 - (offset * 0.2);
//           scale = 1 - (offset * 0.1);
//         }
  
//         top = 10 + (offset * 5) + '%';
  
//         $(this).css({
//           width: width + 'px',
//           height: '80%',
//           left: left + 'px',
//           top: top,
//           zIndex: zIndex,
//           opacity: opacity,
//           transform: `scale(${scale})`,
//           transition: 'all 0.5s ease',
//           display: 'block'
//         });
//       } else {
//         $(this).css({
//           display: 'none'
//         });
//       }
//     });
  
//     updateDots();
//   }
  
//       function createDots() {
//         const $dots = $container.find('.carousel-dots');
//         $dots.empty();
//         for (let i = 0; i < itemCount; i++) {
//           $dots.append('<span></span>');
//         }
//         updateDots();
//       }
  
//       function updateDots() {
//         $container.find('.carousel-dots span').removeClass('active').eq(currentIndex).addClass('active');
//       }
  
//       function nextItem() {
//         currentIndex = (currentIndex + 1) % itemCount;
//         updateCarousel();
//       }
  
//       function prevItem() {
//         currentIndex = (currentIndex - 1 + itemCount) % itemCount;
//         updateCarousel();
//       }
  
//       function startAutoPlay() {
//         stopAutoPlay();
//         if (config.autoPlay) {
//           autoPlayInterval = setInterval(nextItem, config.autoPlayDelay);
//         }
//       }
  
//       function stopAutoPlay() {
//         clearInterval(autoPlayInterval);
//       }
  
//       $container.find('.next').on('click', nextItem);
//       $container.find('.prev').on('click', prevItem);
//       $container.find('.carousel-dots').on('click', 'span', function() {
//         currentIndex = $(this).index();
//         updateCarousel();
//       });
  
//       $container.hover(stopAutoPlay, startAutoPlay);
  
    
//       createDots();
//       updateCarousel();
//       startAutoPlay();
  

//       $(window).on('resize', updateCarousel);
//     }
   
  
//    // 1. 不重疊的左側輪播
//   initCarousel($('#carousel1'), { 
//     visibleItems: 3, 
//     secondaryPosition: 'left',
//     overlap: false,
//     mainItemWidth: 0.5,
//     mainItemPosition: 'center'
//   });


//     // 3. 不重疊的多項目輪播
// //   initCarousel($('#carousel3'), { 
// //     visibleItems: 5, 
// //     secondaryPosition: 'right',
// //     overlap: false,
// //     mainItemWidth: 0.4
// //   });
  
//   });


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


// // import $ from 'jquery';
// // $('.multi-item-carousel').carousel({
// //   interval: false
// // });

// // // for every slide in carousel, copy the next slide's item in the slide.
// // // Do the same for the next, next item.
// // $('.multi-item-carousel .item').each(function(){
// //   var next = $(this).next();
// //   if (!next.length) {
// //     next = $(this).siblings(':first');
// //   }
// //   next.children(':first-child').clone().appendTo($(this));
  
// //   if (next.next().length>0) {
// //     next.next().children(':first-child').clone().appendTo($(this));
// //   } else {
// //   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
// //   }
// // });
  

// // import $ from 'jquery';

// // $('.multi-item-carousel .item').each(function(){
// //   var next = $(this).next();
// //   if (!next.length) next = $(this).siblings(':first');
// //   next.children(':first-child').clone().appendTo($(this));
// // });
// // $('.multi-item-carousel .item').each(function(){
// //   var prev = $(this).prev();
// //   if (!prev.length) prev = $(this).siblings(':last');
// //   prev.children(':nth-last-child(2)').clone().prependTo($(this));
// // });



// function createAnimation (itemSelector, centerProps, defaultProps, duration, onCompleteCallback) {
//   const animation = {}
  
//   const boxes = gsap.utils.toArray(itemSelector)
//   const width = gsap.getProperty(boxes[0], "width")
//   const totalLength = boxes.length
//   const loopLength = totalLength / 3
//   const list = boxes[0].parentNode
//   const startIndex = loopLength
//   const endIndex = 2 * loopLength
//   let currentIndex = startIndex
//   let direction = 0
//   let disableBtn = false
  
//   gsap.set(boxes[0].firstChild, centerProps)
  
//   const scaledWidth = gsap.getProperty(boxes[0], "width")
//   const windowWidth = gsap.getProperty('body', 'width')
  
//   gsap.set(boxes[0].parentNode, {
//     x: (windowWidth - scaledWidth) / 2
//   })
  
//   const createSegment = (i) => {
//     return gsap.timeline().to(boxes[i].firstChild, {
//       ...defaultProps,
//       duration: duration,
//       ease: 'none',
//       immediateRender: false
//     }).to(boxes[i+1].firstChild, {
//       ...centerProps,
//       duration: duration,
//       ease: 'none',
//       immediateRender: false
//     }, "<").to(list, {
//       x: `-=${width}`,
//       duration: duration,
//       ease: 'none',
//       onComplete: onSegmentComplete,
//       onReverseComplete: onSegmentComplete
//     }, "<")
//   }

//   const fullAnim = gsap.timeline({ paused: true })
  
//   onSegmentComplete = () => {
//     if (currentIndex === endIndex + 1) {
//       currentIndex = startIndex + 1
//       fullAnim.currentLabel(`Label${currentIndex}`)
//     } else if (currentIndex === startIndex - 1) {
//       currentIndex = endIndex - 1
//       fullAnim.currentLabel(`Label${currentIndex}`)
//     }
//   }
  
//   fullAnim.addLabel('Label0')
//     boxes.forEach((box, index) => {
//     if (index === totalLength - 1) {
//       return
//     }
//     fullAnim.add(createSegment(index)).addLabel(`Label${index + 1}`)
//   })

//   fullAnim.currentLabel(`Label${startIndex}`)
  
//   animation.scrollLeft = () => {
//     if (disableBtn) { return }
//     disableBtn = true
    
//     direction = -1
//     fullAnim.tweenTo(`Label${currentIndex - 1}`, {
//       duration: 0.5
//     })
//     currentIndex--
    
//     setTimeout(() => {
//       disableBtn = false
//     }, duration * 1000 + 100)
//   }
  
//   animation.scrollRight = () => {
//     if (disableBtn) { return }
//     disableBtn = true
    
//     direction = 1
//     fullAnim.tweenTo(`Label${currentIndex + 1}`, {
//       duration: 0.5
//     })
//     currentIndex++
    
//     setTimeout(() => {
//       disableBtn = false
//     }, duration * 1000 + 100)
//   }
  
//   animation.currentIndex = () => currentIndex
  
//   return animation
// }

// let autoplay = true
// let timer = null
// const autoplayStatusEl = document.querySelector('.autoplay-status')

// const onComplete = () => {}

// const infiScrollAnim = createAnimation('.box', {
//   scale: 1.25,
//   margin: '0 64 0 64',
//   boxShadow: 'rgba(102, 232, 76, 0.25) 0px 50px 100px -20px, rgba(102, 232, 76, 0.3) 0px 30px 60px -30px'
// }, {
//   scale: 1,
//   margin: '0 20 0 20',
//   boxShadow: 'none'
// }, 0.5, onComplete)


// const leftAnim = () => {
//   clearTimeout(timer)
//   infiScrollAnim.scrollLeft()
//   if (autoplay) {
//     timer = setTimeout(rightAnim, 1000)
//   }
// }

// const rightAnim = () => {
//   clearTimeout(timer)
//   infiScrollAnim.scrollRight()
//   if (autoplay) {
//     timer = setTimeout(rightAnim, 1000)
//   }
// }

// if (autoplay) {
//   timer = setTimeout(rightAnim, 1000)
// }

// function handleAutoplay () {
//   autoplay = !autoplay
  
//   if (autoplay) {
//     autoplayStatusEl.innerHTML = 'ON'
//     timer = setTimeout(rightAnim, 1000)
//   } else {
//     autoplayStatusEl.innerHTML = 'OFF'
//     clearTimeout(timer)
//   }
// }

// const prevBtn = document.querySelector('.prev')
// prevBtn.addEventListener('click', leftAnim)
// const nextBtn = document.querySelector('.next')
// nextBtn.addEventListener('click', rightAnim)
// const autoplayBtn = document.querySelector('.autoplay-container')
// autoplayBtn.addEventListener('click', handleAutoplay)



