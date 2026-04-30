function mostrarDados(){
    document.getElementById("dado1").textContent=" ";
    document.getElementById("dado2").textContent=" ";

    let dado1 = Math.floor(Math.random() * 6 +1)
    let dado2 = Math.floor(Math.random() * 6 +1)

    //Mostrar imagenes
    let imgDado1 = document.createElement("img")
    imgDado1.src="./imagenes/dados/" + dado1 +".jpg"
    document.getElementById("dado1").appendChild(imgDado1)

    let imgDado2 = document.createElement("img")
    imgDado2.src="imagenes/dados/" + dado2 +".jpg"
    document.getElementById("dado2").appendChild(imgDado2)

    let resultado = dado1 + dado2
    //ahora cambiar al pokemon

    document.getElementById("vacio").textContent=" ";

    let imgpokemon = document.createElement("img")
    if(resultado>=10){
        imgpokemon.src="./imagenes/pokemones/0" + resultado + ".png"
    }else{
        imgpokemon.src="./imagenes/pokemones/00" + resultado + ".png"
    }
    document.getElementById("vacio").appendChild(imgpokemon)

    //agregar estrellas
    document.getElementById("estrellas").textContent=" ";

    let imgstar = document.createElement("img")
    imgstar.src="./imagenes/estrella.jpg"
    
    for(let i = 10; i>4; i--){
        document.getElementById("estrellas").appendChild(imgstar)
        
    }

}

