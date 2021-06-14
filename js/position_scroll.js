
//const arrow = document.querySelector('#arrow')
//console.log(arrow)
var scrolling

window.addEventListener('scroll',(e)=>{
    
    scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop
    console.log(scrolling)
})