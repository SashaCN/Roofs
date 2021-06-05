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
    img = document.querySelectorAll(".slider-line div"),
    imgArr = [],
    imgNumber = 0,
    sliderNav = document.querySelector(".navigation-line"),
    navContent = " ",
    deletedImg,
    deletedNavImg

left.onclick = slideLeft 
right.onclick = slideRight 

for(let i = 0; i < img.length; i++){
  img[i].setAttribute("data-picture-number", i)
  if(sliderNav.innerHTML == " "){
    sliderNav.innerHTML = `${img[i].outerHTML}`
    navContent = sliderNav.innerHTML
  }else{
    sliderNav.innerHTML = `${navContent}${img[i].outerHTML}`
    navContent = sliderNav.innerHTML
  }
}


let navSlide = document.querySelectorAll(".navigation-line div"),
navSlideWidth = navSlide[0].getBoundingClientRect().width
    
if(document.body.offsetWidth > 990){
  navSlide[2].classList.add("active-slide")  
  for(let i = 0; i < img.length; i++){
    img[i].style.transform = `translateX(-${img[1].getBoundingClientRect().width * 2}px)`
  }
}else{
  navSlide[1].classList.add("active-slide")  
  for(let i = 0; i < img.length; i++){
    img[i].style.transform = `translateX(-${img[1].getBoundingClientRect().width}px)` 
  }
}

function slideLeft (event){
  let img = document.querySelectorAll(".slider-line div"),
      navSlide = document.querySelectorAll(".navigation-line div")
  event.preventDefault()
  deletedImg = img[img.length - 1]
  sliderLine.removeChild(img[img.length - 1])
  sliderLine.insertBefore(deletedImg, sliderLine.firstElementChild)
  deletedNavImg = navSlide[navSlide.length - 1]
  sliderNav.removeChild(navSlide[navSlide.length - 1])
  sliderNav.insertBefore(deletedNavImg, sliderNav.firstElementChild)
}

function slideRight (event){
  let img = document.querySelectorAll(".slider-line div"),
      navSlide = document.querySelectorAll(".navigation-line div")
  event.preventDefault()
  deletedImg = img[0]
  sliderLine.removeChild(img[0])
  sliderLine.appendChild(deletedImg)
  deletedNavImg = navSlide[0]
  sliderNav.removeChild(navSlide[0])
  sliderNav.appendChild(deletedNavImg)
}

for(let i = 0; i < navSlide.length; i++){
  navSlide[i].onclick = widthCheck
}

function widthCheck (){
  if(document.body.offsetWidth > 990){
    goToSlide(event, 2)
  }else{
    goToSlide(event, 1)
  }
}

function goToSlide (event, middleSlide){
  console.log(middleSlide)
  let activeSlide = document.querySelector(`.navigation-line .active-slide`),
      img = document.querySelectorAll(".slider-line div"),
      navSlide = document.querySelectorAll(".navigation-line div")
  activeSlide.classList.remove("active-slide")  
  event.target.closest("div").classList.add("active-slide") 
  for(let a = 0; a < navSlide.length; a++){
    img[a].setAttribute("data-picture-number", a)
    navSlide[a].setAttribute("data-picture-number", a)
  }  
  if(event.target.closest("div").getAttribute("data-picture-number") > activeSlide.getAttribute("data-picture-number")){
    for(let c = middleSlide; c < event.target.closest("div").getAttribute("data-picture-number"); c++){
      let img = document.querySelectorAll(".slider-line div"),
          navSlide = document.querySelectorAll(".navigation-line div")
      deletedImg = img[0]
      sliderLine.removeChild(img[0])
      sliderLine.appendChild(deletedImg)
      deletedNavImg = navSlide[0]
      sliderNav.removeChild(navSlide[0])
      sliderNav.appendChild(deletedNavImg)
    }
  }else if(event.target.closest("div").getAttribute("data-picture-number") < activeSlide.getAttribute("data-picture-number")){
    for(let c = middleSlide; c > event.target.closest("div").getAttribute("data-picture-number"); c--){
      let img = document.querySelectorAll(".slider-line div"),
          navSlide = document.querySelectorAll(".navigation-line div")
      deletedImg = img[img.length - 1]
      sliderLine.removeChild(img[img.length - 1])
      sliderLine.insertBefore(deletedImg, sliderLine.firstElementChild)
      deletedNavImg = navSlide[navSlide.length - 1]
      sliderNav.removeChild(navSlide[navSlide.length - 1])
      sliderNav.insertBefore(deletedNavImg, sliderNav.firstElementChild)
    }
  }else{
    return false
  }
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
    
document.querySelectorAll("#about-us").forEach((e)=>{
  e.onclick = aboutScroll

})
document.querySelectorAll("#services").forEach((e)=>{
  e.onclick = servicesScroll

})
document.querySelectorAll("#examples").forEach((e)=>{
  e.onclick = examplesScroll

})
document.querySelectorAll("#contacts").forEach((e)=>{
  e.onclick = contactsScroll

})

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
    }, 0.3)
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

// titles lats line underline

(() => {
  const elements = document.querySelectorAll('.last-line')
  const nameElement = 'last-line-element'
  const nameRow = 'last-line-row'

  const wrapAll = (nodes, wrapper, elem) => {
    const parent = nodes[0].parentNode
    const { previousSibling } = nodes[0]
    for (let i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && (i += 1)) {
      wrapper.appendChild(nodes[i])
    }
    if (previousSibling) {
      parent.insertBefore(wrapper, previousSibling.nextSibling)
    } else {
      elem.appendChild(wrapper)
    }
    return wrapper
  }

  const findLastRow = (elem) => {
    const content = elem.innerText.trim()
    const contentArr = content.split(' ')
    let contentFormatted = ''
    contentArr.forEach((item) => {
      contentFormatted += `<span>${item} </span>`
    })
    const element = elem
    element.innerHTML = contentFormatted

    const childrenSpan = Array.from(elem.getElementsByTagName('span'))
    let top = 0
    childrenSpan.forEach((item) => {
      const thisTop = item.offsetTop
      if (thisTop === top) {
        item.classList.add(nameElement)
      } else {
        childrenSpan.forEach((el) => {
          el.classList.remove(nameElement)
        })
        top = thisTop
        item.classList.add(nameElement)
      }
    })

    const wrapElements = element.querySelectorAll(`.${nameElement}`)
    const wrapper = document.createElement('span')
    wrapper.classList.add(nameRow)
    wrapAll(wrapElements, wrapper, elem)
  }

  const findLastRows = () => {
    elements.forEach((elem) => {
      findLastRow(elem)
    })
  }

  window.addEventListener('resize', () => {
    findLastRows()
  })
  findLastRows()
})()