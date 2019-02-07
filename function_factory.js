function makeGreeting(language) {

    return function(firstname, lastname) {
        
        if (language === 'en') {
                console.log('Hello '+ firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola '+ firstname + ' ' + lastname);
        }
        
    }

}
//el espacio en memoria del closure va a ser diferente para los 2 llamados de language por cada función
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

//la función makeGreeting retorna el objeto-función

//A través de closures queda predefinido en memoria el valor de language
greetEnglish('Stewart', 'Macias');
greetSpanish('Stewart', 'Macias');