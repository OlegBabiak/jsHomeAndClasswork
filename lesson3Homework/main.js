// 1
let arr0 = [1, 2, 3, 4, 5];
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ['1', "a", 2, true, false];
let arrArr = [arr0, arr1, arr2];

for (let i = 0; i < arrArr.length; i++) {
    console.log(arrArr[i]);
    for (let j = 0; j < arrArr[i].length; j++) {
        console.log(arrArr[i][j]);
    }
}

// 2
let eArr = [];
eArr[0] = 15;
eArr[1] = true;
eArr[2] = "450";
for (let i = 0; i < eArr.length; i++) {
    console.log(eArr[i]);
}

// 3
for (let i = 0; i < 10; i++) {
    document.write(`<div>some text</div>`);
}

// 4
for (let i = 0; i < 10; i++) {
    document.write(`<div>some text line № ${i}</div>`);
}

// 5
let i1 = 0;
while (i1 < 20) {
    document.write(`<h1>some text </h1>`);
    i1++;
}

// 6
let i2 = 0;
while (i2 < 20) {
    document.write(`<h1>some text line № ${i2}</h1>`);
    i2++;
}

// 7
let item = [1, 5, 10, 15, 18, 23, 25, 28, 35, 40];
for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
}

// 8
let str = ['10', 'a', '25', '15', 'c', '2', 's', '9', 'y', '4'];
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 9
let br = [true, '2', 56, false, '16', 17, 'f', 'l', 'j', 89];
for (let i = 0; i < br.length; i++) {
    console.log(br[i]);
}

// 10
let ing = ['2', 'f', '56', 45, true, "f", false, 16, 24, '18'];
for (let i = 0; i < ing.length; i++) {
    if (typeof ing[i] === typeof false) {
        console.log(ing[i]);
    }
}

// 11
let array18 = ['2', 'f', '56', 45, true, "f", false, 16, 24, '18'];
for (let i = 0; i < array18.length; i++) {
    if (typeof array18[i] === typeof 1) {
        console.log(array18[i])
    }
}

// 12
let array19 = ['2', 'f', '56', 45, true, "f", false, 16, 24, '18'];
for (let i = 0; i < array19.length; i++) {
    if (typeof array19[i] === typeof "1") {
        console.log(array19[i])
    }
}

// 13
let array101 = [];
array101[0] = 15;
array101[1] = true;
array101[2] = "450";
array101[3] = 451;
array101[4] = false;
array101[5] = "451";
array101[6] = 15.3;
array101[7] = 'char';
array101[8] = true;
array101[9] = "false";
for (let i = 0; i < array101.length; i++) {
    console.log(array101[i]);
}

// 14
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + '<br/>');
}

// 15
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + '<br/>');
}

// 16
for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write(i + '<br/>');
}

// 17
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i + '<br/>');
    }
}

// 18
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i + '<br/>');
    }
}