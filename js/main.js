$(function(){

    var $content_container = $('.content-container');
    var $mini_nav = $content_container.find('.mini-nav')
    var $mini_nav_content = $mini_nav.find('.list-group-item');
    var $slick = $('.slickcarousel');

    $($mini_nav_content).on('click', function(){
        $mini_nav.find('.active').removeClass('active');
        $(this).addClass('active');
        
        var $panelToShow = $(this).attr('rel');
        
        $content_container.find('.content.active').slideUp(700, showContent);
            
        function showContent(){
            $(this).removeClass('active');
            $('#'+$panelToShow).slideDown(700, function(){
                $(this).addClass('active');
            });
        };
    });

    var $friends_ul = $('.friends-list');
    var $friends_li = $friends_ul.find('li');
    var $friends_a = $friends_ul.find('a');
    var $friends_div = $friends_ul.find('div');

    // FRIENDS TOGGLE DROPDOWN -- offline mode
    $friends_a.on('click', function(){
        if ($(this).hasClass('collapsed')){
            $(this).removeClass('collapsed');
            $(this).attr('aria-expanded', 'false');
        }
        else{
            $(this).addClass('collapsed');
            $(this).attr('aria-expanded', 'true');
        }
        var $href = $(this).attr('href');
        var $div = $friends_ul.find($href);

        if ($div.hasClass('show')){
            $div.removeClass().addClass('collapse');
            $div.css({'height': ''});
        }
        else{
            $('html,body').animate({
                scrollTop: '-=0px'
            });
            $div.slideToggle(500);
            $div.css({'height': '322'});
            $.scrollTo($friends_div.find($href));
            $div.removeClass().addClass('collapsing').delay(1000).removeClass('collapsing');
            $div.removeClass().addClass('collapse').addClass('show');
        }
    });

    // SLICK CAROUSEL
    $slick.slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // FRIENDS SLIDER
    $friends_li.on('click', function(){
        var $rel = $(this).attr('rel');
        var $slider = $friends_ul.find('#'+$rel);
        var $slidecontainer = $slider.find('.slides');
        var $slides = $slidecontainer.find('.slide');

        var width = 250;
        var animationspeed = 1000;
        var pause = 1500;
        var currentslide = 1;

        var offset = 4 - ($slides.length % 4);
        var interval;

        sliderOn();

        function sliderOn(){
            interval = setInterval(function(){
                $slidecontainer.animate({'margin-left': '-='+width}, animationspeed, function(){
                    currentslide++;
                    if (currentslide === $slides.length-offset || currentslide >= $slides.length-offset){
                        currentslide = 1;
                        $slidecontainer.css('margin-left', 0);
                    }
                });
            }, pause);
        };

        $(this).on('click', function(){
            clearInterval(interval);
            $slidecontainer.animate({'margin-left': '0'}, 1000);
        });
    });

    // HOVER EFFECT
    $friends_li.on('mouseover', function(){
        $(this).css({
            'opacity': '0.8',
            'background': 'lightslategray'
        });
    });
    $friends_li.on('mouseleave', function(){
        $(this).css({
            'opacity': '1',
            'background': 'white'
        });
    });
});