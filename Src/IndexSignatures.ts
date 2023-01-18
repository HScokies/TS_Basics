interface IPerson{
    // [index: index datatypes]: prop datatypes
    [index: string | number]: string | number | string[] | undefined
    readonly name: string,
    age: number,
    pets?: string[]
}

const Person : IPerson ={
    name: 'Jake',
    age: 18,
    pets: ['Dog']
}

// Now you can do this
let PropIndex:string = 'Mom';
Person[PropIndex] = 'Jane';

// Or that
const GetPersonProps = (person:IPerson) : void =>{
    for (const prop in person){
        console.log(`person[${prop}] = ${person[prop]}`);
    }
}

// Key of with explicit keys example
interface IStudent{
    name: string,
    GPA: number
}
const Student : IStudent = {
    name: 'John',
    GPA: 3.5
}

//Access props dynamically
const GetStudentKeys = (student : IStudent): void =>{
    //V1
    for (const key in student){
        console.log(
            `${key} : ${student[key as keyof IStudent]}`
        );
    }
    //V2
    Object.keys(student).map(key =>{
        console.log(
            `${key} : ${student[key  as keyof typeof student]}`
        );
    })
}



