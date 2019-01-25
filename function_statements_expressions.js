//First class functions

//Expression: a unit of code that results in a value, el valor retornado no necesariamente tiene que se almacenado
//dentro de una variable

greet();
// Function statement: es puesto en memoria, pero no returna un valor
///////////////////EXECUTION PHASE
function greet() {
    console.log('Hi');
}
// It just get hoisted, por lo que puede ser llamado antes de declararlo porque es creado al inicio de ejecucion
//Las funciones son creadas en su totalidad en memoria en el proceso de hoisting

//FUNCTION EXPRESSION
//anonymousGreet();   //it gets an error because all variables are set in memory to undefined at the begining
//no es necesario nombrar la funció nporque ya se sabe donde reside en memoria  través del nombre del objeto
//////////////////////OBJECT BEING CREATED so its an expression because it returns a value (object)
var anonymousGreet = function (){
    console.log('hi');
}
anonymousGreet();//invoke the anonymous function
//ANONYMOUS function: is a function that doesn't have its name defined
//Functions expression are not hoisted
//Functions statemente are hoisted 

//Si se declara una funcion dentro de una variable (expression) is not hoisted,
//si se la declara como statement, it is hoisted


function log(a) {
    a();
}
// log(3);

// log({
//     greeting: 'hi'
// });

log(function() {
    console.log('hi');
});

//first class function is when a function is treated as a variable