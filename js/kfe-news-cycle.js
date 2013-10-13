(function($) {
    $(window).load(function () {
    	
		FadeHover();
		/*$('.gallery-list').cycle({
			fx: 'fade',
			timeout: 0,
			pager: '.gallery-area .pagination .frame'
		});*/
		
		$('.testimonials-list').cycle({
			fx: 'fade',
			timeout: 0,
			pager: '.testimonials-area .testimonials-pagination .frame'
		});
    	
		//slideshow
		$('.banner ul').cycle({
			fx: 'fade',
			//easing: "easeInOutExpo",
			speed: 1000, 
			timeout: 5000,
			cleartypeNoBg: true,
			pager:'.banner .sli_dots'
		});
		
		$('.news_slider_box ul').cycle({
			fx: 'fade',
			//easing: "easeInOutExpo",
			speed: 1000, 
			timeout: 0,
			cleartypeNoBg: true,
			pager:'.news_slider_box .sli_dots',
			before: onAfter
		});
		function onAfter(curr, next, opts, fwd) {
		  var $ht = $(this).height();
		
		  //set the container's height to that of the current slide
		  $(this).parent().animate({height: $ht});
		}
		
		function FadeHover(){
			$('.img-list a').each(function(){
				$(this).hover(
					function(){
						$(this).find('.add-txt').stop(true, true).fadeIn(600);
						$(this).find('.decor-area').stop(true, true).fadeTo(550, 0.57);
					},
					function(){
						$(this).find('.add-txt').stop(true, true).fadeOut(600);
						$(this).find('.decor-area').stop(true, true).fadeTo(550, 0);
					}
				);
			});
		}
        
    });
})(jQuery);

