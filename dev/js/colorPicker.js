//import { gsap } from "gsap";

var colorArrayLeft = ["#E7488F","#FF9900","#784F74","#EB6018","#D0B6E0","#D44C4C"];
var colorArrayRight = ["#F366CC","#E7943B","#5D2397","#F58251","#A264D2","#FA8787"];
var colorButtonsLeft = document.querySelectorAll(".color-svg-l");
var colorButtonsRight = document.querySelectorAll(".color-svg-r");
var leftShell = document.querySelector("#main-shell-left");
var rightShell = document.querySelector("#main-shell-right");

export function leftPickerOptions(){
    colorButtonsLeft.forEach((button,i) => {
        // set the background color of each button
        button.style.fill = colorArrayLeft[i];

        button.addEventListener("click", () =>{
            // set the background color from the button that is clicked
            leftShell.style.fill = colorArrayLeft[i];
        })
    });
}

export function rightPickerOptions(){
    colorButtonsRight.forEach((button,i) => {
        // set the background color of each button
        button.style.fill = colorArrayRight[i];

        button.addEventListener("click", () =>{
            // set the background color from the button that is clicked
            rightShell.style.fill = colorArrayRight[i];
        })
    });
}