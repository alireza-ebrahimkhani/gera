
  let height = document.querySelector('.services').clientHeight / 6;
  let logo_caption = document.querySelector('.logo-captiopText');
  ScrollTrigger.create({
    trigger: '.services' , start:() => "0 0", end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'green-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Finance Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/Finance Dept.',
    onLeaveBack: () => 
    logo_caption.innerHTML='Growth through Harmony',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() => "0 0", end:() => `+=${height}`,
    onEnter: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onEnterBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onLeave: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    onLeaveBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    toggleClass:  { targets: '.home-finance', className: 'services-service--show' },
  });

  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'red-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Marketing Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/Marketing Dept.',
   // markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-marketing', className: 'services-service--show' },
  });

  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 2}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'yellow-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Legal Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/Legal Dept.',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 2}`, end:() => `+=${height}`,
    onEnter: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onEnterBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onLeave: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    onLeaveBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    toggleClass:  { targets: '.home-legal', className: 'services-service--show' },
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 3}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'blue-body' },
    onEnter: () => 
    logo_caption.innerHTML='/IT Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/IT Dept.',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 3}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-it', className: 'services-service--show' },
  });

  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 4}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'grey-body' },
    onEnter: () => 
    logo_caption.innerHTML='/HR Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/HR Dept.',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 4}`, end:() => `+=${height}`,
       onEnter: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onEnterBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
    onLeave: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    onLeaveBack: () => 
    document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
    toggleClass:  { targets: '.home-hr', className: 'services-service--show' },
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 5}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'orange-body' },
        onEnter: () => 
    logo_caption.innerHTML='/Commerce Dept.',
    onEnterBack: () => 
    logo_caption.innerHTML='/Commerce Dept.',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 5}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-commerce', className: 'services-service--show' },
  });
 //**  mouse wheel **//
 gsap.to(".mouseWheel" , {
   duration:1,
  opacity:0,
  scrollTrigger: {
    trigger: ".services", start:"0 0", end:() => `+=${height/3}`,
    scrub:true,
    //markers:true,
}
})
//*  logo motions 
 ScrollTrigger.create({
  trigger: '.services' ,start:() => "0 0", end:  "100% 0",
  toggleClass:  { targets: '.logo', className: 'logo--services' },
  markers: true,
});

//**  pin services **//
ScrollTrigger.create({
  trigger: '.services' ,start:"0 0", end:() => `+=${height * 6}`,
  pin: true,
  pinSpacing: false,
  onLeave: () => 
  document.querySelector('.header').classList.remove('header--none'),
  onEnterBack: () => 
  document.querySelector('.header').classList.add('header--none'),
  //markers: true,
});

gsap.to(".mission" , {
  //duration:1,
  opacity:1,
  scrollTrigger: {
    trigger: ".mission", start:"100 100", end: "200 100",
    scrub:true,
    //markers:true,
  }
})

let animation = gsap.timeline({repeat:-1})
  animation.from(".mission-word", {opacity:0, stagger:1.5})
          .to(".mission-word", {opacity:0, stagger:1.5}, 1);

