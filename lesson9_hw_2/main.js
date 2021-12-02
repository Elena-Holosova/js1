// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного
// елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menuArr = ['Main','Products','About us','Contacts'];

let list = document.getElementsByClassName('menu');

for(let i =0; i<menuArr.length; i++){
    let li = document.createElement('li');
    li.innerText = menuArr[i];
    list[0].appendChild(li);
}

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію
// про title та monthDuration
// Завдання робити через цикли.

let divCourses = document.createElement('div');
document.body.appendChild(divCourses);
divCourses.classList.add('courses');

let courseList = document.getElementsByClassName('courses');

for(let i =0; i<coursesAndDurationArray.length; i++){
    let div = document.createElement('div');
    div.innerText = coursesAndDurationArray[i].title + ' - ' + coursesAndDurationArray[i].monthDuration;
    courseList[0].appendChild(div);
}

//- Є масив
let coursesArr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
//     з monthDuration елементу.
//     Завдання робити через цикли.

for(let i =0; i<coursesArr.length; i++){
    let divC = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    divC.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = coursesArr[i].title;
    p.innerText = coursesArr[i].monthDuration;

    document.body.appendChild(divC);
    divC.appendChild(h1);
    divC.appendChild(p);
}
