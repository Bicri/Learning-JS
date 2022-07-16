


const notificarbtn = document.querySelector('#notificar');

notificarbtn.addEventListener('click', ()=>{
    Notification.requestPermission()
        .then(resultado => {
            console.log(resultado)
        });
});

const verNotificzcion = document.querySelector('#verNotificacion');
verNotificzcion.addEventListener('click',()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación xd',{
            icon: 'img/ccj.png',
            body: 'Codigo con JUAN'
        })

        notificacion.onclick = function(){
            window.open('https://www.codigoconjuan.com');
        }
    }
});
