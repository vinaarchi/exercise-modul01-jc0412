// exercise

// no 1


function equalNumber (object1:any, object2:any){
    return object1 === object2;
}
console.log(equalNumber("hello", 2));
console.log(equalNumber(2, 2));


//penjelasan dari pak aldi
//cara 1
const isEqualObject = (objectA:any, objectB:any): boolean => {
    // Bagaimana mengakses property dari objectA
    const propertyA = Object.keys(objectA)[0];
    // Bagaimana mengakses value dari objectA
    const valueA = Object.values(objectA)[0];
    // Bagaimana mengakses property dari objectB
    const propertyB = Object.keys(objectB)[0];
    // Bagaimana mengakses value dari objectB
    const valueB = Object.values(objectB)[0];
    // Jika property objectA dan property objectB, serta value objectA dan value objectB sama maka outputnya TRUE
    if (propertyA === propertyB && valueA === valueB){
        return true;
    }
    return false;
};

//cara 2
/**
 return (
    Object.keys(objectA)[0] === Object.keys(objectB)[0] &&
    Object.value(objectA)[0] === Object.value(objectB)[0]
 );
 */




 //2 
function intersection (objA:any, objB:any){
    let value:any = {};

    for (let keys in objA){ // value ini adalah menampung data property
        if (objA[keys] === objB[keys]){
            console.log(keys);
            value[keys] = objA[keys];
        }
    }
    return value;
}

let objectA: {} = {a: 1, b: 2, c: 3};
let objectB: {} = {a: 22, b: 2, c: 3};
console.log(intersection(objectA, objectB));



//3
/**
 create a function to merge two array of student data and remove duplicate 
Student data : name & email

● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]

 */
// TIDAK DISARANKAN PAKAI FOR OF, karena FOR OF hanya butuh value.
const arr1 = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.com" }
    ];

const arr2 = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com" }
    ];

// untuk menggabungkan arr1 dan arr2 menggunakan spread operator
const mergedArr = [...arr1,...arr2];

// function untuk menghapus duplikat
function mergeArr (arr:any){
    const emailStudent =  new Map(); // Map ini adalah sebuah objek
    for (const student of arr){
        //menambahkan mahasiswa berdasarkan email, agar menghindari duplikat
        emailStudent.set (student.email, student);
    }
    //mengembalikan array tanpa duplikat
    return Array.from(emailStudent.values());
}

 const resultStudent = mergeArr(mergedArr)
 console.log(resultStudent);
 

 
//4 a function that can accept input as an array of objects and switch all values into property and property into value
// input : [{ name: 'David, age: 20 }]
// output : [{David: ' name, 20: 'age}]


function switchObject(value) {
    // buat deklarasi kosong, untuk menyimpan hasil akhir
    const objectSwitch = {};
    // array yang berupa objek, akan disimpan ke dalam variable obj
    value.forEach(obj => {
    // untuk mengembalikan array dari key value dari obj
        Object.entries(obj).forEach(([name, value]) => {
            // untuk forEach akan digunakan untuk membalikkan values into property and property into value
            objectSwitch[value] = name;
        });
    });
    return objectSwitch;
}

const arrayInput = [{name : "David"}];

const arrayBalik = switchObject(arrayInput);
console.log(arrayBalik);


//COBA PAKAI FOR IN






//5
// recursion adalah sebuah fungsi yang memanggil dirinya sendiri.
// kita disuruh mencari faktorial angka memakai recursion

function factorial (num){
    // jika num = 0 / 1, fungsi akan mengembalikan ke 1, karena faktorial angka 0 dan 1 adalah 1
    if (num === 0 || num === 1){
        return 1;
    // ketika num lebih dari 1, fungsi akan mengembalikan hasil kali num dengan num-1
    }else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
