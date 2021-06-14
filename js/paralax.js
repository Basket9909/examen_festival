
const fusees = document.querySelectorAll('.fuseeLiftOff')
console.log(document)
document.addEventListener('scroll',()=>{
    const force = 1
//console.log(container)
const winH = window.innerHeight
//console.log(winH)
const posH = container.offsetTop
//console.log(posH)
const containerH = container.offsetHeight
//console.log(containerH)
const scroll = window.scrollY
console.log(scroll)

const min = scroll+winH-posH
const max = containerH+winH
let move = min/max
//console.log(move)

move = Math.max(0,move)
move = Math.min(1,move)

move = (move*2-1)

move = move*force

const deltaX = container.getAttribute('data-movex')
const deltaY = container.getAttribute('data-movey')
//console.log(deltaY)
container.style.transform = `translate(${deltaX*move}%,${deltaY*move}%)`

fusees.forEach(fusee =>{
const deltaXFus = fusee.getAttribute('data-movex')
const deltaYFus = fusee.getAttribute('data-movey')
fusee.style.transform = `translate(${deltaXSat*move}%,${deltaYSat*move}%)`
})
}) 