// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

console.log(rectangleArea(10, 5));


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    return Math.PI * r * r;
}

console.log(circleArea(10).toFixed(2));


// 3 - створити функцію яка обчислює та повертає об'єм циліндру висотою h, та радіутом r

function cylinderCapacity(h, r) {
    return h * circleArea(r);
}

console.log(cylinderCapacity(100, 10).toFixed(2));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент

function arrWriter(arr) {
    for (let item of arr) {
        document.write(item + "</br>");
    }
}

arrWriter([10, 15, 10.15, "125t"]);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphWriter(text) {
    document.write(`<p>${text}</p>`);
}

paragraphWriter("test txt");


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function liCreator(text) {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}

liCreator("test txt2");


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liCreator2(text, count) {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

liCreator2("test text3", 3);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrLiWriter(arr) {
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write("</ul>");
}

arrLiWriter([12, 15, "str", true, false]);

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function objDivWriter(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>id - ${arr[i].id}</br>name - ${arr[i].name}</br>age - ${arr[i].age}</div></br>`);
    }
}
let obj = [
    {
        id: 101,
        name: "name1",
        age: 21
    },
    {
        id: 102,
        name: "name2",
        age: 32
    },
    {
        id: 202,
        name: "name452",
        age: 51
    }
];

objDivWriter(obj);