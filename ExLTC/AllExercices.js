
//Palindrome
const x1 = 992;

const isPalind = function (n) {
    return n < 0 ? false : n === Number(n.toString().split("").reverse().join(""));
}

console.log(isPalind(x1));


//Fibonacci
// F( N - 1 ) + F( N - 2 ) FOR N > 1
//0,1 0+1 = 1
// 1,2 1+2 = 3


const fCalc = function (n) {
    return (n - 1) + (n - 2);
}



//Checks if it is a perfect number
let input = `6\n25 77 54 81 48 34`;


let lines = input.split("\n");
let numOfCust = (Number(lines[0]));

let billAmounts = (lines[1].split(' '));


function calcPerfNum(n) {
    if (n >= 0) {
        let checkN = parseInt(Math.sqrt(n));
        return ((checkN * checkN) === n);

    }
    return false;
}

let discountedCust = 0;
for (let i = 0; i < billAmounts.length; i++) {
    if (calcPerfNum(parseInt(billAmounts[i]))) {
        discountedCust++;
    }
}

console.log(discountedCust);
