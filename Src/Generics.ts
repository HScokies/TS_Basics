const UsersMock = [
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      }
]

interface idcheckID {
    id: number
}

//Input params (T) should contain idcheckID (id:number field) && param (K) should be object T key
const getUsersProperty = <T extends idcheckID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}
getUsersProperty(UsersMock, "username"); //['Kamren', 'Leopoldo_Corkery']


//Class w/ Generics
class namedValue<T> {
  private value: T | undefined;
  constructor(private name: string) {    
  }

  public setValue(_value: T){
    this.value = _value;
  }
  public getValue(): T | undefined{
    return this.value;
  }
}

const value = new namedValue('MyValue');
value.setValue(1);
value.setValue("true");
value.setValue(true);
value.setValue([1, "true", true]);



