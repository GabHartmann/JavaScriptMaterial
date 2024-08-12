
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




