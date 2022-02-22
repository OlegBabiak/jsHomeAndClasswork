// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
let memberCreator = arr => {
    for (let simpson of arr) {
        let simpsonDiv = document.createElement('div');
        simpsonDiv.classList.add("member");
        document.body.appendChild(simpsonDiv);
    }
};
memberCreator(simpsons);

/*
- взяти попередній масив з сімпсонами.
    Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
    Для кожної властивості елементу створити окремий блок, та помістити його у div.member */
for (let simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');
    let divName = document.createElement('div');
    let divSurname = document.createElement('div');
    let divAge = document.createElement('div');
    let divInfo = document.createElement('div');
    let img = document.createElement('img');
    divName.innerHTML = `<h2>${simpson.name}</h2>`;
    divSurname.innerHTML = `<h2>${simpson.surname}</h2>`;
    divAge.innerHTML = `<h3>age: ${simpson.age}</h3>`;
    divInfo.innerHTML = `<p>${simpson.info}</p>`;
    img.style.width = '200px';
    img.src = simpson.photo;
    simpsonDiv.append(divName, divSurname, divAge, divInfo, img);
    document.body.appendChild(simpsonDiv);
    simpsonDiv.style.textAlign = 'center';
    simpsonDiv.style.width = '400px';
    simpsonDiv.style.padding = '10px';
    simpsonDiv.style.marginBottom = '40px';
    simpsonDiv.style.border = 'solid orange 2px';
}


// - Є масив
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
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js ', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
/*
Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
властивостей, для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png */

for (let course of coursesArray) {
    let wrapperDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let wrapper2Div = document.createElement('div');
    let monthDurationDiv = document.createElement('div');
    let hourDurationDiv = document.createElement('div');
    let modulesDiv = document.createElement('div');
    let modulesUl = document.createElement('ul');


    titleDiv.innerHTML = `<h2>${course.title}</h2>`;
    monthDurationDiv.innerHTML = `<h2>month duration: ${course.monthDuration}</h2>`;
    hourDurationDiv.innerHTML = `<h2>hour duration: ${course.hourDuration}</h2>`;
    wrapperDiv.style.width = '900px';
    wrapperDiv.style.boxSizing = 'border-box';
    modulesDiv.style.boxSizing = 'border-box';

    titleDiv.style.width = '100%';
    wrapper2Div.style.display = 'flex';
    wrapper2Div.style.justifyContent = 'space-between';
    wrapper2Div.style.width = '100.6%';
    modulesDiv.style.width = '100.6%';
    monthDurationDiv.style.width = '25%';
    hourDurationDiv.style.width = '72%';
    wrapper2Div.style.marginBottom = '20px';
    wrapper2Div.style.marginTop = '20px';
    monthDurationDiv.style.border = 'solid blue 4px';
    hourDurationDiv.style.border = 'solid blue 4px';
    modulesDiv.style.border = 'solid blue 4px';

    wrapperDiv.style.padding = '20px';
    modulesDiv.style.padding = '20px';
    wrapperDiv.style.textAlign = 'center';
    wrapperDiv.style.margin = '40px';
    wrapperDiv.style.border = 'solid red 4px';
    titleDiv.style.border = 'solid blue 4px';

    document.body.appendChild(wrapperDiv);
    wrapperDiv.append(titleDiv);
    wrapperDiv.append(wrapper2Div);
    wrapper2Div.append(monthDurationDiv);
    wrapper2Div.append(hourDurationDiv);
    wrapperDiv.append(modulesDiv);
    modulesDiv.append(modulesUl);

    for (let module of course.modules) {
        let moduleLi = document.createElement('li');
        moduleLi.style.width = '98%';
        moduleLi.style.border = 'solid blue 4px';
        moduleLi.style.marginBottom = '20px';
        moduleLi.innerHTML = `<h3>module: ${module}</h3>`;
        moduleLi.style.textAlign = 'left';
        moduleLi.style.paddingLeft = '2%';
        modulesUl.append(moduleLi);
    }
}
