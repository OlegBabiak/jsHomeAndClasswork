// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

for (let i = 10; i > 0; i--) {
    users.push(new User(i, "name" + i, "surname" + i, "surname" + i + "@gmail.com",
        "8067" + i + i + i + i + i + i + i));
}
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenIdUsers = users.filter(users => users.id % 2 === 0);
console.log(evenIdUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);


// - створити класс для об'єктів Client
// з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
for (let i = 0; i < 10; i++) {
    let ord = [];
    for (let j = 0; j < Math.round(Math.random() * 4) + 1; j++) {
        ord.push(Math.round(Math.random() * 100) + " thing");
    }
    // console.log(ord)
    clients.push(new Client(i, "name" + i, "surname" + i, "surname" + i + "@gmail.com",
        "8067" + i + i + i + i + i + i + i, ord));
}
console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);
