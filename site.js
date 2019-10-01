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
    if (this.scrollY > 4000 && this.scrollY < 5300) {
        document.body.classList.remove('bg-change5');
        document.body.classList.add('bg-change6');
        document.body.classList.remove('bg-change7')
    }
    if (this.scrollY > 5300) {
        document.body.classList.remove('bg-change6');
        document.body.classList.add('bg-change7');

    }
}

window.addEventListener("scroll", bgChanger);
window.addEventListener('scroll', scrollAppear);

