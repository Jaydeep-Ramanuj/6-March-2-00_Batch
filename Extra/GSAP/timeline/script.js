// gsap.to('.child:nth-child(1)', {
//   x: 200,
//   duration: 2,
//   delay: 1,
// });
// gsap.to('.child:nth-child(2)', {
//   x: 300,
//   duration: 2,
//   delay: 1,
// });
// gsap.to('.child:nth-child(3)', {
//   x: 400,
//   duration: 2,
//   delay: 1,
// });

// gsap.from('.child:nth-child(1)', {
//   y: 20,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
// });
// gsap.from('.child:nth-child(2)', {
//   y: 20,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
// });

let upSlide = {
  y: 20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
};

// gsap.from('.child:nth-child(1)', upSlide);
// gsap.from('.child:nth-child(2)', upSlide);
// gsap.from('.child:nth-child(3)', upSlide);
// gsap.from('.child:nth-child(4)', upSlide);
// gsap.from('.child:nth-child(5)', upSlide);

gsap.from('.child', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.3,
  //   repeat: 1,
  repeat: -1,
  //   yoyo: true,
  rotate: '360deg',
  scale: 0.3,
});
