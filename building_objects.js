//function constructor 
//Se usó el nombre de JavaScript para atraer a desarrolladores de Java para evitar que el lenguaje
//muriera (marketing)

function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function (){

    return this.firstname + ' ' + this.lastname;

}//this does not affect the same function, it affects when the constructor is used (prototype chain)

var stewart = new Person('Stewart', 'Macias'); //immediately a new object is created
console.log(stewart);
//6:47

var jane = new Person('Jane', 'Smith');
console.log(jane);
//Function constructors are just functions.
//Every function has a prototype

//Porque se recomienda crear metodos a través del prototype: SE LO REALIZA CON EL OBJETIVO DE CONSUMIR MENOS MEMORIA
//DEBIDO A QUE SI SE LO AGREGA EN EL CONSTRUCTOR CADA NUEVO OBJETO OBTIENE UNA COPIA ENTERA DEL OBJETO Y ESO OCUPA
//ESPACIO EN MEMORIA

//DE 1000 OBJETOS EN LUGAR DE 1000 METODOS, SOLO SE TIENE 1 MÉTODO A TRAVÉS DEL PROTOTYPE

//DANGEROUS ASIDE

//para crear un function constructor comenzar el nombre de la función con Mayúscula 
//RECORDAR COLOCAR EL KEYWORD NEW ANTES DE INVOCAR A UN CONSTRUCTOR

//BUILT IN FUNCTION CONSTRUCTORS, YA EXISTEN (ESPERAN SER USADAS)
//en consola    var a = new Number(3) -- no es un número, ni un primitivo es un objeto

//Como es un objeto tiene acceso a las funciones definidas en el prototype


String.prototype.isLengthGreaterThan = function (limit) {

    return this.length > limit;

}

console.log("Stewart".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {

    return this > 0;//se puede agregar nuevas funcionalidades

}