//**  value **//
let values_height = document.querySelector('.values').clientHeight / 5;
//figure 1
let line1_1 = 'm0 0 177 64 240.5 272.8 215.3 104.4L2560-.4'
let line2_1 = 'm0 321 463 82.9 169.8 116.8L2560 255.8'
let line3_1 = 'm0 503.3 333.9-29.7 298.9 126.6L2560 512'
let line4_1 = 'M0 640.1 301.2 772l331.6-92.4L2560 768.2'
let line5_1 = 'M2560 1024.4 632.8 759.1 242.7 989.8 0 1019.5'
let line6_1 = 'm0 1280.6 177-166 286-82.2 169.8-193.8 1927.2 442'
//figure 2
let line1_2 = 'm0 0 177 64 240.5 272.8 215.3 555L2560-.4'
let line2_2 = 'm0 321 463 219.9 169.8 430.3L2560 126.6'
let line3_2 = 'm0 503.3 333.9 63.4 298.9 453.2L2560 212'
let line4_2 = 'M0 640.1 301.2 772l331.6 358.2L2560 320.7'
let line5_2 = 'M2560 577.8 632.8 1209.7 242.7 989.8 0 710.1'
let line6_2 = 'm0 1280.6 177-166 286 16.9 169.8 138 1927.2 -442'
//figure 3
let line1_3 = 'm0 0 177 64 240.5 272.8 215.3 99L2560 628.5'
let line2_3 = 'm0 321 463 204.1 169.8 -9.8L2560 628.5'
let line3_3 = 'm0 503.3 333.9 63.4 298.9 28.1L2560 628.5'
let line4_3 = 'M0 640.1 301.2 772l331.6 -97.7L2560 628.5'
let line5_3 = 'M2560 628.5 632.8 753.7 242.7 989.8 0 1019.5'
let line6_3 = 'm0 1280.6 177-166 286 -126.9 169.8 -138 1927.2 -222'
//figure 4
let line1_4 = 'm0 0 177 64 240.5 272.8 215.3 99L2560 380.5'
let line2_4 = 'm0 321 463 204.1 169.8 -9.8L2560 464.1'
let line3_4 = 'm0 503.3 333.9 63.4 298.9 28.1L2560 553.5'
let line4_4 = 'M0 640.1 301.2 772l331.6 -97.7L2560 628.5'
let line5_4 = 'M2560 718.5 632.8 753.7 242.7 989.8 0 1019.5'
let line6_4 = 'm0 1280.6 177-166 286 -126.9 169.8 -138 1927.2 -20'
//figure 5
let line1_5 = 'm0 0 177 300 240.5 272.8 215.3 99L2560 628.5'
let line2_5 = 'm0 321 463 360.1 169.8 -9.8L2560 628.5'
let line3_5 = 'm0 503.3 333.9 143.4 298.9 28.1L2560 628.5'
let line4_5 = 'M0 640.1 301.2 772l331.6 -97.7L2560 628.5'
let line5_5 = 'M2560 628.5 632.8 673.7 242.7 889.8 0 1019.5'
let line6_5 = 'm0 1280.6 177-346 286 -126.9 169.8 -138 1927.2 -45'
//values text 
ScrollTrigger.create({
  trigger: '.values' , start:() => "0 0", end:() => `+=${values_height}`,
  onLeave: () => 
  document.querySelector('.value-holistic').classList.remove('values-infoItem--show'),
  onEnterBack: () => 
  document.querySelector('.value-holistic').classList.add('values-infoItem--show'),
  //markers: ture,
});
ScrollTrigger.create({
  trigger: '.values' , start:() =>`+=${values_height}` , end:() => `+=${values_height}`,
  toggleClass:  { targets: '.value-systematic', className: 'values-infoItem--show' },
  //markers: true,
});
ScrollTrigger.create({
  trigger: '.values' , start:() =>`+=${values_height * 2}` , end:() => `+=${values_height}`,
  toggleClass:  { targets: '.value-knowledge', className: 'values-infoItem--show' },
  //markers: true,
});
ScrollTrigger.create({
  trigger: '.values' , start:() =>`+=${values_height * 3}` , end:() => `+=${values_height}`,
  toggleClass:  { targets: '.value-result', className: 'values-infoItem--show' },
  //markers: true,
});
ScrollTrigger.create({
  trigger: '.values' , start:() =>`+=${values_height * 4}` , end:() => `+=${values_height}`,
  toggleClass:  { targets: '.value-efficiency', className: 'values-infoItem--show' },
  //markers: true,
});
ScrollTrigger.create({
  trigger: '.values' , start:() =>`+=${values_height * 5}` , end:() => `+=${values_height}`,
  onEnter: () => 
  document.querySelector('.value-integrity').classList.add('values-infoItem--show'),
  onLeaveBack: () => 
  document.querySelector('.value-integrity').classList.remove('values-infoItem--show'),
  //markers: false, 
});

