/* Sticky menu background */
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.8)";
    // this.document.querySelector("#navbar").style.backdropFilter = "blur(2px)";
    
  } else {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.20)";
    // this.document.querySelector("#navbar").style.backdropFilter = "none";
  }
});

/* Current navigation bar element */
let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  const navHeight = 81;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - navHeight <= fromTop &&
      section.offsetTop + section.offsetHeight - navHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

/* Smooth scrolling */
const nav = document.querySelector("#navbar");

mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    const offset = 80;
    targetPosition = target.offsetTop;
    offsetPosition = targetPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

/* Fancybox customizing */
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    //"zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
    //"thumbs",
    "close"
  ],
  animationEffect: "zoom-in-out",
  transitionEffect: "zoom-in-out",
  clickContent: function(current, event) {
    return current.type === "image" ? "next" : false;
  },
  loop: true
});

/* Up button */
window.addEventListener("scroll", function() {
  if (window.scrollY > 350) {
    this.document.querySelector(".up-button").style.opacity = "1";

    // TODO: change color on yellow background
    // if (window.scrollY > 900) {

    // }
  } else {
    this.document.querySelector(".up-button").style.opacity = "0";
  }
});

/* Collapsible service list */
const coll = document.getElementsByClassName("collapsible");

// console.log(coll);
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    const expandIcon = this.children[0];

    // Collapse list when scrolling
    window.addEventListener("scroll", () => {
      console.log("scrolling...");
      content.style.maxHeight = null;
      expandIcon.style.background =
        'url("./img/plus.png") no-repeat center center/cover';
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      expandIcon.style.background =
        'url("./img/plus.png") no-repeat center center/cover';
    } else {
      content.style.maxHeight = "350px";
      expandIcon.style.position = "absolute";
      expandIcon.style.top = "2.35rem";
      expandIcon.style.right = "2rem";
      expandIcon.style.height = "1.2rem";
      expandIcon.style.width = "1.2rem";
      expandIcon.style.color = "$dark-color";
      expandIcon.style.background =
        'url("./img/subtract.png") no-repeat center center/cover';
    }
  });
}
