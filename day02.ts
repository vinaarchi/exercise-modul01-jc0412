// exercise modul01 jc0412

// exercise day2

// 1
// Input N=25 Output Odd

//Input N= 2
//OUTPUT even

const _n1= 25;

if (_n1 % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

console.log((_n1 % 2 === 0 ? "Even" : "Odd"));



//2
// INPUT : 7 -> 7 is a prime number
// INPUT : 6 -> 6 is not a prime number

const _n2 = 8;
let isPrime = true;

for (let i = 2; i < _n2; i++) {
    console.log(i);
    console.log((_n2 % i));
    if (_n2 % i === 0){
        isPrime = false;
        break;
    }
}

console.log(isPrime);


//3 find the sum of the numbers 1 to N
// INPUT1 : 5 -> 1 + 2 + 3 + 4 + 5 = 15
// INPUT2 : 3 -> 1 + 2 + 3 = 
// Rumus : n*(n+1)/2
let input1:number = 5;
let _sum = 0;

for(let i = 1; i <= input1; i++){
    console.log(i);
    console.log(_sum)
    _sum +=i; // _sum = _sum + i
}

console.log((_sum));


//4
// INPUT3 : 4! -> 4x3x2x1 = 24
// INPUT4 : 6! -> 6x5x4x3x2x1 = 720
// rumus : 

const n4 = 6;
let _fact = n4;
console.log(_fact);

for(let i = n4 - 1; i >=1; i--){
    console.log(i);
    _fact *= i; // _fact = _fact * i
}

console.log(_fact);




//5 a code to print the first N fibonacci numbers
// INPUT : 15->610

//fibonaci adalah hasil penjumlahan 2angka sebelumnya
const _n5 = 15;
let _fib = 0;
let _fib1 = 0;
let _fib2 = 1;

for (let i = 1; i <= _n5; i++) {
    _fib = _fib1 + _fib2;
    _fib1 = _fib2;
    _fib2 = _fib
console.log(_fib1);
}
console.log(_fib1)

