//          Всі функції повинні бути описані стрілочним типом!!!!


// 1 - створити функцію яка обчислює та повертає площу прямокутника
let rectangleArea = (a, b) => a * b;

console.log("площа прямокутника = " + rectangleArea(25, 48));


// 2 - створити функцію яка обчислює та повертає площу кола

let circleArea = (r) => Math.PI * r * r;

console.log("площа кола = " + circleArea(10).toFixed(2));


// 3 - створити функцію яка обчислює та повертає об'єм циліндру

let cylinderCapacity = (h, r) => h * circleArea(r);

console.log("об'єм циліндру = " + cylinderCapacity(100, 10).toFixed(2));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент

let arrWriter = (arr) => {
    for (let item of arr) {
        document.write(item + "</br>");
    }
}

arrWriter([102, 152, 10.152, "125t2"]);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraphWriter = (text) => document.write(`<p>${text}</p>`);

paragraphWriter("some txt");


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let liCreator = (text) => {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}

liCreator("some txt2");


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liCreator2 = (text, count) => {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

liCreator2("some text3", 3);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrLiWriter = (arr) => {
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write("</ul>");
}
arrLiWriter([123, 153, "str3", true, false]);

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objDivWriter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>id - ${arr[i].id}</br>name - ${arr[i].name}</br>age - ${arr[i].age}</div></br>`);
    }
}

let obj = [
    {
        id: 301,
        name: "name11",
        age: 23
    },
    {
        id: 302,
        name: "name21",
        age: 33
    },
    {
        id: 302,
        name: "name4152",
        age: 53
    }
];
objDivWriter(obj);
