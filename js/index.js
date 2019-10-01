// Your code goes here
// 10 event listners
// 1 - mouseover
// 2 - mouseleave
// 3 - click
// 4 - dblclick
// 5 - scroll
// 6 - resize
// 7 - 
// 8 - 
// 9 - 
// 10 - 
// prevent event propagation
// stop nav items from refreshing the page (preventDefault())

//      == 1 ==
const busHero = document.querySelector(".bus-img");
busHero.addEventListener("mouseover", () => {
    busHero.style.transform = "scale(100)";
    busHero.style.transition = "all 0.1s";
});

//      == 2 ==
busHero.addEventListener("mouseleave", () => {
    busHero.style.transform = "scale(1.0)";
    busHero.style.transition = "all 2s";
});

//      == 3 & 4 ==
document.querySelectorAll(".img-content").forEach(el => {
   el.addEventListener("click", () => {
        el.style.transform = "scale(0.2)";
        el.style.transition = "all .01s"
    });
    el.addEventListener("dblclick", () => {
        el.style.transform = "scale(10.0)";
        el.style.transition = "all 10s"
    });
});

 //      == 5 ==
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
    body.style.backgroundColor = "darkblue";
});

//      == 6 ==
const bikes = document.querySelector(".bottom-img");
window.addEventListener("resize", () => {
    bikes.src = "../img/bikes.gif";
});

//      == 7 ==
const moveColors = document.querySelector("body");
moveColors.addEventListener("mousemove", (e) => {
    moveColors.style.color = "rgb("+e.offsetX+","+e.offsetY+",100)";
});
