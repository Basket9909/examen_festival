const lire = document.querySelector('.slide2_enSavoirPlus')
const texte = document.querySelector('.infos')
const moins = document.querySelector('#lireMoins')
lire.addEventListener('click',()=>{
    texte.innerHTML = `<b>Covid </b>:<b> Un test PCR</b> ou<b> une preuve de vaccination</b> sera exigé pour accéder au festival <br> <br>
    <b>Age minimum </b> : L’âge minimum pour pouvoir accéder au festival est de <b>17 ans.</b> Une légitimation sous forme d’une carte d’identité, d’un passeport ou d’un permis de conduire valide est obligatoire. <br>  <br>
    <b>Casier</b> : Des casiers seront accéssible au prix de 6€. Les casiers sont protéger par un cadena a chiffres. Pour être sûr d’avoir un casier, veuiller nous envoyer un mail avec votre numéro de commande à l‘ adresse <i>letsrave@festival.com</i> <br> <br>
    <b>Ouverture des portes</b> : Les portes ouvriront à partir de 20H30 et fermeront à 8H au plus tard. <b> Toute sortie du festival implique une sortie définitive.</b>
    `
    lire.style.display = `none`
    moins.style.display= `block`
})

moins.addEventListener('click',()=>{
    texte.innerHTML = `<b>Covid </b>:<b> Un test PCR</b> ou<b> une preuve de vaccination</b> sera exigé pour accéder au festival <br> <br>
    `
    lire.style.display = `block` 
    moins.style.display= `none`
    
})