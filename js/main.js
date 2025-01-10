var navImg = document.querySelector("#menu-icon");
var navList = document.querySelector(".nav-list");
navImg.onclick = function () {
  var navImgSrc = navImg.getAttribute("src");
  var navImgFile = navImgSrc.split("/").pop();
  if (navImgFile === "menu-icon.png") {
    navList.classList.add("visible");
    navImg.setAttribute("src", navImgSrc.replace(navImgFile, "close-icon.png"));
  } else {
    navList.classList.remove("visible");
    navImg.setAttribute("src", navImgSrc.replace(navImgFile, "menu-icon.png"));
  }
};
