
interface IAssignment{
    sID: string,
    title: string,
    grade: number,
    verified?:boolean
}
//Partial changes all the properties in an object to be optional.
const assignment: Partial<IAssignment> = {};
assignment.sID = '123';
assignment // {sId: '123'}

const updateAssignment = (assign: IAssignment, props2update: Partial<IAssignment>):IAssignment =>(
    {...assign, ...props2update}
)
const assign1: IAssignment = {
    sID: "compsci123",
    title: "Final Project",
    grade: 0,
}
const assignGraded: IAssignment = updateAssignment(assign1, { grade: 90 })

//Required changes all the properties in an object to be required.
//assign how should contain all IAssignment props
const recordAssignment = (assign: Required<IAssignment>):IAssignment =>{
    return assign;
}
recordAssignment({...assignGraded, verified: true});

//now you can't edit verifiedAssignment
const verifiedAssignment:Readonly<IAssignment> = {...assignGraded, verified: true}


//Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap:  Record<string,number> = {
    'Jake' : 10,
    'Alice' : 15
}
//or
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "F"
const finalGrader: Record<Students, LetterGrades> = {
    "Sara" : "A",
    "Kelly" : "F"
}

//Omit removes keys from an object type.
type  assignPreview = Omit<IAssignment, "grade" | "verified">
const preview: assignPreview ={
    sID: 'abc',
    title: 'Final Project'
}

//Pick removes all but the specified keys from an object type.
type assignResult = Pick<IAssignment, "sID" | "grade">
const score: assignResult = {
    sID: "s132",
    grade: 95
}

type primitive = string | number | boolean;
//Exclude removes types from a union.
let nonStr: Exclude<primitive, string>;
//nonStr =  'str'; - Err

//Extract extracts types from a union
let strOnly: Extract<primitive, string>;
//strOnly = 1; - Err


//Nonnullable excludes null&undefined from a union.
type DT = string | number | undefined | null;
type NonNull = NonNullable<DT>; // string | number

//ReturnType extracts the return type of a function type.
type newAssign = ReturnType<typeof createNewAssign>
const createNewAssign = (title:string, points: number) => {
    return {title, points};
}
const Assign1: newAssign = createNewAssign("Assignment1 name", 55);


//Parameters extracts the parameter types of a function type as an array.
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Assignment2 name", 33];
const Assign2: newAssign = createNewAssign(...assignArgs)


//Awaited - helps w/ return type of promise
const BASE_URL:string = 'https://jsonplaceholder.typicode.com/users';
interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
}
type FetchReturn = Awaited<ReturnType<typeof GetData>>;
class FetchState {
    private value: FetchReturn | undefined;
    public setValue(_value: FetchReturn){
      this.value = _value;
    }
    public getValue(): FetchReturn | undefined{
      return this.value;
    }
  }
const Users = new FetchState();

const GetData = async (BASE_URL:string):Promise<IUser[] | Error> => {
    try{
        const data = await fetch(BASE_URL).then(res => res.json());
        return data;
    } catch (err){
        return err as Error;
    }
}

Promise.all([GetData(BASE_URL)]).then(
    data => {Users.setValue(data[0]); console.log(Users.getValue());}
);





