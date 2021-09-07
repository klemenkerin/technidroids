new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,

  onLeave: (origin, destination, direction) => {
    if (destination.index === 1 && direction === "down") {
      const roadmaptl = gsap.timeline();
      roadmaptl
        .from(".roadmap h2", { opacity: 0, y: 60, duration: 0.4 }, "+=.6")
        .from(".roadmap-1", { opacity: 0, y: 60, duration: 0.4 }, ">")
        .from(
          ".roadmap-1 .roadmap-img",
          { opacity: 0, y: 30, duration: 0.4, stagger: 0.2 },
          ">"
        )
        .from(".roadmap-1 .roadmap-decorator", {
          opacity: 0,
          y: 30,
          x: -30,
          duration: 0.4,
        });
    } else if (destination.index === 2 && direction === "down") {
      const attributestl = gsap.timeline();
      attributestl
        .from(".attributes h2", { opacity: 0, y: 60, duration: 0.4 }, "+=.6")
        .from(".stacked-bar", { opacity: 0, y: 60, duration: 0.4 }, ">")
        .from(
          ".stacked-bar div",
          { opacity: 0, width: 0, duration: 0.3, stagger: 0.25 },
          ">"
        )
        .from(".attributes .robot-atr", {
          opacity: 0,
          x: "-100%",
          duration: 0.3,
          stagger: 0.2,
        });
    } else if (destination.index === 3 && direction === "down") {
      const bodytl = gsap.timeline();
      bodytl
        .from(".bodyparts h2", { opacity: 0, y: 60, duration: 0.4 }, "+=.6")
        .from(".bodyparts .bodybox", { opacity: 0, y: 60, duration: 0.4 }, ">")
        .from(
          ".bodyparts .slide:nth-child(1) .bodyimg",
          {
            duration: 0.4,
            opacity: 0,
            scale: 0.5,
            stagger: 0.3,
            ease: "elastic.out(1, 0.3)",
          },
          ">"
        )
        .from(
          ".bodyparts .bodyname",
          { opacity: 0, y: 60, duration: 0.4 },
          ">"
        );
    } else if (destination.index === 4 && direction === "down") {
      const teamtl = gsap.timeline();
      teamtl
        .from(".team h2", { opacity: 0, y: 60, duration: 0.4 }, "+=.6")
        .from(
          ".team .teambox-single",
          { opacity: 0, y: 60, duration: 0.3, stagger: 0.2 },
          ">"
        )
        .from(
          ".team .name-container",
          { opacity: 0, duration: 0.3, stagger: 0.2 },
          ">"
        );
    } else if (destination.index === 5 && direction === "down") {
      const buytl = gsap.timeline();
      buytl.from(
        ".buy .container",
        { opacity: 0, y: 60, duration: 0.4 },
        "+=.6"
      );
    } else if (destination.index === 6 && direction === "down") {
      const faqtl = gsap.timeline();
      faqtl
        .from(".faq h2", { opacity: 0, y: 60, duration: 0.4 }, "+=.6")
        .from(".faq .container", { opacity: 0, y: 60, duration: 0.4 }, ">");
    } else if (destination.index === 7 && direction === "down") {
      const footertl = gsap.timeline();
      footertl.from(
        ".footer > *",
        { opacity: 0, y: 60, duration: 0.4, stagger: 0.3 },
        "+=.6"
      );
    }
  },
});

const headertl = gsap.timeline();

headertl
  .from(".header-desc h1", { opacity: 0, y: -60, duration: 0.3 })
  .from(".header-desc h2", { opacity: 0, y: -60, duration: 0.3 }, ">")
  .from(
    ".robot-container",
    { opacity: 0, y: -30, duration: 0.4, stagger: 0.3 },
    ">"
  )
  .from(".robot-container", { rotation: 0, duration: 0.3, stagger: 0.2 }, ">");
