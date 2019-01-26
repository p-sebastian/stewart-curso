//First class functions

//Expression: a unit of code that results in a value, el valor retornado no necesariamente tiene que se almacenado
//dentro de una variable

// greet();
// // Function statement: es puesto en memoria, pero no returna un valor
// ///////////////////EXECUTION PHASE
// function greet() {
//     console.log('Hi');
// }
// // It just get hoisted, por lo que puede ser llamado antes de declararlo porque es creado al inicio de ejecucion
// //Las funciones son creadas en su totalidad en memoria en el proceso de hoisting

// //FUNCTION EXPRESSION
// //anonymousGreet();   //it gets an error because all variables are set in memory to undefined at the begining
// //no es necesario nombrar la funció nporque ya se sabe donde reside en memoria  través del nombre del objeto
// //////////////////////OBJECT BEING CREATED so its an expression because it returns a value (object)
// var anonymousGreet = function (){
//     console.log('hi');
// }
// anonymousGreet();//invoke the anonymous function
// //ANONYMOUS function: is a function that doesn't have its name defined
// //Functions expression are not hoisted
// //Functions statemente are hoisted 

// //Si se declara una funcion dentro de una variable (expression) is not hoisted,
// //si se la declara como statement, it is hoisted


// function log(a) {
//     a();
// }
// log(3);

// log({
//     greeting: 'hi'
// });

// log(function() {
//     console.log('hi');
// });

//first class function is when a function is treated as a variable


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////     BY VALUE  BY REFERENCE
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//BY VALUE ES QUE AL DEFINIR UNA VARIABLE DE TIPO PRIMITIVO LO QUE SE HACE ES CREAR UN REFERENCIA EN MEMORIA
//CON EL VALOR ASIGNADO EJEMPLO A=1, SI SE DECLARA UNA VARIABLE B=A, ESTA CREA OTRO ESPACIO EN MEMORIA
// CON EL MISMO CONTENIDO de A


//BY REFERENCE AL DECLARAR UN OBJETO A=OBJECT, SI SE IGUALA B=A, EN LUGAR DE CREAR OTRO ESPACIO EN MEMORIA
//APUNTA AL MISMO

//MUTATE     = CHANGE SOMETHING
//BY REFERENCE TAMBIÉN SE COMPORTA IGUAL CON LAS FUNCIONES, BY REFERENCE NO APLICA SI SE IGUALA 
// A UNA VARIABLE YA DECLARADA A OTRO OBJETO en LITERAL SYNTAX (EN ESTE CASO CREARÁ UN NUEVO ESPACIO EN MEMORIA)

