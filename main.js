$(function(){

$('.more-info').click(function(){
   $('.modal').toggleClass('modal-hidden');
});

$('.menu-toggle').click(function() {
  $('.menu-toggle').toggleClass('menu-hidden');
  $('.header_menu').toggleClass('content-hidden');
});

});

   



$(function () {
  $('.rev-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    infinite:true,
    dots:true,
    responsive: [
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});

