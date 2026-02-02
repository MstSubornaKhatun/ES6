// es6


// console.log(name); // error

console.log('device value ', device ); // device value  undefined
var device = 'laptop';
const name = 'Bangladesh';
// name = 'BD' // can not change name // error
const countryName = 'BD' + name; 
console.log(countryName); // BDBangladesh


let price = 130;
price = 150;
console.log(price); // 150



const charge = 50;
// charge = 45;


const dress = ['shirt', 'pant', 'jacket']
// dress = []; // TypeError: Assignment to constant variable.
dress.push('maflar');
console.log(dress); // [ 'shirt', 'pant', 'jacket', 'maflar' ]

const student = {name: 'jabbar', marks: 50}
student.marks = 60;
console.log(student); //{ name: 'jabbar', marks: 60 }



