//Dibujando una X con asteriscos
const drawX = (tamaño) => { //aqui definimos la funcion
    if (tamaño % 4 === 0) {//es una declaración condicional que verifica si el valor de la variable `tamaño` es divisible entre 4 y no deja un residuo.
      tamaño++; // Aseguramos que el tamaño sea impar para que se pueda dibujar correctamente
    }
    for (let i = 0; i < tamaño; i++) {//se utiliza para iniciar un bucle.  Es una estructura de control que permite repetir un bloque de código varias veces. 
        let linea = " ";//declara una variable llamada `linea` y le asigna un valor inicial de un espacio en blanco. 
    for (let j = 0; j < tamaño; j++) {//establece otro bucle `for` anidado dentro de otro bucle. Este bucle itera desde 0 hasta un valor menor que `tamaño`, incrementando `j` en 1 en cada iteración
        if (j === i || j === tamaño - 1 - i) {//es una declaración condicional que verifica dos condiciones separadas por el operador lógico OR (`||`)

            linea += '*'; //son los puntos que forman la x.  Es el nombre de la variable a la que se le está concatenando un asterisco. - "+
    }   else {//indica un bloque de código alternativo que se ejecutará si la condición en el "if" anterior no se cumple.
            linea += " ";// son los espacion que hay donde no estan los puntos de la x. concatena un espacio en blanco al final de la variable `linea`
    }
    }
        console.log(linea);// muestra el valor de la variable `linea` en la consola.
    }

}
        drawX(7); //llama a la función `drawX` pasando el valor `7` como argumento.

