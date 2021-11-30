// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let cont = document.getElementById('content').innerHTML;
console.log(cont);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules').innerHTML;
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let nTex= document.getElementById('content');
nTex.innerText = 'Hello Okten';

// -- замініть текст параграфа з id 'rules' на будь-який інший

let nRul = document.getElementById('rules');
nRul.innerText = 'Do your homework!'

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let newColor = document.getElementsByTagName('p');
for (const k of newColor) {
    k.style.background = 'red';
    k.style.color = 'blue';
}

let newColor2 = document.getElementsByTagName('div');
for (const t of newColor2) {
    t.style.background = 'red';
    t.style.color = 'blue';
}

let newColor3 = document.getElementsByTagName('ul');
for (const g of newColor3) {
    g.style.background = 'red';
    g.style.color = 'blue';
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let clList = document.getElementById('rules');
console.log(clList.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let newTextcol = document.getElementsByClassName('fc_rules');
for(const b of newTextcol){
   b.style.color = 'red';
}