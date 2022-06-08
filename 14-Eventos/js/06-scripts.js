

//event bubbling

const carDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const tituloDiv = document.querySelector('.titulo')

carDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("click en card")
})
infoDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("click en info")
})
tituloDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("click en titulo")
})

//poner en todos los hijos el stop propagation