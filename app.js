let listaamigos=[];
function agregarAmigo(){
let input = document.getElementById("amigo");
    let nombre = input.value.trim();
     if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return;}
         listaamigos.push(nombre);
          let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombre}</li>`;
    console.log ("Funcionando con normalidad")
    //Con esta funcion agrego amigos a la lista
    // trim: sirve para los espacios vacios//
}
function sortearAmigo(){
 if (listaamigos.length === 0) {
        alert("¡No hay amigos para sortear! Agrega al menos uno.");
        //Condicion para evitar espacios en blanco al añadir amigos//
        return;
        }
     let indiceAleatorio = Math.floor(Math.random() * listaamigos.length);
     // // Generar índice aleatorio//
     let amigoSecreto = listaamigos[indiceAleatorio];
     //// Obtener el nombre del amigo secreto//
     let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
    let botonAnadir = document.querySelector(".button-add");
    botonAnadir.disabled = true;
    botonAnadir.style.opacity = "0.6";
    botonAnadir.style.cursor = "not-allowed";
    //Desactiva el boton añadiruna vez sorteada la lista// 
  }
