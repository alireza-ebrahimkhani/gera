let sec2_height = document.querySelector('#sec2').clientHeight;
ScrollTrigger.create({
    trigger: '#sec2' , start:() => "0 0", end:() => `+=${sec2_height}`,
    pin: true,
    //markers: true,
  });