let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
window.addEventListener("scroll", function () {
  // let value=this.screenY
  stars.style.left = scrollY + "px";
  moon.style.top = scrollY * 2 + "px";
  mountains3.style.top = this.scrollY * 1.2 + "px";
  boat.style.top = scrollY + "px";
  boat.style.left = scrollY * 3 + "px";
  mountains4.style.left = this.screenY * 2 + "px";
  river.style.top = scrollY + "px";

});
