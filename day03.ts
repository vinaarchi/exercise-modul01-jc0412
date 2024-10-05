// exercise day03



//no1
//karena udah diketahui code displaynya 

const numbers = 9 ;
const limit = 10;

for (let i = 0; i <= 10; i++){
    console.log(`${numbers} x ${i} = ${numbers * i}`);
}

// contoh dari pak aldi
/*
const value:number = 9;

let output: string = ``;
for (let n:number = 1; n<= 10; n++){
output = output + `${value} x ${n}\n`;
console.log(output);
}
*/

/* 
hrusnya untuk perkalian tabel, itu hrus tentukan dlu angka pasti, lalu tentukan juga angka limit yang akan di kalikan
setelah itu pakai console.log(`${numbers} x ${i} = ${numbers * i}`)
*/





//no2
// (a code to check whther a string is a palindrome or not.) 
//example : 'madam' -> palindrome
let panjangKata = "madam";
let isPalindrome = "";

// karena butuh tau kata itu termasuk palindrome atau bukan, kita buatkan loop yang buat ngasih tau ini benar atau salah

for (let i = panjangKata.length - 1; i >= 0; i--){
    isPalindrome = isPalindrome + panjangKata [i]; 
    /* jangan lupa selalu pake [i] untuk menandakkan akan diambil dari mana nya karena itu akan jadi rumus yang
    akan dipakai sama isPalindrome
    */
    console.log(isPalindrome);
}

if (isPalindrome === panjangKata){
    console.log(` ${panjangKata} is a palindrome`);
}else{
    console.log(` ${panjangKata} is not a palindrome`); 
}



//no3
// input : cm ke km, 1m = 100cm, 1km = 100000cm
let _Input1 = 1;
let _Input4 = 1;
const meter = Math.floor(_Input1 * 100);
const kilometer = Math.floor(_Input4 * 100000);

console.log(
    `${_Input1}m ${_Input1 * 100}cm`, `${_Input4}km ${_Input4 * 100000}cm`
);



//no4
//a code to format number as currency (IDR)
// example : 1000 -> Rp. 1.000,00
let price = 1000;
let Rp = Intl.NumberFormat( "id-ID", { // id = kode bahasa, ID = kode negara
    style: 'currency', 
    currency: 'IDR'
})
console.log(`${Rp.format(price)}`);

//Intl.NumberFormat() : membuat format mata uang rupiah
/* 
untuk style ada 3 macam, 
decimal : untuk memformat angka biasa
currency : format mata uang yang digunakan sekarang
percent : format persen

dan untuk currency itu menentukan mata uang apa yang akan dikembalikan
IDR = Rupiah, USD = dollar, Eur = mata uang euro
*/





//no5
//a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
const kata: string = "Hello World";
console.log(kata.replace ("ell", ""));

// sebenernya ini simple, karena ell nya perlu cuma di replace aja dengan yang kosong, sudah pernah dijelasin sama pak aldi






//no6
/*
Write a code to capitalize the first letter of each word in a string
Example : “hello world” → “Hello World”
*/

//input = hello world
// process
let teks :string = "hello world"
let resultTeks = "";

let cap = teks.charAt(0).toUpperCase() + teks.slice (1); // ini cuma buat uppercase huruf di depannya aja
console.log(cap);

for (let i = 0; i < teks.length; i++){
    if (i === 0 || teks.charAt(i-1) === " " ) {
        // karakter yang sesudah spasi akan dihitung sebagai huruf pertama dalam kata baru, sehingga akan diubah menjadi huruf besar
        // jangan lupa untuk beri spasi di dalam kutip, karena jika tidak ada, sebelum kata "world" tidak akan di hitung sebagain huruf pertama dalam kata baru
        resultTeks += teks[i].toUpperCase();
    }else{
        resultTeks += teks[i].toLowerCase();
    }
}
console.log(resultTeks);


// output = "Hello World"




//no7 
//a code to swap the case of each character from string
//Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’


// input The QuiCk BrOwN Fox
// PROCESS :
let newInput = "The QuiCk BrOwN Fox"
let newText = "";

for (let i = 0; i < newInput.length; i++){ 
    if (newInput[i] === newInput[i].toUpperCase()){ // mengubah karakter yang diambil menjadi huruf besar.
        newText += newInput [i].toLowerCase(); //jika newInput huruf besar, dia akan diubah menjadi huruf kecil
    }else{
        newText += newInput [i].toUpperCase(); // sebaliknya jika newInput huruf kecil, dia akan diubah menjadi huruf besar
    }
}
console.log(newText);
// output tHE qUIcK bRoWn fOX





//no8
// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42

let _num1:number = 42;
let _num2:number = 27;
const _result = Math.max (_num1, _num2)
console.log(_result);





//no9 //belum selsai
/**
 Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

untuk ini coba cari aja cara yang ini
a<b b<c, a<b c<b, dst
 */

let num1: number = 42;
let num2: number = 27;
let num3: number = 18;

const resultNumMax = Math.max (num1, num2, num3)
const resultNumMin = Math.min (num1, num2, num3)

if (resultNumMax > num1 && num1 > resultNumMin){
    console.log(`${resultNumMin}, ${num1}, ${resultNumMax}`);
}else if( resultNumMax > num2 && num2 > resultNumMin){
    console.log(`${resultNumMin}, ${num2}, ${resultNumMax}`);
}else (resultNumMax > num3 && num3 > resultNumMin){
    console.log(resultNumMax > num3 && num3 > resultNumMin);
}



/* 
// cari min 
if (num1 <= num2 && num1 <= num3){
    min = num1;
}else if (num2 <= num1 && num2 <= num3){
    min = num2;
}else{
    min = num3;
}

// cari max
if (num1 >= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
} else {
    max = num3;
}

// cari mid
if ((num1 >= min && num1 <= max)) {
    mid = num1;
} else if ((num2 >= min && num2 <= max)) {
    mid = num2;
} else {
    mid = num3;
}

console.log(min, mid, max);
*/







//no10 /masih belum work, kayaknya ada yang salah untuk if
// write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

//let input:string = 1
//let _input:number = 2

let contohinput = "1";

if (contohinput = "1"){
    console.log(`${contohinput} is a string`);
}else if(contohinput = "2"){
    console.log(`${contohinput} is a number`);
}else{
    console.log(`${contohinput} is a null`);
}



// coba pakee switch
let input = "1";

switch(input){
    case "1":
        console.log(`${input} is a string`);
        break;
    case "2":
        console.log(`${input} is a number`);
        break;
    default:
        console.log(`${input} is a null`);
}
// coba nnti pakein if dlu



//no11 
//write a code to change every letter a into * from a string of input
//example : An apple a day keeps the doctor away -> *n *pple * d*y keeps the doctor *w*y

let example1:string = "An apple a day keeps the doctor away"
let resultcode = example1.replaceAll("a", "*").replaceAll("A", "*");

console.log(resultcode);

//pertanyaan nya, kalau ada huruf besar, gimana jadinya?? coba nnti jadiin 

