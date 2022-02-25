
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
  onLeave: () => 
  document.querySelector('.logo').classList.remove('logo--home'),
  onLeaveBack: () => 
  document.querySelector('.logo').classList.add('logo--home'),
  //markers: true,
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


let figure2 = 'M0,1280.2c22.4-19.2,48.3-59.2,108.5-119.3c61.1-61.1,147.3-65.5,234.7-76.4c201.5-25,173.1-245.8,296.3-245.8M0,1280.2c22.4-19.2,48.3-59.2,108.5-119.3c61.1-61.1,147.3-65.5,234.7-76.4c201.5-25,173.1-245.8,296.3-245.8 c135.1,0,1920.6,441.5,1920.6,441.5 M-0.8,1060.4c0,0,119.7,5.4,271.3-78.3c122.4-67.6,169.1-235.2,368.9-227.7 c225.4,8.4,1920.6,269.8,1920.6,269.8 M-0.8,768.1c0,0,99.5,30.6,233,1.3s301.7-94.5,407.2-91.2c211.1,6.6,1920.6,89.9,1920.6,89.9 M0,554c0,0,140.6-109.6,298.7-79.3C420.7,498.2,553.2,602,639.4,602c197.8,0,1920.6-89.9,1920.6-89.9 M0,239 c0,0,90.2,113,440.9,168.4c93.3,14.8,139,118.4,198.5,118.4C833.3,525.8,2560,256,2560,256 M0,0c41.6,28.6,58.1,33.2,191.4,69.9 c78,21.5,125.3,89.3,180,179.6c49.7,82.1,63.8,85.8,116.6,92.3c70.6,8.7,69.4,99.5,151.4,99.5S2560,0,2560,0'


new TimelineMax({
})
.to(".figure1", .8, {
  attr: { d: figure2 },
  scrollTrigger: {
    trigger: ".values", start:"100 100", end: "200 100",
    scrub:true,
    markers:true,
  }
})