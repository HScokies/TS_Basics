"use strict";
const Person = {
    name: 'Jake',
    age: 18,
    pets: ['Dog']
};
// Now you can do this
let PropIndex = 'Mom';
Person[PropIndex] = 'Jane';
// Or that
const GetPersonProps = (person) => {
    for (const prop in person) {
        console.log(`person[${prop}] = ${person[prop]}`);
    }
};
const Student = {
    name: 'John',
    GPA: 3.5
};
//Access props dynamically
const GetStudentKeys = (student) => {
    //V1
    for (const key in student) {
        console.log(`${key} : ${student[key]}`);
    }
    //V2
    Object.keys(student).map(key => {
        console.log(`${key} : ${student[key]}`);
    });
};
