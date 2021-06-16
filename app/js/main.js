$(function(){

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:   true,
    autoplay: true
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  // var mixer1 = mixitup('.product__items');
  // var mixer2 = mixitup('.desing__items');



});