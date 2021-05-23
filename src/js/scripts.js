document.querySelector("header").style.paddingTop = `${document.querySelector(".header-line").getBoundingClientRect().height}px`

// burger menu 
let header = document.querySelector(".header-line"),
    burger = document.querySelector(".burger")

burger.onclick = menuToggle 

function menuToggle (event){
  event.preventDefault()
  header.classList.toggle("active-header")
  burger.classList.toggle("active-burger")
}

//phone on soc line toggle 

let phone = document.querySelector(".phone-soc"),
    phoneSvg = document.querySelector(".phone-soc > a")

phoneSvg.onclick = checkPhone

function checkPhone (e){
  if(!phoneSvg.closest(".phone-soc").classList.contains("active-phone")){
    e.preventDefault()
  }
}

phone.onclick = phoneClick

function phoneClick (e){
  if(phone.classList.contains("active-phone") && e.target != this){
  }else{
    phone.classList.toggle("active-phone")
  }
  phoneClose(event)
}

document.body.onclick = phoneClose

function phoneClose (event){
  if(event.target != phone && !phone.contains(event.target)){
    phone.classList.remove("active-phone")
  }
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
    if(navSlide[i].getAttribute("data-picture-number") == imgNumber){
      sliderNav.scrollTo(navSlide[i].parentElement.offsetLeft - sliderNav.offsetLeft, 0)
    }
  }
}

for(let i = 0; i < navSlide.length; i++){
  navSlide[i].parentElement.onclick = goToSlide
}

function goToSlide (){
  imgNumber = this.firstChild.getAttribute("data-picture-number")
  sliderLine.scrollTo(img[imgNumber].offsetLeft - sliderLine.offsetLeft, 0)
  sliderNav.scrollTo(navSlide[imgNumber].parentElement.offsetLeft - sliderNav.offsetLeft, 0)
}

// scroll animations

let animLeft = document.querySelectorAll(".animation-left"),
    animRight = document.querySelectorAll(".animation-right"),
    animBottom = document.querySelectorAll(".animation-bottom"),
    animFade = document.querySelectorAll(".animation-fade"),
    startAnim = window.innerHeight - (window.innerHeight*15/100)

    window.onwheel = checkScroll
    window.onscroll = checkScroll
    
function checkScroll (){
  animLeft.forEach((elem)=>{  
    if(window.pageYOffset + startAnim >= elem.offsetTop && window.pageYOffset <= elem.offsetTop){
      elem.classList.remove("animation-left")
    }
  })
  animRight.forEach((elem)=>{  
    if(window.pageYOffset + startAnim >= elem.offsetTop && window.pageYOffset <= elem.offsetTop){
      elem.classList.remove("animation-right")
    }
  })
  animBottom.forEach((elem)=>{  
    if(window.pageYOffset + startAnim >= elem.offsetTop && window.pageYOffset <= elem.offsetTop){
      elem.classList.remove("animation-bottom")
    }
  })
  animFade.forEach((elem)=>{  
    if(window.pageYOffset + startAnim >= elem.offsetTop && window.pageYOffset <= elem.offsetTop){
      elem.classList.remove("animation-fade")
    }
  })
}

//header scroll to 

let sectionAbout = document.querySelector(".about-us"),
    sectionServices = document.querySelector(".services"),
    sectionWorks = document.querySelector(".examples"),
    sectionContacts = document.querySelector("footer"),
    offset = window.pageYOffset
    
document.querySelector("#about-us").onclick = aboutScroll
document.querySelector("#services").onclick = servicesScroll
document.querySelector("#examples").onclick = examplesScroll
document.querySelector("#contacts").onclick = contactsScroll

function scrollDown (section){
  if(offset > section.offsetTop - 40){
    offset = offset - 20
  }else{
    offset = offset + 20
  }
  window.scrollTo(0, offset)
  if(offset < section.offsetTop - 60 || offset > section.offsetTop - 20){
    setTimeout(() => {
      scrollDown (section)
    }, 1);
  }
}

function aboutScroll(e){
  e.preventDefault()
  scrollDown(sectionAbout)
}
function servicesScroll(e){
  e.preventDefault()
  scrollDown(sectionServices)
}
function examplesScroll(e){
  e.preventDefault()
  scrollDown(sectionWorks)
}
function contactsScroll(e){
  e.preventDefault()
  scrollDown(sectionContacts)
}