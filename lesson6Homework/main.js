//- Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length);
console.log(loremIpsum.length);
console.log(javascriptIsCool.length);

//- Перевести до великого регістру наступні стрінгові значення
//      'hello world', 'lorem ipsum', 'javascript is cool'
let upperHelloWorld = helloWorld.toUpperCase();
let upperLoremIpsum = loremIpsum.toUpperCase();
let upperJavascriptIsCool = javascriptIsCool.toUpperCase();

console.log(upperHelloWorld);
console.log(upperLoremIpsum);
console.log(upperJavascriptIsCool);

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerHelloWorld = helloWorld.toLowerCase();
let lowerLoremIpsum = loremIpsum.toLowerCase();
let lowerJavascriptIsCool = javascriptIsCool.toLowerCase();

console.log(lowerHelloWorld);
console.log(lowerLoremIpsum);
console.log(lowerJavascriptIsCool);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let clearStr = str.trim();
console.log(clearStr);

//- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//    let arr = stringToArray(str);
//    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let rainbow = 'Каждый охотник желает знать';
let stringToArray = str => {
    let arr = str.split(" ");
    document.writeln(arr + "</br>");
};
stringToArray(rainbow);


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//    document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.slice(0, length);
document.writeln(delete_characters(rainbow, 7) + "</br>");


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
//  document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = "HTML JavaScript PHP";
let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();

document.writeln(insert_dash(str3) + "</br>");


//- Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstUp = (str) => str[0].toUpperCase().concat(str.slice(1, str.length));
console.log(firstUp(helloWorld));


//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let helloJSWorld = 'hello world javascript is cool';

let capitalize = str => {
    let strings = str.split(" ");
    let capitalizeStr = "";
    for (let string1 of strings) {
        let sr = string1[0].toUpperCase().concat(string1.slice(1, string1.length));
        capitalizeStr = capitalizeStr.concat(sr).concat(" ");
    }
    return capitalizeStr.trim();
};
console.log(capitalize(helloJSWorld));
