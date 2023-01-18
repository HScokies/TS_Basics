//String array example
let StrArr:string[] = ['a','b','c'];
//StrArr[0] = 2; - Err
//StrArr.push(2); - Err

//String+number array example
let UnionArr:(string | number)[] = ['1', 2, '3'];
//UnionArr[0] = true; - Err
UnionArr[0] = 1; //OK
UnionArr.unshift('0') //OK
//StrArr = UnionArr; - Err
UnionArr = StrArr //OK

//Tuple example
let Tuple: [string, number, boolean] = ['0', 0, false];
//Tuple[0] = 0; - Err 
//Tuple[3] = 0; - Err
Tuple[1] = 1;//OK

let Arr = ['0', 0, false];
Arr = Tuple;//OK
//Tuple = Arr; - Err

//Object example
const MyObj = {
    StrProp: 'str',
    BoolProp: false
}
//MyObj.BoolProp = 'false'; - Err

//Enum example
enum MyEnum{
    Zero,
    One,
    Two,
    Three,
    Str = 'Str'
}// 0, 1, 2, 3, 'Str'

//Literal DataType example
let Sex: 'Male' | 'Female';//aka variable : possible values

//Custom DataType example (kinda)
//V1
type Person_1 = { //Also can be 'interface Person'
    name: string,
    gender: (string | number)[],
    age?: number //Optional prop
}
//V2
interface Person_2{
    name: string,
    gender: (string | number)[],
    age?: number //Optional prop
}

// The problem: you cant assign to 'CoolGuy' any other object w/ diffrent data type or add new prop 
const CoolGuy:Person_1 = {
    name: "Jake",
    gender: ["Male", 1]
}

const Greet_V1 = (person:Person_1 | Person_2) =>{
    if (person.age){
        return `Hello, ${person.name}, your age = ${person.age}`;
    }
    else{
        return `Hello, ${person.name}`;
    }
}

const Greet_V2 = (person: Person_1 | Person_2) => {
    //Possible output: Hello, Jake, your age = undefined
    return `Hello, ${person.name}, your age = ${person.age?.toString()}`;
}

//Type Alias
type StrOrNum = string | number;
let StrVar:StrOrNum = '0';//OK
let NumVar:StrOrNum = 0;//OK
//let BoolVar:StrOrNum = false - Err

