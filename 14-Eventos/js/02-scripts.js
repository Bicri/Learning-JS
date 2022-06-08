

//eventos de mouse

const nav = document.querySelector('.navegacion');

//ejecuta la acción despues de soltar el click
nav.addEventListener('click', ()=>{
    console.log('click en nav')
});

//Ejecuta la acción al hacer click
nav.addEventListener('mousedown', ()=>{
    console.log('down en el nav')
});

//ejecuta al soltar click 
nav.addEventListener('mouseup', ()=>{
    console.log('up en el nav')
});

//doble click
nav.addEventListener('dblclick', ()=>{
    console.log('double click en el nav')
});

nav.addEventListener('mouseenter', ()=>{
    console.log('entrando en nav')
    nav.style.backgroundColor = 'white'
});


nav.addEventListener('mouseout', ()=>{
    console.log('saliendo del nav')
    nav.style.backgroundColor = 'transparent'
});



