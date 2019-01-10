////////////////////////////////////////////////
//Functions, context and variable Environment///
////////////////////////////////////////////////
//1. global execution es creado y las variables globales son creadas y definidas. 
//2. execution context (lo que actualmente se esta ejecutando en el momento).

//Scope> el valor de la variable en determinado momento

//variable se sobreescriben dependiendo de donde sean llamadas las funciones
// function b(){
//   var myVar;
//   console.log(myVar);
// }

// function a(){
//   var myVar = 2; 
//   console.log(myVar);
//   b();
// }
// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

////////////////////////////////////////////////
//Scope chain///
////////////////////////////////////////////////

// function b() {//Lexical environment se encuentra en el global execution context variable environment
//   console.log(myVar);

// }
// function a() {
//   var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();

//Cada execution context tiene una referencia al outer environment. Puede haber varios outer environment

//Lexical environment en que lugar se esta leyendo el codigo. 
//El orden de ejecucion es importante, sino puede encontrar una variable en su outer environment, buscara la variable
//en un nuevo nivel hasta llegar al global execution context. Tambien depende mucho donde se invocan variables y funciones. 


// function a() {
//   function b() {//Lexical environment se encuentra en el global execution context variable environment
//     console.log(myVar);
  
//   }
  
//   b();
// }
// var myVar = 1;
// a();

// b se encuentra dentro de la funcion a por lo que al llamar a la variable b no estara definida
// en el global execution context variable environment

//Scope chain valor que posee una variable dependiendo del execution context. Si la variable no existe
// actualmente, js buscara el outer environments hasta encontrar el valor de la variable. 


////////////////////////////////////////////////
//Scope, ES6 AND LET///
////////////////////////////////////////////////

//SCOPE. donde se encuentra la variable definida en el codigo
//Block scope
//let  > en ES6(nueva version de js) let permite declarar variable en un bloque. Solo estara definido en 
// el momento y lugar que es creado 




////////////////////////////////////////////////
//Asynchronous callbacks///
////////////////////////////////////////////////
//Asynchronous> ejecutar mas de una cosa a la vez
// A parte de execution stack, existe tambien un event queue que almacena (click, http request). 
// Cuando se termina se vacia el execution stack el js engine revisa el event queue. Y lo agrega 
// al execution stack y lo ejecuta. Esto se hara cuando se termine de ejecutar todo el codigo. 
//El navegador es el que se encarga de llenar el event queue


function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event');
}

document.addEventListener('click',clickHandler);//funcion que existe en todo el html

console.log('finished execution');

waitThreeSeconds();

//Esta es la forma en la que js simular ser asincrono. 


////////////////////////////////////////////////


