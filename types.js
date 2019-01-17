///////////////////////////////////////////////


////////////////////////////////////////////////
////Types and Javascript 
////////////////////////////////////////////////

// dynamic typing>>>> no se declara el tipo de dato de una variable
// js durante la ejecucion define el tipo de dato que puede variar durante la ejecucion del codigo
// static typing se define un tipo de valor y  la variable solo aceptara ese tipo de dato

//En JS no se hay una palabra especifica para definir un tipo de dato. Lo define durante la
//ejecucion



////////////////////////////////////////////////
////Primitive types
////////////////////////////////////////////////
// Primite type>> un tipo de dato que representa un solo valor (No es un objeto). 
// 6 types
        // undefined >> falta de existencia (no definido por el engine de js)
        // null      >> falta de existencia (no definido para el codigo del usuario).
                      // es mejor usar null que undefined
        // boolean    >> true or false
        // number     >> floating point number (siempre es decimal)
        // string     >> caracteres entre ""
        // symbol     >> no es soportado por algunos navegadores (ES6). Similar a una lista
              // con numeros y valores asociados que no es un objeto. 


////////////////////////////////////////////////
//// Operators
////////////////////////////////////////////////
// Operators es una funcion especial. Recibe 2 parametros y da como resultado un valor. 


// operadores son funciones. 
var a = 4 === "4";
console.log(a);

// infix functions   >>  la funcion se encuentra entre los parametros de entrada
  //prefix      + 3 4
  //postfix     3 4 +
  // > operador que regresar un boolean 
  // == cohersion 4 >> "4" convierte el string en un valor numerico, 
  // === compara los valores primitivos y tambien chequea el tipo de variable. Solo JS




////////////////////////////////////////////////
//// Operator precedence and associativity
////////////////////////////////////////////////

//operator precedence >> en que orden se llaman los operadores en una misma linea, se llama
//al operador con la precedencia mas alta

// Associativity >> en que orden left-to-right o right-to-left si tienen el mismo operador 
// o el nivel de operator precedene es el mismo, se ejecuta de izquierda derecha o vicerversa
// dependiendo del associative order.


//Javascript operator precedence pdf 

//LOS OPERADORES TIENEN un valor de precedencia determinado ej: suma (13) y multiplicacion(14)

// Grouping () 19    tiene el nivel de precedencia mas alto. 





var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);


////////////////////////////////////////////////
//// Coercion
////////////////////////////////////////////////

// cambiar el valor de un tipo a otro. String to number, etc
// si se pasa texto a un operador de suma se concatena. 

var a = 1 + '2';
console.log(a); // coerce number to string .  '1' + '2' = 12
// incluso si las variables estan separadas, coercion puede convertir el tipo de dato de una
//variable

