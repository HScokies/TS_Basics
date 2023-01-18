//Type Casting example
type One = string;
type Two = string | number;
type Three = 'Str'

let a: One = 'Hello';
let b = a as Two;// or <Two>a;
let c = a as Three; //'Hello'

//Extended type casting example
const AddOrConcat = (a: number, b: number, c: 'add' | 'concat') => {
    switch (c) {
        case 'add':
            return a + b;
        case 'concat':
            return `${a}${b}`;
    }
}
let Concated: string = AddOrConcat(1, 2, 'concat') as string;
let N:number = (Concated as unknown) as number; // Concated as Number - Err

//Type casting also can be used w/ DOM
const theme = document.querySelector("#ThemeCtrl")! as HTMLStyleElement; // cast as HTMLImageElement if not null
if (theme) {
    theme.textContent = `
        *{
            background-color: black;
            color: whitesmoke;
            font-family: 'Consolas';
            font-size: large;
        }`;
}

