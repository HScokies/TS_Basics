"use strict";
// CLASS extends Example
class Vehicle {
    constructor(VIN, //allows access from anywhere, can't reassign
    Name, // allows access from anywhere
    Owner, //only allows access from within the class
    Weight = 0 // allows access from itself and any classes that inherit it
    ) {
        this.VIN = VIN;
        this.Name = Name;
        this.Owner = Owner;
        this.Weight = Weight;
        this.VIN = VIN;
        this.Name = Name;
        this.Owner = Owner;
        this.Weight = Weight;
    }
    GetOwner() {
        return this.Owner;
    }
}
const veh = new Vehicle(32, 'Scooter', 'John');
veh.GetOwner();
class Car extends Vehicle {
    constructor(category = 'SUV', id, name, owner, weight) {
        super(id, name, owner, weight);
        this.category = category;
        this.category = category;
    }
    GetWeight() {
        return `${this.Weight} lbs`;
    }
}
const Granger = new Car(undefined, 10, 'Granger 3600LX', 'Jane');
Granger.GetWeight(); // 0 lbs
const Baller = new Car('SUV', 15, 'Gallivanter Baller LE LWB (Armored)', 'Oleg', 5662);
Baller.GetWeight(); // 5662 lbs
class Helicopter {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    GetSellPrice(age) {
        return `${this.name} helicopter sell price is ${this.price / age} USD`;
    }
}
const Savage = new Helicopter('Savage', 1950000);
Savage.GetSellPrice(3); //Savage helicopter sell price is 650000 USD
//Static prop example
class EmployeeRepository {
    static GetEmployeesCount() {
        return this.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = EmployeeRepository.count++;
    }
}
EmployeeRepository.count = 0;
const Jack = new EmployeeRepository('Jack');
const Bill = new EmployeeRepository('Bill');
EmployeeRepository.GetEmployeesCount(); // 2
//Get-Set example
class UseState {
    constructor(state) {
        this.state = state;
        this.state = state;
    }
    get State() {
        return this.state;
    }
    set State(value) {
        this.state = value;
    }
}
const MyState = new UseState(['Str', true]);
MyState.State; // ['Str', true]
MyState.State = [...MyState.State, 1];
MyState.State; // ['Str', true, 1]
