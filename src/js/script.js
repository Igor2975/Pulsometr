$(document).ready(function () {
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src ="img/slider/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src ="img/slider/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(event) {
        event.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal
  //  $('[data-modal=consultation]').fadeOut();
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay , #consultation').fadeIn('slow');
  });
  $('.modal__clouse').on('click', function () {
    $('.overlay , #consultation , #order, #thanks').fadeOut('slow');
  });
  // $('.button_mini').on('click', function () {
  //   $('.overlay , #order').fadeIn('slow');
  // });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__subtitle').text($('.catalog-item__sub').eq(i).text());
      $('.overlay , #order').fadeIn('slow');
    })
  })

  // ввод телефона

  $('input[name=phone]').mask("+7(999)-999-99-99")

  // //Валидация
  // $('#consult-form').validate();
  // $('#order form').validate({
  //   rules: {
  //     // simple rule, converted to {required:true}
  //     name: "required",
  //     phone:"required",
  //     // compound rule
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "Введите свое имя",
  //     phone:"Введите свой номер телефона",
  //     email: {
  //       required: "ВВедите свою почту",
  //       email: "Неправильный адрес почты"
  //     }
  // }
  // });
  // $("#consultation").validate({
  //   rules: {
  //     name: "required",
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "Please specify your name",
  //     email: {
  //       required: "We need your email address to contact you",
  //       email: "Your email address must be in the format of name@domain.com"
  //     }
  //   }
  // });
 

});