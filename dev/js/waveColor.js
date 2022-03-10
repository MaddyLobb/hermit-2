import { gsap } from "gsap";



export const waveColorTL = new gsap.timeline({paused:true});



const tanWaveTL = new gsap.timeline();
tanWaveTL.to("#tanWave-2",{duration:0.05, fill:"000"});

// const orangeWaveTL = new gsap.timeline();
// orangeWaveTL.to("#orangeWave",{duration:0.05, background:"#000", color:"000"});

// const pinkWaveTL = new gsap.timeline();
// pinkWaveTL.to("#pinkWave",{duration:0.05, background:"#000", color:"000"});

// const purpleWaveTL = new gsap.timeline();
// purpleWaveTL.to("#purpleWave",{duration:0.05, background:"#000", color:"000"});

// const darkPurpleWaveTL = new gsap.timeline();
// darkPurpleWaveTL.to("#darkPurpleWave",{duration:0.05, background:"#000", color:"000"});



waveColorTL.add(tanWaveTL, "wave")
            // .add(orangeWaveTL, "wave")
            // .add(pinkWaveTL, "wave")
            // .add(purpleWaveTL, "wave")
            // .add(darkPurpleWaveTL, "wave")

