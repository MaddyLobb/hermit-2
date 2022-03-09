//import { gsap } from "gsap";

var colorArray = ["#E7488F","#FF9900","#784F74","#EB6018","#D0B6E0","#D44C4C","#F366CC","#E7943B","#5D2397","#F58251","#A264D2","#FA8787"];
var colorButtons = document.querySelectorAll(".colors-svg-li");
var leftShell = document.querySelector("#main-shell-left");
var rightShell = document.querySelector("#main-shell-right");

export function buidPickerOptions(){
    colorButtons.forEach((button,i) => {
        // set the background color of each button
        button.style.fill = colorArray[i];

        button.addEventListener("click", () =>{
            // set the background color from the button that is clicked
            leftShell.style.fill = colorArray[i];
            rightShell.style.fill = colorArray[i];
        })
    });
}