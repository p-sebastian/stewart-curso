//A programming language is said to have First-class functions when functions in that 
//language are treated like any other variable. For example, in such a language, 
//a function can be passed as an argument to other functions, can be returned by 
//another function and can be assigned as a value to a variable.

var person = {
    firstname: 'Stewart',
    lastname: 'Macias',
    getFullName: function() {
        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');

}

var logPersonName = logName.bind(person);

//Bind sirve para asociar a la palabra clave this un objeto así puede ser referido
//cuando se crea su nuevo execution context

// An object to which the this keyword can refer inside the new function.
// For a given function, creates a bound function that has the same body as 
// the original function. The this object of the bound function is associated 
// with the specified object, and has the specified initial parameters.

logPersonName('en','es');
// call también permite indicar a que objeto referenciar en la ejecución
logName.call(person,'en','es');

logName.apply(person,['en','es']);
//Bind crea un execution context
//Call invoca a una función (no crea un EC)
//Apply tiene la misma función que Call, con la diferencia que requiere que los parámetros sean pasados como
    //array

//TODos objetos TIENEN ACCESO A CALL, APPLY AND BIND

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');

}).apply(person,['es','en']);


//function borrowing

var person2 = {

    firstname: 'Emilio',
    lastname: 'Carranza'
}

console.log(person.getFullName.apply(person2));

//function currying

function multiply(a,b) {

    return a*b;

}

var multiplyByTwo = multiply.bind(this,2);
        //Se le está pasando como parámetro el 2, lo que hará que la copa creada siempre sea 2 el valor por default
 console.log(multiplyByTwo(4));       