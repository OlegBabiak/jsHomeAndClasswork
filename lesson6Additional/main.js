// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let strArr = [];
    for (let i = 0, j = 0; i < str.length; i += n) {
        j += n;
        strArr.push(str.substring(i, j));
    }
    return strArr;
};
document.writeln(cutString("delectation", 3) + "<br/>");


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// данні до знака равлика(@),
// наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// let inMail = "someemail@gmail.com";
// let inMail = "someeMAIL@gmail.com";
// let inMail = "someeMAIL@i.ua";
let inMail = "some.email@gmail.com";

let mailValidator = mail => {
    let notMail = "mail is not valid";
    let lowerCase = mail.toLowerCase();
    let success = "Вашу пошту " + lowerCase + " успішно зареєстровано!"

    if (lowerCase.includes("@") && lowerCase.includes(".")) {
        if (lowerCase.indexOf("@") > 0) {
            if ((lowerCase.indexOf("@") + 2) < lowerCase.indexOf(".")) {
                return success;
            } else return notMail;
        } else return notMail;
    } else {
        return notMail;
    }
};

console.log(mailValidator(inMail))


// - є масив let coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular',
            'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));


// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
//     let symbol = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symbol)) // 5

let symbol = "о";
str = "Астрономия это наука о небесных объектах";

let count = (str, stringSearch) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch) {
            counter++;
        }
    }
    return counter;
};

document.writeln(count(str, symbol) + "<br/>");


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str2 = "Сила тяжести приложена к центру масс тела";

let cutStrings = (str, n) => {
    let strings2 = str.split(" ");
    let strings3 = "";
    for (let i = 0; i < n; i++) {
        strings3 = strings3.concat(strings2[i], " ");
    }
    strings3 = strings3.trim();
    return strings3;
};
document.writeln(cutStrings(str2, 5) + "<br/>");
