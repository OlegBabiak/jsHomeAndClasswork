// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
//    -- отримує текст з параграфа з id "content"

let cont = document.getElementById("content");
let contTxt = cont.innerText;
console.log(contTxt);


//    -- отримує текст з блоку з id "rules"


let rules = document.getElementById("rules");
let rulesTxt = rules.innerHTML;
console.log(rulesTxt);

//    -- замініть текст параграфа з id 'content' на будь-який інший
let modText = "змінений текст";
document.getElementById("content").innerText = modText;


//    -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById("rules").innerHTML = `<i>${modText}</i>`;


//    -- змініть кожному елементу колір фону на червоний

let elColor = 'red';

function allEl(el, color) {
    let children = el.children;
    for (let child of children) {
        child.style.backgroundColor = color;
        allEl(child);
    }
}

allEl(document.body, elColor);


//    -- змініть кожному елементу колір тексту на синій

elColor = 'blue';
allEl(document.body, elColor);


//    -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesClasses = document.getElementById("rules").classList;
console.log(rulesClasses);


//    -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rulesList = document.getElementsByClassName("fc_rules");
for (let fcRulesListElement of fc_rulesList) {
    fcRulesListElement.style.backgroundColor = "red";
}














