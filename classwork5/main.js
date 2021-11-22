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

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].