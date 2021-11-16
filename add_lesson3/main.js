// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];

for (let i = 2, j=0; i <= 100; i+=2, j++) {
    arr[j] = i;
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr2 = [];

for (let i = 1, j=0; i <= 100; i+=2, j++) {
    arr2[j] = i;
}
console.log(arr2);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let set = [];

for(let i = 0; i < 20; i++){
    set[i]=Math.random();
}
console.log(set);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let random = [];

for(let i = 0; i < 20; i++){
    random[i]=Math.floor((Math.random() * 728) + 8);
}
console.log(random);

// 2. Вивести за допомогою console.log кожен третій елемен
let array = [1, 3, 4, 6, 5, 8, 23, 34, 45, 66];

for(let i=2; i< array.length; i+=3){
    console.log(array[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for(let i=2; i< array.length; i+=3){
    if(array[i] % 2 ===0){
    console.log(array[i]);
    }
}
let ar =[];
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
for(let i=2, j=0; i< array.length; i+=3, j++) {
        if (array[i] % 2 === 0) {
            ar[j]=array[i];
        }
}
console.log(ar);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

for(i=0; i<array.length; i++){
    if(array[i+1] % 2 ===0){
        console.log(array[i]);
    }
}

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let mas = [100,250,50,168,120,345,188];
let sum =0;
for (i=0; i<mas.length; i++){
    sum+=mas[i];
}
console.log(sum/mas.length);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let ar4 =[];
let arr4=[2, 5, 7, 8, 9, 23, 56, 22, 11, 1];
for(i=0, j=0; i<arr4.length; i++, j++){
    ar4[j] = arr4[i]*5;
}
console.log(ar4);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let mass2=[2,4,6, "bird", "fruit", true, false];
let mass3=[];
for(i=0, j=0; i< mass2.length; i++, j++){
    if(typeof mass2[i] === "number"){
        mass3[j]= mass2[i];
    }
}
console.log(mass3);

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array131 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i=0; i<array131.length; i++){
    if(array131[i] %2 ===0){
        console.log(array131[i]);
    }
}

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let emptarr = [];
for(i=0, j=0; i<array131.length; i++,j++){
    emptarr[j]= array131[i];
}

console.log(emptarr);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.