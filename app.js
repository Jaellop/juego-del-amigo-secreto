let listaAmigosAgregados = [];
//Establecer variable que almacena en lista los nombres de las personas que particpan en el concurso
console.log(nombreDeAmigosSecretos);

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
 function agregarAmigo () {
 let nombreDeAmigoSecreto = document.getElementById("amigo").value.trim();
    if (nombreDeAmigoSecreto === "") {
        alert ("Por favor, inserte un nombre");
    } else {
        alert (`Nombre ingresado correctamente:${nombreDeAmigoSecreto}`);
        if(listaAmigosAgregados.includes(nombreDeAmigoSecreto) ){
            alert ("Este nombre ya ha sido agregado a la lista")
            return;
        } else {
            listaAmigosAgregados.push(nombreDeAmigoSecreto);
            return nombreDeAmigoSecreto;
        }
      
    }
    limpiarCaja();   
    
 }


 function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
 }