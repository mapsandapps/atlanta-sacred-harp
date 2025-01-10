var navImg = document.querySelector("#menu-icon");
var navList = document.querySelector(".nav-list");
navImg.onclick = function () {
  var navImgSrc = navImg.getAttribute("src");
  var navImgFile = navImgSrc.split("/").pop();
  if (navImgFile === "menu-icon.png") {
    navList.setAttribute("style", "display: block");
    navImg.setAttribute("src", navImgSrc.replace(navImgFile, "close-icon.png"));
  } else {
    navList.setAttribute("style", "display: none");
    navImg.setAttribute("src", navImgSrc.replace(navImgFile, "menu-icon.png"));
  }
};
