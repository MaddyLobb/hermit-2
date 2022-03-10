//import { gsap } from "gsap";
import { gsap } from "gsap";
// import { waveTL } from "./waveColor";
import { leftPickerOptions, rightPickerOptions } from "./colorPicker";

leftPickerOptions();
rightPickerOptions();





const waveTL = new gsap.timeline({paused:true});

waveTL.to("#tanWave-2",{duration:0.05, fill:"#000"})
           .to("#orangeWave-2",{duration:0.05, fill:"000"})
           .to("#pinkWave-2",{duration:0.05, fill:"000"})
           .to("#purpleWave-2",{duration:0.05, fill:"000"})
           .to("#darkPurpleWave-2",{duration:0.05, fill:"000"});

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

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

window.addEventListener('load',  waveTL);
