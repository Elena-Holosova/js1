// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectanglArea = (a,b) => a*b;
console.log(rectanglArea(4,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (r) => Math.PI* Math.pow(r,2);
console.log(circleArea(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (h,r) => 2*Math.PI*r*(h+r);
console.log(cylinderArea(4,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 3, 6, 8, 5, true, false];

let arrOut = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
arrOut(arr);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragText = (str) => document.write(`<p>${str}</p>`);
paragText('hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (text) =>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
};
createList('okten');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createListnew = (text, num) =>{
    document.write(`<ul>`);
    for(let i=0; i<num; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};

createListnew('cat', 8);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ['hello', 2, 3, 'okten', true, false];

let createListArr = (array) => {
    document.write(`<ul>`);
    for(let i =0; i<array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
};

createListArr(array);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let arrayy = [
    {id:1, name: 'John', age: 27},
    {id:2, name: 'Lee', age: 15},
    {id:3, name: 'Daisy', age: 81},
    {id:4, name: 'Ann', age: 20},
    {id:5, name: 'Bob', age: 21}
];

let arrOutDoc = (arrayy) => {
    for(let i =0; i<arrayy.length; i++){
        document.write(`<div>${arrayy[i].id} - ${arrayy[i].name} - ${arrayy[i].age}</div>`);
    }
};
arrOutDoc(arrayy);