// function box () {
// 	$('.slider-img').hover(function() {
// 	$(this).animate({top: '-50px'}, 1000);
// });
// };

// box();

function up () {
		$(document).on({
			mouseenter: function() {
				$(this).animate({top: '-50px'}, 300);
			},
			mouseleave: function() {
				$(this).animate({top: '0px'}, 300);
			}
		}, '.slider-img');
};


