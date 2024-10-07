// day04 (array & function)

//01
/*
create a function that can create a triangle pattern according to the height we provide the following
parameters : height > triangle height
*/




//02
/*
a function that can loop number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".

Parameters : n -> total looping
*/
// multiple 3 = fizz. multiple 5 = buzz. multiple 3*5 = fizzbuzz

function loopNumber(n){
    let result1 = []
    for (let i = 0; i <= n; i++ )
        if (i % 3 === 0 && i % 5 === 0){
            result1.push("FizzBuzz");
        }else if(i % 3 === 0){
            result1.push("Fizz");
        }else if(i % 5 === 0){
            result1.push("Buzz");
        }else{
            result1.push(i)
    }
    return result1;
}

let n = 15;
let result1 = loopNumber(n);
console.log(result1);


//03
/*
function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z
*/

function calculateBMI (height){
   
    
}
 



//04
/*
a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

// input = [1,2,3,4,5,6,7,8,9,10]


// process
function removeOdd(values){
    let result = []; // pake [] karena mendeklarasikan result sebagai array
    for (let i = 0; i < values.length; i++){
        if (values[i] % 2 === 0){
        result.push(values[i]);
        }
    } 
    return result;
}

let values = [1,2,3,4,5,6,7,8,9,10];
let result = removeOdd(values);
console.log(result);

// output = [2,4,6,8,10]





//05
/*
a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/
/*let kata = "Hello World"
let arr = kata.split (" ");
console.log(arr);
*/

function splitWord(){
    let kata:string = "Hello World"

    let arr:string[] = kata.split (" ");
    return arr;    
}
console.log(splitWord());

