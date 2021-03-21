console.log("Hello World !!");

// top to down
// left to right

// Data Types => Number(int,double,float,long), 
//               String('a',"hdn"),
//               Boolean(true, false),
//               undefined,
//               object ()

// ES6 = Ecma Script 6
// let = block scoped variable
// const = block scoped variable

// let a = 10;
// let b = true;
// let c = undefined;
// console.log(a);
// console.log(b);
// console.log(c);

// If variable is not assigned a value
// let e; // takes up undefined
// console.log(e);

// if(true)
// {
    //  let f = "I am inside if block";
    //  console.log(f);
    //  console.log(a);
    //  a = 20;
// }

// // Const = constant
// const pi = 3.14; //define
// // pi = 20; // Re-assignment is not allowed
// console.log(pi);

// == (Data type check nhi hota)
// === (Data type is checked)

// console.log( 10 == "10");


//Objects = Pair of key values

// let movies = {}; //empty object
let data = {
    name : "Steve Rogers",
    place : "Queens"
}

// Access object keys

// dot notation -> literal check
console.log(data.name);
console.log(data.place);

let key = "name";

console.log(data.key);

// bracket notation
console.log(data[key]);

data.key = "I am a new value";

console.log(data);

// keys = unique
// values = duplicate


// Arrays
let values = [10, false, "Hello", 
       {
          name: "Steve Rogers",
          place: "Queens",
        },
        [1,2,3,4] 
    ]; //new array is defined

// console.log(values);
// console.log(values[2].place);

//in loop
for(let key in data)
{
    console.log(key);
}
