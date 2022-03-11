import { waveTL } from "./waveColor";
import { leftPickerOptions, rightPickerOptions } from "./colorPicker";
//import { foodCarousel } from "./carousel";

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

//? localStorage.getItem('theme') :null

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
//window.addEventListener('load', foodCarousel);

import { Fancybox } from "@fancyapps/ui";
// import { Carousel } from "@fancyapps/ui";

// const foodCarousel = new Carousel(document.querySelector(".carousel-1"), {
//     'center': false,
//     //slidesPerPage: 1,
// });

// // Customize Fancybox
// Fancybox.bind('[data-fancybox="gallery"]', {
//     Carousel: {
//       on: {
//         change: (that) => {
//           foodCarousel.slideTo(foodCarousel.findPageForSlide(that.page), {
//             friction: 0,
//           });
//         },
//       },
//     },
//   });
