$(function () {
  $('.bannar_slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });


  // portfulio slide
  $('.port_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span><i class="fa-solid fa-arrow-left-long pre"></i></span>',
    nextArrow: '<span><i class="fa-solid fa-arrow-right-long next"></i></span>',
    responsive: [{
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },

    ]

  })


})