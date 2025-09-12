$(function () {

  // $(".menu a, go-top").on("click", function (e) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	e.preventDefault();

	// 	//забираем идентификатор блока с атрибута href
	// 	var id  = $(this).attr('href'),

	// 	//узнаем высоту от начала страницы до блока на который ссылается якорь
	// 		top = $(id).offset().top;
		
	// 	//анимируем переход на расстояние - top за 1500 мс
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });
  
  // $('.slider-blog-inner').slick({
  //   dots: true, 
  //   prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrow-left.svg" alt="arrow-left"></button>', 
  //   nextArrow: '<button type="button" class="slick-next"><img src="./images/arrow-right.svg" alt="arrow-right"></button>', 
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         arrows: false
  //       }
  //     },
  //   ]
  // });
  
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });



  // var mixer = mixitup('.portfolio__content');

});