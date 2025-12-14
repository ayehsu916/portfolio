const mobileNavToggleBtn=document.querySelector(".mobile-nav-toggle");
const mobileNavLinks=document.querySelector(".mobile-nav-links");
const mobileNavToggleLine2=document.querySelector(".mobile-nav-toggle-line2");
const mobileNavToggleLine1=document.querySelector(".mobile-nav-toggle-line1");
const mobileNavToggleLine3=document.querySelector(".mobile-nav-toggle-line3");

mobileNavToggleBtn.addEventListener("click",()=>{
    //animation for mobile nav links
    mobileNavLinks.classList.toggle("active-mobile-nav-links");

    //animation for burger button
    mobileNavToggleLine2.classList.toggle("active-mobile-nav-toggle-line2");
    mobileNavToggleLine1.classList.toggle("active-mobile-nav-toggle-line1");
    mobileNavToggleLine3.classList.toggle("active-mobile-nav-toggle-line3");
});

mobileNavLinks.addEventListener("click",(e)=>{
    if((e.target.tagName="a")){
    //animation for mobile nav links
    mobileNavLinks.classList.toggle("active-mobile-nav-links");

    //animation for burger button
    mobileNavToggleLine2.classList.toggle("active-mobile-nav-toggle-line2");
    mobileNavToggleLine1.classList.toggle("active-mobile-nav-toggle-line1");
    mobileNavToggleLine3.classList.toggle("active-mobile-nav-toggle-line3");
    }
});

