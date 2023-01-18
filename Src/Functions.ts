// const *name* = (*params*):*return datatype*
const Log = (msg:any):void => {
    console.log(msg);
}

//Functions + Custom Data Type example
type MathType = (a:number, b:number) => number;
const Sum:MathType = (a, b) =>{
    return a+b; 
}
//Also can be done w/ interface
interface IMath {
    (a:number, b:number):number;
}
const Multiply:IMath = (a,b) => {
    return a*b;
}

//Optional param example
const GetSum = (a:number, b:number, c?:number) =>{
    if (typeof c !== 'undefined'){
        return a+b+c;
    }
    return a+b;
}

//Default param example
const GetSubtraction = (a:number, b:number, c:number=0) =>{
    return a-b-c;
}

//Rest param example
const SummAll = (...args:number[]) =>{
    return args.reduce((p,c) => p+c);
}


//The Never Type

//Ways to get it
const GetError = (msg:string) =>{// option 1
    throw new Error (msg);
}
const GetInfLoop = () => {// option 2
    while (true){

    }
}
//Way to use it
const GetType = (variable:number | string) => {
    if (typeof(variable) === 'number') return 'number';
    if (typeof(variable) === 'string') return 'string';
    return GetError('Invalid datatype');
}