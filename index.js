


// service_j0j94cl   service 








// //   section 2

const leftPerspectives = [
    { x: -10, z: -4 },
    { x: -20, z: -8 },
    { x: -30, z: -12 },
    { x: -40, z: -16 },
    { x: -50, z: -20 },
    { x: 10, z: -4 },
  ];
  
  const rightPerspectives = [
    { x: 10, z: -4 },
    { x: 20, z: -8 },
    { x: 30, z: -12 },
    { x: 40, z: -16 },
    { x: 50, z: -20 },
    { x: -10, z: -4 },
  ];
  
  const leftCards = document.querySelectorAll(".left .item");
  const rightCards = document.querySelectorAll(".right .item");
  
  const translateImage = (target, p) => {
    target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
  };
  
  const animateCards = (c, perspectives) => {
    const count = parseInt(c.dataset.counter);
    translateImage(c, perspectives[count - 1]);
    c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
  };
  
  const loop = () => {
    setInterval(() => {
      leftCards.forEach((c) => {
        animateCards(c, leftPerspectives);
      });
  
      rightCards.forEach((c) => {
        animateCards(c, rightPerspectives);
      });
    }, 1000);
  };
  
  loop();
  // gsap.from(".tc", {
  //   opacity: 0,
  //   duration: 2,
  //   x:-1300,
  //   scrollTrigger: {
  //     trigger: ".page2",
  //     scroller: "body",
  //     // markers:true,
  //     start: "top 40%",
  //     end: "top 40%",
  //     scrub: 2,
  //   },
  // })
  
  
  
  // gsap.from(".mtc", {
  //   opacity: 0,
  //   duration: 2,
  //   x:-1300,
  //   scrollTrigger: {
  //     trigger: ".page2",
  //     scroller: "body",
  //     // markers:true,
  //     start: "top 0%",
  //     end: "top 40%",
  //     scrub: 2,
  //   },
  // })
  
  // gsap.from(".left", {
  //   x: -1300,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: ".gallery",
  //     scroller: "body",
  //     // markers:true,
  //     start: "top 50%",
  //     end: "top 40%",
  //     scrub: 2,
  //   },
  // });
  // gsap.from(".right", {
  //   x: 1300,
  //   duration: 2,
  
  //   scrollTrigger: {
  //     trigger: ".gallery",
  //     scroller: "body",
  //     // markers:true,
  //     start: "top 50%",
  //     end: "top 40%",
  //     scrub: 2,
  //   },
  // });
  
  
  
  // section 3
  
  // gsap.to(".page3 h1",{
  //     transform:"translateX(-160%)",
  //     scrollTrigger:{
  //       trigger:".page3",
  //       scroller:"body",
  //       // markers:true,
  //       start:"top 0%",
  //       end:"top -150%",
  //       scrub:2,
  //       pin:true
  //     }
  //   })
  
    // section4
  
  
    // gsap.from(".page4 h1", {
    //   opacity: 0,
    //   duration: 2,
    //   x:-1300,
    //   scrollTrigger: {
    //     trigger: ".page4",
    //     scroller: "body",
    //     // markers:true,
    //     start: "top 30%",
    //     end: "top 40%",
    //     scrub: 2,
    //   },
    // });
  
   
  
    //  var elems = document.querySelectorAll(".elem")
    
    //  elems.forEach(function(e){
    //   e.addEventListener("mouseenter",function(){
    //     var image = e.getAttribute("image1")
    //     var image2 = e.getAttribute("image2")
    //     var image3 = e.getAttribute("image3")
    //     var image4 = e.getAttribute("image4")
    //     var image5 = e.getAttribute("image5")
    //     var image6 = e.getAttribute("image6")
    //     var image7 = e.getAttribute("image7")
     
  
  
  
    //   // fix.style.backgroundImage = `url(${image})`
  
    //   var tl = gsap.timeline({ repeat: -1 })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image})`,
    //     duration:1,
        
    //     // delay:1,
    //   })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image2})`,
    //     duration:1,
    //     // delay:1,
    //   })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image3})`,
    //     duration:1,
    //     // delay:1,
    //   })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image4})`,
    //     duration:1,
    //     // delay:1,
    //   })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image5})`,
    //     duration:1,
    //     // delay:1,
    //   })
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image6})`,
    //     duration:1,
    //     // delay:1,
    //   })
  
    //   tl.to(".fix",{
    //     backgroundImage:  `url(${image7})`,
    //     duration:1,
    //     // delay:1,
    //   })
  
  
  
     
  
    
  
    //   })
    //  })
  
  
  
  
    //  secton 5
  
  
    
    gsap.from(".pc1", {
      opacity: 0,
      scale:0,
      duration: 2,
      
      scrollTrigger: {
        trigger: ".projects-section",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top 40%",
        scrub: 2,
      },
    });
  
    //  section6
    
  var chnage = document.querySelector(".chnage")
  
  chnage.addEventListener("mouseenter",function(){
    chnage.setAttribute("src","ok.jpeg")
  })
  
  chnage.addEventListener("mouseleave",function(){
    chnage.setAttribute("src","k2.jpeg")
  })
  
  gsap.from(".do a i", {
    opacity: 0,
    duration: 2,
    scale:0,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "body",
      // markers:true,
      start: "top 40%",
      end: "top 40%",
      scrub: 2,
    },
  });
  
  
  
  
  
  
  
  
  
  
  var tl = gsap.timeline();
  tl.from(".mh ,.n-img",{
    x:-150,
    duration:0.3,
  })
  
  tl.from(".navs1",{
    opacity:0,
    y:-100,
    duration:0.2,
  })
  
  tl.from(".navs2",{
    opacity:0,
    y:-100,
    duration:0.2
  
  })
  tl.from(".navs3",{
    opacity:0,
    y:-100,
    duration:0.2
  
  })
  tl.from(".navs4",{
    opacity:0,
    y:-100
  })
  
  
  tl.from(".rest",{
   opacity:0,
   scale:0.3,
   duration:0.3,
  //  rotate:360
  })
  
  tl.from(".edit",{
    opacity:0,
    scale:0.5,
  
  })
  
  tl.from(".hero",{
    opacity:0,
    scale:0,
    duration:0.4
  })
  
  tl.from(".e",{
    opacity:0,
    // scale:0,
    // x:-500,
    duration:0.7
  
  })
  tl.from(".i1 i",{
    opacity:0,
    duration:0.2
  })
  tl.from(".i2 i",{
    opacity:0,
    duration:0.2
  
  })
  tl.from(".i3 i",{
    opacity:0,
    duration:0.2
  
  })
  tl.from(".i4 i",{
    opacity:0,
    duration:0.2
  
  })
  tl.from(".i5 i",{
    opacity:0,
    duration:0.2
  
  })
  gsap.from(".About", {
    opacity: 0,
    duration: 2,
    x:-1300,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      end: "top 40%",
      scrub: 2,
    },
  })
  
  gsap.from(".fd", {
    opacity: 0,
    duration: 2,
    x:-1300,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
    },
  })
  
  gsap.from(".sd", {
    opacity: 0,
    duration: 2,
    x:1300,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
    },
  })
  
  
  gsap.from(".z", {
    opacity: 0,
    duration: 1,
    delay:1,
    scale:0,
    y:100,
    scrollTrigger: {
      trigger: ".about-container",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 40%",
      scrub: 2,
    },
  })
  
  gsap.from(".pat1", {
    opacity: 0,
    duration: 1,
    delay:1,
    scale:0,
    y:800,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 40%",
      scrub: 2,
    },
  })
  
  
  gsap.from(".pat2", {
    opacity: 0,
    duration: 1,
    delay:1,
    scale:0,
    y:100,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      // markers:true,
      start: "top 20%",
      end: "top 20%",
      scrub: 2,
    },
  })
  
  gsap.from(".pat3", {
    opacity: 0,
    duration: 1,
    delay:1,
    // scale:0,
    y:100,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top 10%",
      scrub: 2,
    },
  })
  
  var cursor = document.querySelector(".cursor")
  var bcur = document.querySelector(".cursorblur")
  
  document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    bcur.style.left = dets.x-150 + "px";
    bcur.style.top = dets.y-150+ "px";
  })
  
  
  // let hero = document.querySelector(".hero")
  
  // window.addEventListener("mousemove",function(e){
  //   let x = e.pageX;
  //   let y = e.pageY;
  //   console.log(x,y)
  //   // hero.style.x = x;
  //   hero.style.transform = 'translate('+x/7+'px,'+y/7+'px)'
  // })
  
  // let hero1 = document.querySelector(".hero1")
  
  // window.addEventListener("mousemove",function(e){
  //   let x = -e.pageX-200;
  //   let y = -e.pageY-200;
  //   console.log(x,y)
  //   // hero.style.x = x;
  //   hero1.style.transform = 'translate('+x/2+'px,'+y/2+'px)'
  // })
  
  
  gsap.from(".wh", {
    opacity: 0,
    duration: 1,
    delay:1,
    // scale:0,
    y:100,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 10%",
      scrub: 2,
    },
  })
  
  
  gsap.from(".con", {
    opacity: 0,
    duration: 1,
    // delay:1,
    // scale:0,
    y:100,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      end: "top 10%",
      scrub: 2,
    },
  })
  
  
  
  gsap.from(".form", {
    opacity: 0,
    duration: 1,
  
    scale:0,
    x:-1000,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "body",
      // markers:true,
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  })
  
  
  var cursor = document.querySelector(".cursor")
  
  window.addEventListener("mousemove",function(dets){
   cursor.style.left = dets.x-20+"px"
   cursor.style.top = dets.y-20+"px"
  
  })
  
  
  
  var image1 = document.querySelector(".e")
   
  image1.addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
      scale:2
    })
  })
  
  image1.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
      scale:1
    })
  })
  
  // Select the menu element
  var menu = document.querySelector(".menu");
  
  // Select all <a> elements within .snav
  var snav = document.querySelectorAll(".snav a");
  
  // Add a click event listener to the menu
    // Add click event listener to the menu
    menu.addEventListener("click", function() {
      // Toggle display of each <a> element
      snav.forEach((s) => {
          if (s.style.display === "block") {
              s.style.display = "none";
          } else {
              s.style.display = "block";
          }
      });
  });
  
  
  
  // Particle Generation
  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 20 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = Math.random() * 2 + 2 + 's';
        particle.style.opacity = Math.random();
        particlesContainer.appendChild(particle);
    }
  }
  
  // Move particles with mouse
  document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const xOffset = (Math.random() - 0.5) * 30; // Random x offset
        const yOffset = (Math.random() - 0.5) * 30; // Random y offset
        particle.style.transform = `translate(${(e.clientX * 0.05) + xOffset}px, ${(e.clientY * 0.05) + yOffset}px)`;
    });
  });
  
  createParticles();


  