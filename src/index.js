import "./styles/styles.scss";
import "./scripts/bootstrap.bundle.min.js";
import "./scripts/responsive-menu.js";
import  "./scripts/stickymenu.js";

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
          index--
      });
  });
}
const allSliders = document.querySelectorAll(".swiper-container");
generateSliders(allSliders);


$('.responsive').not('.slick-initialized').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



var tabs = document.querySelectorAll(".tabsInformation");


tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        tabs.forEach(tbs => tbs.classList.remove('active'));
        this.classList.add('active');
    })
})

/*document.getElementById("myBtn").addEventListener("click", function() {
  window.location='https://www.tulivery.com/suscripcion/empezar';
});*/