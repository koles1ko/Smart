console.log(divide(4, 2));
console.log(divide(34, 2));

$(function () {

  $(".search").on('click', function(){
    $(".header__search").toggleClass("active");
  }); 

  $('.menu-slide').on('click', function(){
    $('.header__menu').slideToggle();
  });

  $('.slider').slick({
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 761,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });




  //  $(".test").on('click', function(){
  //    $(".test").toggleClass("active");
  //  }); 
  // додбавление класса

//----------------------------------

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // });
  // Для бургера!

//----------------------------------

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 3
      //     }
      //   }
      //  ]
  // });
  // Обычный одиночный слайдер!

//----------------------------------

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
  // Двойной слайдер!

//----------------------------------

  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); 
  //Для табов!

  //----------------------------------
});