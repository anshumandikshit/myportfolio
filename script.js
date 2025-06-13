const navbar = document.getElementById("navBar");
const skillCardContainer = document.querySelector(".skills__card");
const skilsItems = document.querySelectorAll(".skills__card__item");
const header = document.querySelector(".header");
const scrollToMain = header.querySelector(".scroll-to-main");
const navHamburger = navbar.querySelector('.navBar__hamburger') ;
const sideBarNav = document.querySelector('.sidenav') ;
const mainGridContainer = document.querySelector('.gridContainer') ;



const allSections = document.querySelectorAll("section");

let navBarHeight = navbar.getBoundingClientRect().height;
const onNavBarClick = (event) => {

  if (event.target.classList.contains("navItem")) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      
    });
  }
};

const onScrollToMainClick = (event) => {
  const headerNextElement = header.nextElementSibling;
  //headerNextElement.style.marginTop = `${navBarHeight + 100}px`;
  headerNextElement.scrollIntoView({
    behavior: "smooth",
    
  });
};

skilsItems.forEach((item) => {
  const progressBar = item.querySelector(".progress-bar");
  progressBar.classList.remove("progress-bar--animated");
});

//Stick- Navigation OnScroll Implementation

const headerObserverCallBack = (entries, observer) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("navBar--sticky");
  } else {
    navbar.classList.remove("navBar--sticky");
  }
};
const headerObserver = new IntersectionObserver(headerObserverCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `${-navBarHeight}px`,
});

headerObserver.observe(header);
/////////////////////////////////////////

//on Scroll Animation while coming into page ;
allSections.forEach((section) => {
  section.classList.add("section--hidden");
});
const sectionObserverCallBack = (entries, observer) => {
  entries.forEach((entry) => {
    
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(sectionObserverCallBack, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
});


//intiate animation of MySkills cards when it intersecs for the first time 

const mySkillsCardObsCallback = (entries,observer) =>{
   entries.forEach((entry) => {
    
    if (!entry.isIntersecting) return;
    
    skilsItems.forEach((item) => {
    const skillVal = item.querySelector(".item__progressNumber");
    let val = skillVal.innerHTML.trim();
    const progressBar = item.querySelector(".progress-bar");
    progressBar.classList.add("progress-bar--animated");
    progressBar.style.width = val;
    
});
    observer.unobserve(entry.target);
  });
};
const MySkillsCardsObserver = new IntersectionObserver(mySkillsCardObsCallback,{
  root : null,
  threshold:0.3
});

MySkillsCardsObserver.observe(skillCardContainer);

/////////////////////////////////////////////////////////////////////////////

scrollToMain.addEventListener("click", onScrollToMainClick);
navbar.addEventListener("click", onNavBarClick);
sideBarNav.addEventListener("click",onNavBarClick) ;




//Navigation-hamburger on click

navHamburger.addEventListener('click',event =>{
  const hamburgerImg = event.target.closest('.navBar__hamburger-btn') ;
  if(hamburgerImg){
    sideBarNav.classList.add('sidenav__expanded') ;
  }
}) ;

sideBarNav.addEventListener('click',event=>{
  const closeBtn = event.target.closest('.btn--close');
  const navlink = event.target.closest('.navItem');
  if(closeBtn || navlink){
    sideBarNav.classList.remove('sidenav__expanded') ;
  }
}) ;

// mainGridContainer.addEventListener('click',event=>{
//   if(sideBarNav.classList.contains('sidenav__expanded')){
//     sideBarNav.classList.remove('sidenav__expanded');
//   }
// })

