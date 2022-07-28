

if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./sw.js').then(registrado => {
            console.log("Se instaló cotrrectamente ", registrado)
        })
        .catch( error => console.log("falló la instalación ", error))
}else{
    console.log("service workers no soportados");
}