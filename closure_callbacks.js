function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() {

        console.log(greeting);

    }, 3000);

}

sayHiLater();

//Greeting no existe dentro de la función, y la primera función ya finalizó su execution context.
//A través de closure y scope chain tiene acceso en memoria a la variable indicada. 


//jQuery uses function expressions and first-class functions!
//$("button").click(function() {

//});

//Callback function
//Give a function another function and when its execution is done. You can execute this function

//Pasar una función a otra función y cuando la primera finalice su ejecutión, que se encargue de llamar a la 
//siguiente función


//CALLBACK FUNCTION: A FUNCTION YOU GIVE TO ANOTHER FUNCTION, TO BE RUN WHEN THE OTHER FUNCTION IS FINISHED. 
//SO THE FUNCTION YOU CALL INVOKE 'CALLS BACK' BY CALLING THE FUNCTION YOU GAVE IT WHEN IT FINISHES

function tellMeWhenDone(callback) {

    var a = 1000; // some work 
    var b = 1000; // some work

    callback(); // the 'callback', it runs the function I give it!

}

tellMeWhenDone(function() {

    console.log('I am done');

});

tellMeWhenDone(function() {

    alert('I am done!');

});