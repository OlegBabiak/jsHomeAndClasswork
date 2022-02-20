// tasks from additional.txt

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let template = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class objTemplate {
    constructor(id, name, username, email,
                street, suite, city, zipcode,
                lat, lng,
                phone, website,
                nameCompany, catchPhrase, bs) {
        this.objId = id;
        this.objName = name;
        this.username = username;
        this.email = email;
        this.address = new Address(street, suite, city, zipcode,
            this.geo = new Geo(lat, lng));
        this.phone = phone;
        this.website = website;
        this.company = new Company(nameCompany, catchPhrase, bs);
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(nameCompany, catchPhrase, bs) {
        this.nameCompany = nameCompany;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let leanneGraham = new objTemplate(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(leanneGraham);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//      - назва тегу ()
//      - опис його дій
//      - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//      - назву атрибуту
//      - опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

class TagDescription {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [...attrs];
    }
}

class Attr {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let tegA = new TagDescription("a",
    "Тег a является одним из важных элементов HTML и предназначен для создания ссылок.",
    [new Attr("href", "Задает адрес документа, на который следует перейти."),
        new Attr("name", "Устанавливает имя якоря внутри документа.")]);
console.log(tegA);

let tegDiv = new TagDescription("div","Элемент div является блочным элементом и предназначен для" +
    " выделения фрагмента документа с целью изменения вида содержимого.", [
        new Attr("align", "Задает выравнивание содержимого тега div"),
        new Attr("title", "Добавляет всплывающую подсказку к содержимому.")]);
console.log(tegDiv);

let tegH1 = new TagDescription("h1", "тег h1 представляет собой наиболее важный заголовок первого уровня", [
    new Attr("align", "Определяет выравнивание заголовка."),
    new Attr("hidden", "Скрывает содержимое элемента от просмотра.")]);
console.log(tegH1);

let tegSpan = new TagDescription("span", "Тег span предназначен для определения строчных элементов документа.", [
    new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."),
    new Attr("dir", "Задает направление и отображение текста — слева направо или справа налево.")]);
console.log(tegSpan);

let tegInput = new TagDescription("input", "Тег input является одним из разносторонних элементов " +
    "формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", [
    new Attr("type", "Сообщает браузеру, к какому типу относится элемент формы."),
    new Attr("form", "Связывает поле с формой по её идентификатору.")]);
console.log(tegInput);

let tegForm = new TagDescription("form", "Тег form устанавливает форму на веб-странице.", [
    new Attr("action", "Адрес программы или документа, который обрабатывает данные формы."),
    new Attr("target", "Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.")]);
console.log(tegForm);

let tegOption = new TagDescription("option", "Тег option определяет отдельные пункты списка, создаваемого" +
    " с помощью контейнера select", [
    new Attr("selected", "Заранее устанавливает определенный пункт списка выделенным."),
    new Attr("value", "Значение пункта списка, которое будет отправлено на сервер" +
        " или прочитано с помощью скриптов.")]);
console.log(tegOption);

let tagSelect = new TagDescription("select", "Тег select позволяет создать элемент интерфейса в виде" +
    " раскрывающегося списка, а также список с одним или множественным выбором", [
    new Attr("multiple", "Позволяет одновременно выбирать сразу несколько элементов списка."),
    new Attr("required", "Список обязателен для выбора перед отправкой формы.")]);
console.log(tagSelect);
