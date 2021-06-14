
//on donne une date cible
const date_fest = new Date ("september 9,2021 00:00:00")
//console.log(date_fest)

//on converti tout en millisecondes
const milJour = 24* 60* 60* 1000
const milHeure = 60* 60* 1000
const milMinute = 60* 1000
const milSeconde = 1000

//on installe une fonction pour le decompte
const decompte = ()=>{
    //on prend la date du jour
    const now = new Date()
    //console.log(now)

    //on calcule le nombre de milliseconde entre les deux dates
    let milDif = date_fest.getTime() - now.getTime()
    //console.log(mil_dif)

    //on calcule le nombre de jour en divisant avec math floor qui redonne le chiffre arondis et on calcules les millisecondes qu'il reste. on fait pareil pour le reste 
    const difJour = Math.floor(milDif/ milJour)
    milDif -= difJour * milJour
    //console.log(difJour)
    
    const difHeure = Math.floor(milDif/ milHeure)
    milDif -= difHeure * milHeure
    //console.log(difHeure)
    
    const difMinute = Math.floor(milDif/ milMinute)
    milDif -= difMinute * milMinute
    //console.log(difMinute)
    
    const difSeconde = Math.floor(milDif/ milSeconde)
    //console.log(difSeconde)

    const container = document.querySelector('.container')
    //console.log(container)
    
    const day = container.querySelector('.day')
    const t_day = container.querySelector('.t_day')
    day.innerHTML = difJour
    t_day.innerHTML = `Jours`
    if(difJour == 1 || difJour == 0){
        t_day.innerHTML = `Jour`
    }
    
    const hour = container.querySelector('.hour')
    const t_hour = container.querySelector('.t_hour')
    hour.innerHTML = difHeure
    t_hour.innerHTML = `Heures`
    if(difHeure == 1 || difHeure == 0){
        t_hour.innerHTML = `Heure`
    }
    
    const minut = container.querySelector('.minut')
    const t_minut = container.querySelector('.t_minut')
    minut.innerHTML = difMinute
    t_minut.innerHTML = `Minutes`
    if(difMinute == 1 || difMinute == 0){
        t_minut.innerHTML = `Minute`
    }
    
    const second = container.querySelector('.second')
    const t_second = container.querySelector('.t_second')
    second.innerHTML = difSeconde
    t_second.innerHTML = `Secondes`
    if(difSeconde == 1 || difSeconde == 0){
        t_second.innerHTML = `Seconde`
    }

    if(difJour == 0 && difHeure == 0 && difMinute == 0 && difSeconde == 0){
        day.innerHTML = 0
        hour.innerHTML = 0
        minut.innerHTML = 0
        second.innerHTML = 0
        time.remove()

    }

    if(difJour<0){
        day.innerHTML = 0
        hour.innerHTML = 0
        minut.innerHTML = 0
        second.innerHTML = 0
        time.remove()
    }
   
        day.innerHTML = ("0"+difJour).slice(-2)
        hour.innerHTML = ("0"+difHeure).slice(-2)
        minut.innerHTML = ("0"+difMinute).slice(-2)
        second.innerHTML = ("0"+difSeconde).slice(-2)



    //toute les secondes il relance la fonction
    const time = setTimeout("decompte()",1000) 
}
//on lance la fonction
decompte()