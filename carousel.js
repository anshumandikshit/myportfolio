

const prevBtn = document.querySelector(".carousel__btn__btn--left");
const nextBtn = document.querySelector(".carousel__btn__btn--right");
const track = document.querySelector(".carousel__track");
const slides =Array.from(track.children) ;
const carouselNav = document.querySelector('.carousel__nav') ;
const navIndicators = Array.from(carouselNav.children) ;

const slideWidth = slides[0].getBoundingClientRect().width ;


slides.forEach((slide,index)=>{
    slide.style.left = `${slideWidth * index}px` ;
})



const hideShowBtn = (slides,targetIndex) =>{
    if(targetIndex===0){
        prevBtn.classList.add('hidden') ;
        nextBtn.classList.remove('hidden') ;
        
    }
    else if(targetIndex===slides.length-1){
        nextBtn.classList.add('hidden') ;
        prevBtn.classList.remove('hidden') ;
    }
    else{
        prevBtn.classList.remove('hidden') ;
        nextBtn.classList.remove('hidden') ;
    }
}

const updateDot = (currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide') ;
    targetDot.classList.add('current-slide') ;
}

const updateSlide = (track,currentSlide,targetSlide) =>{
    let amountToMove = parseFloat(targetSlide.style.left, 10);
    track.style.transform = "translateX(" + -amountToMove + "px)";
    currentSlide.classList.remove('current-slide') ;
    targetSlide.classList.add('current-slide');
}

nextBtn.addEventListener('click',()=>{
    const currentSlide = track.querySelector('.current-slide');
    let currentDot = carouselNav.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling ;
    updateSlide(track,currentSlide,nextSlide);
    updateDot(currentDot,currentDot.nextElementSibling);

    const nextSlideIndex = slides.findIndex(slide=>slide === nextSlide);
    hideShowBtn(slides,nextSlideIndex) ;
   
});


prevBtn.addEventListener('click',()=>{
    const currentSlide = track.querySelector('.current-slide');
    let currentDot = carouselNav.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling ;
    updateSlide(track,currentSlide,prevSlide);
    updateDot(currentDot,currentDot.previousElementSibling);

    const prevSlideIndex = slides.findIndex(slide=>slide === prevSlide);
    hideShowBtn(slides,prevSlideIndex) ;
});


carouselNav.addEventListener('click',(event)=>{

    const currentSlide = track.querySelector('.current-slide');
    let clickedButton = event.target.closest('.carousel__indicator');


    let clickedIndex = navIndicators.findIndex(item=> item === clickedButton);
    let targetSlide = slides[clickedIndex] ;
    updateSlide(track,currentSlide,targetSlide);

     let currentDot = carouselNav.querySelector('.current-slide');
     updateDot(currentDot,navIndicators[clickedIndex]) ;
     hideShowBtn(slides,clickedIndex) ;
})



