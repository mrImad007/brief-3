//select
function change() {
    let a=document.getElementById('food').value ;
    switch(a){
        case 'entrée': 
        document.querySelector('.menu1').style.display = 'flex'
        document.querySelector('.menu2').style.display = 'none'
        document.querySelector('.menu3').style.display = 'none'
        break

        case 'salade': 
        document.querySelector('.menu1').style.display = 'none'
        document.querySelector('.menu2').style.display = 'flex'
        document.querySelector('.menu3').style.display = 'none'
        break

        case 'sushi': 
        document.querySelector('.menu1').style.display = 'none'
        document.querySelector('.menu2').style.display = 'none'
        document.querySelector('.menu3').style.display = 'flex'
        break

        case 'all' :
        document.querySelector('.menu1').style.display = 'flex'
        document.querySelector('.menu2').style.display = 'flex'
        document.querySelector('.menu3').style.display = 'flex'
        break
    }
}

//fonction de calcul
    let prix = [40,45,50,50,65,70,55,100,120]
    let name = ['Dim sum','Nems','Gambas','yam nua','Wakame','yam talai','assort A','familly B','familly c']
    let totalPrice = 0
    let prixButtons = document.querySelectorAll('.btn');

    prixButtons.forEach(function(button) {
        button.addEventListener('click', function(){
            let id = button.getAttribute('id');
            let pr = prix[id]
            let n = name[id] 
            const AboutMe = `<div style="color:white">${n}  <span style="float:right" class="close2" >${pr} DH</span> </div>` 
            let p = document.createElement('p')
            p.innerHTML = AboutMe
            let parent = document.getElementById('p')
            parent.appendChild(p)
            totalPrice += prix[id]
            let Total = `Total : ${totalPrice}  DH` 
            document.getElementById('price').innerHTML = Total 
        })
    })

// function calcul(){
//     let Total = `Total : ${totalPrice}  DH` 
//     document.getElementById('price').innerHTML = Total 
// }

function valid(){
    alert('Votre commande est validé')
    location.reload();
}


//affichage du panier
let addition = document.querySelector('.banner')
let buttonAddition = document.querySelector('.fa-shopping-cart')
buttonAddition.addEventListener('click',function(){
    addition.classList.toggle('show-banner')
})

//affichage du burger
const burger = document.querySelector('.burger')
const links = document.querySelector('.nav-links')
burger.addEventListener('click' ,function(){
    links.classList.toggle('show')
})

