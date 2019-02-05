//calling a function that returns a function
function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' '+ name);
    }
}

//greet('hi')('stewart');

var sayHi = greet('hi');
sayHi('Stewart');

//Cuando se termina de ejecutar una funcion y finaliza su execution context, en js las variables que 
//continúan en memoria, incluso cuando execution context deja de existir.
// Por lo que al llamar a otra función y al no encontrar la variable declarada, durante el proceso de 
//scope chain se busca en el outer environment la variable. Por lo que toda función creada dentro de otra.
//Asi la función superior haya finalizado su ejecución la función interna todavía tiene su referencia en memoria

//Closure in js. contenedor(en memoria) de las variables creadas por diferentes funciones para facilitar 
//su acceso
