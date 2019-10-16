
$(document).ready(function () {
    var myElement = $('.top');
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        myElement.css({
            'opacity': 4 - st / 300
        });
    });
});


