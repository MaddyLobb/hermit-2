import { Fancybox } from "@fancyapps/ui";
import { waveTL } from "./waveColor";
import { leftPickerOptions, rightPickerOptions } from "./colorPicker";
import { burgerTL, circleTL} from "./burgerAnimation"
import { displayWindowSize} from "./mobileResizing"
import { menuAnimation} from "./mobileMenu"
import { menuListners} from "./menu"
import { sectionListners } from "./sectionMain"
import { scrollPage} from "./pageScroll"
import { photoTrigger, photoTrigger0, photoTrigger2, photoTrigger3, photoTrigger4, photoTrigger5, photoTrigger6, photoTrigger7, photoTrigger8, photoTrigger9 } from "./scrollAnimation";
import { photoTrigger1 } from "./scrollAnimation";




leftPickerOptions();
rightPickerOptions();

//Darkmode//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log(waveTL.checked+"wave play");
        waveTL.play();
    }

    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light'); 
        console.log(waveTL.checked+"wave reverse");
        waveTL.reverse();
    }
    
    console.log(toggleSwitch.checked +'this is the value for the checkbox');


}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    waveTL.reverse();

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        waveTL.play();
    }
}

window.addEventListener('load',  waveTL);


Fancybox.bind('[data-fancybox="gallery-1"]', {
    Thumbs: false,
    Toolbar: false,
  
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
});

Fancybox.bind('[data-fancybox="gallery-2"]', {
    Thumbs: false,
    Toolbar: false,
  
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
});




var burgerButton = document.querySelector("#burger-svg")
let canISeeMenu = false;
let menuScrollable = true;



function openCloseMenu(){

    if(window.innerWidth <= 1048){
    if(canISeeMenu === false) {
        burgerTL.play();
        circleTL.play();


        menuAnimation.play();
        screenLocker();
        canISeeMenu = true;
        
    }else{
        burgerTL.reverse();
        // circleTL2.play();
        circleTL.reverse();
    
        menuAnimation.reverse();
        screenLocker();
        canISeeMenu = false;

    }
}
}

window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        openCloseMenu();

    }
});

burgerButton.addEventListener("click", openCloseMenu)

let navButtons = document.querySelectorAll(".nav-btns");
console.log(navButtons + "are the buttons");

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu)
    button.addEventListener("click", checkScrolling);
}



function checkScrolling(e) {


    const indexValue = [].indexOf.call(navButtons, e.target);
    e.stopPropagation();
    e.preventDefault();
    if (indexValue != -1) {
        scrollPage(indexValue - 1);
    }
}

// let navLogo = document.querySelectorAll(".logo-click");
// console.log(navLogo + " is the seashell logo");


// for (const button of navLogo){
//     button.addEventListener("click", checkScrolling2);


    
// }


// function checkScrolling2(e) {


//     const indexValue = [].indexOf.call(navLogo, e.target);
//     e.stopPropagation();
//     e.preventDefault();
//     if (indexValue != -1) {
//         scrollPage2(indexValue - 1);
//     }
// }



// for(let i = 0; i < navButtons.length; i++){
//     navButtons[i].addEventListener("click", openCloseMenu)
// }

// burgerButton.addEventListener("click", () =>{
    
//     console.log("burger clicked");

    

//     if(canISeeMenu === false) {
//         burgerTL.play();
//         circleTL.play();
//         burgerJumpTL.play();

//         menuAnimation.play();
//         screenLocker();
//         canISeeMenu = true;
        
//     }else{
//         burgerTL.reverse();
//         circleTL.reverse();
//         burgerJumpTL.pause();
//         menuAnimation.reverse();
//         screenLocker();
//         canISeeMenu = false;

//     }
// });

function screenLocker(){

    if(menuScrollable === true){

        window.onscroll = function(){window.scrollTo(0,0);};
        menuScrollable = false
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    }
       
    
}




window.addEventListener('load', sectionListners);

window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);

window.addEventListener('load', displayWindowSize);
window.addEventListener('resize', displayWindowSize);

window.addEventListener('load',  photoTrigger);
window.addEventListener('load',  photoTrigger0);
window.addEventListener('load',  photoTrigger1);
window.addEventListener('load',  photoTrigger2);
window.addEventListener('load',  photoTrigger3);
window.addEventListener('load',  photoTrigger4);
window.addEventListener('load',  photoTrigger5);
window.addEventListener('load',  photoTrigger6);
window.addEventListener('load',  photoTrigger7);
window.addEventListener('load',  photoTrigger8);
window.addEventListener('load',  photoTrigger9);