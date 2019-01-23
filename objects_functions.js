////////////////////////////////////////////////////////////////////////77
///////////////////////OBJECTS AND FUNCTIONS//////////////////////////////
//////////////////////////////////////////////////////////////////////////

//En js objects and functions están muy relacionadas, básicamente son lo mismo.

//Objetcs are collections of name value pairs and those values can be other collections
    //of then value pairs

    //Objects pueden tener propiedades de tipo primitivo u objetos, también puede tener functions
        //pero como el function está dentro de un objeto se lo llama method

// Todo lo que se encuentra en memoria está referencia mediante códigos,
//un object creado se encuentra en memoria y tiene el registro del codigo de las propiedas y 
//métodos relacionados a él

var person = new Object(); // this is going to sit in memory

//      Computed Member Access      [] 
person["firstname"] = "Stewart"; // this is going to sit in memory too as a property of the object
person["lastname"] = "Macias";  

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person["firstname"]);   //acceder dinámicamente

//Se puede acceder al contenido total del objeto, también a propiedades específicas del mismo

// Member access                .
console.log(person.firstname);
console.log(person.lastname); // se recomienda este enfoque si no se lo accede dinámicamente

person.address = new Object();
person.address.street = "Av. 25 de julio"; //Associativity  left-to-right
person.address.city = "Guayaquil";  
person.address.state = "Guayas";
// The brackets and the dots are operators that allows us to access different properties or methods
// in memory
console.log(person);