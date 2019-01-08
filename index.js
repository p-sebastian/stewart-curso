//Frameworks es un conjunto de librerias escritas en Javascript con 
// funcionalidades especificas con la finalidad de reinventar codigo ya desarrollado. Ejemplo jQuery y angular JS
//Es importante conocer js antes de introducirse a los frameworks. Con la finalidad de 
//tener la capacidad de entender el la base de su funcionamiento. 

//Syntax parsers: programas que determinan si la sintaxis del codigo escrito es valido, tambien 
// se encarga de traducir el codigo a un lenguaje entendido por computadoras. 

//Execution contexts: contenido, contexto de lo que se esta ejecutando en el momento. 

//Lexical environments: orden de codigo, donde se encuentra el codigo (archivo, funcion, etc.)


//Name/value pair: palabra con un valor unico. El valor puede ser un conjunto de valores. 

// Object: conjunto de Name/value pairs.   
//Similar a un array.  Direccion: calle: via samb, numero: 100 departamento: piso:1, numero: 5.



// Execution Context (Global). Es creado automaticamente:   Global Object     this 
// En el navegador se puede observar a nivel de consola la variable this. Cada tab tiene su window
      //El global object es considerada como window. Siempre existe y es el objeto principal.
      // this se refiere al global object (window). 

      // Variables que no se encuentren dentro de una funcion son consideradas globales

 // una forma de ver el contenido de las variables es en la consola con el nombre o a traves del
 // global object window.variable_name , this.variable_name

//Finalmente se ejecuta el codigo

//Jerarquia 
    //Execution context
          //Global Object       'this'        'Outer environment'
                            //Code execution

//Hoisting: configurar el espacion en memoria para variables y funciones

function b() {
  console.log('prueba');  
}
b();
console.log(a);
var a = 'asd';
console.log(a);

// Execution context: 

//Creation: Antes de ejecutar el codigo, JS se encarga de configurar el espacion en memoria 
//para variables y funciones. 

// Hoisting para las variables se encarga de crearlas en memoria, 
//pero no de definirlas var a = 'ejemplo', mientras que las funciones son creadas en su totalidad en memoria.
// La definicion de las variables se realizan durante el periodo de ejecucion
// y le colocar un placeholder (undefined). 

// Es recomendable de no confiarse del hoisting y definir en orden las variables y funciones. 

// Undefined es un tipo de variable. Porque son colocadas en memoria previa a su ejecucion.

// Code execution: ejecucion del codigo linea a linea. 

//Single threaded: Un comando es ejecutado a la vez en el navedador. 

//Synchronous: Una linea a la vez en el orden en el que se encuentra el archivo. 

//Function invocation: llamar o ejecutar una funcion en js. Ejemplo funcion();

//Execution stack: cuando se invoca a una funcion se coloca en un stack que se llena con cada linea del codigo
// Cada funcion crea un execution conext que crea y ejecuta el codigo. Cuando se termina de ejecutar una funcion
// esta sale del stack de ejecucion. 