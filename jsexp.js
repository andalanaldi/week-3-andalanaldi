const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".small-menu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuitem) { 
    menuitem.addEventListener("click", toggleMenu);
  }
)  

// function wintersMode() {
//   let element = document.body;
//   let content = document.getElementById("WintersModetext");
//   element.className = "winters-mode";
//   content.innerText = "Winter white Mode is ON";
// }

function wintersMode() {
  var element = document.body;
  element.classList.toggle("winters-mode");
}