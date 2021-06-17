const ticket = document.querySelector('#image_ticket')

window.addEventListener('load',()=>{

    var scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop
    
const slide = window.innerHeight
const width = window.innerWidth

if(width > 1000){
    if(scrolling > slide){

            ticket.style.display = `block`
        }
    else{
        
            ticket.style.display = `none`
        }
}else{
    ticket.style.display = `none`
}
   

document.body.addEventListener('scroll',(e)=>{
scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop
//console.log(scrolling)
const slide = window.innerHeight
const width = window.innerWidth
if(width > 700){
    if(scrolling > slide){

            ticket.style.display = `block`
        }
    else{
        
            ticket.style.display = `none`
        }
}else{
    ticket.style.display = `none`
}
})
})