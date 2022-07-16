

document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar funcion de reproducción de contenido')
    }else{
        console.log('Pausar video');
    }
})