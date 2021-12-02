// Все робити за допомоги js.
// - створити блок,
let divEl = document.createElement('div');
divEl.innerText='Hello Okten';
// - додати цей блок в body.
document.body.appendChild(divEl);
// - додати йому класи wrap, collapse, alpha, beta
divEl.classList.add('wrap','collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divEl.style.width = '400px';
divEl.style.height = '400px';
divEl.style.backgroundColor = 'green';
divEl.style.fontSize = '35px';
divEl.style.color = 'white';
divEl.style.marginTop = '20px';
// - клонувати його повністю, та додати клон в body.
let clone = divEl.cloneNode(true);
document.body.appendChild(clone);
