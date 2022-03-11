import { gsap } from "gsap";

export const waveTL = new gsap.timeline({paused:true});

waveTL.to("#tanWave-2",{duration:0.05, fill:"#DDB68B"})
           .to("#orangeWave-2",{duration:0.05, fill:"#DC9C7C"})
           .to("#pinkWave-2",{duration:0.05, fill:"#A54E5D"})
           .to("#purpleWave-2",{duration:0.05, fill:"#722B4A"})
           .to("#darkPurpleWave-2",{duration:0.05, fill:"#22152F"});

// const orangeWaveTL = new gsap.timeline();
// orangeWaveTL.to("#orangeWave",{duration:0.05, background:"#000", color:"000"});

// const pinkWaveTL = new gsap.timeline();
// pinkWaveTL.to("#pinkWave",{duration:0.05, background:"#000", color:"000"});

// const purpleWaveTL = new gsap.timeline();
// purpleWaveTL.to("#purpleWave",{duration:0.05, background:"#000", color:"000"});

// const darkPurpleWaveTL = new gsap.timeline();
// darkPurpleWaveTL.to("#darkPurpleWave",{duration:0.05, background:"#000", color:"000"});


