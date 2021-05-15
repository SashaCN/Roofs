// burger menu 
let header = document.querySelector(".header-line"),
    burger = document.querySelector(".burger")

burger.onclick = menuToggle 

function menuToggle (event){
  event.preventDefault()
  header.classList.toggle("active-header")
  burger.classList.toggle("active-burger")
}

// gallery slider 
let sliderLine = document.querySelector(".slider-line"),
    left = document.querySelector(".arr-left"),
    right = document.querySelector(".arr-right"),
    img = document.querySelectorAll(".slider-line img"),
    slideWidth = img[1].getBoundingClientRect().width

left.onclick = slideLeft 
right.onclick = slideRight 

function slideLeft (event){
  event.preventDefault() 
  if(sliderLine.scrollLeft != 0){
    console.log(slideWidth)
    sliderLine.scrollLeft = sliderLine.scrollLeft - slideWidth
  }else{
    sliderLine.scrollLeft = sliderLine.scrollWidth - slideWidth
  }
}
function slideRight (event){
  event.preventDefault() 
  if(sliderLine.scrollLeft + slideWidth >= sliderLine.scrollWidth - 10 && sliderLine.scrollLeft + slideWidth <= sliderLine.scrollWidth + 10){
    sliderLine.scrollLeft = 0
  }else{
    sliderLine.scrollLeft = sliderLine.scrollLeft + slideWidth
  }
}