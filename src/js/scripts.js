// burger menu 
let header = document.querySelector(".header-line"),
    burger = document.querySelector(".burger")

burger.onclick = menuToggle 

function menuToggle (event){
  event.preventDefault()
  header.classList.toggle("active-header")
  burger.classList.toggle("active-burger")
}