//--створити масив з:
// - з 5 числових значень

let mas = [1, 2, 3, 4, 5];
console.log(mas);

// - з 5 стічкових значень
let mas2 = ["apple", "juice", "pineapple", "mango", "banana"];
console.log(mas2);
// - з 5 значень стрічкового, числового та булевого типу

let mas3 = ["apple", 2, true, 0, false];
console.log(mas3);
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let mass = [];
mass[0] = 2;
mass[1] = "hello";
mass[2] = true;
mass[3] = false;
mass[4] = 0;
mass[5] = -5;
mass[6] = 3.7;
mass[7] = "okten";
mass[8] = "homework";
mass[9] = 42;

console.log(mass);

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    for( let i = 1; i <= 10; i++){
        document.write('<div>Hello!</div>');
    }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    for( let i = 1; i <= 10; i++){
    document.write(`<div> ${i}. Hello!</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i =0;
    while(i <20){
        document.write('<h1>Hello!</h1>');
        i++;
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j =0;
while(j <20){
    document.write(`<h1>${j}. Ok!</h1>`);
    j++;
}

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(i = 0; i < 10; i++){
        console.log(arr[i]);
    }
// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
    let array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    for(i = 0; i < 10; i++){
        console.log(array[i]);
    }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let array1 = [1, 3, true, false, "hello", 45, "hi", 22.6, -5, 0];
    for(i = 0; i < 10; i++){
        console.log(array1[i]);
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    let array2 = [1, 7, true, false, "okten", 45, "hi", 22.6, -5, 0];
    for(i = 0; i < 10; i++){
        let k = typeof array2[i];
        if(k === "boolean"){
            console.log(array2[i]);
        }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array3 = [1, 7, true, false, "okten", 45, "hi", 22.6, -5, 0];
for(i = 0; i < 10; i++){
    let p = typeof array3[i];
    if(p === "number"){
        console.log(array3[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array4 = [1, 7, true, false, "okten", 45, "hi", 22.6, -5, 0];
for(i = 0; i < 10; i++){
    let t = typeof array4[i];
    if(t === "string"){
        console.log(array4[i]);
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrempty = [];
    arrempty[0] = 2;
    arrempty[1] = "hello";
    arrempty[2] = true;
    arrempty[3] = false;
    arrempty[4] = 0;
    arrempty[5] = -5;
    arrempty[6] = 3.7;
    arrempty[7] = "okten";
    arrempty[8] = "homework";
    arrempty[9] = 42;

    for(i = 0; i < 10; i++){
        console.log(arrempty[i]);
    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(i = 1; i <= 10; i++){

    console.log(i);
    document.write(`<div>${i}</div>`);


}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(i = 1; i <= 100; i++){

    console.log(i);
    document.write(`<div>${i}</div>`);

}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for(i = 1; i <= 100; i= i+2){

    console.log(i);
    document.write(`<div>${i}</div>`);


}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(i = 1; i <= 100; i++){
    if(i % 2 === 0){
    console.log(i);
    document.write(`<div>${i}</div>`);
    }

}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
        document.write(`<div>${i}</div>`);
    }

}