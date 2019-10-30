const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
    //animate
    navLinks.forEach((link, newhome) => {
        link.style.animation = navLinkFade '0.5s ease forwards ${newhome / 7+1}s';
        console.log(newhome / 7);
    })
}

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

navSlide();