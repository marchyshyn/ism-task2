function up () {
	$(document).on({
		mouseenter: function() {
			$(this).stop().animate({top: '-50px'}, 600, 'easeOutBounce', function(){
				$('.mess', $(this).parent()).animate({opacity: 1}, 100);
			});
			$('.shadow', $(this).parent()).removeClass('shadow-scale-back');
			$('.shadow', $(this).parent()).addClass('shadow-scale');				
		},
		mouseleave: function() {
			$(this).stop().animate({top: '0px'}, 600, 'easeOutBounce');
			$('.mess', $(this).parent()).animate({opacity: 0}, 300);
			$('.shadow', $(this).parent()).addClass('shadow-scale-back');
			$('.shadow', $(this).parent()).removeClass('shadow-scale');
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
	$('.popup-bg, header, .close-popup').click(function() {
		$('.popup-window').css('display', 'none');	
	});
};

function showInfo () {
	$('.pakje-info').animate({opacity: 0}, 300, function(){
		$('.pakje-info, .logo').css('display', 'none');
		$('.main').animate({top: '-69%'}, 300);
	});
	setTimeout(function(){
		$('.info').css('display', 'block');
		$('.info').animate({opacity: 1}, 300);
	}, 600);
	
};

function hideInfo () {
	$('.info').animate({opacity: 0}, 300, function() {
		$('.info').css('display', 'none');
		$('.main').animate({top: '-38%'}, 300);
		setTimeout(function(){
			$('.logo').css('display', 'block');
		}, 300);
		$('.pakje-info').css('display', 'block');
	$('.pakje-info').animate({opacity: 1}, 400);
	});
		
};

function valid () {
	     $('#firstName, #lastName, #email').unbind().blur( function(){
         var id = $(this).attr('id');
         var val = $(this).val();

       switch(id)
       {
             case 'firstName':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                   $(this).addClass('not_error');
                }
                else
                {
                   $(this).removeClass('not_error').addClass('error');
                }
            break;

            case 'lastName':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                   $(this).addClass('not_error');
                }
                else
                {
                   $(this).removeClass('not_error').addClass('error');
                }
            break;

           case 'email':
               var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               if(val != '' && rv_email.test(val))
               {
                  $(this).addClass('not_error');
               }
               else
               {
                  $(this).removeClass('not_error').addClass('error')
               }
           break;
       }
     }); 
};

function ieRadius () {
  var myNav = navigator.userAgent.toLowerCase();
	var ie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	if (ie == 9) {
		$('.button').css({'background': 'url(assets/button.png)'});
	}
};



$(document).ready(function() {   
  function sea() {
  	$('.sea').addClass('sea-rotate');
    $('.sea').animate({'top': '-90px'}, 1500, 'easeInOutBack', function(){
    	$('.sea').animate({'top': '-130px'}, 1500, 'easeInOutBack', sea);
    });
  }
  sea();
}); 