const left = document.getElementById('btn-left')
const right = document.getElementById('btn-right')
const carrusel = document.getElementById('carrusel')

const carruselText = document.getElementById('carrusel-text')

window.addEventListener('change', () => {
    console.log("hola")
})

let move = 0

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


