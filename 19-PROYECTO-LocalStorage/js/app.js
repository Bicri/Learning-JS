//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweet = document.querySelector('#tweet');
let tweets = [];



//Listeners
eventListeners()
function eventListeners(){

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    })

    formulario.addEventListener('submit', agregarTweet);
}


//Funciones
function agregarTweet(e){
    e.preventDefault();

    if(tweet.value === ''){
        mostrarError('Los tweets no pueder ir vacío');
        return;
    }


    const tweetObj = {
        id: Date.now(),
        tweet: tweet.value
    }
    //Añadiendo 
    tweets = [...tweets, tweetObj];

    crearHTML()

    formulario.reset();
    
}

function mostrarError(error){

    const mensaje = document.createElement('p');
    mensaje.textContent = error;
    mensaje.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000)
}

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach((tweet)=>{
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }



            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}


function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));   
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

