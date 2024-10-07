// day04 (array & function)

//01
/*
create a function that can create a triangle pattern according to the height we provide the following
parameters : height > triangle height
*/
function segitigaPattern (n: number) {
    let message = "";
    let temp = 1;

    for (let i = 1; i <=n; i++){
        for (let j = 1; i<=n; i++){
            message += temp < 10 ? `0${temp}` : `${temp}`;
            temp++;
        }
        message += "\n";
    }

    return message;
}



//02
/*
a function that can loop number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".

Parameters : n -> total looping
*/
// multiple 3 = fizz. multiple 5 = buzz. multiple 3*5 = fizzbuzz

function loopNumber(n: number){
    let result1:string = " ";
    for (let i = 1; i <= n; i++ )

        if (i % 3 === 0 && i % 5 === 0) { // untuk penempatan posisi jika ini ditaruh di else if, tidak akan terbaca
            result1 += "FizzBuzz";
        }else if(i % 3 === 0) {
            result1 += "Fizz";
        }else if(i % 5 === 0) {
            result1 += "Buzz";
        }else{
            result1 += i
    }
    return result1;
}

console.log((loopNumber(15)));



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
function toWeight(weight: number, height: number) {
   const bmi = weight / Math.pow(height,2);

   if (bmi < 18.5){
    return "less weight";
   }else if (bmi > 18.4 && bmi < 25){
    return "ideal";
   }else if (bmi >25 && bmi < 29.9){
    return "overweight";
   }else if (bmi > 29.9 && bmi < 40){
    return "very overweight";
   }else{
    return "obesity"
   }
}

console.log(toWeight (55,1.67));




//04
/*
a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

// input = [1,2,3,4,5,6,7,8,9,10]


// process
function removeOdd(values: number[]){
    let result: number [] = []; // pake [] karena mendeklarasikan result sebagai array
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

