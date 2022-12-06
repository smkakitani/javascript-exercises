const fibonacci = function(num) {
    const x = parseInt(num);
    if (x < 0) {
    return "OOPS";
    }
    //fibonacci
    const fibonacciNums = [1];
    let numA = 0;
    let numB = 1;
    
    for (let i = 0; i < x-1; i++) {
        n = numA + numB;
        numA = numB;
        numB = n;
        fibonacciNums.push(n);
    }
    //num position
    let result = fibonacciNums[fibonacciNums.length - 1];
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
