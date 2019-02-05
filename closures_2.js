function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(

            function() {
                console.log(i);     //no se ejecuta solo se almacena aquí. Se ejecuta una vez que la función es invocada 
            }
        )

    }
    return arr;                     //
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
//returna
//3
//3
//3

//Al invocar a la función build function y hacer referencia una posición del arreglo. arr (f0,f1,f2) al no encontrar contenido por el 
//console.log que se ejecuta, pero no se almacena en una variable. La función busca a su referencia cercana que es el valor de i
//Todos están apuntanto al mismo espacio en memoria
// i is three by the time you call all these functions

//Free function, a variable that is outside a function but you still have access to it

























function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(

            (function(j) {
                return function() {
                    console.log(j);     //
                }
                 
            }(i))                   //ejecutar la función cuando es leída y cada función crea su execution context
        )

    }
    return arr;                     //
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
//returna
//0
//1
//2