function greet(firstname, lastname, language) {
    languague = language || 'en';

    if (language === 'en') {
        console.log('Hello '+ firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola '+ firstname + ' ' + lastname);
    }
}
//FUNCTION OVERLOADING: IN OTHER PROGRAMMING LANGUAGES IS WHEN A FUNCTION HAVE THE SAME NAME BUT RECEIVES DIFFERENTS
// PARAMETERS. THIS DOESN'T WORK ON JS, BECAUSE FUNCTIONS ARE OBJECTS. 

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greet('Stewart','Macias','en');
greet('Stewart','Macias','es');

greetEnglish('Stewart', 'Macias');
greetSpanish('Stewart', 'Macias');

/////////////////////////////////////////////
/////////////Syntax parsers
/////////////////////////////////////////////

//ANTES DE QUE EL CÓDIGO SEA LEIDO POR UN NAVEGADOR, PRIMERO SE REVISA LÍNEA A LÍNEA, CARACTER A CARACTER,
//PARA INTERPRETAR LO QUE SE INTENTA REALIZAR. EL NAVEGADOR INCLUSO PUEDE HACER CAMBIOS SI LO CONSIDERA
//NECESARIO

//AUTOMATIC SEMICOLON INSERTION, siempre colocar semicolon manualmente, no es recomendable que lo haga JS


function getPerson() {
    return//;       --> lo que hizo el JS ENGINE
        {
            firstname: 'Stewart'
        }
}

console.log(getPerson());
// En el primer ejemplo se puede visualizar que el valor retornado en la función es undefined porque
// el JS engine colocó un semicolon al interpretar que el return terminó y no tomó en cuenta que luego del
//salto de línea existía un objeto

//  en el segundo ejemplo luego del return continúa un bracket y retorna firstname sin problema
function getPersonC() {
    return         {
            firstname: 'Stewart'
        }
}
console.log(getPersonC());


///////////////////////////////////////////////////////////
//////////////////////WHITE SPACE
///////////////////////////////////////////////////////////

//invisible characters that create literal space in your code like: Carriage returns, tabs, spaces

var firstname, lastname, language;
var person = {
    firstname: 'Stewart',
    lastname: 'Macias'
}
console.log(person);

