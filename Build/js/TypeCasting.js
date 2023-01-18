"use strict";
let a = 'Hello';
let b = a; // or <Two>a;
let c = a; //'Hello'
//Extended type casting example
const AddOrConcat = (a, b, c) => {
    switch (c) {
        case 'add':
            return a + b;
        case 'concat':
            return `${a}${b}`;
    }
};
let Concated = AddOrConcat(1, 2, 'concat');
let N = Concated; // Concated as Number - Err
//Type casting also can be used w/ DOM
const theme = document.querySelector("#ThemeCtrl"); // cast as HTMLImageElement if not null
if (theme) {
    theme.textContent = `
        *{
            background-color: black;
            color: whitesmoke;
            font-family: 'Consolas';
            font-size: large;
        }`;
}
