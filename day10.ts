//1


//2
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
    return -1;
}

let nums1 = [2, 2, 1];
console.log(singleNumbers(nums1));

//3


//4


