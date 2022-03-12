import { gsap } from "gsap";


let sectionsAnimate = document.querySelectorAll(".sections-hover");

let typeWords = document.querySelectorAll(".type-words-total");

let clickMeSVG = document.querySelectorAll(".click-me-type");





console.log(sectionsAnimate.length + " is the length of the main sections");





const bottomTL = new gsap.timeline();
bottomTL.to("#bottom",{duration:0.25, drawSVG: "47% 100%"})
.to("#bottom",{duration:0.25});




export function sectionListners (){

    
    console.log("working");
    if(window.innerWidth <= 1048){

        sectionsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1.3, color: '#F5F5F5', transformOrigin: '50% 50%'})

                    gsap.to(clickMeSVG[i],{duration:10, rotate:360, transformOrigin: 'center', ease: "none", repeat: "-1"})
                })
       
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(typeWords[i],{duration:.5, scale: 1, stagger:.3, color: '#112E3E'})

                    gsap.to(clickMeSVG[i],{duration:1, rotate:0, transformOrigin: 'center', ease: "none", repeat: "0"})
             
                })


               
            });

        }else{
            sectionsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, color: '#E3BCBA', transformOrigin: '50% 50%', ease: "elastic", background: "transparent"})

                })
        
                link.addEventListener("mouseleave", ()=>{
                    gsap.to(sectionsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "transparent", color: '#112E3E'})


                })
            });
        }


    }
