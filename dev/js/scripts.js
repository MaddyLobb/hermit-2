//import { gsap } from "gsap";
import { waveColorTL } from "./waveColor";
import { buidPickerOptions } from "./colorPicker";

buidPickerOptions();

//Darkmode//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
       // waveColorTL.play();
    }

    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light'); 
        //waveColorTL.reverse();
    }
    
    console.log(toggleSwitch.checked +'this is the value for the checkbox');


}

function waveColor(e){

    if(e.target.checked){
        console.log("here");
        waveColorTL.play();
    }

    else{
        waveColorTL.reverse();
    }
}
toggleSwitch.addEventListener('change', waveColor, true);
toggleSwitch.addEventListener('change', switchTheme, false);

//? localStorage.getItem('theme') :null

// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark'){
//         toggleSwitch.checked = true;
//     }
// }