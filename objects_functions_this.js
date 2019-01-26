//When a function is invoked a new execution context is created
        //each execution context has this variable environment, outer environment (scope chain), this

//window because it looks for the global object
console.log(this);
function a() {
    console.log(this);
    this.newvariable = 'hello';
}
a();
console.log(newvariable);
var b = function(){
    console.log(this);
}
b();


var c = {

    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'Update c object';
        console.log(self);      //in this case this becomes an object. this is attached to an object so the js
                                //engine 

        var setname = function(newname){
            self.name = newname                 //SCOPE CHAIN (slef isnt declared inside the anonymous function).
                                                //so it's going to look the variable in the previouslevel
        }
        setname('Updated again! The c object');//people think this is an error because instead of updating 
                                                //the first this(object-method) name it modify the global object
        //in order to avoid error we should declare the this inside a variable (to use the object by reference)
        console.log(self);
    }
}

c.log();