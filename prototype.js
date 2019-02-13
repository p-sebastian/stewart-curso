//Classical vs prototypal inheritance

//INHERITANCE: ONE OBJECT GETS ACCESS TO THE PROPERTIES AND METHODS OF ANOTHER OBJECT

//CLASSICAL INHERITANCE (C#, JAVA)

//EACH OBJECT HAS HIS OWN PROTOTYPE

//PROTOTYPE CHAIN

                        //OBJ -->
                                //PROP (1)
                //PROTO
                        //PROP(2)
        //PROTO
                //PROP(3)
//obj.prop1
//obj.prop2
//obj.prop3

//Para acceder al prop3 no es necesario realizar un obj.proto.proto... solo hay que pedir la variable
//obj.prop3 y el JS engine se encarga de realizar la búsqueda

//Objects can share all the same proptotypes if they want to


var person = {

    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }

}

var stewart = {
    firstname: 'Stewart',
    lastname: 'Macias'
}

// don't do this EVER! (FOR DEMO PURPOSES)

stewart.__proto__ = person;
console.log(stewart.getFullName());

//cuando se crea el execution context la palabra clabe this sabe a que objeto apuntar
//this (stewart, not person)
//en caso de que existan propiedades con el mismo nombre, buscará en el nivel que se encuentra y en caso de 
//no encontrar la variable procederá con la búsqueda