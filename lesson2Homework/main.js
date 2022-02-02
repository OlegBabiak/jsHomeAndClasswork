// 1

let time = 30;
if (0 > time || time > 59) {
    console.log('time is not valid');
} else {
    if (time <= 14) {
        console.log('first quarter')
    } else if (14 < time && time <= 29) {
        console.log('second quarter');
    } else if (29 < time && time <= 44) {
        console.log('third quarter');
    } else if (44 < time && time <= 59) {
        console.log('fourth quarter');
    }
}


// 2

let day = 31;
if (day < 1 || day > 31) {
    console.log('day is not valid');
} else {
    if (day <= 10) {
        console.log('first decade')
    } else if (10 < day && day <= 20) {
        console.log('second decade');
    } else if (20 < day && day <= 31) {
        console.log('third decade');
    }
}


// 3

let test = true;
if (test !== true) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

console.log(test !== true ? "Вірно!" : "Неправильно!");


// 4

// let a = 0;
// let a = 1;
let a = -3;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}


// 5

let deyOfWeek = "7";
switch (deyOfWeek) {
    case "1":
        console.log("some Monday affairs");
        break;
    case "2":
        console.log("some Tuesday affairs");
        break;
    case "3":
        console.log("some Wednesday affairs");
        break;
    case "4":
        console.log("some Thursday affairs");
        break;
    case "5":
        console.log("some Friday affairs");
        break;
    case "6":
        console.log("some Saturday affairs");
        break;
    case "7":
        console.log("some Sunday rest");
        break;
    default:
        console.log("not enough days to rest");
}


// 6

let year = 2020;
if (year % 4 === 0) {
    console.log("Високосний рік");

} else {
    console.log("Звичайний рік");
}


// 7

let officialNameJS = prompt("Яка «офіційна» назва JavaScript?")

if (officialNameJS === "ECMAScript") {
    document.write("Правильно!")
} else {
    document.write("Не знаєте? ECMAScript!")
}