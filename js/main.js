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
});