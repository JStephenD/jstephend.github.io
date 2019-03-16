$(function(){
    var $maincontainer = $('.instagram .images');
    var $imagescontainer = $maincontainer.find('.img-ig-container');
    var $images = $maincontainer.find('.img-ig');
    var $likes = $imagescontainer.find('.likes');
    var $num_posts = $('#posts');
    var num_images = $images.length;

    $num_posts.html(num_images);

    // OPACITY
    $images.on('mouseover', function(){
        $(this).css({'opacity': '0.5'});
    });
    $images.on('mouseleave', function(){
        $(this).css({'opacity': '1'});
    });

    $imagescontainer.on('mouseover', function(){
        var $rel = $(this).children().first().attr('rel');

        var width = $(this).width();
        var width_half = (width / 2 + 15) * -1;

        $imagescontainer.find('#'+$rel).css({
            'display': 'block',
            'position': 'relative',
            'top': width_half
        });
    });
    $imagescontainer.on('mouseleave', function(){
        var $rel = $(this).children().attr('rel');

        $imagescontainer.find('#'+$rel).css({
            'display': 'none'
        });
    });


});