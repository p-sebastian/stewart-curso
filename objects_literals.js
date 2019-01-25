//////////////////////////////////////////////////////////////////////////
///////////////////////OBJECTS LITERALS//////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Objects can be declared with     var person = new Object()

// or in this literal way           var person = {}
// var person = {}
// var Stewart = { 
//     firstname: 'Stewart',
//      lastname: 'Macias C.',
//      address : {
//          street: 'av. 25 de julio',
//          city: 'guayaquil',
//          state: 'guayas'
//      }
// };
// console.log(person);
// El motor de js al identificar los brackets sin que estén asociados a un texto
//asume de que se trata de crear un objeto

//Tambien se puede setear valuePair
// Object literal es una forma más rapida de crear un objeto en una misma linea de codigo y no por partes

// function greet(person){
//     console.log('Hi '+ person.lastname);
// }

// greet(Stewart);

// greet({ firstname: 'Stewart', lastname: 'Macias' });
// Stewart.address2 = {
//     street: 'via samborondon',
//     city: 'samborondon'
// }


//Se pueden crear objetos en cualquier momento, como el mostrado al invocar una funcion

//////////////////////////////////////////////////////////////////////////
///////////////////////FAKING NAMESPACES//////////////////////////////
//////////////////////////////////////////////////////////////////////////

//NAMESPACE : A CONTAINER FOR VARIABLES AND FUNCTIONS
// var greet = 'Hello!';
// var greet = 'Hola!';
// console.log(greet);

// crear objetos y definir variables dentro para separar las variables para emular a un namespace

// var spanish = {};
// var english = {};

// spanish.greeting = {};
// spanish.greeting.greet = 'hola';
// english.greet = 'hello';

// console.log(spanish);

//////////////////////////////////////////////////////////////////////////
///////////////////////JSON AND LITERALS//////////////////////////////
//////////////////////////////////////////////////////////////////////////
//  JSON    JavaScript Object Notation

//JSON ES MUY SIMILAR A LA DEFINICIÓN DE UN OBJECTO EN JS, PERO NO SON LO MISMO

// var objectLiteral = {
//     firstname: 'Stewart',
//     isAProgrammer: true
// };

// console.log(objectLiteral);
// console.log(JSON.stringify(objectLiteral));         // JSON.stringify() convert object to json



// var jsonValue = 
// JSON.parse('{"firstname": "Stewart","isAProgrammer": true}'); //JSON.parse() convert json to object
//console.log(jsonValue);
//AL TRANSMITIR UN ARCHIVO XML POR INTERNET SE ENVÍAN 2 DEFINICIONES DE LA PROPIEDAD POR DATO
 //EN JSON LAS PROPIEDADES TIENEN QUE ESTAR RODEADAS POR ""

 //EN JS CADA OBJETO OUEDE SER TRANSFORMADO A UN JSON

 //////////////////////////////////////////////////////////////////////////
///////////////////////FUNCTIONS ARE OBJECTS//////////////////////////////
//////////////////////////////////////////////////////////////////////////

//FIRST CLASS FUNCTION
//FUNCTION IS A SPECIAL TYPE OF OBJECT, everything we can do with types, can be done with functions
//Functions posee 2 características importantes, el nombre (puede ser anónimo) y el código(invocable-execution context) que contiene

function greet() {
    console.log('hi');
}
greet.language = 'English';

console.log(greet);             //Texto escrito dentro de la función-objeto
console.log(greet.language);

//Las funciones no solo son contenedores de código en js, son objetos y se les puede asignar propiedades