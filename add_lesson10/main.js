// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = function (e){
    console.log('Tag name is: ' + e.target.tagName);
    console.log('Class list:' + e.target.className);
    console.log('ID:' + e.target.id);
    console.log('Size:' +e.target.clientHeight + '*' + e.target.clientWidth);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//  ПОКА НЕ ПОЛУЧИЛОСЬ

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let check1 = document.createElement('input');
let check2 = document.createElement('input');
let check3 = document.createElement('input');
check1.type = 'checkbox';
check2.type = 'checkbox';
check3.type = 'checkbox';

check1.onclick = function (){
    for(let i =0; i<usersWithAddress.length; i++){
        if(usersWithAddress[i].status === false & check1.checked){
            let div = document.createElement('div');
            let id = document.createElement('div');
            let name =document.createElement('div');
            let age = document.createElement('div');
            let status = document.createElement('div');
            let address = document.createElement('div');

            id.innerText = usersWithAddress[i].id;
            name.innerText = usersWithAddress[i].name;
            age.innerText = usersWithAddress[i].age;
            status.innerText = usersWithAddress[i].status;
            address.innerText = usersWithAddress[i].address.city + ', ' +
                                usersWithAddress[i].address.street + ', ' +
                                usersWithAddress[i].address.number;

            document.body.appendChild(div);
            div.appendChild(id);
            div.appendChild(name);
            div.appendChild(age);
            div.appendChild(status);
            div.appendChild(address);
        }

    }
}
check2.onclick = function (){
    for(let i =0; i<usersWithAddress.length; i++){
        if(usersWithAddress[i].age >= 29 & check2.checked){
            let div = document.createElement('div');
            let id = document.createElement('div');
            let name =document.createElement('div');
            let age = document.createElement('div');
            let status = document.createElement('div');
            let address = document.createElement('div');

            id.innerText = usersWithAddress[i].id;
            name.innerText = usersWithAddress[i].name;
            age.innerText = usersWithAddress[i].age;
            status.innerText = usersWithAddress[i].status;
            address.innerText = usersWithAddress[i].address.city + ', ' +
                usersWithAddress[i].address.street + ', ' +
                usersWithAddress[i].address.number;

            document.body.appendChild(div);
            div.appendChild(id);
            div.appendChild(name);
            div.appendChild(age);
            div.appendChild(status);
            div.appendChild(address);
        }

    }
}

check3.onclick = function (){
    for(let i =0; i<usersWithAddress.length; i++){
        if(usersWithAddress[i].address.city === 'Kyiv' & check3.checked){
            let div = document.createElement('div');
            let id = document.createElement('div');
            let name =document.createElement('div');
            let age = document.createElement('div');
            let status = document.createElement('div');
            let address = document.createElement('div');

            id.innerText = usersWithAddress[i].id;
            name.innerText = usersWithAddress[i].name;
            age.innerText = usersWithAddress[i].age;
            status.innerText = usersWithAddress[i].status;
            address.innerText = usersWithAddress[i].address.city + ', ' +
                usersWithAddress[i].address.street + ', ' +
                usersWithAddress[i].address.number;

            document.body.appendChild(div);
            div.appendChild(id);
            div.appendChild(name);
            div.appendChild(age);
            div.appendChild(status);
            div.appendChild(address);
        }

    }
}


document.body.appendChild(check1);
document.body.appendChild(check2);
document.body.appendChild(check3);

//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images = document.createElement('div');
let block = document.createElement('div');
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let prev = document.createElement('button');
let next = document.createElement('button');

images.classList.add('images');
next.classList.add('next');
prev.classList.add('prev');
block.classList.add('carousel');
block.id = 'carousel';


next.innerText = 'next';
prev.innerText = 'prev';
prev.style.marginLeft = '380px';
next.style.marginTop='10px';
img1.src = 'https://static.educalingo.com/img/en/800/nature.jpg';
img2.src = 'https://static.educalingo.com/img/en/800/nature.jpg';
img3.src = 'https://static.educalingo.com/img/en/800/nature.jpg';

document.body.appendChild(block);
block.appendChild(images);

block.appendChild(prev);
block.appendChild(next);

images.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.appendChild(img1);
li2.appendChild(img2);
li3.appendChild(img3);

let i = 1;
for(let c of carousel.querySelectorAll('li')) {
    c.style.position = 'relative';
    c.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}
let width = 800;
let list = carousel.querySelector('ul');
let liS= carousel.querySelectorAll('li');
let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
    position += width;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position -= width;
    position = Math.max(position, -width * (liS.length-1));
    list.style.marginLeft = position + 'px';
};

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим
// способом змінює свій стан

document.onclick = function(){
    let sel = getSelection();
    let selection_text = sel.toString();
    let span = document.createElement('span');
    span.textContent = selection_text;
    span.style.color = 'red';
    span.style.backgroundColor = 'yellow';
    let range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
};