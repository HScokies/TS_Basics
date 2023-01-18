// CLASS extends Example
class Vehicle  {
    constructor(
        public readonly VIN: number, //allows access from anywhere, can't reassign
        public Name:string, // allows access from anywhere
        private Owner: string, //only allows access from within the class
        protected Weight: number = 0// allows access from itself and any classes that inherit it
    ) {
        this.VIN = VIN;
        this.Name = Name;
        this.Owner = Owner;
        this.Weight = Weight;
    }
    public GetOwner():string{
        return this.Owner;
    }
} 

const veh = new Vehicle(32,'Scooter', 'John');
veh.GetOwner();

class Car extends Vehicle{
    constructor(
        public category: string = 'SUV',
        id: number,
        name: string,
        owner: string,
        weight?: number
    )
    {
        super(id,name,owner, weight);
        this.category = category;
    }
    public GetWeight():string{
        return `${this.Weight} lbs`;
    }
}
const Granger = new Car(undefined,10,'Granger 3600LX', 'Jane');
Granger.GetWeight(); // 0 lbs

const Baller = new Car('SUV',15,'Gallivanter Baller LE LWB (Armored)','Oleg',5662)
Baller.GetWeight(); // 5662 lbs

//Class implements Example
interface IHelicopter{
    name: string,
    price: number,
    GetSellPrice(age:number): string
}

class Helicopter implements IHelicopter{
    constructor(
        public name: string,
        public price: number
    )
    {
        this.name = name;
        this.price = price;
    }
    public GetSellPrice(age: number): string {
        return `${this.name} helicopter sell price is ${this.price/age} USD`;
    }
}
const Savage = new Helicopter('Savage',1_950_000);
Savage.GetSellPrice(3); //Savage helicopter sell price is 650000 USD

//Static prop example
class EmployeeRepository {
    static count:number = 0;
    static GetEmployeesCount(){
        return this.count;
    }

    public id: number;
    constructor
    (
        public name: string
    )
    {
        this.name = name;
        this.id = EmployeeRepository.count++;
    }
}

const Jack = new EmployeeRepository('Jack');
const Bill = new EmployeeRepository('Bill');
EmployeeRepository.GetEmployeesCount(); // 2

//Get-Set example
class UseState{
    constructor(private state:number | string | boolean | (number | string | boolean)[]) {
        this.state = state;
    }
    
    public get State(){
        return this.state;
    }
    public set State(value: any){
        this.state = value;
    }
}
const MyState = new UseState(['Str', true]);
MyState.State; // ['Str', true]
MyState.State = [...MyState.State, 1];
MyState.State; // ['Str', true, 1]

