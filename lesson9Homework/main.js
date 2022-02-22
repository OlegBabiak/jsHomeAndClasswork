/*
Все робити за допомоги js.
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.   */

let div1 = document.createElement('div');
div1.classList.add("wrap", "collapse", "alpha", "beta");
div1.style.fontSize = "15px";
div1.style.color = "white";
div1.style.textAlign = "center";
div1.style.backgroundColor = "brown";
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.margin = "20px";
div1.innerText = "div";
document.body.append(div1);
let div2 = div1.cloneNode(true);
document.body.append(div2);

/*
 - Є масив:
['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.
 */

let array = ['Main', 'Products', 'About us', 'Contacts'];
let liAdder = arr => {
    for (let string of arr) {
        let li = document.createElement('li');
        li.innerText = string;
        document.getElementsByClassName("menu")[0].append(li);
    }
};
liAdder(array);


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/*
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли. */

// for (let course of coursesAndDurationArray) {
//     let{title,monthDuration} = course;
//     let div = document.createElement('div');
//     div.innerText = `${title} ${monthDuration}`;
//     document.body.append(div);
// }


//- Є масив let coursesAndDurationArray

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (let course of coursesAndDurationArray) {
    let {title,monthDuration} = course;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    div.classList.add('item');
    h2.classList.add('heading');
    p.classList.add('description');
    h2.innerText = title;
    p.innerText=`${monthDuration}`;
    document.body.append(div);
    document.getElementsByClassName('item')[0].append(h2);
    document.getElementsByClassName('item')[0].append(p);
}
