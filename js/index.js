// Your code goes here
// 10 event listners
// 1 - mouseover
// 2 - mouseleave
// 3 - click
// 4 - dblclick
// 5 - scroll
// 6 - resize
// 7 - mousemove
// 8 - keypress
// 9 - wheel
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
    busHero.style.transition = "all .2s";
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
const moveColors = document.querySelector("html");
moveColors.addEventListener("mousemove", (e) => {
    moveColors.style.color = "rgb("+e.offsetX+","+e.offsetY+",100)";
});



//      == 8 ==
const log = document.getElementById("log");
document.addEventListener("keypress", logKey);
function logKey(e) {
    log.textContent += `${e.code}`;
};



//      == 9 ==
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY*-.01;
    scale = Math.min(Math.max(.5, scale), 1);
    el.style.transform = `scale(${scale})`;
};
let scale = 1;
const el = document.querySelector("html");
el.onwheel = zoom;



//      == 10 ==
const audioBox = document.querySelector(".logo-heading");
audioBox.addEventListener("click", playSound);

const sound = new Audio();
sound.src = "http://static1.grsites.com/archive/sounds/vehicle/vehicle046.mp3";
sound.oncanplaythrough = function() {
    sound.readyToRock = true;
};

function playSound() {
    if (sound && sound.readyToRock) {
        sound.currentTime = 0;
        sound.play();
    }
}


//      == preventDefault() ==
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click" , (e) => {
        e.preventDefault();
    });
});

