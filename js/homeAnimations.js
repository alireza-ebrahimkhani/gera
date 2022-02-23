
  let height = document.querySelector('.services').clientHeight / 7;
  let logo_caption = document.querySelector('.logo-captiopText');
  ScrollTrigger.create({
    trigger: '.services' , start:() => `+=${height}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'green-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Finance Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/Finance Department',
    onLeaveBack: () => 
    logo_caption.innerHTML='Growth through Harmony',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height}`, end:() => `+=${height}`,
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
    trigger: '.services' , start:() =>`+=${height * 2}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'red-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Marketing Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/Marketing Department',
   // markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 2}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-marketing', className: 'services-service--show' },
  });

  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 3}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'yellow-body' },
    onEnter: () => 
    logo_caption.innerHTML='/Legal Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/Legal Department',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 3}`, end:() => `+=${height}`,
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
    trigger: '.services' , start:() =>`+=${height * 4}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'blue-body' },
    onEnter: () => 
    logo_caption.innerHTML='/IT Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/IT Department',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 4}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-it', className: 'services-service--show' },
  });

  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 5}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'grey-body' },
    onEnter: () => 
    logo_caption.innerHTML='/HR Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/HR Department',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 5}`, end:() => `+=${height}`,
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
    trigger: '.services' , start:() =>`+=${height * 6}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.black-body', className: 'orange-body' },
        onEnter: () => 
    logo_caption.innerHTML='/Commerce Department',
    onEnterBack: () => 
    logo_caption.innerHTML='/Commerce Department',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.services' , start:() =>`+=${height * 6}`, end:() => `+=${height}`,
    toggleClass:  { targets: '.home-commerce', className: 'services-service--show' },
  });
 //**  mouse wheel **//
 gsap.to(".mouseWheel" , {
   duration:1,
  opacity:0,
  scrollTrigger: {
    trigger: ".services", start:"0 0", end:() => `+=${height}`,
    scrub:true,
    //markers:true,
}
})
//*  logo motions 
 ScrollTrigger.create({
  trigger: '.services' ,start:() => `+=${height / 2}`, end:  "100% 0",
  toggleClass:  { targets: '.logo', className: 'logo--services' },
  onLeave: () => 
  document.querySelector('.logo').classList.remove('logo--home'),
  onLeaveBack: () => 
  document.querySelector('.logo').classList.add('logo--home'),
  //markers: true,
});

//**  pin services **//
ScrollTrigger.create({
  trigger: '.services' ,start:"0 0", end:() => `+=${height * 7}`,
  pin: true,
  pinSpacing: false,
  onLeave: () => 
  document.querySelector('.header').classList.remove('header--none'),
  onEnterBack: () => 
  document.querySelector('.header').classList.add('header--none'),
  //markers: true,
});

let mission_height = document.querySelector('.mission').clientHeight;
gsap.from(".mission" , {
  duration:1,
  opacity:0,
  scrollTrigger: {
    trigger: ".mission", start:"100 100", end: "150 100",
    scrub:true,
    //markers:true,
  }
})

let animation = gsap.timeline({repeat:-1})
  animation.from(".mission-word", {opacity:0, stagger:2.5})
          .to(".mission-word", {opacity:0, stagger:2.5}, 2)