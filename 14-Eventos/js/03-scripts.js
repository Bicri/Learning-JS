const busqueda = document.querySelector('.busqueda');



//al presionar tecla    
// busqueda.addEventListener('keydown', ()=>{
//     console.log('escribiendo')
// })

//al presionar Y SOLTAR la tecla
// busqueda.addEventListener('keyup', ()=>{
//     console.log('escribiendo')
// })

// //al perder el foco
// busqueda.addEventListener('blur', ()=>{
//     console.log('saliendo del control')
// })


// busqueda.addEventListener('copy', ()=>{
//     console.log('copiando')
// })


// busqueda.addEventListener('paste', ()=>{
//     console.log('pegando')
// })

// busqueda.addEventListener('cut', ()=>{
//     console.log('cortando')
// })

//funciona como si fueran todos los anteriores excepto el blur
busqueda.addEventListener('input', (e)=>{
    //console.log(e)
    //console.log(e.type) //tipo de control
    //console.log(e.target) //instancia al control 
    //console.log(e.target.value) //trae el valor que hay en el control (acumulada)
    //console.log(e.data) //trae unicamente el valor de la tecla


    //validar input al borrar
    if(e.target.value === ''){
        console.log('Falló la validación')
    }

})