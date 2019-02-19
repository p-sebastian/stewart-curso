Array.prototype.myCustomFeature = 'Cool';

var arr = ['John', 'Jane', 'Jim'];//es similar a una propiedad de Array

for (var prop in arr) { //no recomendable

    console.log(prop + ': ' + arr[prop]);

}

for (var i = 0 ; i < arr.length; i++) {
    
    console.log(i + ': ' + arr[i]);

} 
