let array = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)];

// let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
let result = 0;
for (let i = 0; i < array.length; i++) {
    result = result + array[i];
}
console.log(result);

let book1 = {
    name: null,
    numberOfPages: 0,
    genre: null
};
let book2 = {
    name: null,
    numberOfPages: 0,
    genre: null,
    authors: null
};
let books = [book3 = {name: 'Odyssey', numberOfPages: 408, genre: 'epos', authors: 'Homer'},
    book4 = {name: 'Fond', numberOfPages: 548, genre: 'sf', authors: 'Azimov'}];
console.log(books[0]);
console.log(books[1]);

let height = 23;
let width = 10;
let s = height * width;

let heightC = 10;
let dC = 4;
let v = heightC * dC;

let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n,2) + Math.pow(m,2)));