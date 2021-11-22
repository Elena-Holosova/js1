// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//============================================

function sumOrout(arg){
    let sum =0;
    for (let i =0; i<arguments.length; i++){
    if(arguments.length ===1){
        return arguments[i];
    }
    else if(arguments.length===2 && typeof arguments[i] === "number" && typeof arguments[i+1] === "number"){
        sum = arguments[i]+arguments[i+1];
        return sum;
    }
    else if(arguments.length===2 && typeof arguments[i] === "string" && typeof arguments[i+1] === "string"){
        let str = arguments[i]+ ' ' + arguments[i+1];
        return str;
    }
    else if(arguments.length===2 && typeof arguments[i] === "string" && typeof arguments[i+1] === "number"){
        let str1 = arguments[i]+ ' ' + arguments[i+1];
        return str1;
    }

    else if(arguments.length===2 && typeof arguments[i] === "number" && typeof arguments[i+1] === "string"){
        let str2 = arguments[i]+ ' ' + arguments[i+1];
        return str2;
    }
        }
};

console.log(sumOrout(2));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
let arr3 =[];
let sum =0;
function sumArr(arr1, arr2){
    for(let i=0, j=0; i<arr1.length; i++, j++){

            sum=arr1[i]+arr2[j];
            arr3.push(sum);

    }
    return arr3;
};
console.log(sumArr(arr1, arr2));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let array = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];
let elem = 0;
let arra=[]
function keyArr(array){
  for(let i =0; i< array.length; i++){
      const y = Object.keys(array[i]);
    for(let j =0; j<y.length; j++){
        elem = y[j];
        arra.push(elem);
    }
  }
  return arra;
};
console.log(keyArr(array));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array2 = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
// let elem2 = 0;
// let arra2=[]
// function valueArr(array2){
//     for(let i =0; i< array2.length; i++){
//         const k = Object.values(array2[i]);
//         for(let j =0; j<k.length; j++){
//             elem2 = k[j];
//             arra2.push(elem2);
//         }
//     }
//     return arra2;
// };
// console.log(valueArr(array2));