function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 100,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5 = document.querySelector("#line1-part1 h5");
      let grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5.innerHTML = grow++;
        } else {
          h5.innerHTML = grow;
        }
      }, 30);
    },
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2.75,
    stagger: 0.5,
  });

  tl.from("#page1", {
    y: 1000,
    ease: "expoScale",
    duration: 0.5,
    delay: 0.6,
  });
  tl.from("nav", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("nav", {
    y: -100,
  });
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1", {
    y: 120,
    stagger: 0.075,
    ease: "expo",
    duration: 0.5,
    delay: 0.2,
  });
}

loadingAnimation();

Shery.mouseFollower();
Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
