$(document).ready(function(){
  // jQuery('.owl-item').on('hover', ()=>{
  //   $('.prodname')
  // })
    $(".owl-carousel").owlCarousel(
      {
        items:2,
        responsiveClass:true,
        autoplay: false,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:1.5
          },
          1024:{
            items:2.5
          }
        },
      }
    );
  });
  