////////////////////////////////////////////////////////////////////
//Existence and Booleans///
////////////////////////////////////////////////////////////////////
// Boolean (null)--undefined -- "" --> false
// Todo lo que implique falta de existencia 
// var a; 

// a = 0;

// if (a || a === 0) {
//     console.log('Something is here ');
// }
//Cuando exista algun tipo de contenido en 
//la variable coercion hará que la variable sea true
//Coercion convierte un 0 en false


////////////////////////////////////////////////////////////////////
//Default values///
////////////////////////////////////////////////////////////////////
// function greet(name) {
//     name = name || '<Your name here>'; //truco para definir un valor por defecto en el caso de 
//                                         //que el valor sea undefined
//     console.log('Hello ' + name);
// }

// greet('Stewart');
// greet(1);
// greet();//Si no se envía un parámetro será mostrado como undefined

//Cada vez que se llama una función un new execution context es creado

// Si se llama la variable sin lo parámetros necesarios JS 

//ES6 va a insertar la syntaxis para definir un valor por defecto. 

//Operators are functions that return values

////////////////////////////////////////////////////////////////////
//Framework Aside///
////////////////////////////////////////////////////////////////////

//Frameworks and libraries means two differents things, but for our purposes,
//we are going to talk about them as if they were the same
//A grouping of js code that performs a task and is reusable

console.log(libraryName);
//Al llamar a diferentes archivos js, no se crea un execution context por cada uno
//lo que sucede es que todos los js se unen y se ejecutan como si fueran un mismo archivo
//Por lo que es importante en el orden en el cual se llamen a los archivos
            // <script src="app.js"></script>
            // <script src="lib.js"></script>
            // <script src="lib.js"></script>

  //Para verificar si existe una variable en otro archivo js o librería, se puede 
  //revisar a través del global execution variable context 
  
//   window.libraryName = window.libraryName || "lib2";