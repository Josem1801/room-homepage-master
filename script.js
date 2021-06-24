const left = document.getElementById('btn-left')
const right = document.getElementById('btn-right')
const carrusel = document.getElementById('carrusel')
const carruselText = document.getElementById('carrusel-text')
const hamburger = document.querySelector(".header__hamburger")
const nav = document.querySelector(".header__nav")
let move = 0

hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav-active')
    hamburger.classList.toggle('header__hamburger-active')
})

left.addEventListener('click', () => {
    move < 0 
    ? move += 100
    : move += -200
    carrusel.style.transform = `translateX(${move}%)`
    carruselText.style.transform = `translateY(${move}%)`
})
right.addEventListener('click', () => {
    move > -200 
    ? move -= 100
    : move -= -200
    carrusel.style.transform = `translateX(${move}%)`
    carruselText.style.transform = `translateY(${move}%)`

})


