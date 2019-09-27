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
