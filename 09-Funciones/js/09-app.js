const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción ${id}...`);
    },
    pausar: function()
    {
        console.log("Pausando...");
    }
}


reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(id)
{
    console.log("Borrando song", id);
}

reproductor.borrar(30);