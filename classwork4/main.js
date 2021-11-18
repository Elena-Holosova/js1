// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function MinNum(num1, num2, num3){
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

MinNum(1, 2, 3);
MinNum(3, 1, 2);
MinNum(3, 2, 1);
MinNum(2, 2, 2);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function MaxNum(num1, num2, num3){
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

MaxNum(1, 2, 3);
MaxNum(3, 1, 2);
MaxNum(2, 3, 1);
MaxNum(2, 2, 2);


// - створити функцію яка повертає найбільше число з масиву

let array = [1, 2, 4, 6, 7, 8, 10];

function MaxNumFromArr(array){
    let temp = array[0];
    for(let i =0; i<array.length; i++){

        if(array[i]>temp){
            temp = array[i];
        }

    }
    return temp;
};
MaxNumFromArr(array);

console.log(MaxNumFromArr(array));

// - створити функцію яка повертає найменьше число з масиву
let array2 = [1, 2, 4, 6, 7, 8, 10];

function MinNumFromArr(array2){
    let temp2 = array2[0];
    for(let i =0; i<array2.length; i++){

        if(array2[i]<temp2){
            temp2 = array2[i];
        }

    }
    return temp2;
};
MinNumFromArr(array2);

console.log(MinNumFromArr(array2));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array3 = [1, 2, 4, 5];
function SumElemArr(array3){
    let sum =0;
    for(let i=0; i<array3.length; i++){
        sum = sum+array3[i];
    }
    return sum;
};
SumElemArr(array3);
console.log(SumElemArr(array3));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function AvgElemArr(array3){
    let sum =0;
    let result =0;
    for(let i=0; i<array3.length; i++){
        sum = sum+array3[i];
        result = sum/array3.length;
    }
    return result;
};
AvgElemArr(array3);
console.log(AvgElemArr(array3));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMax(inp) {
    let min = arguments[0];
    let max = arguments[0];
    for (const elem of arguments) {
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
let arr = [];
let random =0;
function ArrRand(length){
    for(let i =0; i< length; i++){
        random = Math.floor(Math.random()*100);
        arr.push(random);
    }
    return arr;
};
console.log(ArrRand(10));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

let arr2 =[];
let rand = 0;

function ArrRand2(length, limit){
    for(let i =0; i< length; i++){
        rand = Math.floor(Math.random()*limit);
        arr2.push(rand);
    }
    return arr2;
};
console.log(ArrRand2(10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr3 =[1,3,7,9];
let revArr = [];
function ReverArr(arr3){
    for(let i=arr3.length-1, j=0; i>=0; i--, j++){
        revArr[j] = arr3[i];
    }

    return revArr;
}
console.log(ReverArr(arr3));
