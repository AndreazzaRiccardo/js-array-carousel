
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg",];
const imgCont = document.querySelector(".items");

let stringImg = "";
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    stringImg += `<div class="item">
                    <img src=${element} alt="">
                 </div>`
}

imgCont.innerHTML += stringImg;

const imgItem = document.querySelectorAll(".item");

let activeIndex = 0;
imgItem[activeIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function(){
    if ( activeIndex < imgItem.length - 1) {
        imgItem[activeIndex].classList.remove("active");
        activeIndex++;
        imgItem[activeIndex].classList.add("active")
    }
})

document.querySelector(".prev").addEventListener("click", function(){
    if ( activeIndex > 0) {
        imgItem[activeIndex].classList.remove("active");
        activeIndex--;
        imgItem[activeIndex].classList.add("active")
    }
})