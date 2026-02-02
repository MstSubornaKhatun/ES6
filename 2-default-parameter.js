function sum(num1 = 0, num2 = 0){
    const total = num1 + num2;
    // console.log(total); // 30
    // console.log( num1, num2, total); // 10 20 30
    console.log( num1, num2, total); // 10 0 10
}

// sum(10, 20) // 30
// sum(10, 20, 40, 50, 60) // 30
sum(10) // 10 undefined NaN
// NaN --> Not a Number

function multiply (num1=1, num2=1) {
    const result = num1 * num2;
    console.log(result);
}

multiply(2, 3); // 6
multiply(2); // NaN


