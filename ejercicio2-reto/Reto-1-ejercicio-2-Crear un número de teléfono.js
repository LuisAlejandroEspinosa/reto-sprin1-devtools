//Crear un nemero de telefono.
function LineaTelefonica(numeros) { // aqui declaro la funcion
    if (numeros.length !== 10) { //me verifica que los digitos no sean mas de 10 esto lo conseguimos con el operador de desigualdad y la exprecion (numeros.length) 
        return "Linea movil de 10 digitos"}; // si no se cumple la condicion nos retorna lo que esta en comillas
    
    let tresprimerosdigitos = numeros.slice(0, 3).join(""); //esta variable nos ejecuta los 0 a 3 primeros digitos
    let tressegundosdigitos = numeros.slice(3, 6).join("");//esta variable nos ejecuta los 3 a 6 segundos digitos
    let primerdosdigitos = numeros.slice(6, 8).join("");   //esta variable nos ejecuta los 6 a 8 primeros digitos
    let segundodosdigitos = numeros.slice(8, 10).join("");//esta variable nos ejecuta los 8 a 10 segundos digitos

        return `(${tresprimerosdigitos})-${tressegundosdigitos}-${primerdosdigitos}-${segundodosdigitos}`;//nos retorna los 10 digitos si se cumple la condicion, si no retorna lo que esta en comillas (el primer return)
    }
    let numeros = [3, 2, 0, 8, 0, 3, 0, 9, 8, 3  ];//aqui obtenemos la longitud del arreglo (numeros.length)
    let numeroTelefono = LineaTelefonica(numeros);// invoca a una función llamada "LineaTelefonica" pasándole como argumento la variable "numeros".
    console.log(LineaTelefonica(numeros));// Nos imprime por panatalla el valor de la variable (numeros)