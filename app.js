let listaAmigosAgregados = [];
//Establecer variable que almacena en lista los nombres de las personas que particpan en el concurs

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
 function agregarAmigo () {
 let nombreDeAmigoSecreto = document.getElementById("amigo").value.trim();
 console.log(nombreDeAmigoSecreto);

    if (nombreDeAmigoSecreto === "") {
        alert ("Por favor, inserte un nombre");
    } else {
        alert (`Nombre ingresado correctamente:${nombreDeAmigoSecreto}`);
        if(listaAmigosAgregados.includes(nombreDeAmigoSecreto) ){
            alert ("Este nombre ya ha sido agregado a la lista")
            return;
        } else {
            listaAmigosAgregados.push(nombreDeAmigoSecreto);
            actualizarListaDeAmigos ();
            limpiarCaja();   
        }

    }
    
 }

function actualizarListaDeAmigos () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigosAgregados.length; i++) { 
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = listaAmigosAgregados[i]; // Asigna el nombre del amigo al <li>
        lista.appendChild(li); // Agrega el <li> a la lista <ul>
    }
    

}



 function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
 }