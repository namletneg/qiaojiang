(function ($) {
    // 导航
    $('.touch').on('click', function () {
        $('.nav').width(window.innerWidth).toggle();
    });

    var $timber = $('.timber'),
        left;
    left = $timber.css('left');
    $('.nav li').hover(function () {
        var index = $(this).index('.nav li');

        $timber.css('left', 92 * index + 60);
    }, function () {
        $timber.css('left', left);
    });

    // banner
    var carousel = function () {
            var $item = $('.carousel').find('.box .item'),
                $active = $('.carousel').find('.box .active'),
                $dotItem = $('.carousel').find('.dot a'),
                $dot = $('.carousel').find('.dot .active');

            $active.hide().removeClass('active');
            $dot.removeClass('active');
            if($active.next().length){
                $active.next().show().addClass('active');
                $dot.next().addClass('active');
            } else{
                $($item[0]).show().addClass('active');
                $($dotItem[0]).addClass('active');
            }
        },
        timer = setInterval(function () {
            carousel();
        }, 5000);
})(jQuery);