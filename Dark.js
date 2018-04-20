
$(function () {
    
        'use strict';
        
        $('html').niceScroll();
        
        $('.header').height($(window).height());
        
        // Scroll
        
        $('.header .arrow i').click(function () {
            
            $('html, body').animate({
                
                scrollTop: $('.feat').offset().top
            
            }, 1000);
        
        });

        // Show Hidden
        
        $('.show-more').click(function () {
                
                $('.work .hidden').fadeIn(1000);
        });
        
        // Check
        
        var leftArrow = $('.opi .fa-chevron-left'),
        
            rightArrow = $('.opi .fa-chevron-right');
        
        function checkClients () {
                
            $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
            
            $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
            
        }
        
        checkClients();
        
        $('.opi i').click(function () {
                
            if ($(this).hasClass('fa-chevron-right')) {
                
                $('.opi .active').fadeOut(100, function () {
                        
                   $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                   
                   checkClients();
                        
                });
                
                
            } else {
                
                $('.opi .active').fadeOut(100, function () {
                        
                   $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                   
                   checkClients();
                        
                });
            }
                
        });
        
});