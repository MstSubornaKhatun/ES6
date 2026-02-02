const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: '20000',
    experience: 1
}

const keys = Object.keys(employee)
const values = Object.values(employee)
const entries = Object.entries(employee)
console.log(keys) // [ 'name', 'designation', 'salary', 'experience' ]
console.log(values) // [ 'Raja Rani', 'QA', '20000', 1 ]
console.log(entries)
/*
[
  [ 'name', 'Raja Rani' ],
  [ 'designation', 'QA' ],
  [ 'salary', '20000' ],
  [ 'experience', 1 ]
]
*/ 