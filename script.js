//Selectors
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length; // 5
let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount-1) * 100}vh`;

//Event Listeners
upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

//Functions
function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++

        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount-1;
        }
    }
    const height = container.clientHeight;
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
