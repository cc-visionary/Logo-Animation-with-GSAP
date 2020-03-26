const logo = document.querySelector('.logo');
const topLeft = logo.querySelector(".top-left");
const topRight = logo.querySelector(".top-right");
const bottomLeft = logo.querySelector(".bottom-left");
const bottomRight = logo.querySelector(".bottom-right");
const right = logo.querySelector(".right");
const left = logo.querySelector(".left");
const topSmallDia = logo.querySelector(".top-small-dia");
const topLargeDia = logo.querySelector(".top-large-dia");
const bottomSmallDia = logo.querySelector(".bottom-small-dia");
const bottomLargeDia = logo.querySelector(".bottom-large-dia");
const textCover = logo.querySelector(".text-cover");
const text = logo.querySelector(".text");

const encircleBox = new TimelineMax({});
    encircleBox
    .from(topLeft, .4, {scaleX: 0,})
    .from(topLargeDia, .4, {transformOrigin: "left", rotate: -90, scaleX: 0}, .20)
    .from(topSmallDia, .4, {transformOrigin: "left", rotate: -90, scaleX: 0}, .40)
    .from(topRight, .4, {scaleX: 0}, .60)
    .from(right, .4, {scaleY: 0}, .80)
    .from(bottomRight, .4, {transformOrigin: "right", scaleX: 0}, 1)
    .from(bottomLargeDia, .4, {transformOrigin: "bottom", rotate: -180}, 1.2)
    .from(bottomSmallDia, .4, {transformOrigin: "bottom", rotate: -180}, 1.4)
    .from(bottomLeft, .4, {transformOrigin: "right", scaleX: 0}, 1.6)
    .from(left, .4, {transformOrigin: "bottom", scaleY: 0}, 1.8)
    .from(text, 1, {opacity: 0}, 2.5)
    .to(logo, 1, {transformOrigin: "top left", scale: 0.25})

// const toggleMenu = new TimelineMax({paused: true, reversed : true});

// on hover
// hamburger.addEventListener('mouseenter', _ => {
//     if(hamburger.classList.contains('js-x')) {
//         return;
//     }
//     tlm
//         .staggerTo(lines, .5, {transformOrigin: "50% 50%", scaleX: 1.5, repeat: 1, yoyo: true, ease: "circ.out"}, 0.2)
// });

// toggleMenu
//     .to(lineOne, .25, {transformOrigin: "50% 50%", y: 20}, "line")
//     .to(lineThree, .25, {transformOrigin: "50% 50%", y: -20}, "line")
//     .to(hamburger, .5, {transformOrigin: "50% 50%", rotate: 360}, "rotate")
//     .to(lineOne, .125, {transformOrigin: "50% 50%", rotate: 45}, "cross")
//     .to(lineTwo, .125, {transformOrigin: "50% 50%", rotate: 45}, "cross")
//     .to(lineThree, .125, {transformOrigin: "50% 50%", rotate: -45}, "cross");

// hamburger.addEventListener('click', _ => {
//     hamburger.classList.toggle('js-x');
//     toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
// })
