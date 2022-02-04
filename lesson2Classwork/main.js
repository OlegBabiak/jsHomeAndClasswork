// 1
let firstInt = 151;
let secondInt = 151;

if (firstInt === secondInt) {
    console.log("numbers are equal");
} else if (firstInt > secondInt) {
    console.log(firstInt + " is Max");
} else {
    console.log(secondInt + " is Max");
}


// 2
let apartmentNumber = 90;
if (1 > apartmentNumber || apartmentNumber > 90) {
    console.log('в цьому будинку відсутня квартира з номером ' + apartmentNumber);
} else {
    if (apartmentNumber <= 20) {
        console.log('квартира ' + apartmentNumber + ' знаходиться в першому під\'їзді');
    } else if (20 < apartmentNumber && apartmentNumber <= 48) {
        console.log('квартира ' + apartmentNumber + ' знаходиться в другому під\'їзді');
    } else if (48 < apartmentNumber && apartmentNumber <= 90) {
        console.log('квартира ' + apartmentNumber + ' знаходиться в третьому під\'їзді');
    }
}


// 3
let number = +prompt("задйте числове значення");
if (number === 10){
document.write("ВІРНО");
}else {
    document.write("НЕВІРНО");
}


// 4
let x = prompt("задайте значення змінної x");
// let x = [true,false];
let integer = 1;
let str = "string";
let bool = true;
let obj = {
    objName:null
};
console.log(typeof integer);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
if (typeof x === typeof integer){
    document.write("1");
}else if (typeof x === typeof str){
    document.write("2");
}else if (typeof x === typeof bool){
    document.write("3");
}else if (typeof x === typeof obj){
    document.write("4");
}else {
    document.write("в змінну записали щось інше")
}

// 5
let temperature = 23;

if (temperature >= 10 && temperature <= 22) {
    document.write("ми йдемо ВЧИТИСЯ");
} else {
    document.write("сидимо вдома і вчимося ОНЛАЙН");
}


// 6
let enteredNumber = 1;
switch (enteredNumber) {
    case 1:
        console.log("дається приз Авто");
        break;
    case 2:
        console.log("дається приз Мото");
        break;
    case 3:
        console.log("дається приз Телефон");
        break;
    case 4:
        console.log("дається приз Скейт");
        break;
    case 5:
        console.log("дається приз jack daniels");
        break;
    default:
        console.log("число не вірне ... ");
}
