// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone){
    this.iD = id;
    this.firstName = name;
    this.lastName = surname;
    this.mail = email;
    this.phoneNum = phone;
};
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [
    new User(1, 'John', 'Doe', 'jdoe@gmail.com', 80650987867),
    new User(4, 'Jane', 'Ford', 'jford@gmail.com', 80987656789),
    new User(3, 'Felicity', 'Smawk', 'fsmawk@gmail.com', 80897654321),
    new User(2, 'Barry', 'Allen', 'flash@gmail.com', 80767895432),
    new User(5, 'Kate', 'Kayne', 'batw@gmail.com', 80654389076),
    new User(8, 'Jinny', 'Faith', 'jfaith@gmail.com', 80874321009),
    new User(7, 'Margaret', 'Field', 'mfield@gmail.com', 80889876512),
    new User(6, 'Vik', 'Makew', 'vm@gmail.com', 80760050043),
    new User(9, 'Bob', 'Snail', 'bsn@gmail.com', 80998761234),
    new User(10, 'Annie', 'Ross', 'anro@gmail.com', 80960987321)
];

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(arr.filter(value => {
    return value.iD%2===0;
}));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a,b) => a.iD -b.iD));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
   constructor(id, name, surname, email, phone, order) {
       this.id =id;
       this.name = name;
       this.surname = surname;
       this.email= email;
       this.phone= phone;
       this.order=order;
   };

};

// створити пустий масив, наповнити його 10 об'єктами Client

let arr2 = [
    new Client(1, 'John', 'Doe', 'jdoe@gmail.com', 80650987867, ['phone', 'tv']),
    new Client(4, 'Jane', 'Ford', 'jford@gmail.com', 80987656789, ['fridge', 'kettle']),
    new Client(3, 'Felicity', 'Smawk', 'fsmawk@gmail.com', 80897654321, ['cup']),
    new Client(2, 'Barry', 'Allen', 'flash@gmail.com', 80767895432, ['plate', 'knife', 'spoon']),
    new Client(5, 'Kate', 'Kayne', 'batw@gmail.com', 80654389076, ['fork', 'table', 'chair', 'sofa']),
    new Client(8, 'Jinny', 'Faith', 'jfaith@gmail.com', 80874321009, ['chair', 'table', 'bed', 'sofa', 'clock']),
    new Client(7, 'Margaret', 'Field', 'mfield@gmail.com', 80889876512, ['computer']),
    new Client(6, 'Vik', 'Makew', 'vm@gmail.com', 80760050043, ['laptop', 'speaker']),
    new Client(9, 'Bob', 'Snail', 'bsn@gmail.com', 80998761234, ['bed', 'pillow', 'blanket']),
    new Client(10, 'Annie', 'Ross', 'anro@gmail.com', 80960987321, ['kettle'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arr2.sort((a,b) => a.order.length -b.order.length));