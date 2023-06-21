// Numero palindromo
function next_pal(num){ // Aqui tenemos creada la funcion
    num++;// Incremente el número para comenzar a buscar el siguiente numero palíndromo

    while(true){// Nos crea un ciclo infinito
    if (espalindromo(num)){//Nos dice si cumple la condición
        return num;// Nos retorna el número que es igual al palindromok encontrado
}
    else{ // Nos dice si no cumple la condición
    num++ ;//Incrementamos el número y volvemos a verificarlo
}
}
}

function espalindromo(num){ // Esta función va tener la cadena (num) esta contiene el palindromo
    let str =String(num);// Al pasar un valor numérico, como en este caso, se convierte automáticamente en una cadena de caracteres.
    let reversed = str.split("").reverse().join(""); // Esta liena se usa para revirtir el orden de los caracteres en una cadena de texto
        return str === reversed // Se usa para verificar si una cadena de texto es palindromo, el '===' nos verifica que sean del mismo tipo
}

    let numero = 181; //declara una variable "numero" y le asigna llamada el valor de 181.
    let siguientepalindromo = next_pal(numero);// invocación a una función llamada "next_pal" pasándole como argumento la variable "numero".
console.log("El siguiente número palindromo despues de", numero, "es", siguientepalindromo);// nos imprime por consola