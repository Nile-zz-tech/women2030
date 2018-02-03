(function ($, window, Drupal, drupalSettings) {

  "use strict";
  $(document).ready(function () {
    if ($('.carousel-responsive').length) {
      $('.carousel-responsive').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });
    }
    if ($(window).width() <= 991) {

      jQuery('#panel_second .container div').first().slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        rtl: true
      });
    }
  });


})(jQuery, this, Drupal, drupalSettings);
