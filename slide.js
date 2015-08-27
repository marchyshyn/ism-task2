(function($) {
	$.fn.slide = function() {
		return this.each(function() {

			var options = $.extend({
				showTime: 3000,
				remove: 6000,
				startAnimate: 1500,
				slideAnimate: 6000
			}, options);

			var el = this,
			size = 100,
			sizeLeft = 167,
			lengthSlides = $(this).find('.slider-item').length,
			widthSlides = (lengthSlides + 2) * size + '%';
			$(this).find('.sliderItemWrapper').width(widthSlides);
			//$(this).find('.slider-item').width( size / lengthSlides + '%');
			$(this).find('.slider-item').width( size / lengthSlides + '%');
			//$(this).find('.slider-item').width($('body').width());
			// $('.sliderSection').width($('body').width());
			$(window).resize(function() {
				$('.sliderSection').width($('body').width());
			});
			
			$('.slider_left').click(function() {
				//clearInterval(options.showTime);
		       prevSlide();
				});

			$('.slider_right').click(function(){
		      // clearInterval(options.showTime);
		       nextSlide();
		   });

			var nextSlide = function() {
				var currentSlide=parseInt($('.sliderItemWrapper').data('current'));
				currentSlide++;
				if ( currentSlide >= lengthSlides ){

				// $(el).find('.sliderItemWrapper').css('left', -(currentSlide-2) * 100 + '%');
				$(el).find('.sliderItemWrapper').css('left', -167.4 + '%');
				$('.sliderItemWrapper').append($('.sliderItemWrapper').children().first().clone());
				$('.sliderItemWrapper').children().first().remove();
					currentSlide--;

				}
				setTimeout(function() {
					
					$(el).find('.sliderItemWrapper').animate({left: -currentSlide * sizeLeft + '%'}, options.slideAnimate, 'easeOutQuint').data('current',currentSlide);
				}, options.startAnimate);
				$('.slider_left, .slider_right').css('display', 'none');
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
					$('.slider_left, .slider_right').css('display', 'block');
				}, options.remove);
				};

				function prevSlide(){
			   var currentSlide=parseInt($('.sliderItemWrapper').data('current'));
			   currentSlide--;
			   if(currentSlide<0)
			   {
			       $('.sliderItemWrapper').css('left',-166.7 + '%');  
			       $('.sliderItemWrapper').prepend($('.sliderItemWrapper').children().last().clone()); 
			       $('.sliderItemWrapper').children().last().remove();
			       currentSlide++;   
			   }
			   setTimeout(function() {
					$('.sliderItemWrapper').animate({left: -currentSlide * size + '%'}, options.slideAnimate, 'easeOutQuint').data('current',currentSlide);
				}, options.startAnimate);
				$('.slider_left, .slider_right').css('display', 'none');
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
					$('.slider_left, .slider_right').css('display', 'block');
				}, options.remove);
			   
			}

		});
	};
})(jQuery);