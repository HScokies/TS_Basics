"use strict";
//String array example
let StrArr = ['a', 'b', 'c'];
//StrArr[0] = 2; - Err
//StrArr.push(2); - Err
//String+number array example
let UnionArr = ['1', 2, '3'];
//UnionArr[0] = true; - Err
UnionArr[0] = 1; //OK
UnionArr.unshift('0'); //OK
//StrArr = UnionArr; - Err
UnionArr = StrArr; //OK
//Tuple example
let Tuple = ['0', 0, false];
//Tuple[0] = 0; - Err 
//Tuple[3] = 0; - Err
Tuple[1] = 1; //OK
let Arr = ['0', 0, false];
Arr = Tuple; //OK
//Tuple = Arr; - Err
//Object example
const MyObj = {
    StrProp: 'str',
    BoolProp: false
};
//MyObj.BoolProp = 'false'; - Err
//Enum example
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["Zero"] = 0] = "Zero";
    MyEnum[MyEnum["One"] = 1] = "One";
    MyEnum[MyEnum["Two"] = 2] = "Two";
    MyEnum[MyEnum["Three"] = 3] = "Three";
    MyEnum["Str"] = "Str";
})(MyEnum || (MyEnum = {})); // 0, 1, 2, 3, 'Str'
//Literal DataType example
let Sex; //aka variable : possible values
// The problem: you cant assign to 'CoolGuy' any other object w/ diffrent data type or add new prop 
const CoolGuy = {
    name: "Jake",
    gender: ["Male", 1]
};
const Greet_V1 = (person) => {
    if (person.age) {
        return `Hello, ${person.name}, your age = ${person.age}`;
    }
    else {
        return `Hello, ${person.name}`;
    }
};
const Greet_V2 = (person) => {
    var _a;
    //Possible output: Hello, Jake, your age = undefined
    return `Hello, ${person.name}, your age = ${(_a = person.age) === null || _a === void 0 ? void 0 : _a.toString()}`;
};
let StrVar = '0'; //OK
let NumVar = 0; //OK
//let BoolVar:StrOrNum = false - Err
