


$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 506 && $(this).scrollTop() < 1000) {
            $("body").addClass('bg-change1');
            $("body").removeClass('bg-change2');
        }
        if ($(this).scrollTop() < 506) {
            $("body").removeClass("bg-change1");
        }
        if ($(this).scrollTop() > 1000 && $(this).scrollTop() < 1400) {
            $("body").removeClass('bg-change1');
            $("body").removeClass('bg-change3');
            $("body").addClass('bg-change2');
        }
        if ($(this).scrollTop() > 1400 && $(this).scrollTop() < 1660) {
            $("body").removeClass('bg-change2');
            $("body").removeClass('bg-change4');
            $("body").addClass('bg-change3');
        }
        if ($(this).scrollTop() > 1660 && $(this).scrollTop() < 2700) {
            $("body").removeClass('bg-change3');
            $("body").removeClass('bg-change5');
            $("body").addClass('bg-change4');
        }
        if ($(this).scrollTop() > 2700 && $(this).scrollTop() < 4000) {
            $("body").removeClass('bg-change4');
            $("body").addClass('bg-change5');
            $("body").removeClass('bg-change6')
        }
        if ($(this).scrollTop() > 4000 && $(this).scrollTop() < 5300) {
            $("body").removeClass('bg-change5');
            $("body").addClass('bg-change6');
            $("body").removeClass('bg-change7');
        }
        if ($(this).scrollTop() > 5300) {
            $("body").removeClass('bg-change6');
            $("body").addClass('bg-change7');
        }
    });
});