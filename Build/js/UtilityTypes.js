"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Partial changes all the properties in an object to be optional.
const assignment = {};
assignment.sID = '123';
assignment; // {sId: '123'}
const updateAssignment = (assign, props2update) => (Object.assign(Object.assign({}, assign), props2update));
const assign1 = {
    sID: "compsci123",
    title: "Final Project",
    grade: 0,
};
const assignGraded = updateAssignment(assign1, { grade: 90 });
//Required changes all the properties in an object to be required.
//assign how should contain all IAssignment props
const recordAssignment = (assign) => {
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//now you can't edit verifiedAssignment
const verifiedAssignment = Object.assign(Object.assign({}, assignGraded), { verified: true });
//Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap = {
    'Jake': 10,
    'Alice': 15
};
const finalGrader = {
    "Sara": "A",
    "Kelly": "F"
};
const preview = {
    sID: 'abc',
    title: 'Final Project'
};
const score = {
    sID: "s132",
    grade: 95
};
//Exclude removes types from a union.
let nonStr;
//nonStr =  'str'; - Err
//Extract extracts types from a union
let strOnly;
const createNewAssign = (title, points) => {
    return { title, points };
};
const Assign1 = createNewAssign("Assignment1 name", 55);
const assignArgs = ["Assignment2 name", 33];
const Assign2 = createNewAssign(...assignArgs);
//Awaited - helps w/ return type of promise
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
class FetchState {
    setValue(_value) {
        this.value = _value;
    }
    getValue() {
        return this.value;
    }
}
const Users = new FetchState();
const GetData = (BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch(BASE_URL).then(res => res.json());
        return data;
    }
    catch (err) {
        return err;
    }
});
Promise.all([GetData(BASE_URL)]).then(data => { Users.setValue(data[0]); console.log(Users.getValue()); });
