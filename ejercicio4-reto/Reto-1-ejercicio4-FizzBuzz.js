//FizzBuzz
const fizzBuzz = () => { //Creamos la funcion(FizzBuzz) sin asignarle valor
    let output = '';//Declara una variable llamada "output" y le asigna un valor inicial de una cadena de texto vacía ('').
    for (let i = 1; i <= 30; i++) {//Establece un bucle "for" que se repetirá 30 veces, comenzando desde 1 y aumentando el valor de "i" en 1 en cada iteración.
        if (i % 3 === 0 && i % 5 === 0) { //Verifica si el valor de la variable "i" es divisible tanto por 3 como por 5. 
        output += 'FizzBuzz ';//Concatena la cadena de texto "FizzBuzz" a la variable "salida".  y autorizar un nuevo valor a la variable "salida".
    }   else if (i % 3 === 0) { // Verifica si el valor de la variable "i" es divisible por 3 sin dejar residuo.
        output += 'Fizz ';//Concatena la cadena de texto "Fizz" a la variable "output". agregar "Fizz" a la secuencia de salida cuando el número actual cumple la condición de ser divisible por 3 pero no por 5. 
    }   else if (i % 5 === 0) {//Verifica si el valor de la variable "i" es divisible por 5 sin dejar residuo. 
        output += 'Buzz '; // Concatena la cadena de texto "Buzz" a la variable "salida". "+=": Este operador de componentes compuestos se utiliza para concatenar y autorizar un nuevo valor a la variable 
    }   else {//Se utiliza para indicar el bloque de código que se ejecutará si ninguna de las condiciones anteriores en la estructura "if-else" se cumple.
        output += i + ' ';//Concatena el valor de la variable "i" convertido a una cadena de texto, seguido de un espacio en blanco, a la variable "output".
    }
    }
    return output.trim(); //  Devuelve el valor de la variable "output" después de eliminar los espacios en blanco al inicio y al final de la cadena. 
    }

let result = fizzBuzz(); //Invoca la función "fizzBuzz()" y asigna su resultado a la variable "result". 
    console.log(result); //imprime el resultado 
