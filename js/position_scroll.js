
const arrow = document.querySelector('#arrow')

//console.log(arrow)
window.addEventListener('load',()=>{
    
    var scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop

    if(scrolling > 0){

        arrow.style.display = `block`
    }
    else{
    
        arrow.style.display = `none`
    }
    
document.body.addEventListener('scroll',(e)=>{
scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop
//console.log(scrolling)

if(scrolling > 0){

    arrow.style.display = `block`
}
else{

    arrow.style.display = `none`
}

})
})
