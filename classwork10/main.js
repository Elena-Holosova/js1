// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let b1 = document.createElement('div');
let b2 = document.createElement('div');
let button = document.createElement('div');
let form1= document.createElement('form');
let form2 = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let input4 = document.createElement('input');

let btn = document.createElement('button');
btn.innerText = 'click me';
btn.style.marginTop = '10px';

b1.innerText = 'Block 1';
b2.innerText = 'Block 2';
form1.setAttribute('name', 'form1');
form2.setAttribute('name', 'form2');
input1.setAttribute('name', 'input1');
input2.setAttribute('name', 'input2');
input3.setAttribute('name', 'input3');
input4.setAttribute('name', 'input4');

input2.style.marginLeft = '10px';
input4.style.marginLeft = '10px';
document.body.appendChild(b1);
document.body.appendChild(b2);
document.body.appendChild(button);
b1.appendChild(form1);
b2.appendChild(form2);
form1.appendChild(input1);
form1.appendChild(input2);
form2.appendChild(input3);
form2.appendChild(input4);
button.appendChild(btn);

btn.addEventListener('click', function (){
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);
})


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let div1 = document.createElement('div');

let in1 = document.createElement('input');
let in2 = document.createElement('input');
let in3 = document.createElement('input');
let butn = document.createElement('button');

butn.innerText = 'table';
in2.style.marginLeft = '10px';
in3.style.marginLeft = '10px';
butn.style.marginLeft = '10px';
div1.style.marginTop = '10px';

document.body.appendChild(div1);
div1.appendChild(in1);
div1.appendChild(in2);
div1.appendChild(in3);
div1.appendChild(butn);

butn.addEventListener('click', function (){
    let tr = in1.value;
    let td = in2.value;
    let text = in3.value;

    let makeTable = (tr, td, text) =>{
        let block = document.createElement('div');
        let tab = document.createElement('table');

        for(let i =0; i<tr; i++){
            let row = document.createElement('tr');

            for(let k =0; k<td; k++ ){
                let cell = document.createElement('td');
                cell.innerText = `${text}`;
                cell.style.borderColor = 'black';
                cell.style.borderWidth = '1px';
                cell.style.border = 'solid';
                tab.appendChild(row);
                row.appendChild(cell);

            }
        }
        tab.style.borderColor = 'black';
        tab.style.borderWidth = '1px';
        tab.style.border = 'solid';
        block.appendChild(tab);
        document.body.appendChild(block);
    }

    makeTable(tr, td, text);
})

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let mas = ['редиска', 'зараза', 'вредина'];
let blok = document.createElement('div');
let inp = document.createElement('input');
let btn2 = document.createElement('button');

btn2.innerText = 'click';

btn2.addEventListener('click', function (){
    for(let i =0; i<mas.length; i++){
        if(mas[i] === inp.value){
            alert('как вам не стыдно?');
            inp.value = '';
            return;
        }
    }

})
inp.style.marginTop = '10px';
btn2.style.marginLeft='10px';
document.body.appendChild(blok);
blok.appendChild(inp);
blok.appendChild(btn2);

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let inputNew = document.createElement('input');
inputNew.style.marginTop = '10px';

let butNew = document.createElement('button');
butNew.style.marginLeft = '10px';
butNew.innerText = 'check';

butNew.addEventListener('click', function (){
    for (let i=0; i<mas.length;i++){
        let inpVal = inputNew.value;
        if(inpVal.includes(mas[i])){
            alert('what a shame!');
            inpVal = '';
            return;
        }
    }
})

document.body.appendChild(inputNew);
document.body.appendChild(butNew);