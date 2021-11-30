// a) змінює class тексту елемнту з ід main_header на назву
let newCl = document.getElementById('main_header');
newCl.classList.add('sept-2021');
let x = document.getElementsByClassName('sept-2021');
console.log(x);
// групи в якій ви вчитесь (mon-year)

// b) робить шириниу елементу ul 400px

let ulList = document.getElementsByTagName('ul');
for(const p of ulList){
    p.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elList = document.getElementsByClassName('linkList');
for(const b of elList){
    b.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let liText = document.getElementsByClassName('listElement2');
let k = liText[0];
let p = k.innerText;
console.log(p);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let newLicol = document.getElementsByTagName('li');
for(const r of newLicol){
    r.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor

let newClforA = document.getElementsByTagName('a');
for(const n of newClforA){
    n.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку,
// якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let allAelem = document.getElementsByTagName('a');
console.log(allAelem);
for(let i =0; i<allAelem.length; i++){
    if(allAelem[i].innerText === 'link3'){
        let temp = allAelem[i];
        temp.style.fontSize= '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aList = document.getElementsByTagName('a');
for(let i = 0; i<aList.length; i++){
    let contText = 'element_'+ aList[i].innerText;
    aList[i].classList.add(contText);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let newBgcol = document.getElementsByClassName('sub-header');
let s = prompt('enter your bg col');
for(const k of newBgcol){
    k.style.backgroundColor = s;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let newBgcol2 = document.getElementsByClassName('sub-header');
let str = prompt('enter your font col');
for(let i =0; i<newBgcol2.length; i++){
    if(newBgcol2[i].innerText === 'content 2 segment'){
        let tem = newBgcol2[i];
        tem.style.color = str;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
let newText = document.getElementsByClassName('content_1');
let st = newText[0].firstElementChild;
let r = st.className;
let last = document.getElementsByClassName(r);
last[0].innerHTML = 'Hello friends!';

// l) отримати елементи p та змінити їм padding на 20px
let newPad = document.getElementsByTagName('p');
for(const j of newPad){
    j.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву
// групи (mon-year. Пример sep-2021)

let text2new = document.getElementsByClassName('text2');
console.log(text2new);
for(let i =0; i<text2new.length; i++){
    text2new[i].innerHTML= 'Sep-2021';
}

