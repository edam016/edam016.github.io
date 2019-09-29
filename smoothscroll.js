$(document).ready(function () {
    $('a').on('click', function (event) {

        var href = $(this).attr('href');
        if (href == '#about' || href == '#cv' || href == '#mailMe') {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1250, function () {

                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {

    $('body').css('display', 'none');
    $('body').delay(100).fadeIn(1250);
});

$(document).ready(function () {

    $(this).scrollTop(0);
});

$('#backToTop').on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1750)
});