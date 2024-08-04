// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

function setCatURL(newUrl) {
  var url = newUrl;
  return function () {
    const catPic = document.querySelector("#catpic");
    catPic.setAttribute('src', url);
    catPic.className = "cat__pic";
  }
}
  
document.getElementById('caturl').addEventListener('mouseover', setCatURL('img/cats.JPG'));
