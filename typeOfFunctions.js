
//Named Function for square
function square(num){
   let result = num * num;
   return result;
}

//Anonymous Function for cube 
let cube = function(num){
    let result = num * num * num;
    return result;
}
console.log(`Cube is ${cube(2)}`);

//Immediately Invoked Fuction for square root
(function(num){
    const result = Math.sqrt(num);
    return console.log(`Square Root is ${result}`); 
}(4))

console.log(`Square is ${square(3)}`);

