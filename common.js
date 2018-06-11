
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=959 ){
				$('.header .hdr').fadeIn();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=959 ){
				$('.header .hdr').fadeOut();
			}
		}
	});
	$(window).scroll(function(){
	     if( $(window).scrollTop()>10 ){
	         $(".header").addClass('scroll');
	     }else{
	         $(".header").removeClass('scroll');
	     }
	 });

	$(function() {
		$('.nav li').hover(function() {
			navem(this);
		}, function() {
			navem('.nav li.on');
		});
		navem('.nav li.on');

		function navem(e) {
			var left = $(e).position().left + 8;
			$(".nav em").stop(true).animate({
				left: left
			}, 300);
		}

	});

	function myNav(){
	    var _winw = $(window).width();
	    if( _winw>959 ){
	        $('.nav li').bind('mouseenter',function() {
	            $(this).find('.sub').stop().slideDown();
	            if( $(this).find('.sub').length ){
	                $(this).addClass('ok');
	            }
	        });
	        $('.nav li').bind('mouseleave',function() {
	            $(this).removeClass('ok');
	            $(this).find('.sub').stop().slideUp();
	        });
	        $('body').removeClass('open');
	    }else{
	        $('.nav li').unbind('mouseenter mouseleave');
	        $('.nav .v1').click(function(){
	            if( $(this).siblings('.sub').length ){
	                $(this).siblings('.sub').stop().slideToggle();
	                return false;
	            }
	        });
	    }
	}
	myNav();
	$(window).resize(function(event) {
	    myNav();
	});

	$('.m-list3 li').first().find('.con').slideDown();
	$('.m-list3 li h4').click(function(event) {
		$(this).toggleClass('on').parent('li').siblings('li').find('h4').removeClass('on');
		if( $(this).hasClass('on') ){
			$(this).siblings('.con').slideDown().parent('li').siblings('li').find('.con').slideUp();
		}else{
			$('.m-list3 li .con').slideUp();
		}
		
		
	});

	
	
});