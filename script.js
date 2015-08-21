// function box () {
// 	$('.slider-img').hover(function() {
// 	$(this).animate({top: '-50px'}, 1000);
// });
// };

// box();

function up () {
		$(document).on({
			mouseenter: function() {
				$(this).stop().animate({top: '-50px'}, 300, function(){
					$('.mess', $(this).parent()).animate({opacity: 1}, 100);
				});				
			},
			mouseleave: function() {
				$(this).stop().animate({top: '0px'}, 300, function(){
					$('.mess', $(this).parent()).animate({opacity: 0}, 300);
				});
			}
		}, '.slider-img');
};

function packClick () {
		$(document).on({
			click: function() {
				$('.popup-window').css('display', 'block');	
				$('.choose-pack').children().remove();
				$(this).clone().appendTo('.choose-pack');		
			}
		}, '.slider-img');
};

function closePopup () {
	$('.popup-bg').click(function() {
$('.popup-window').css('display', 'none');	
});
};



function mess () {
		$(document).on({
			mouseenter: function() {
				$(this).find('.shadow').stop().removeClass('shadow-scale-back');
				$(this).find('.shadow').stop().addClass('shadow-scale');
				//$(this).find('.mess').stop().animate({opacity: 1}, 300);

			},
			mouseleave: function() {
				$(this).find('.shadow').stop().addClass('shadow-scale-back');
				//$(this).find('.mess').stop().animate({opacity: 0}, 300);
				setTimeout(function () {
					$(this).find('.shadow').stop().removeClass('shadow-scale');
				}, 300);
			}
		}, '.slider-item div');
};

function messImg () {
		/*$(document).on({
			mouseenter: function() {
				var $this = jQuery(this);
				setTimeout(function () {
					$this.siblings('.mess').stop().animate({opacity: 1}, 100);
				}, 300);

			},
			mouseleave: function() {
				$(this).siblings('.mess').stop().animate({opacity: 0}, 300);
			}
		}, '.slider-img');*/
};