import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#tanWave",{transformOrigin:"right center", scale: 1.2});
gsap.set("#pinkWave",{transformOrigin:"right center", scale: 1.2});
gsap.set("#purpleWave",{transformOrigin:"left center", scale: 1.2});
gsap.set("#darkPurpleWave",{transformOrigin:"right center", scale: 1.2});
gsap.set("#crab",{transformOrigin:"right center"});
gsap.set("#closing-illustrations",{transformOrigin:"right center"});
gsap.set(".food-svg",{transformOrigin:"center"});
gsap.set("#tan-star-2",{transformOrigin:"center"});
gsap.set("#tan-star-3",{transformOrigin:"center"});


// gsap.set("#about-plant-2",{transformOrigin:"bottom center"});


export function photoTrigger(){
  const tl = new gsap.timeline();
  
  tl.from("#crab", {


    x:"+=200",
   
    alpha: 0, 
    scrollTrigger:{ 
    start: "top bottom",
    end: "bottom center",
    trigger: "#crab",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}

export function photoTrigger0(){
  const tl = new gsap.timeline();
  
  tl.from(".moving1", {


    x:"+=200",
    rotate: "360",
    alpha: 0, 
    scrollTrigger:{ 
    start: "top bottom",
    end: "bottom center",
    trigger: ".moving1",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}

export function photoTrigger1(){

  gsap.to("#tanWave", {
    // duration:4, 
    translateX: "+=50px",
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 20%",
    trigger: "#tanWave",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });
}

export function photoTrigger2(){

  gsap.to("#orangeWave-2", {
    // duration:4, 
    translateX: "-=50px",
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 20%",
    trigger: "#orangeWave-2",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });
}

export function photoTrigger3(){

  gsap.to("#pinkWave", {
    // duration:4, 
    translateX: "+=50px",
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 20%",
    trigger: "#pinkWave",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });
}

export function photoTrigger4(){

  gsap.to("#purpleWave", {
    // duration:4, 
    translateX: "-=50px",
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 20%",
    trigger: "#purpleWave",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });
}

export function photoTrigger5(){

  gsap.to("#darkPurpleWave", {
    // duration:4, 
    translateX: "+=50px",
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 20%",
    trigger: "#darkPurpleWave",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });
}

export function photoTrigger6(){
  const tl = new gsap.timeline();
  
  tl.from("#closing-illustrations", {


    x:"+=200",
    
    alpha: 0, 
    scrollTrigger:{ 
    start: "top bottom",
    end: "bottom center",
    trigger: "#closing-illustrations",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}

export function photoTrigger7(){
  const tl = new gsap.timeline();
  
  tl.from(".food-svg", {
    duration: 1,
    rotate: "360",
    // x:"+=200",
    // ease: "back",
    alpha: 0, 
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 40%",
    trigger: ".food-svg",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}

export function photoTrigger8(){
  const tl = new gsap.timeline();
  
  tl.from("#tan-star-2", {
    duration: 1,
    rotate: "360",
    // x:"+=200",
    // ease: "back",
    alpha: 0, 
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 40%",
    trigger: "#tan-star-2",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}

export function photoTrigger9(){
  const tl = new gsap.timeline();
  
  tl.from("#tan-star-3", {
    duration: 1,
    rotate: "360",
    // x:"+=200",
    // ease: "back",
    alpha: 0, 
    scrollTrigger:{ 
    start: "top center",
    end: "bottom 40%",
    trigger: "#tan-star-3",
    toggleActions: "restart none resume none",
    scrub: true,
    markers: true
    }

  });


}







