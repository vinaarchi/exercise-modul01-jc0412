//1
/*
● Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
…
● Example :
○ Input : AB
○ Output : 28

*/
function titleToNumber(s: string){
    let hasil = 0;
    for (let index = 0; index < s.length; index++){
            hasil *= 26;
            // kenapa 26? karena mengkalikan hasil sebelumnya dengan 26(karena ada 26 huruf dalam alfabet)
            hasil += s[index].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            //charCodeAt mengurangkan nilai ASCII, agar nilai A menjadi 1
        }
    return hasil;
}

console.log(titleToNumber("AB"));




//2
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
● Example 2:
○ Input: nums = [4,1,2,1,2]
○ Output: 4
● Example 3:
○ Input: nums = [1]
○ Output: 1


*/
function singleNumbers(nums: number[]):number {
    for (let a of nums){
        let number = 0;
        for (let b of nums){
            // jika nums a sama dengan nums b
            if (a === b){
                number++;
            }
        }
        if (number === 1){
            return a;
        }
    }
    // ketika tidak menemukan angka yang hanya muncul sekali, fungsi akan mengembalikan -1 
    return -1;
}

let nums1 = [2, 2, 1];
console.log(singleNumbers(nums1));


//3
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false
*/

function areAnagrams(w1, w2){
    if (w1.length != w2.length){
        return "both string are not anagram"
    }
    // mengubah string menjadi array karakter, mengurutkan, dan membandingkan
    // split : mengubah string menjadi array karakter ["a", "n", "n", "a", "g", "r", "a", "m"]
    // sort : mengurutkan array menjadi urut sesuai huruf abc
    // join : menggabungkan kembali menjadi string yang diurutkan
    let sortw1 = w1.split('').sort().join('');
    let sortw2 = w2.split('').sort().join('');
    
    if (sortw1 === sortw2){
        return "both are anagram"
    }else{
        return "both are not anagram"
        }

}
let w1 = "anagram";
let w2 = "nagaram";
console.log(areAnagrams(w1, w2));







//4
/*
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps
● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step

*/

function climbStairs (num:number){
    let climb = 0;
    let num1 = 0;
    let num2 = 1;

    for (let index = 1; index <= num; index++){
        climb = num1 + num2;
        num1 =  num2;
        num2 = climb;
    }
    return climb;
}

console.log(climbStairs(3));






  