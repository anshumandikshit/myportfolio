const navbar = document.getElementById('navBar') ;
const skilsItems = document.querySelectorAll('.skills__card__item') ;

// console.log(skilsItems) ;

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
}

skilsItems.forEach(item=>{
    const skillVal = item.querySelector('.item__progressNumber') ;
    let val = skillVal.innerHTML.trim() ;
    // console.log("skillVal",skillVal) ;
    // console.log("skillValContent",skillVal.innerHTML.trim())
    const progressBar = item.querySelector('.progress-bar') ;
    progressBar.style.width = val ;
})

navbar.addEventListener("click",onNavBarClick);