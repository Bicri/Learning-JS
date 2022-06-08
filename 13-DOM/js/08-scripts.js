

const navegacion = document.querySelector('.navegacion')

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);


console.log(navegacion)
console.log(navegacion.childNodes) //Los espacios enblanco son considerados elementos (como text aparecen)
console.log(navegacion.children) //elementos reales


console.log(navegacion.children[1].nodeName)
console.log(navegacion.children[1].nodeType)


const card = document.querySelector('.card');

//Recorrer hijos
// console.log(card.children[1].children[1].textContent)

// card.children[1].children[1].textContent = 'nuevo heading desde traversing the dom'

// card.children[0].src = 'img/hacer2.jpg'


//recorrer hacia el padre
console.log(card.parentNode)
console.log(card.parentElement.parentElement.parentElement)


//recorrer hacia el hermano
console.log(card.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling)