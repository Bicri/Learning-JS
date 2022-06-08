

const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (e)=>{
//     e.preventDefault(); //previene la acción de default del control en curso

//     // console.log(e) //muestra información del evento
//     //console.log(e.target) //trae el formulario
//     //console.log(e.target.method) //tipo de metodo
//     //console.log(e.target.action) //hacia donde va
// })

formulario.addEventListener('submit', validarForm);


function validarForm(e){
    e.preventDefault();
    console.log(e.target.action)
}