$(function(){
    var $maincontainer = $('.instagram .images');
    var $imagescontainer = $maincontainer.find('.img-ig-container');
    var $images = $maincontainer.find('.img-ig');
    var $likes = $imagescontainer.find('.likes');
    var $num_posts = $('#posts');
    var num_images = $images.length;
    var $igmodal = $('.ig-modal');
    var $igmodaldisplay = $('.ig-modal.display');
    var $modalcontent = $igmodal.find('.modal-content');
    var $close = $modalcontent.find('.close');
    var $showimage = $modalcontent.find('#showimage');
    var $caption = $modalcontent.find('#caption');
    var $footer = $('.page-footer');

    $num_posts.html(num_images);

    // OPACITY
    $imagescontainer.on('mouseover', function(){
        $(this).children().first().css({'opacity': '0.5'});
    });
    $imagescontainer.on('mouseleave', function(){
        $(this).children().first().css({'opacity': '1'});
    });

    // LIKES
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

    // CONTENT
    $images.on('click', function(){
        $igmodaldisplay.css('display', 'flex');
        $footer.css({'background-color': 'rgba(0, 0, 0, 0.7)'});
        $footer.children().css({'display': 'none'});

        var imgsrc = $(this).attr('src');
        $showimage.attr('src', imgsrc);

        var text = $(this).siblings().last().html();
        $caption.html(text);
    });
    $close.on('click', function(){
        $igmodaldisplay.css('display', 'none');
        $footer.css({'background-color': ''});
        $footer.children().css({'display': 'block'});
    })
});