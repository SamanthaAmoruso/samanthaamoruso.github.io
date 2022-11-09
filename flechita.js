$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});


$(document).ready(function() {
        $(window).scroll(function(){
                if(document.body.scrollTop > 300)
                        $('respmenu').fadeIn( "slow", function() { });
                else    
                        $('respmenu').fadeOut( "slow", function() { });
        });
        $('a#srolltotop').click(function(){
                $('html, body').animate({scrollTop:0}, 100);
                return false;
        });
});