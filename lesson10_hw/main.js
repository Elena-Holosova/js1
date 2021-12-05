// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn1 = document.getElementById('btn1');
let text = document.getElementById('text');
btn1.onclick = function (){
    text.style.display = 'none';
}
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let none = document.getElementById('none');
none.onclick = function (){
    none.style.display = 'none';
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let button = document.getElementById('check');
button.onclick = function (){
    let input = document.getElementById('age').value;
    if(!input){
        alert('enter your age');
    }
    else if(input<18){
        alert('watch cartoons');
    }
    else {
        alert('welcome!');
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('.menu');
 let dropBut = menu.querySelector('.drop');

dropBut.onclick = function () {
    menu.classList.toggle('hidden');
 };
// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let com = [
    {title : 'red', body:'color'},
    {title : 'yellow', body:'color'},
    {title : 'green', body:'color'}
];

let divMain = document.createElement('div');
document.body.appendChild(divMain);

for(let i =0; i<com.length; i++){
    let block = document.createElement('div');
    let title = document.createElement('h2');
    let body = document.createElement('p');
    let but = document.createElement('button');

    title.innerText = com[i].title;
    body.innerText = com[i].body;
    but.innerText = 'hide';

    divMain.appendChild(block);
    block.appendChild(title);
    block.appendChild(body);
    block.appendChild(but);

    but.onclick = function (){
        body.style.display = 'none';
    }
}
//     Вывести список комментариев в документ,
//     каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке
//     для сворачивания его body.