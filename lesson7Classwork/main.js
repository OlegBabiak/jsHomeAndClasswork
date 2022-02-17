// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Driver(driverName, category) {
    this.driverName = driverName;
    this.category = category;
}

function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`model -  ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`yearOfManufacture - ${this.yearOfManufacture}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
    this.infoWithDriver = function () {
        console.log(`model -  ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`yearOfManufacture - ${this.yearOfManufacture}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
        console.log(`driver - ${this.driver.driverName}`);
        console.log(`driver category - ${this.driver.category}`);
    };
}

let car1 = new Car("yaris", "toyota", 2015, 155, 1.5);

console.log("info(): ");
car1.info();
car1.drive();
car1.increaseMaxSpeed(165);
car1.changeYear(2017);
car1.addDriver(new Driver("Inna", "B"));
console.log("");
console.log("infoWithDriver(): ");
car1.infoWithDriver();
console.log("");


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = function () {
        console.log(`model -  ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`yearOfManufacture - ${this.yearOfManufacture}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    };
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    };
    addDriver = function (driver) {
        this.driver = driver;
    };
    infoWithDriver = function () {
        console.log(`model -  ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`yearOfManufacture - ${this.yearOfManufacture}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
        console.log(`driver - ${this.driver.driverName}`);
        console.log(`driver category - ${this.driver.category} `);
    };
}

class Driver2 {
    constructor(driverName, category) {
        this.driverName = driverName;
        this.category = category;
    }
}

let driver2 = new Driver2("Natalia", "B");
let car2 = new Car2("aygo", "toyota", 2014, 125, 1.0);

car2.drive();
car2.info();
car2.changeYear(2021);
car2.increaseMaxSpeed(135);
car2.addDriver(driver2);
console.log("");
car2.infoWithDriver();
console.log("");


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class Cinderella {
    constructor(nameCin, ageCin, footSize) {
        this.nameCin = nameCin;
        this.ageCin = ageCin;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(princesName, princeAge, shoeSize) {
        this.princesName = princesName;
        this.princeAge = princeAge;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [];
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella("CinName" + (1 + i), Math.round(Math.random() * 7) + 18,
        Math.round(Math.random() * 6) + 35));
}
console.log(cinderellas);
let prince = new Prince("Prince", 19, 36);
console.log(prince);
let count = 0;
for (let cinderella of cinderellas) {
    if (prince.shoeSize === cinderella.footSize) {
        ++count;
        console.log("Знайшов першу попелюшку якій підійшла туфелька " + cinderella.nameCin);
        break;
    }
}
if (count === 0) {
    console.log("Необхідно знайти наступних десять претенденток");

}
console.log("");


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella1 = cinderellas.find(size => size.footSize === prince.shoeSize);
if (cinderella1 === undefined) {
    console.log("Необхідно знайти наступних десять претенденток");
} else {
    console.log(prince.princesName + " " + prince.princeAge + " - річний знайшов "
        + cinderella1.ageCin + " - річну " + cinderella1.nameCin + " попелюшку якій підійшла туфелька "
        + cinderella1.footSize + " розміру");
}
