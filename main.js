let nav = document.getElementById("navbar");
let head = document.getElementById("head");

window.onscroll = function () {
  if (this.scrollY >= 350) {
    //     nav.style.borderRadius = "20px 20px 0 0";
    //     head.style.position = "fixed";
    //     head.style.bottom = "0";
    //     nav.style.width = "50%";
    //     nav.style.bottom = "0";
    //     nav.style.position = "absolute";
    //     nav.style.backgroundColor = "#d946ef";
    nav.style.borderRadius = "0 0 20px 20px";
    nav.style.backgroundColor = "rgb(139, 95, 191,0.5)";
  }
  if (this.scrollY < 350) {
    //     nav.style.borderRadius = "0";
    //     head.style.top = "0";
    //     nav.style.width = "100%";
    //     head.style.height = "50px";
    //     head.style.backgroundColor = "transparent";
    nav.style.borderRadius = "0 ";
    nav.style.backgroundColor = "transparent";
  }
};

function showDetail1() {
  document.getElementById("pup1").classList.add("show");
}
function hideDetail1() {
  document.getElementById("pup1").classList.remove("show");
}
function showDetail2() {
  document.getElementById("pup2").classList.add("show");
}
function hideDetail2() {
  document.getElementById("pup2").classList.remove("show");
}
function showDetail3() {
  document.getElementById("pup3").classList.add("show");
}
function hideDetail3() {
  document.getElementById("pup3").classList.remove("show");
}
function showDetail4() {
  document.getElementById("pup4").classList.add("show");
}
function hideDetail4() {
  document.getElementById("pup4").classList.remove("show");
}
function showDetail5() {
  document.getElementById("pup5").classList.add("show");
}
function hideDetail5() {
  document.getElementById("pup5").classList.remove("show");
}

// show menu box
let menu = document.getElementById("menuBox");
let navIcon = document.getElementById("hamburger");

function showMenu() {
  menu.classList.toggle("show-box");
}

