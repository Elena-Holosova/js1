// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку ,
// при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{

        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);

        for(let i =0; i<users.length; i++){
            let block = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('h4');
            let info = document.createElement('a');

            id.innerText ='ID:' + users[i].id;
            name.innerText = users[i].name;
            info.innerText = 'Get more info';
            info.href = 'userdetails.html';

            block.classList.add('block');
            id.classList.add('id');
            name.classList.add('name');
            info.classList.add('info');

            wrap.appendChild(block);
            block.appendChild(id);
            block.appendChild(name);
            block.appendChild(info);

            info.onclick = function(){
                let num = JSON.parse(localStorage.getItem('id'));
                num = users[i].id;
                localStorage.setItem('id', JSON.stringify(num));
            }
        }
    });