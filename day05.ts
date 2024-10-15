// Exercise A
/*
 1. a function to get the lowest, highest and average value in the array (with and without sort function)
example : arr = [12, 5, 23, 18, 4, 45, 32] // bikin 2 tanpa function dan dengan function
 */





// jawaban dari ka Bryan
// WITH FUNCTION
function getMinMaxAvgSort(arr: number[]){
    arr.sort((a, b) => a - b);
    console.log(arr);
    const min = arr[0];
    const max = arr[arr.length - 1];
    const sum = arr.reduce((a, b) => a+b);
    console.log(sum);
    const avg =  sum/arr.length;
    return { min, max, avg };
}
console.log(getMinMaxAvgSort([12, 5, 23, 18, 4, 45, 32]));

// WITHOUT FUNCTION
function getMinMaxAvg(arr: number[]){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max =  arr[i];
        }
        sum += arr[i];
    }
    const avg = sum / arr.length;
    return{ min, max, avg};
}





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


// jawaban dari kabryan
function joinWords(words: string[]){
    let result = "";
    for ( let i = 0; i < words.length; i++){
    if(i === words.length - 1){
        result += "and" + words[i];
    }else{
        result += words[i] + ", ";
    }
  }
};



/*
3. a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
// let num1 = [5, 3, 1, 7, 2, 6]


// jawaban dari ka Bryan

const secondSmallestNumber = (arr: number[]) => {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let first = arr[0];
    let second = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++){
        console.log(i);
        if (arr[i] < first){
            first = arr[i];
        }
        if (arr[i] < second && arr[i] > first){
            second = arr[i];
            break;
        }
    }
    return second;
}
console.log(secondSmallestNumber([5, 3, 1, 7, 2, 6]));



/*
4. a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

/*function calculateArray(array1: number[], array2: number[]){
    let element = [];
    for (let index = 0; index < array1.length; index++){
        element.push(array1[index] + array2[index])
    }
}

let array1 : [1, 2, 3];
let array2 : [3, 2, 1];
console.log(calculateArray(array1, array2));
*/


// jawaban dari ka Bryan
function calculateArray(arr1: number[], arr2: number[]){
    let message = `[${arr1}] + [${arr2}] -> `;
    let newArr: number[] = [];
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i] + arr2[i]);
    }
    message += `[${newArr}]`;
    return message;
}
console.log(calculateArray([1, 2, 3], [4, 5, 6]));


/*
5. a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/


// jawaban dari ka Bryan
function addNonExisting(n: string){
    let arr = [1, 2, 3, 4];
    let find = arr.find((value) => value === n);
    if (!find){
        arr.push(n);
    }else{
        return `${n} already exist`;
    }
    return arr;
}


// Exercise B
/*
1. a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/


// jawaban dari ka Bryan
function sumAllNumber(arr: any[]){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2]));


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

// jawaban dari ka Bryan
function insertArr(max: number, ...num:number[]){
    console.log(num);
    let newArr: number[] = [];

    for (let i = 0; i < max; i++){
        if (num[i] !== undefined) newArr.push(num[i]);
    }
    return newArr;
}
console.log(insertArr(5, 10, 24, 3, 6, 7, 8));


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


// jawaban dari ka bryan
function combineArr(arr1: number[], arr2: number[]){
    return [...arr1, ...arr2];
}
console.log(combineArr([1, 2, 3], [4, 5, 6]));



/*
4. a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 
*/


// jawaban dari ka Bryan
function findDupe(arr: number[]){
    const dupe: number[] = [];
    const reverseArr: number[] = arr.sort();
    console.log(reverseArr);
    for (let i = 0; i < arr.length; i++){
        if (
            reverseArr[i] === reverseArr[i - 1] ||
            reverseArr[i] === reverseArr[i + 1]
        ){
            if (!dupe.find((x) => x == reverseArr[i])){
                dupe.push(reverseArr[i]);
            }
        }
    }

    return dupe;
}
console.log(findDupe([1, 2, 2, 2, 3, 3, 4, 5, 5]));




/*
5. a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

coba pakai ini const length = arr1.length > arr2.length ? arr1.length : arr2.length;
*/




// jawaban dari ka Bryan
function findDiff(arr1: number[], arr2: number[]){
    const newArr: number[] = [];
    const length = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < length; i++){
        let diff1 = arr1.find((x) => x == arr2[i]);
        let diff2 = arr2.find((x) => x == arr1[i]);
        if (!diff1 && arr2[i]){
            newArr.push(arr2[i]);
        }
        if (!diff2 && arr1[i]) {
            newArr.push(arr1[i]);
        }
    }
    return newArr.sort((a, b) => a - b);
}
console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));



// Exercise C
/*
1. Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
*/




// jawaban dari ka Bryan

const primitiveDataOnly = (arr: any[]) => {
    let res: any[] = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "object" || arr[i] === null) res.push(arr[i]);
    }
    return res;
}
console.log(
    primitiveDataOnly([1, [], undefined, {}, "string", {}, []])
);


/*
2. a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
*/



// jawaban dari ka Bryan
function sumDuplicate (arr: number[]){
    let sum = 0;
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    
    for (let i = 0; i < arr.length; i++){
        if (sortedArr[i - 1] == sortedArr[i] || sortedArr[i + 1] == sortedArr[i]){
            sum += sortedArr[i];
        }
    }
    return sum;
}
console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// atau

function sumDuplicate1 (arr: number[]){
    let sum = 0;
    arr.sort((a, b) => a - b);
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i - 1] == arr[i] || arr[i + 1] == arr[i]){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));



/*
a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/



// jawaban dari ka Bryan
function rockPaperScissor(playerHand: string){
let message = " ";
const functionHand = Math.floor(Math.random() * 3) + 1;
console.log(functionHand);
if (playerHand.toLowerCase() == "gunting".toLowerCase()) {
    if (functionHand ==  2){
        message = " function return batu its a lose";
    }else if (functionHand == 3){
        message = " function return kertas its a win";
    }else{
        message = rockPaperScissor(playerHand);
    }
} else if (playerHand.toLowerCase() == "batu".toLowerCase()) {
    if (functionHand ==  1){
        message = " function return gunting its a win";
    }else if (functionHand == 3){
        message = " function return kertas its a lose";
    }else{
        message = rockPaperScissor(playerHand);
    }
} else if (playerHand.toLowerCase() == "kertas".toLowerCase()) {
    if (functionHand ==  1){
        message = " function return gunting its a lose";
    }else if (functionHand == 2){
        message = " function return batu its a win";
    }else{
        message = rockPaperScissor(playerHand);
    }
}
return message;
}

console.log(rockPaperScissor("batu"));


