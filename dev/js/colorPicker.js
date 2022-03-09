//import { gsap } from "gsap";

var colorArray = ["#8ecae6","#219ebc","#023047","#ffb703","#fb8500"];
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