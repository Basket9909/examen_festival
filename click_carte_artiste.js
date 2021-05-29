window.addEventListener('load',()=>{
    const flips = document.querySelectorAll('.flip')
    flips.forEach((flip)=>{
      flip.addEventListener('click',()=>{
        flip.classList.toggle('flipMe')
    })  
    })
    

})