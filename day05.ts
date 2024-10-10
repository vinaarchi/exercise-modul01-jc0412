// Exercise A
/*
 1. a function to get the lowest, highest and average value in the array (with and without sort function)
example : arr = [12, 5, 23, 18, 4, 45, 32] // bikin 2 tanpa function dan dengan function
 */


/*
2. a function that takes an array of words and returns a string by concatenating the word in the words in
the array, separated by commas and - the last word- by an 'and'.
Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/
let fruitNames: string[] = ["apple", "banana", "cherry", "date"];

function joinNames(names: string[]){
    let result: string = "";
    
    for (let i = 0; i < names.length; i++) {
        result += names[i];
        if (i < names.length - 2) {
            result += ', ';
        } else if (i === names.length - 2) {
            result += ', and ';
        }
    }
    
    return result;
}
console.log(joinNames(fruitNames));



/*
3. a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
let num1 = [5, 3, 1, 7, 2, 6]


/*
4. a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/



/*
5. a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/




// Exercise B
/*
1. a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/


/*
2. a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
 maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
 The function will return [5, 10, 24, 3, 6]
*/
let maxSize: number = 5;
let value1: number[] = [5, 10, 24, 3, 6, 7, 8];
function maxSizeNumbers (size:number, numbers: number[]){
    return numbers.slice(0, size);
}

console.log(maxSizeNumbers(maxSize, value1));


/*
3. a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

let arr1:number[] = [1, 2, 3];
let arr2:number[] = [4, 5, 6];

function oneArray (arr1 :number[], arr2 :number[]){
    let arr3: number[] = arr1.concat(arr2);
    return arr3;
}

console.log(oneArray(arr1, arr2));



/*
4. a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 
*/


/*
5. a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

coba pakai ini const length = arr1.length > arr2.length ? arr1.length : arr2.length;
*/







// Exercise C
/*
1. Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
*/


/*
2. a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
*/


/*
a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/