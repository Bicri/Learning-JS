
//eliminarlo por si mismo
const primerEnlace = document.querySelector('a')

console.log(primerEnlace)
primerEnlace.remove();


//desde el padre
const navegacion = document.querySelector('nav')
console.log(navegacion.children)
navegacion.removeChild(navegacion.children[0])//nodo
