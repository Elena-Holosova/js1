// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (num1, num2, num3) => {
    if(num1>num2 && num3>num2){
        console.log(num2);
    }
    else if(num1>num3 && num2>num3){
        console.log(num3);
    }
    else if(num2>num1 && num3>num1){
        console.log(num1);
    }

    else if(num1 === num2 === num3 || num1 === num2 || num1 === num3 || num2 ===num3){
        console.log('some numbers are equal');
    }
    else{
        console.log('something went wrong!');
    }
};
minNum(1, 2, 3);
minNum(3, 1, 2);
minNum(3, 2, 1);
minNum(2, 2, 2);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNum = (num1, num2, num3) =>{
    if(num2>num1 && num2>num3){
        console.log(num2);
    }
    else if(num3>num1 && num3>num2){
        console.log(num3);
    }
    else if(num1>num2 && num1>num3){
        console.log(num1);
    }

    else if(num1 === num2 === num3 || num1 === num2 || num1 === num3 || num2 ===num3){
        console.log('some numbers are equal');
    }
    else{
        console.log('something went wrong!');
    }
};

maxNum(1, 2, 3);
maxNum(3, 1, 2);
maxNum(2, 3, 1);
maxNum(2, 2, 2);

// - створити функцію яка повертає найбільше число з масиву

let array = [1, 2, 4, 6, 7, 8, 10];

let maxNumArr = (array) =>{
    let temp = array[0];
    for(let i =0; i<array.length; i++){

        if(array[i]>temp){
            temp = array[i];
        }

    }
    return temp;
};
console.log(maxNumArr(array));
// - створити функцію яка повертає найменьше число з масиву

let array2 = [1, 2, 4, 6, 7, 8, 10];

let minNumFromArr = (array2) => {
    let temp2 = array2[0];
    for(let i =0; i<array2.length; i++){

        if(array2[i]<temp2){
            temp2 = array2[i];
        }

    }
    return temp2;
};

console.log(minNumFromArr(array2));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array3 = [1, 2, 4, 5];
let sumElemArr = (array3) => {
    let sum =0;
    for(let i=0; i<array3.length; i++){
        sum = sum+array3[i];
    }
    return sum;
};
console.log(sumElemArr(array3));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let avgElemArr = (array3) => {
    let sum =0;
    let result =0;
    for(let i=0; i<array3.length; i++){
        sum = sum+array3[i];
        result = sum/array3.length;
    }
    return result;
};
console.log(avgElemArr(array3));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


let minMax = (...inp) => {
    let min = inp[0];
    let max = inp[0];
    for (const elem of inp) {
        if (elem > max) {
            max = elem;
        }
        if (elem < min) {
            min = elem;
        }
    }
    console.log(max);
    return min;
};
console.log(minMax(2,3,5,6,7,8,22));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arr = [];
let random =0;
let arrRand = (length) => {
    for(let i =0; i< length; i++){
        random = Math.floor(Math.random()*100);
        arr.push(random);
    }
    return arr;
};
console.log(arrRand(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let arr2 =[];
let rand = 0;

let arrRand2 = (length, limit) =>{
    for(let i =0; i< length; i++){
        rand = Math.floor(Math.random()*limit);
        arr2.push(rand);
    }
    return arr2;
};
console.log(arrRand2(10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr3 =[1,3,7,9];
let revArr = [];
let  reverArr = (arr3) => {
    for(let i=arr3.length-1, j=0; i>=0; i--, j++){
        revArr[j] = arr3[i];
    }

    return revArr;
}
console.log(reverArr(arr3));