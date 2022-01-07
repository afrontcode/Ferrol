//var menu = ['Slide 1', 'Slide 2', 'Slide 3']
// var mySwiper = new Swiper ('.swiper-container', {
//     // If we need pagination
//     /*pagination: {
//       el: '.swiper-pagination',
// 			clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (menu[index]) + '</span>';
//         },
//     },*/

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   })

//   var app = document.getElementById("sliderTxt");
//   var paragraphs = app.querySelectorAll("p");

//   paragraphs.forEach(function(item, index){
//     item.addEventListener('click', function(){
//        mySwiper.slideTo(index)
//     })
//   })


function generateSliders($allSliders){
  const getAllSliders = $allSliders;
  getAllSliders.forEach(slide => {
      var mySwiper = new Swiper (slide, {
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      })
      var $parentSlider = slide.parentNode.parentNode;
      var app = $parentSlider.querySelector(".sliderTxt");
      var paragraphs = app.querySelectorAll("p");
      console.log(paragraphs);
      paragraphs.forEach(function(item, index){
          item.addEventListener('click', function(){
              mySwiper.slideTo(index)
          })
      });
  });
}
const allSliders = document.querySelectorAll(".swiper-container");
generateSliders(allSliders);


 