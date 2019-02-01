///////////////////////////////////////////////////////////////////
/////////// IMMENDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)S

//function statement: es colocado en memoria (Hoisting)
function greet(name) {
    console.log('Hello '+ name);
};

greet('Stewart');

//function expression
var greetFunc = function (name) {
    console.log('Hello '+name);
}
greetFunc('Stewart');

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
var greeting = function (name) {

    return 'Hello '+name;

}('Stewart Emilio');                            //invoke the function at the point that is created

//Greeting contains a string

console.log(greeting);              //está mal llamar a la funcion greeting()


//JS asume que todo lo que se encuentra adentro de paréntesis es una expresion

//Por lo que es una buena opción para tener una línea de código 
(function (name) {
    
    var greeting = 'Inside IFFE: Hello';
    console.log(greeting + ' '+ name);

}('SM'));           //Classic example of IIFE 
//Se pueden colocar los argumentos antes del paréntesis que permite ejecutar la función al crearla o después



//IIFE puede ser usado para separar execution context de diferentes archivos o ejecuciones de js. 
//Porque el execution context de IIFE puede tener las mismas variables de un global environment pero 
//son 2 execution diferentes y separados


//IIFE es utilizado en librerías, que desde el inicio del archivo se tiene paréntesis () para separar 
// el execution context

(function (global, name) {
    
    var greeting = 'Inside IFFE: Hello';
    global.greeting = 'Afectar cambios en el global environment intencionalmente';
    console.log(greeting + ' '+ name);

}(window,'SM'));