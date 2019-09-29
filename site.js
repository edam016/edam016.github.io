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
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect();
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var section1 = documentquerySelector('.section1');
section1.addEventListener('click', function () {
    smoothScroll('.hi', 1000);
})

