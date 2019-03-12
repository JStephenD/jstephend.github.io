$(function(){

    var $content_container = $('.content-container');
    var $mini_nav = $content_container.find('.mini-nav')
    var $mini_nav_content = $mini_nav.find('.list-group-item');

    $($mini_nav_content).on('click', function(){
        $mini_nav.find('.active').removeClass('active');
        $(this).addClass('active');
        
        var $panelToShow = $(this).attr('rel');
        
        $content_container.find('.content.active').slideUp(400, showContent);
            
        function showContent(){
            $(this).removeClass('active');
            $('#'+$panelToShow).slideDown(400, function(){
                $(this).addClass('active');
            });
        };
    });

    var $friends_ul = $('.friends-list');
    var $friends_li = $friends_ul.find('li');

    $friends_li.on('click', function(){
        var width = 250;
        var animationspeed = 1000;
        var pause = 1500;
        var currentslide = 1;

        var $ref = $(this).attr('rel');
        var $slider = $friends_ul.find('#'+$ref);
        var $slidecontainer = $slider.find('.slides');
        var $slides = $slidecontainer.find('.slide');

        var interval;
        var state;

        sliderOn();

        function sliderOn(){
            interval = setInterval(function(){
                $slidecontainer.animate({'margin-left': '-='+width}, animationspeed, function(){
                    currentslide++;
                    if (currentslide === $slides.length-4 || currentslide >= $slides.length-4){
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

});