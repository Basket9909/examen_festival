
    window.addEventListener('load',()=>{
        
        document.body.addEventListener('scroll',()=>{
        //console.log(fusees)
        const container = document.querySelector('.container_fus')
        const fusees = container.querySelectorAll('.fuseeLiftOff')

        var scrolling = document.documentElement.scrollTop || window.scrollY || window.pageYOffset || document.body.scrollTop
        //console.log(scrolling)
            const force = 1
        //console.log(container)
        const winH = window.innerHeight
        //console.log(winH)
        const posH = container.offsetTop
        //console.log(posH)
        const containerH = container.offsetHeight
        //console.log(containerH)
        const scroll = scrolling
        //console.log(scroll)

        const min = scroll+winH-posH
        
        const max = containerH+winH
        //console.log(max)
        let move = min/max
      // console.log(move)

        move = Math.max(0,move)
    //console.log(move)
        move = move/7
    //console.log(move)
		move = Math.min(1,move)
    //console.log(move)


       move = (move*2-1)
        //console.log(move)

        move = move*force
        //console.log(move)

        fusees.forEach(fus =>{
            //console.log(move)
		const deltaYfus = fus.getAttribute('data-movey')
        fus.style.transform = `translateY(${deltaYfus*move}%)`
        })
    })
})