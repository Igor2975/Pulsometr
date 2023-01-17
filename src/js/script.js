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
});