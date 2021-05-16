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
let left = document.querySelector(".arr-left"),
    right = document.querySelector(".arr-right"),
    sliderLine = document.querySelector(".slider-line"),
    img = document.querySelectorAll(".slider-line img"),
    imgNumber = 0,
    sliderNav = document.querySelector(".navigation-line"),
    navContent = " "

left.onclick = slideLeft 
right.onclick = slideRight 

function slideLeft (event){
  let sliderLine = document.querySelector(".slider-line"),
      img = document.querySelectorAll(".slider-line img"),
      slideWidth = img[1].getBoundingClientRect().width
  event.preventDefault() 
  if(sliderLine.scrollLeft != 0){
    sliderLine.scrollLeft = sliderLine.scrollLeft - slideWidth
    imgNumber = imgNumber - 1
  }else{
    sliderLine.scrollLeft = sliderLine.scrollWidth - slideWidth
    imgNumber = img.length - 1
  }
  navScroll()
}
function slideRight (event){
  let sliderLine = document.querySelector(".slider-line"),
      img = document.querySelectorAll(".slider-line img"),
      slideWidth = img[1].getBoundingClientRect().width
  event.preventDefault() 
  if(sliderLine.scrollLeft + slideWidth >= sliderLine.scrollWidth - 10 && sliderLine.scrollLeft + slideWidth <= sliderLine.scrollWidth + 10){
    sliderLine.scrollLeft = 0
    imgNumber = 0
  }else{
    sliderLine.scrollLeft = sliderLine.scrollLeft + slideWidth
    imgNumber = imgNumber + 1
  }
  navScroll()
}

for(let i = 0; i < img.length; i++){
  img[i].setAttribute("data-picture-number", i)
  if(sliderNav.innerHTML == " "){
    sliderNav.innerHTML = `<div>${img[i].outerHTML}</div>`
    navContent = sliderNav.innerHTML
  }else{
    sliderNav.innerHTML = `${navContent}<div>${img[i].outerHTML}</div>`
    navContent = sliderNav.innerHTML
  }
}

let navSlide = document.querySelectorAll(".navigation-line img"),
navSlideWidth = navSlide[0].getBoundingClientRect().width

function navScroll (){
  for(let i = 0;  i < navSlide.length; i++){
    console.log(navSlide[i].getAttribute("data-picture-number"))
    if(navSlide[i].getAttribute("data-picture-number") == imgNumber){
      console.log("+")
      sliderNav.scrollTo(navSlide[i].parentElement.offsetLeft - sliderNav.offsetLeft, 0)
    }
  }
}

for(let i = 0; i < navSlide.length; i++){
  navSlide[i].parentElement.onclick = goToSlide
}

function goToSlide (){
  imgNumber = this.firstChild.getAttribute("data-picture-number")
  console.log(imgNumber)
  sliderLine.scrollTo(img[imgNumber].offsetLeft - sliderLine.offsetLeft, 0)
  sliderNav.scrollTo(navSlide[imgNumber].parentElement.offsetLeft - sliderNav.offsetLeft, 0)
}