//figure 2 to 3
gsap.fromTo(".line1" , {attr: { d: line1_2 }}, {attr: { d: line1_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true, markers:false}})
gsap.fromTo(".line2" , {attr: { d: line2_2 }}, {attr: { d: line2_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line3" , {attr: { d: line3_2 }}, {attr: { d: line3_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line4" , {attr: { d: line4_2 }}, {attr: { d: line4_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line5" , {attr: { d: line5_2 }}, {attr: { d: line5_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line6" , {attr: { d: line6_2 }}, {attr: { d: line6_3 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*3}`, end:() => `+=${values_height/2}`, scrub:true}})
//figure 3 to 4
gsap.fromTo(".line1" , {attr: { d: line1_3 }}, {attr: { d: line1_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true, markers:false}})
gsap.fromTo(".line2" , {attr: { d: line2_3 }}, {attr: { d: line2_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line3" , {attr: { d: line3_3 }}, {attr: { d: line3_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line4" , {attr: { d: line4_3 }}, {attr: { d: line4_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line5" , {attr: { d: line5_3 }}, {attr: { d: line5_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line6" , {attr: { d: line6_3 }}, {attr: { d: line6_4 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*4}`, end:() => `+=${values_height/2}`, scrub:true}})
//figure 4 to 5
gsap.fromTo(".line1" , {attr: { d: line1_4 }}, {attr: { d: line1_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true, markers:false}})
gsap.fromTo(".line2" , {attr: { d: line2_4 }}, {attr: { d: line2_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line3" , {attr: { d: line3_4 }}, {attr: { d: line3_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line4" , {attr: { d: line4_4 }}, {attr: { d: line4_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line5" , {attr: { d: line5_4 }}, {attr: { d: line5_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line6" , {attr: { d: line6_4 }}, {attr: { d: line6_5 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*5}`, end:() => `+=${values_height/2}`, scrub:true}})

//figure 1 to 2
gsap.fromTo(".line1" , {attr: { d: line1_1 }}, {attr: { d: line1_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true, markers:false}})
gsap.fromTo(".line2" , {attr: { d: line2_1 }}, {attr: { d: line2_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line3" , {attr: { d: line3_1 }}, {attr: { d: line3_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line4" , {attr: { d: line4_1 }}, {attr: { d: line4_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line5" , {attr: { d: line5_1 }}, {attr: { d: line5_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true}})
gsap.fromTo(".line6" , {attr: { d: line6_1 }}, {attr: { d: line6_2 }, scrollTrigger: { trigger: ".values", start:() => `+=${values_height*2}`, end:() => `+=${values_height/2}`, scrub:true}})

//pin values
ScrollTrigger.create({
  trigger: '.values' ,start:"0 0", end:() => `+=${values_height * 6}`,
  pin: true,
  pinSpacing: true,
  markers: false,
});

//pin values
ScrollTrigger.create({
  trigger: '.values' ,start:"0 0", end:() => `+=${values_height * 6}`,
  onEnter: () => 
  document.querySelector('.values-text').classList.add('values-text--show'),
  onLeaveBack: () => 
  document.querySelector('.values-text').classList.remove('values-text--show'),
  markers: false,
});

//pin hide sign
ScrollTrigger.create({
  trigger: '.values' ,start:"0 0", end:() => `+=${values_height}`,
  onLeave: () => 
  document.querySelector('.values-sign').classList.add('values-sign--hide'),
  onEnterBack: () => 
  document.querySelector('.values-sign').classList.remove('values-sign--hide'),
  markers: false,
});

//show skeleton
ScrollTrigger.create({
  trigger: '.values' ,start:"0 0", end:() => `+=${values_height}`,
  onLeave: () => 
  document.querySelector('.values-skeleton').classList.add('values-skeleton--show'),
  onEnterBack: () => 
  document.querySelector('.values-skeleton').classList.remove('values-skeleton--show'),
  markers: false,
});
