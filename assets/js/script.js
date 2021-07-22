var sliderList = document.querySelector(".screen-app__list");
var sliderItems = document.querySelectorAll(".screen-app__item");
var sliderImgItems = document.querySelectorAll(".screen-app__item .screen-app__item-img");
// console.log(sliderItems);
var pre = document.querySelector(".pre");
var next = document.querySelector(".next");

var disable = 1;
var percent = 100 / (sliderItems.length + disable * 2);
var counter = 1;

sliderNumber(counter);

function sliderNumber(number = counter) {
    sliderList.style.transform = "translateX(-" + (number + disable) * percent + "%)";
    addAnimationImg(number);
} 

function nextSlider() {
    if(counter > sliderItems.length - 2) return;
    // console.log(counter);
    counter++;
    sliderList.style.transition = "transform 0.5s ease-in-out";
    
    sliderNumber(counter);
}

function autoNext() {
    setInterval(nextSlider, 2000)
}

function addAnimationImg(number = counter) {
    for (let index = 0; index < sliderImgItems.length; index++) {
        const element = sliderImgItems[index];
        element.style.animation = null;
    }
    if (number === sliderImgItems.length - 1) {
        sliderImgItems[1].style.animation = "scaleImg 0.5s ease-in-out forwards";

    }
    sliderImgItems[number].style.animation = "scaleImg 0.5s ease-in-out forwards";
}

sliderList.addEventListener("transitionend", () => {
    if(sliderItems[counter].id === "clone-end") {
        sliderList.style.transition = "none";
        counter = sliderItems.length - 2;
        sliderNumber(counter);
    }
    if(sliderItems[counter].id === "clone-start") {
        // console.log("start");    
        sliderList.style.transition = "none";
        counter = 1;
        sliderNumber(counter);
    }
});

// next.addEventListener("click", nextSlider);

autoNext();