
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

});
//vanilla js

//mobile menu
const btn = document.querySelector('.small-nav-btn');
const container = document.querySelector('.nav-small');
const icon = document.querySelector('.small-nav-btn')

btn.addEventListener('click', () => {
  container.classList.toggle('d-none');
  if(container.classList.contains('d-none')){
    icon.innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    icon.innerHTML = `<i class="fas fa-times"></i>`;
    btn.style.top = '2%';
  }
})

//modal
const calls = document.querySelectorAll('.callme');
const closeCall = document.querySelector('.close-modal');
const modal = document.querySelector('.callme-container')

calls.forEach((call) => {
  call.addEventListener('click', () => {
    modal.style.display="flex";
  });
});
closeCall.addEventListener('click', () => {
  modal.style.display="none";
})
