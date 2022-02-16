
//**  mouse wheel start  **//
gsap.to(".mouseWheel" , {
  opacity:0,
  scrollTrigger: {
    trigger: ".mouseWheel",
    start: "0 80%",
    end:  "bottom 80%",
    scrub:true,
}
})

//**  services body background  **//
gsap.to(".logo", {
  duration:0.6,
  ease: "ease", 
  scrollTrigger: {
      trigger: ".home-firstSection",
      start: "0 70%",
      end:  "100% 70%",
      //scrub:1,
      toggleClass:  { targets: '.logo', className: 'logo--home' },
      //markers: true,
  }
});  
gsap.to(".logo", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-services", start: "0 70%", end:  "100% 70%",
      toggleClass:  { targets: '.logo', className: 'logo--services' },
      //markers: true,
  }
});  

//**  services body background  **//
/*
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-finance", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'green-body' },
      //markers: true,
  }
});  
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-marketing", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'red-body' },
      //markers: true,
  }
});  
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-legal", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'yellow-body' },
      //markers: true,
  }
});  
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-it", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'blue-body' },
      //markers: true,
  }
});  
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-hr", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'grey-body' },
      //markers: true,
  }
});  
gsap.to(".black-body", {
  duration:0.6, ease: "ease", 
  scrollTrigger: {
      trigger: ".home-commerce", start: "0 30%", end:  "100% 30%",
      toggleClass:  { targets: '.black-body', className: 'orange-body' },
      //markers: true,
  }
});  
*/
 
//**  services font color  **//
gsap.utils.toArray('.light').forEach(thisLight => {
  ScrollTrigger.create({
      trigger: thisLight,start:"0 30%", end:  "100% 30%",
      
      onEnter: () => 
      document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
      onEnterBack: () => 
      document.querySelector(':root').style.setProperty('--baseColor', '0, 0, 0'),
      onLeave: () => 
      document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
      onLeaveBack: () => 
      document.querySelector(':root').style.setProperty('--baseColor', '255, 255, 255'),
      markers: true,
  });
});

//**  logo caption change by services  **//
  ScrollTrigger.create({
    trigger: '.home-finance' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'green-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Finance',
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Finance',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Finance',
    onLeaveBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='Growth through Harmony',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.home-marketing' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'red-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Marketing',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Marketing',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.home-legal' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'yellow-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Legal',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Legal',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.home-it' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'blue-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/IT',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/IT',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.home-hr' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'grey-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/HR',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/HR',
    //markers: true,
  });
  ScrollTrigger.create({
    trigger: '.home-commerce' ,start:"0 30%", end:  "100% 30%",
    toggleClass:  { targets: '.black-body', className: 'orange-body' },
    onEnter: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Commerce',
    onEnterBack: () => 
    document.querySelector('.logo-captiopText').innerHTML='/Commerce',
    //markers: true,
  });