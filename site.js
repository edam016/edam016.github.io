function bgChanger() {
    console.log(this.scrollY);
    if (this.scrollY > 406 && this.scrollY < 936) {
        document.body.classList.add('bg-change1');
        document.body.classList.remove('bg-change2');
    }
    if (this.scrollY < 406) {
        document.body.classList.remove("bg-change1");
    }
    if (this.scrollY > 936 && this.scrollY < 1500) {
        document.body.classList.remove('bg-change1');
        document.body.classList.remove('bg-change3');
        document.body.classList.add('bg-change2');
    }
    if (this.scrollY > 1500 && this.scrollY < 1760) {
        document.body.classList.remove('bg-change2');
        document.body.classList.remove('bg-change4');
        document.body.classList.add('bg-change3');
    }
    if (this.scrollY > 1760 && this.scrollY < 2700) {
        document.body.classList.remove('bg-change3');
        document.body.classList.remove('bg-change5');
        document.body.classList.add('bg-change4');
    }
    if (this.scrollY > 2700 && this.scrollY < 4000) {
        document.body.classList.remove('bg-change4');
        document.body.classList.add('bg-change5');
        document.body.classList.remove('bg-change6')
    }
    if (this.scrollY > 4000 && this.scrollY < 4800) {
        document.body.classList.remove('bg-change5');
        document.body.classList.add('bg-change6');
        document.body.classList.remove('bg-change7')
    }
    if (this.scrollY > 4800 && this.scrollY < 9000) {
        document.body.classList.remove('bg-change6');
        document.body.classList.add('bg-change7');

    }
}

window.addEventListener("scroll", bgChanger);
window.addEventListener('scroll', scrollAppear);

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });