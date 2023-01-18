"use strict";
// const *name* = (*params*):*return datatype*
const Log = (msg) => {
    console.log(msg);
};
const Sum = (a, b) => {
    return a + b;
};
const Multiply = (a, b) => {
    return a * b;
};
//Optional param example
const GetSum = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default param example
const GetSubtraction = (a, b, c = 0) => {
    return a - b - c;
};
//Rest param example
const SummAll = (...args) => {
    return args.reduce((p, c) => p + c);
};
//The Never Type
//Ways to get it
const GetError = (msg) => {
    throw new Error(msg);
};
const GetInfLoop = () => {
    while (true) {
    }
};
//Way to use it
const GetType = (variable) => {
    if (typeof (variable) === 'number')
        return 'number';
    if (typeof (variable) === 'string')
        return 'string';
    return GetError('Invalid datatype');
};
