//Cuando se crea el Execution Context (al invocar una función)
//El motor de JS crea 

//Variable environment              'this'                  Outer environment
                            //      'arguments'
//Arguments list of all values that you passed to the function. The parameters that you pass to a function

//Si una función tiene un número determinado de parametros, y si se llama a la función con una cantidad diferente
// a la declarada, lo que ocurrirá es que a través del proceso del hoisting, las variable serán seteadas como 
//undefined
function greet(firstname, lastname, language, ...other) {//cualquier parámetro seguido del declarado será 
                                                        //almacenado dentro de un arreglo
    
    language = language || 'en'; // Colocar un valor por defecto de forma manual 

    if (arguments.length === 0){
        console.log('Missing parameters');
        console.log('---------------------');
        return;
    }
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log(arguments[0]);
    console.log('------------');
}

greet();
greet('Stewart');
greet('stewart', 'Macias');
greet('Stewart', 'Macias', 'en');

//En la próxima versión de JS se podrá colocar valores por defecto a los argumentos
//La palabra arguments es creada y contiene todos los parámetros que pueden ser accedidos a forma de array

//Se ve como un array y funciona como tal, pero no es un array de JS(porque no tiene todas las características
//de un array de JS)

//Spread extender la lista de parámetros para que sean almacenados en un arreglo (...other)