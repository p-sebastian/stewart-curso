//REFLECTION: AN OBJECT CAN LOOK AT ITSELF, LISTING AND CHANGING ITS PROPERTIES AND METHODS

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var stewart = {
    firstname: 'Stewart',
    lastname: 'Emilio'
}

//don't do this ever! for demo purposely only!!
stewart.__proto__ = person;

//recorrer cada propiedad del objeto
for (var prop in stewart) {
    if (stewart.hasOwnProperty(prop)) { //prop da como resultado cada propiedad
    //con el if statement se está confirmando si la propiedad mostrada pertence al objeto
    console.log(prop + ': ' + stewart[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' +this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

//underscore function que crea un closure que disponibiliza las propiedades y métodos
_.extend(stewart,jane, jim); //extend use reflection

console.log(stewart);//stewart ha recibido las propiedades y métodos que habitan en otros objetos
//console.log(jane); solo ocurre con el primer objeto mencionado
