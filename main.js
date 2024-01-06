import "./style.scss";
import gsap from "gsap";

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let variation = 1;

arrowRight.addEventListener("click", () => {
  if (variation < 6) {
    if (variation === 1) {
      gsap.to(".container-1 .burger-container img", {
        marginBottom: "-70px",
        y: 100,
      });
      gsap.to(".container-1 .burger-container img:nth-child(2)", {
        marginBottom: "-100px",
      });
      gsap.to(".container-1 .burger-title", {
        y: -325,
      });
    }
    if (variation === 2) {
      gsap.to("body", {
        background: "#0D722F",
      });
      gsap.to(".container-1, .container-3", {
        opacity: 0,
        transform: "translateX(-50%) translateY(100%)",
      });
      gsap.to(".container-2", {
        opacity: 1,
        transform: "translateX(-50%) translateY(-50%)",
      });
      gsap.to(".dot-1, .dot-3", {
        background: "transparent",
      });
      gsap.to(".dot-2", {
        background: "white",
      });
      gsap.to(".blur-1, .blur-3", {
        opacity: 0,
      });
      gsap.to(".blur-2", {
        opacity: 1,
      });
    }
    if (variation === 3) {
      gsap.to(".container-2 .burger-container img", {
        marginBottom: "-70px",
        y: 100,
      });
      gsap.to(".container-2 .burger-container img:nth-child(2)", {
        marginBottom: "-100px",
      });
      gsap.to(".container-2 .burger-title", {
        y: -325,
      });
    }
    if (variation === 4) {
      gsap.to("body", {
        background: "#C68300",
      });
      gsap.to(".container-1, .container-2", {
        opacity: 0,
        transform: "translateX(-50%) translateY(100%)",
      });
      gsap.to(".container-3", {
        opacity: 1,
        transform: "translateX(-50%) translateY(-50%)",
      });
      gsap.to(".dot-1, .dot-2", {
        background: "transparent",
      });
      gsap.to(".dot-3", {
        background: "white",
      });
      gsap.to(".blur-1, .blur-2", {
        opacity: 0,
      });
      gsap.to(".blur-3", {
        opacity: 1,
      });
    }
    if (variation === 5) {
      gsap.to(".container-3 .burger-container img", {
        marginBottom: "-70px",
        y: 100,
      });
      gsap.to(".container-3 .burger-container img:nth-child(2)", {
        marginBottom: "-100px",
      });
      gsap.to(".container-3 .burger-title", {
        y: -325,
      });
    }
    // if (variation === 6) {
    //   gsap.to("body", {
    //     background: "#861511",
    //   });
    //   gsap.to(".container-2, .container-3", {
    //     opacity: 0,
    //     transform: "translateX(-50%) translateY(100%)",
    //   });
    //   gsap.to(".container-1", {
    //     opacity: 1,
    //     transform: "translateX(-50%) translateY(-50%)",
    //   });
    //   gsap.to(".dot-2, .dot-3", {
    //     background: "transparent",
    //   });
    //   gsap.to(".dot-1", {
    //     background: "white",
    //   });
    //   gsap.to(".blur-2, .blur-3", {
    //     opacity: 0,
    //   });
    //   gsap.to(".blur-1", {
    //     opacity: 1,
    //   });
    // }
    variation++;
  }
  console.log("variation", variation);
});

arrowLeft.addEventListener("click", () => {
  if (variation > 1) {
    if (variation === 2) {
      gsap.to(".container-1 .burger-container img", {
        marginBottom: "0",
        y: 0,
      });
      gsap.to(".container-1 .burger-title", {
        y: 0,
      });
    }
    if (variation === 3) {
      gsap.to(".container-1 .burger-container img", {
        marginBottom: "-70px",
        y: 100,
      });
      gsap.to(".container-1 .burger-container img:nth-child(2)", {
        marginBottom: "-100px",
      });
      gsap.to(".container-1 .burger-title", {
        y: -325,
      });
      gsap.to("body", {
        background: "#861511",
      });
      gsap.to(".container-2, .container-3", {
        opacity: 0,
        transform: "translateX(-50%) translateY(100%)",
      });
      gsap.to(".container-1", {
        opacity: 1,
        transform: "translateX(-50%) translateY(-50%)",
      });
      gsap.to(".dot-2, .dot-3", {
        background: "transparent",
      });
      gsap.to(".dot-1", {
        background: "white",
      });
      gsap.to(".blur-2, .blur-3", {
        opacity: 0,
      });
      gsap.to(".blur-1", {
        opacity: 1,
      });
    }
    if (variation === 4) {
      gsap.to(".container-2 .burger-container img", {
        marginBottom: "0",
        y: 0,
      });
      gsap.to(".container-2 .burger-title", {
        y: 0,
      });
    }
    if (variation === 5) {
      gsap.to(".container-2 .burger-container img", {
        marginBottom: "-70px",
        y: 100,
      });
      gsap.to(".container-2 .burger-container img:nth-child(2)", {
        marginBottom: "-100px",
      });
      gsap.to(".container-2 .burger-title", {
        y: -325,
      });
      gsap.to("body", {
        background: "#0D722F",
      });
      gsap.to(".container-1, .container-3", {
        opacity: 0,
        transform: "translateX(-50%) translateY(100%)",
      });
      gsap.to(".container-2", {
        opacity: 1,
        transform: "translateX(-50%) translateY(-50%)",
      });
      gsap.to(".dot-1, .dot-3", {
        background: "transparent",
      });
      gsap.to(".dot-2", {
        background: "white",
      });
      gsap.to(".blur-1, .blur-3", {
        opacity: 0,
      });
      gsap.to(".blur-2", {
        opacity: 1,
      });
    }
    if (variation === 6) {
      gsap.to(".container-3 .burger-container img", {
        marginBottom: "0",
        y: 0,
      });
      gsap.to(".container-3 .burger-title", {
        y: 0,
      });
    }
    variation--;
  }
  console.log("variation", variation);
});
