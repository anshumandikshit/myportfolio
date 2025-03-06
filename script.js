const navbar = document.getElementById("navBar");
const skilsItems = document.querySelectorAll(".skills__card__item");
const header = document.querySelector(".header");
const scrollToMain = header.querySelector(".scroll-to-main");
const navHamburger = navbar.querySelector('.navBar__hamburger') ;
const sideBarNav = document.querySelector('.sidenav') ;
const mainGridContainer = document.querySelector('.gridContainer') ;

console.log("navHamburger------>>>>",navHamburger);

const allSections = document.querySelectorAll("section");

let navBarHeight = navbar.getBoundingClientRect().height;
const onNavBarClick = (event) => {
  // console.log(event) ;
  if (event.target.classList.contains("navItem")) {
    event.preventDefault();
    //const navBarHeight = navbar.getBoundingClientRect().height ;
    //console.log("navBarHeight----->>>>",navBarHeight); 
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    //targetElement.style.marginTop = `${2*navBarHeight}px` ;
    //console.log("marginTop----->>>>",targetElement.style.marginTop); 
    targetElement.scrollIntoView({
      behavior: "smooth",
      
    });
  }
};

const onScrollToMainClick = (event) => {
  const headerNextElement = header.nextElementSibling;
  headerNextElement.style.marginTop = `${navBarHeight + 100}px`;
  headerNextElement.scrollIntoView({
    behavior: "smooth",
    
  });
};

skilsItems.forEach((item) => {
  const skillVal = item.querySelector(".item__progressNumber");
  let val = skillVal.innerHTML.trim();
  // console.log("skillVal",skillVal) ;
  // console.log("skillValContent",skillVal.innerHTML.trim())
  const progressBar = item.querySelector(".progress-bar");
  progressBar.style.width = val;
});

//Stick- Navigation OnScroll Implementation

const headerObserverCallBack = (entries, observer) => {
  let [entry] = entries;
//   console.log(entry);
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
  threshold: 0.3,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

scrollToMain.addEventListener("click", onScrollToMainClick);
navbar.addEventListener("click", onNavBarClick);




//Navigation-hamburger on click

navHamburger.addEventListener('click',event =>{
  const hamburgerImg = event.target.closest('.btn') ;
  console.log("hamburgerImg------->>",hamburgerImg) ;
  if(hamburgerImg){
    sideBarNav.classList.add('sidenav__expanded') ;
  }
}) ;

sideBarNav.addEventListener('click',event=>{
  const closeBtn = event.target.closest('.btn--close');
  console.log("closeBtn------->>>",closeBtn) ;
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

