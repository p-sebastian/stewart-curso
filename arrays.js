var arra = new Array();
//var arr = [1,2,3]; //LITERAL DECLARATION OF AN ARRAY

// JS ES DINÁMICO POR LO QUE DETERMINA EL TIPO DE DATO AL MOMENTO DE EJECUTARSE (AL CONTRARIO DE OTROS LENGUAJE
//EN LOS CUALES SE DECLARA EL TIPO DE DATO DEL ARRAY)

var arr = [
    1,
    false,
    {
        name: 'Stewart',
        address: 'av. 25 de julio'
    },
    function (name) {
        var greeting = 'hello';
        console.log(greeting + ' '+ name);
    },
    'hello'
]

console.log(arr); //(5) [1, false, {…}, ƒ, "hello"]

arr[3](arr[2].name);
//Por lo que se puede ingresar todo tipo de variable en un arreglo
