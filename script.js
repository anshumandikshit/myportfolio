const navbar = document.getElementById('navBar') ;
const skilsItems = document.querySelectorAll('.skills__card__item') ;
const header = document.querySelector('.header') ;
const scrollToMain = header.querySelector('.scroll-to-main');

const allSections = document.querySelectorAll('section') ;


let navBarHeight = navbar.getBoundingClientRect().height ;
const onNavBarClick = (event)=>{
    // console.log(event) ;
    if(event.target.classList.contains('navItem')){
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior : "smooth"
        }) ;
    }
};

const onScrollToMainClick = (event=>{
    const headerNextElement = header.nextElementSibling ;
    headerNextElement.style.marginTop = `${navBarHeight+100}px` ;
    headerNextElement.scrollIntoView({
        behavior : "smooth"
    })
});

skilsItems.forEach(item=>{
    const skillVal = item.querySelector('.item__progressNumber') ;
    let val = skillVal.innerHTML.trim() ;
    // console.log("skillVal",skillVal) ;
    // console.log("skillValContent",skillVal.innerHTML.trim())
    const progressBar = item.querySelector('.progress-bar') ;
    progressBar.style.width = val ;
});


//Stick- Navigation OnScroll Implementation 

const headerObserverCallBack = (entries,observer)=>{
    let [entry] = entries ;
    console.log(entry) ;
    if(!entry.isIntersecting){
        navbar.classList.add('navBar--sticky');
    }else {
        navbar.classList.remove('navBar--sticky');
    }

}
const headerObserver = new IntersectionObserver(headerObserverCallBack,{
    root : null,
    threshold : 0,
    rootMargin : `${-navBarHeight}px`
})

headerObserver.observe(header);
/////////////////////////////////////////

//on Scroll Animation while coming into page ;
allSections.forEach(section=>{
    section.classList.add('section--hidden');
});
const sectionObserverCallBack = (entries,observer)=>{
    let [entry] = entries ;
    if(!entry.isIntersecting) return ;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionObserverCallBack,{
    root : null,
    threshold : 0.30
});

allSections.forEach(section=>{
    sectionObserver.observe(section) ;
});




scrollToMain.addEventListener("click",onScrollToMainClick);
navbar.addEventListener("click",onNavBarClick);