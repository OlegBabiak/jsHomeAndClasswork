//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whistle'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

let n1 = 'Harry...Potter';
let n2 = 'Ron---Whistle';
let n3 = 'Hermione__Granger';

let normStr = str => {
    let n4 = str.replace('.', ' ').replaceAll('.', '');
    let n5 = n4.replace('-', ' ').replaceAll('-', '');
    return n5.replace('_', ' ').replaceAll('_', '');
};
let n4 = (normStr(n1));
console.log(n4);
n4 = (normStr(n2));
console.log(n4);
n4 = (normStr(n3));
console.log(n4);


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArrGen = () => {
    let randArr = [];
    for (let i = 0; i < 10; i++) {
        randArr[i] = Math.round(Math.random() * 100);
    }
    return randArr;
};
console.log(randomArrGen());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let unsortedArr = randomArrGen();
console.log(unsortedArr);
let sortedArr = unsortedArr.sort((a, b) => a - b);
console.log(sortedArr);


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filteredArr = unsortedArr.filter(item => item % 2 === 0);
console.log(filteredArr);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let strConvert = arr => arr.map(value => {
    value += '';
    return value;
});
console.log(strConvert(randomArrGen()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

let directionSortArr = randomArrGen();
console.log(directionSortArr)
// if direction = 'ascending'=== true a -> b, else 'descending' b <- a
let sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } else return arr;
};
console.log(sortNums('descending', directionSortArr));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let sortedCourses = coursesAndDurationArray.sort((courseA, courseB) => courseB.monthDuration - courseA.monthDuration)
console.log(sortedCourses);

let overFiveMonthCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(overFiveMonthCourses);
