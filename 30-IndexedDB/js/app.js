let DB;

document.addEventListener('DOMContentLoaded',()=>{
    crmDB();

    setTimeout(()=>{
        crearCliente();
    },5000)
})

function crmDB(){
    //crear bd v1
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay un error
    crmDB.onerror = function (){
        console.log('Error al crear base de datos');
    }

    //si se creó bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');

        DB = crmDB.result;
    }

    //configuracion de la bd
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });

        //definir columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('telefono', 'telefono', { unique: false});

        console.log('Columnas creadas')

    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('transacción completada')
    }

    transaction.onerror = function(){
        console.log('eror en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 53824520,
        nombre: 'isaac',
        email: 'correo@gmail.com'
    };

    const peticion = objectStore.add(nuevoCliente);
    /**
     * Add agregar
     * put actualizar
     * delete eliminar
     */

    console.log(peticion); 
}