// exercise06

/**
 * 1. Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Number
○ Score → Number

● Parameters : array of student

● Return values :
○ Object with this following properties :

■ Score
● Highest
● Lowest
● Average

■ Age
● Highest
● Lowest
● Average
 */

/* // ini cuma buat munculin semua nama, kurang math.max nya
interface IStudent{
    nama: string;
    email: string;
    age: number;
    score: number;
};

const students: IStudent[]=[
    {
        nama:"Arip",
        email:"arip@mail.com",
        age:23,
        score:89,
    },
    {
        nama:"Varie",
        email:"varie@mail.com",
        age:20,
        score:85,
    },
    {
        nama:"Davin",
        email:"davin@mail.com",
        age:21,
        score:80,
    },
];

function calculateStudent (objectStudent){
    let result: any[] = [];
    for (const student in objectStudent){
        result.push(objectStudent[student]);
    }
    return result;
}
let student :any[] = calculateStudent(students);
console.log(students);
*/


function calculateStudent (students){
    if(students.length === 0);

    let totalScore = 0;
    let totalAge = 0;
    const ages = students.map(student => student.Age);
    const scores = students.map(student => student.Score);

    // untuk menghitung min,max,average age
    const maxAge = Math.max (...ages);
    const minAge = Math.min (...ages);
    totalAge = ages.reduce((param, age) => param + age);
     // reduce untuk mengakumulasi total nilai, param ini array kosong,
    const aveAge = totalAge / ages.length;


    // untuk menghitung min,max,average score
    const maxScore = Math.max (...scores);
    const minScore = Math.min (...scores);
    totalScore = scores.reduce((param, score) => param + score);
    const aveScore = totalScore / scores.length;

    return {
        Score: {
            Highest: maxScore,
            Lowest: minScore,
            Average: aveScore
        },
        Age: {
            Highest: maxAge,
            Lowest: minAge,
            Average: aveAge
        }
    };
}

const students = [
    { Name: "Arip", Email: "arip@mail.com", Age: 23, Score: 89 },
    { Name: "Varie", Email: "varie@mail.com", Age: 20, Score: 85 },
    { Name: "Davin", Email: "davin@mail.com", Age: 21, Score: 80 }
];

console.log(calculateStudent(students));




/*
2. Create a program to create transaction

● Product Class
○ Properties
■ Name
■ Price

● Transaction Class
○ Properties
■ Total
■ Product
● All product data
● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
*/




