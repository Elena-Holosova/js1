//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function RectangleArea(a,b){
    let area = a*b;
    return(area);
}

RectangleArea(5,3);
console.log(RectangleArea(5,3));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function CircleArea(r){
    let circArea = Math.PI* Math.pow(r,2);
    return(circArea);
}

CircleArea(4);
console.log(CircleArea(4));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function CylinderArea(h, r){
    let CylArea = 2*Math.PI*r*(h+r);
    return(CylArea);

}
CylinderArea(8,4);
console.log(CylinderArea(8,4));
//- створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 3, 6, 8, 5, true, false];

function ArrOut(arr){
    for(let i =0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

ArrOut(arr);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragText(str){
    document.write(`<p>${str}</p>`);
}
paragText('hello Okten! how are you today?');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function CreateList(text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
CreateList('Booom!');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function CreateListN(text, num){
    document.write(`<ul>`);
    for(let i=0; i<num; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

CreateListN('Okten', 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ['hello', 2, 3, 'okten', true, false];

function CreatList2(array){
    document.write(`<ul>`);
    for(let i =0; i<array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

CreatList2(array);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let Arrayy = [
    {id:1, name: 'John', age: 27},
    {id:2, name: 'Lee', age: 15},
    {id:3, name: 'Daisy', age: 81},
    {id:4, name: 'Ann', age: 20},
    {id:5, name: 'Bob', age: 21}
];

function ArrayyOutDoc(Arrayy){
    for(let i =0; i<Arrayy.length; i++){
        document.write(`<div>${Arrayy[i].id} - ${Arrayy[i].name} - ${Arrayy[i].age}</div>`);
    }
}
ArrayyOutDoc(Arrayy);