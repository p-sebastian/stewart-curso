//POLYFILL
if(!Object.create) {
    Object.create = function (o) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation' 
            + ' only accepts the first parameter. ');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {

    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var stewart = Object.create(person);

stewart.firstname = 'Stewart';
stewart.lastname = 'Macias';
console.log(stewart);

//POLYFILL: CODE THAT ADDS A FEATURE WHICH THE ENGINE MAY LACK

//ES6 AND CLASSES
//Javascript doesn't have classes in the next version (ES6) it will have, but in a different way.

//A class is an object, in other programming languages classes are a defintion (templato) of what an instance
//should looks like

// extends (prototype inheritance)  similar a __proto__
//extends in a class Sets the Prototype(__proto__)
//and call super (to call the constructor of the primary object)

//SYNTATIC SUGAR: A DIFFERENT WAY TO TYPE SOMETHING THAT DOESN'T CHANGE HOW IT WORKS UNDER THE HOOD 
