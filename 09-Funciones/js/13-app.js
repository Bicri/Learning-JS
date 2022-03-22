const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción ${id}...`),
    pausar: () =>console.log("Pausando..."),

    set nuevosong(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenersong(){
        console.log(this.cancion);
    }
}


reproductor.nuevosong = "Enter sandman",
reproductor.obtenersong;

reproductor.reproducir(30);
reproductor.pausar();