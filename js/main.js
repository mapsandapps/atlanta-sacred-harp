var navImg = document.querySelector("#menu-icon");
var navList = document.querySelector(".nav-list");
navImg.onclick = function () {
  var navImgSrc = navImg.getAttribute("src");
  if (navImgSrc === "images/menu-icon.png") {
    navList.setAttribute("style", "display: block");
    navImg.setAttribute("src", "images/close-icon.png");
  } else {
    navList.setAttribute("style", "display: none");
    navImg.setAttribute("src", "images/menu-icon.png");
  }
};
