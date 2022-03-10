//import { gsap } from "gsap";
import { waveColorTL } from "./waveColor";
import { leftPickerOptions, rightPickerOptions } from "./colorPicker";

leftPickerOptions();
rightPickerOptions();

//Darkmode//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e){

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        //console.log(waveColorTL.checked+"wave play");
       // waveColorTL.play();
    }

    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light'); 
        //console.log(waveColorTL.checked+"wave reverse");
        //waveColorTL.reverse();
    }
    
    console.log(toggleSwitch.checked +'this is the value for the checkbox');


}

console.log(waveColorTL.checked+"wave play");

function waves(e){
    if (e.target.checked){
        waveColorTL.play();
    }
    else{
        waveColorTL.reverse(); 
    }

    console.log(toggleSwitch.checked +'this is the value for the waves');
}

toggleSwitch.addEventListener("change", waves, false);

toggleSwitch.addEventListener('change', switchTheme, false);

//? localStorage.getItem('theme') :null

// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark'){
//         toggleSwitch.checked = true;
//     }
// }