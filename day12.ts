// exercise 1

/*
Given an array nums of size n, return the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
● Example 1:
○ Input: nums = [3,2,3]
○ Output: 3
● Example 2:
○ Input: nums = [2,2,1,1,1,2,2]
○ Output: 2
*/

function majorityElement(nums) {
  let element = null;
  let count = 0;

  // jika count = 0, element ditetapkan ke value saat ini (num)
  // jika value sama dengan element, count + 1
  // jika value berbeda, count - 1
  for (let num of nums) {
    if (count === 0) {
      element = num;
    }
    count += num === element ? 1 : -1;
  }
  return element;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([2, 3, 3]));
console.log(majorityElement([1, 1, 2, 2, 3, 3]));

/*
Ketika kita pertama kali bertemu dengan 3, 
candidate menjadi 3, dan count menjadi 1.

Ketika kita bertemu dengan 2, count berkurang menjadi 0, 
sehingga kita mengubah candidate menjadi 2 (karena count menjadi 0).

Ketika kita kembali ke 3, kita menambahkan 1 ke count 
dan kembali menjadi 1.

Di akhir, karena kita memiliki lebih banyak 3, candidate 
terakhir yang tersisa adalah 3.
Dengan menggunakan pendekatan ini, algoritma dapat 
enemukan elemen mayoritas dengan efisien.
*/

/*
Create a function to convert roman numeral to integer.
● Example 1:
○ Input: s = "III”
○ Output: 3
○ Explanation: III = 3.
● Example 2:
○ Input: s = "LVIII"
○ Output: 58
○ Explanation: L = 50, V= 5, III = 3.
● Example 3:
○ Input: s = "MCMXCIV"
○ Output: 1994
○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let previousResult = 0;

  // iterasi (proses mengulang) dari belakang ke depan
  for (let index = s.length - 1; index >= 0; index--) {
    const currentValue = romanMap[s[index]];

    // jika nilai saat ini >= nilai sblmnya, tambahkan
    if (currentValue >= previousResult) {
      result += currentValue;
      // jika nilai saat ini < nilai sebelumnya, kurangi
    } else {
      result -= currentValue;
    }
    // untuk memperbaharui nilai sebelumnya untuk proses mengulang selanjutnya
    previousResult = currentValue;
  }
  return result;
}

console.log(romanToInt("III"));

/*
Given an integer numRows, return the first numRows of
Pascal's triangle.
● In Pascal's triangle, each number is the sum of the two
numbers directly above it as shown →
● Example 1:
○ Input: numRows = 5
○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
● Example 2:
○ Input: numRows = 1
○ Output: [[1]]
*/

function generate(numRows) {
  let segitiga = [];

  for (let rowNum = 0; rowNum < numRows; rowNum++) {
    const row = new Array(rowNum + 1).fill(1);

    for (let j = 1; j < rowNum; j++) {
      row[j] = segitiga[rowNum - 1][j - 1] + segitiga[rowNum - 1][j];
    }
    segitiga.push(row);
  }
  return segitiga;
}
-console.log(generate(5));

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return 0.
● Example 1:
○ Input: prices = [7,1,5,3,6,4]
○ Output: 5
○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
sell.
● Example 2:
○ Input: prices = [7,6,4,3,1]
○ Output: 0
○ Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maxProfit(prices: number[]) {
  let maxProfit = 0;
  let minPrice = prices[0];

  //iterasi melalui array harga
  for (let index = 0; index < prices.length; index++) {
    //perbaharui harga minimum menggunakan Math.min
    minPrice = Math.min(minPrice, prices[index]);
    // hitung keuntungan saat ini
    let profit = prices[index] - minPrice;
    // perbaharui harga maksimum menggunakan math.max
    // kalo algoritma nya, jika maxProfitnya lebih besar daripada profit,
    // maka, yang akan dihitung itu maxProfitnya
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit; // kembalikan keuntungan maksimum
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));
