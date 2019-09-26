function bgChanger() {
    console.log(this.scrollY);
    if (this.scrollY > 406 && this.scrollY < 824) {
        document.body.classList.add('bg-change1');
        document.body.classList.remove('bg-change2');
    }
    if (this.scrollY < 406) {
        document.body.classList.remove("bg-change1");
    }
    if (this.scrollY > 824 && this.scrollY < 2940) {
        document.body.classList.remove('bg-change1');
        document.body.classList.remove('bg-change3');
        document.body.classList.add('bg-change2');
    }
    if (this.scrollY > 2940 && this.scrollY < 4000) {
        document.body.classList.remove('bg-change2');
        document.body.classList.remove('bg-change4');
        document.body.classList.add('bg-change3');
    }
    if (this.scrollY > 4000 && this.scrollY < 6069) {
        document.body.classList.remove('bg-change3');
        document.body.classList.remove('bg-change5');
        document.body.classList.add('bg-change4');
    }
    if (this.scrollY > 6069) {
        document.body.classList.remove('bg-change4');
        document.body.classList.add('bg-change5');

    }
}

window.addEventListener("scroll", bgChanger);