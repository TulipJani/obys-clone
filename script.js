let tl = gsap.timeline();

tl.from(".line h1", {
  y: 100,
  stagger: 0.1,
  duration: 0.3,
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
  y: 700,
  ease: "expoScale",
  duration: 0.5,
  delay: 0.6,
});
tl.to("#loader", {
  display: "none",
});
