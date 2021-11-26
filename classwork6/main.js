
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let str = "";
let s = "";
let nameNew = (n) =>{

    str = n.replace(/[^a-zA-Z ]/g, " ");
    s=str.replace(/\s+/g, " ");
    return s;
}
console.log(nameNew(n1));
console.log(nameNew(n2));
console.log(nameNew(n3));
//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = [];
let random =0;
let arrRand = () => {
    for(let i =0; i< 100; i++){
        random = Math.round(Math.random()*100);
        arr.push(random);
    }

    return arr;
};
console.log(arrRand());
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(arr.sort());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//  та відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let mas = [1,6,7,4,22,5,9,44,12,66];
let funcEven = (check)=> {return check%2===0};
let result = mas.filter(funcEven);
console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (direction) =>{
    if(direction === 'ascending'){
        nums.sort(function (a,b){return a-b});
    }
    else if (direction === 'descending') {
        nums.sort(function(a,b){return b-a});
    }

    else {
        console.log('nothing happens');
    }

    return nums;
};

console.log(sortNums('ascending'));
console.log(sortNums('descending'));
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration < b.monthDuration)
        return 1;
    if (a.monthDuration > b.monthDuration)
        return -1;
    return 0;
}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

let funcFive = (coursesAndDurationArray) =>{
for (let i =0; i<coursesAndDurationArray.length; i++){
    if(coursesAndDurationArray[i].monthDuration <= 5){
        coursesAndDurationArray.pop(coursesAndDurationArray[i]);
    }
}
return coursesAndDurationArray;
};
console.log(funcFive(coursesAndDurationArray));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (string, n) =>{
    let ans = [];
    for(let i =0; i< string.length; i+=n){
        ans.push(string.substr(i,n));
    }
    return ans;
};
console.log(cutString('переохлаждение', 3));