/* Sticky menu background */
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.7)";
  } else {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.5)";
  }
});

/* Current navigation bar element */
let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  const navOffset = 81;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - navOffset <= fromTop &&
      section.offsetTop + section.offsetHeight - navOffset > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

/* Smooth scrolling */
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

    if (content.style.maxHeight) {
      console.log(content.style.maxHeight);
      content.style.maxHeight = null;
      expandIcon.style.background =
        'url("./img/plus.png") no-repeat center center/cover';
    } else {
      content.style.maxHeight = "350px";
      expandIcon.style.background =
        'url("./img/subtract.png") no-repeat center center/cover';
    }
  });
}
