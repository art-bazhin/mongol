$(document).ready(function(){
    $('#carousel').owlCarousel({
        items: 4,
        navigation: true,
        pagination: false,
        navigationText: false,
        slideSpeed: 400
    });

    $('#countdown').countdown({ 
    	until: new Date("1 Jan 2017 00:00")
	});

	$('#countdown').countdown($.countdown.regionalOptions['ru']); 

	$('.header a[href^="#"], .read-more-button').click( function(){ 
	    var scroll_el = $(this).attr('href'); 
	    var scroll_dist = $(scroll_el).offset().top; 
	    var scroll_dur = scroll_dist/4;

        if ($(scroll_el).length != 0) { 
	    	$('html, body').animate({ scrollTop: scroll_dist }, scroll_dur);
        }
	    return false; 
    });

    $('.footer a[href^="#"]').click( function(){ 
	    var scroll_el = $(this).attr('href'); 
	    var scroll_dist = $(scroll_el).offset().top; 
	    var scroll_dur = ($(this).offset().top-scroll_dist)/4;

        if ($(scroll_el).length != 0) { 
	    	$('html, body').animate({ scrollTop: scroll_dist }, scroll_dur);
        }
	    return false; 
    });

    $(window).on('scroll', function() {
        show_scrl_btn();
    })

    show_scrl_btn();

    function show_scrl_btn() {
        if ($(document).scrollTop() > 500) {
            $('.up-button').fadeIn(200);
        } else {
            $('.up-button').fadeOut(200);
        }
    }

});