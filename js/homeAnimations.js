gsap.to(".mouseWheel" , {
  opacity:0,
  scrollTrigger: {
    trigger: ".mouseWheel",
    start: "top 80%",
    end:  "bottom 80%",
    scrub:true,
}
})
gsap.utils.toArray('.dark').forEach(dark => {
  ScrollTrigger.create({
      trigger: dark,
      start: 'top 1px',
      end: 'bottom top',
      toggleClass:  { targets: '.header', className: 'white' },
      //markers: true,
  });
});