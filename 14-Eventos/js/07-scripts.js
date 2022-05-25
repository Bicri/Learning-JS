//event bubbling --> detenerlo con delegation

const carDiv = document.querySelector('.card')


carDiv.addEventListener('click',(e)=>{

    if(e.target.classList.contains('titulo')){
        console.log("click titulo")
    }
    if(e.target.classList.contains('precio')){
        console.log("click precio")
    }
    if(e.target.classList.contains('card')){
        console.log("click card")
    }
})
