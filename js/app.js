
$(document).ready(function(){

//Slick sliders
  $('.staff__carousel').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
    nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews__carousel').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
    nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  //accordion 
  $('.questions__accordion-descr').on('click', function(){
    $('.questions__accordion-item').removeClass('questions__accordion-item--active');
    $(this).parent().toggleClass('questions__accordion-item--active');
  })
  //show fixed menu on scroll 
  $(window).scroll(function(){ 
    if($(window).scrollTop() >= 100 ){ 
        $( ".fixed-header" ).css( "display", "block" ); 
    } else { 
   $( ".fixed-header" ).css( "display", "none" ); 
    } 
  }); 
  //m menu btn 
  $('.small-nav-btn').on('click', function(){
    $('.nav-small').toggleClass('.nav-small--active')
  });

});


