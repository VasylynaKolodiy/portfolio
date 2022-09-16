$(function () {
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false
  });


  $('.collection__info-gallery').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: true,
    infinite: true,
    mobileFirst: true, //optional, to be used only if your page is mobile first
    responsive: [{
      breakpoint: 951,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    }]
  });

  $('.contactcollection__info-gallery').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnFocus: false,
    pauseOnHover: true,
    infinite: true,
    mobileFirst: true, //optional, to be used only if your page is mobile first
    responsive: [{
      breakpoint: 951,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 5,
      }
    }]
  });
})


$(document).ready(function() {

  $('#furniture__tabs li a:not(:first)').addClass('inactive');
  $('.furniture__tabs-container').hide();
  $('.furniture__tabs-container:first').show();

  $('#furniture__tabs li a').click(function(){
    var t = $(this).attr('id');
    if($(this).hasClass('inactive')){ //this is the start of our condition
      $('#furniture__tabs li a').addClass('inactive');
      $(this).removeClass('inactive');

      $('.furniture__tabs-container').hide();
      $('#'+ t + 'C').fadeIn('slow');
    }
  });
});



$(function () {
  $('.blogspage__slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false
  });
})











