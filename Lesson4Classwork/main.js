// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minFromThree(a, b, c) {
    let min = Number.MAX_VALUE;
    if (a < min) {
        min = a;
    }
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log("minFromThree = " + min);
}

minFromThree(-8, 4, -177);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxFromThree(a, b, c) {
    let max = (Number.MAX_VALUE) * (-1);
    if (a > max) {
        max = a;
    }
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    console.log("maxFromThree = " + max)

}

maxFromThree(-7, 0, -19)


// - створити функцію яка повертає найбільше число з масиву

function maxFromArr(arr) {
    let max = (Number.MAX_VALUE) * (-1);
    for (let arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}

let maximumFromArray = maxFromArr([-5, 17, -256, -98, -45]);
console.log("maximumFromArray = " + maximumFromArray);


// - створити функцію яка повертає найменьше число з масиву

function minFromArr(arr) {
    let min = Number.MAX_VALUE;
    for (let arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}

let minimumFrmArray = minFromArr([-5, 17, 256, -98, -45])
console.log("minimumFrmArray = " + minimumFrmArray);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function getSumFromArray(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

let sumFromArray = getSumFromArray([10, 20, 5, 7, 8]);
console.log("sumFromArray = " + sumFromArray);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function getAverageFromArray(arr) {
    let sum = getSumFromArray(arr);
    return sum / arr.length;
}

let averageFromArray = getAverageFromArray([10, 20, 5, 7, 8, 520, 220, 320, 420, 120])
console.log("averageFromArray = " + averageFromArray);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function getMinAndMax(...numbers) {
    console.log("maxFromMinAndMaxFunction = " + maxFromArr(numbers));
    return minFromArr(numbers);
}

let minFromMinAndMaxFunction = getMinAndMax(10, 20, 5, -7, 8, 520, 220, 320, 420, 120);
console.log("minFromMinAndMaxFunction = " + minFromMinAndMaxFunction);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function setRandomArr() {
    let randomNumbersArr = [Math.round(Math.random() * 100), Math.round(Math.random() * 100),
        Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
    console.log(randomNumbersArr);
    for (let number of randomNumbersArr) {
        console.log(number);
    }
}

setRandomArr();


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function setRandomLimitArr(limit) {
    let randomLimitArr = [];
    for (let i = 0; i < limit; i++) {
        randomLimitArr[i] = Math.round(Math.random() * 100);
    }
    console.log(randomLimitArr);
    for (let randomElement of randomLimitArr) {
        console.log(randomElement);
    }
}

setRandomLimitArr(5);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function makeReverseArr(arr) {
    let reverseArr = [];
    let j = 0;
    for (let i = arr.length; i >= 0; i--) {
        reverseArr[j] = arr[i];
        j++;
    }
    console.log(reverseArr);
}
makeReverseArr([115, 211, 325, 112, 51]);