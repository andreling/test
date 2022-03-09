const slider = document.querySelector(".slider")
const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slidesNumber = 0;

nextbtn.addEventListener("click",()=> {
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon)=>{
        slideIcon.classList.remove("active");
    });

    slidesNumber++;

    if(slidesNumber > (numberOfSlides - 1)){
        slidesNumber = 0;
    }

    slides[slidesNumber].classList.add("active");
    slideIcons[slidesNumber].classList.add("active");
});

prevbtn.addEventListener("click",()=> {
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon)=>{
        slideIcon.classList.remove("active");
    });

    slidesNumber--;

    if(slidesNumber < 0){
        slidesNumber = numberOfSlides - 1;
    }

    slides[slidesNumber].classList.add("active");
    slideIcons[slidesNumber].classList.add("active");
});

var playSlider;
var repeater =()=>{
    playSlider = setInterval(function(){
        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon)=>{
            slideIcon.classList.remove("active");
        });
    
        slidesNumber++;
    
        if(slidesNumber > (numberOfSlides - 1)){
            slidesNumber = 0;
        }
    
        slides[slidesNumber].classList.add("active");
        slideIcons[slidesNumber].classList.add("active");

    },4000);
}
repeater();

slider.addEventListener("mouseover",()=>{
    clearInterval(playSlider)
});

slider.addEventListener("mouseout",()=>{
    repeater();
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.querySelector('nav ul')
const test = document.getElementsByClassName('mask')[0]
const closebtn = document.getElementsByClassName('btn')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  test.classList.toggle('active');

})

closebtn.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  test.classList.remove('active');

})