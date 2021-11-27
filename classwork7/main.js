// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Cars(model, manufacturer, year, maxspeed, volume){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.volume=volume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info = function (){
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об. двигуна - ${this.volume} `);
    };
    this.increaseMaxSpeed= function (newSpeed){
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.year=newValue;
    };
    this.addDriver =function (driver){
        this.driver=driver;
    };
};

let carCreate = new  Cars('BMW', 'Germany', 2000, 160, 1.7);

console.log(carCreate);
carCreate.drive();
carCreate.info();
carCreate.increaseMaxSpeed(10);
carCreate.drive();
carCreate.changeYear(2020);
carCreate.info();
carCreate.addDriver('John');
console.log(carCreate);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car{
    constructor(model, manufacturer, year, maxspeed, volume) {
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxspeed=maxspeed;
        this.volume=volume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об. двигуна - ${this.volume} `);
    };
    increaseMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    changeYear (newValue) {
        this.year = newValue;
    };
    addDriver (driver) {
        this.driver = driver;
    };
};

let carCreate2 = new  Car('BMW', 'Germany', 2010, 190, 1.7);

console.log(carCreate2);
carCreate2.drive();
carCreate2.info();
carCreate2.increaseMaxSpeed(10);
carCreate2.drive();
carCreate2.changeYear(2020);
carCreate2.info();
carCreate2.addDriver('Alien');
console.log(carCreate2);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size=size;

    };
};

let cinderArr = [
    new Cinderella('Ann', 28, 34),
    new Cinderella('Jinny', 21, 36),
    new Cinderella('Mary', 31, 38),
    new Cinderella('Jasmine', 18, 35),
    new Cinderella('Vicky', 34, 39),
    new Cinderella('Hermione', 17, 32),
    new Cinderella('Belle', 21, 41),
    new Cinderella('Avrora', 22, 33),
    new Cinderella('Anastasia', 23, 40),
    new Cinderella('Fiona', 27, 37)
];

console.log(cinderArr);
// Сторити об'єкт класу "принц" за допомоги класу який має
// поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this. shoe = shoe;
    };
};

let princeT  = new Prince('Charming', 21, 37);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let couple = (cinderArr, princeT) =>{
    for(let i = 0; i<cinderArr.length; i++){
        if(cinderArr[i].size === princeT.shoe){
            return `${cinderArr[i].name}`;
        }
    }
};
console.log(couple(cinderArr, princeT));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
console.log(cinderArr.find((value => value.size === princeT.shoe)));
