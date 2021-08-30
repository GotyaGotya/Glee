$(function(){

  $('.footer-top__slide').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__slide--active');
  })

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.product-detalis-slide__thumb').slick({
    asNavFor: '.product-detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-detalis-slide__big').slick({
    asNavFor: '.product-detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });


  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list')
  })

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
  })

  $('.select-style, .product-detalis-item__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.product-related__slider-box').slick({
    slidesToShow: 4,
    dots: false,
    autoplay: true,
    appendArrows:$('.product-related__arrow'),
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:   true,
    autoplay: true
  });
  
  $('.rate').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
    
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



});