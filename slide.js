(function($) {
	$.fn.slide = function() {
		return this.each(function() {

			var options = $.extend({
				showTime: 3000,
				slideAnimate: 1000
			}, options);

			var el = this,
			size = 100,
			lengthSlides = $(this).find('.slider-item').length,
			widthSlides = lengthSlides * 100 + '%';
			$(this).find('.sliderItemWrapper').width(widthSlides);
			$('.slider_left').click(function() {
				clearInterval(options.showTime);
		       prevSlide();
				});

			$('.slider_right').click(function(){
		       clearInterval(options.showTime);
		       nextSlide();
		   });

			var nextSlide = function() {
				var currentSlide=parseInt($('.sliderItemWrapper').data('current'));
				currentSlide++;
				if ( currentSlide >= lengthSlides ){

				$(el).find('.sliderItemWrapper').css('left', -(currentSlide-2) * size + '%');
				$('.sliderItemWrapper').append($('.sliderItemWrapper').children().first().clone());
				$('.sliderItemWrapper').children().first().remove();
					currentSlide--;

				}
				setTimeout(function() {
					$(el).find('.sliderItemWrapper').animate({left: -currentSlide * size + '%'}, options.slideAnimate).data('current',currentSlide);
				}, 1000);
				$('.slider_left, .slider_right').css('opacity', 0);

				function isIE () {
				  var myNav = navigator.userAgent.toLowerCase();
				  var ie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
				  if (ie == 9) {
				  	$('.main').animate({  textIndent: -13 }, {
					    step: function(now,fx) {
					      $(this).css('-ms-transform','rotate('+now+'deg)'); 
					    },
					    duration:'slow'
					},'linear');
					setTimeout(function(){
						$('.main').animate({  textIndent: 0 }, {
					    step: function(now,fx) {
					      $(this).css('-ms-transform','rotate('+now+'deg)'); 
					    },
					    duration:'slow'
					},'linear');
					}, 2200);
				  }
				};
				isIE();

				

				$('.main').addClass('left-main');
				setTimeout(function () {
					$('.main').removeClass('left-main');
					$('.slider_left, .slider_right').css('opacity', 1);
				}, 4000);
				};

				function prevSlide(){
			   var currentSlide=parseInt($('.sliderItemWrapper').data('current'));
			   currentSlide--;
			   if(currentSlide<0)
			   {
			       $('.sliderItemWrapper').css('left',-(currentSlide+2) * size + '%');  
			       $('.sliderItemWrapper').prepend($('.sliderItemWrapper').children().last().clone()); 
			       $('.sliderItemWrapper').children().last().remove();
			       currentSlide++;   
			   }
			   setTimeout(function() {
					$('.sliderItemWrapper').animate({left: -currentSlide * size + '%'}, options.slideAnimate).data('current',currentSlide);
				}, 1000);
				$('.slider_left, .slider_right').css('opacity', 0);
				function isIE () {
				  var myNav = navigator.userAgent.toLowerCase();
				  var ie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
				  if (ie == 9) {
				  	$('.main').animate({  textIndent: 13 }, {
					    step: function(now,fx) {
					      $(this).css('-ms-transform','rotate('+now+'deg)'); 
					    },
					    duration:'slow'
					},'linear');
					setTimeout(function(){
						$('.main').animate({  textIndent: 0 }, {
					    step: function(now,fx) {
					      $(this).css('-ms-transform','rotate('+now+'deg)'); 
					    },
					    duration:'slow'
					},'linear');
					}, 2200);
				  }
				};
				isIE();
				$('.main').addClass('right-main');
				setTimeout(function () {
					$('.main').removeClass('right-main');
					$('.slider_left, .slider_right').css('opacity', 1);
				}, 4000);
			   
			}

		});
	};
})(jQuery);