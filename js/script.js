$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
      {
        items:2,
        responsiveClass:true,
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
        autoplay:{
          type:500,
          default:false
        }
      }
    );
  });
  