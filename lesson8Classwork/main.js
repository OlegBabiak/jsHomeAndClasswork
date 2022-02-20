//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :


//    a) додає клас з назвою групи, елементу з ід main_header
document.getElementById("main_header").classList.add("dec-2021-java");


//    b) робить шириниу елементу ul 400px
document.getElementsByTagName("ul")[0].style.width = "400px";


//    c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListClassElements = document.getElementsByClassName("linkList");
for (let linkListClassElement of linkListClassElements) {
    linkListClassElement.style.width = "50%";
}


//    d) отримує текст який зберігається в елементі з класом listElement2
let textListElement2 = document.getElementsByClassName("listElement2")[0].textContent;
console.log(textListElement2);
// console.log(document.getElementsByClassName("listElement2")[0].innerHTML);


//    e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName("li");
for (let liListElement of liList) {
    liListElement.style.backgroundColor = "gray";
}


//    f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName("a");
for (let aListElement of aList) {
    aListElement.classList.add("anchor");
}


//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//    змінює йому розмір тексту на 40 пікселів
for (let aListElement of aList) {
    if (aListElement.textContent === "link3") {
        aListElement.style.fontSize = "40px";
    }
}


//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aListElement of aList) {
    aListElement.classList.add("element_" + aListElement.textContent);
}


//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName("sub-header");
let subHeaderColor = prompt("please insert background color");
// let subHeaderColor = "red";
for (let subHeader of subHeaders) {
    subHeader.style.backgroundColor = subHeaderColor;
}


//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
//    Колір отримати з prompt()
for (let subHeader of subHeaders) {
    if (subHeader.textContent === "content 2 segment") {
        subHeader.style.color = prompt("please insert text color");
        // subHeader.style.color = "white";
    }
}


//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName("content_1")[0].innerHTML = `<p>${prompt("please insert your text")}</p>`;
// document.getElementsByClassName("content_1")[0].innerHTML = "<p>please insert your text</p>";


//    l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName("p");
for (let pListElement of pList) {
    pListElement.style.padding = "20px";
}


//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.getElementsByClassName("text2")[0].textContent = "dec-2021";
