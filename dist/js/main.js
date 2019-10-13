// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.7)";
    // this.document.querySelector(".navbar-content").style.height = "4rem";
    // this.document.querySelector(".logo h2").style.fontSize = "1.2rem";
    // this.document.querySelector(".logo img").style.height = "40px";
  } else {
    this.document.querySelector("#navbar").style.background =
      "rgba(0, 0, 0, 0.5)";
    // this.document.querySelector(".navbar-content").style.height = "5rem";
    // this.document.querySelector(".logo h2").style.fontSize = "1.4rem";
    // this.document.querySelector(".logo img").style.height = "45px";
  }
});

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
      content.style.maxHeight = "445px";
      expandIcon.style.background =
        'url("./img/subtract.png") no-repeat center center/cover';
    }
  });
}
