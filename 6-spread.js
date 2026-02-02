const numbers = [87, 118, 5, 91]
console.log(numbers); // [ 87, 118, 5, 91 ]
console.log(...numbers); // 87 118 5 91

// const max = Math.max(1121, 56, 94, 112, 514, 23);
// console.log(max) // 1121
const max = Math.max(...numbers)
console.log(max) // 118

// const first = [1, 2, 3, 4, 5];
// const second = first
// second.push(6);
// console.log(first) // [ 1, 2, 3, 4, 5, 6 ]

const first = [1, 2, 3, 4, 5];
const second = [...first]
const third = [0, ...first, 97, 45, 12]
second.push(6);
console.log(first) // [ 1, 2, 3, 4, 5 ]
console.log(third)
/*
[
  0,  1,  2,  3, 4,
  5, 97, 45, 12
]
*/ 


const ages = [45, 45, 1]
const prices = [98, 65, 45]
const all = [...ages, 5555, ...prices]
console.log(all)
/*
[
    45, 45,  1,
  5555, 98, 65,
    45
]
*/ 

const person = { name: 'Parmisan', age: 25 }
const employee = { designation: 'dev', ...person }
console.log(employee) // { designation: 'dev', name: 'Parmisan', age: 25 } 

const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21)
const digits = [78, 55, 66]
total(...digits)
console.log(result); // 131
console.log(digits); // [ 78, 55, 66 ]
console.log(total(...digits)) // 199 