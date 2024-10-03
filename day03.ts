// exercise day03

//no1
//karena udah diketahui code displaynya 

const numbers = 9 ;
const limit = 10;

for (let i = 0; i <= 10; i++){
    console.log(`${numbers} x ${i} = ${numbers * i}`);
}

/* 
hrusnya untuk perkalian tabel, itu hrus tentukan dlu angka pasti, lalu tentukan juga angka limit yang akan di kalikan
setelah itu pakai console.log(`${numbers} x ${i} = ${numbers * i}`)
*/

//no2
// (a code to check whther a string is a palindrome or not.) 
//example : 'madam' -> palindrome
let input2 = ("Enter String")
let input3 = ""

for (i in input2){
    input3 = i + input2
    console.log("input2;", input3);
}


if (input2 == input3){
    console.log("is palindrome");
}else{
    console.log("is not palindrome");
}

console.log((input2 == input3 ? "is palindrome" : "is not palindrome"));
// masih bimbang antara bener atauu ngga




//no3
// input : cm ke km, 1m = 100cm, 1km = 100000cm
let _Input1 = 1;
let _Input4 = 1;
const meter = Math.floor(_Input1 * 100);
const kilometer = Math.floor(_Input4 * 100000);

console.log(
    `${_Input1}m ${_Input1 * 100}cm`, `${_Input4}km ${_Input4 * 100000}cm`
);

// coba nnti pake rumus ini
/**
 console.log ("_Input1 =" + meter + "m");
 console.log ("_Input2 =" + meter + "km");
*/


//no4
// example : 1000 -> Rp. 1.000,00
const price:string = "1000"
console.log(Intl.NumberFormat().format(price));

//Intl.NumberFormat() : membuat format mata uang rupiah
// ini masih kurang Rp sama ,00



//no5
//a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
const kata: string = "Hello World";
console.log(kata.replace ("ell", ""));

// sebenernya ini simple, karena ell nya perlu cuma di replace aja dengan yang kosong, sudah pernah dijelasin sama pak aldi



//no6
//Write a code to capitalize the first letter of each word in a string
//Example : “hello world” → “Hello World”




//no7



//no8
// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42

let _num1:number = 42;
let _num2:number = 27;




//no9
/**
 Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

untuk ini coba cari aja cara yang ini
a<b b<c, a<b c<b, dst
 */

let num1: number = 42;
let num2: number = 27;
let num3: number = 18;
let result:number = "";







//no10
// write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

//let input:string = 1
//let _input:number = 2

/*if (input = 1){
    console.log(`${input} is a string`);   
}else if (input = 2){
    console.log(`${input} is a number`);
}else{
    console.log(`${input} is a null`);
    
}
*/

// coba pakee switch
let input = "1"

switch(input){
    case input = "1":
        console.log(`${input} is a string`);
        break;
    case input = "2":
        console.log(`${input} is a number`);
        break;
    default:
        console.log(`${input} is a null`);
}
// kalau pake gini apa boleh? 



//no11
//write a code to change every letter a into * from a string of input
//example : An apple a day keeps the doctor away -> *n *pple * d*y keeps the doctor *w*y

const example1:string = "An apple a day keeps the doctor away"
console.log(example1.replaceAll("a", "*"));

//pertanyaan nya, kalau ada huruf besar, gimana jadinya??

