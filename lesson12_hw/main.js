// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
    console.log(posts);
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    document.body.appendChild(wrap);
    for(let i =0; i<posts.length; i++){
        let block = document.createElement('div');
        let userId = document.createElement('div');
        let id = document.createElement('div');
        let title = document.createElement('h4');
        let body = document.createElement('p');

        userId.innerText = 'User ID:' +  posts[i].userId;
        id.innerText ='ID:' + posts[i].id;
        title.innerText = posts[i].title;
        body.innerText = posts[i].body;

        block.classList.add('block');
        body.classList.add('par');
        title.classList.add('title');

        wrap.appendChild(block);
        block.appendChild(userId);
        block.appendChild(id);
        block.appendChild(title);
        block.appendChild(body);
    }
});


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(x => x.json())
    .then(comments => {
        console.log(comments);
        let wrap2 = document.createElement('div');
        wrap2.classList.add('wrap2');
        document.body.appendChild(wrap2);

        for(let i =0; i<comments.length; i++){
            let block2 = document.createElement('div');
            let postId = document.createElement('div');
            let id2 = document.createElement('div');
            let name = document.createElement('h4');
            let email = document.createElement('div');
            let body2 = document.createElement('p');

            postId.innerText ='Post ID:' + comments[i].postId;
            id2.innerText ='Id:' + comments[i].id;
            name.innerText = comments[i].name;
            email.innerText = comments[i].email;
            body2.innerText = comments[i].body;

            block2.classList.add('block');
            body2.classList.add('par');
            name.classList.add('title');
            email.classList.add('title');

            wrap2.appendChild(block2);
            block2.appendChild(postId);
            block2.appendChild(id2);
            block2.appendChild(name);
            block2.appendChild(email);
            block2.appendChild(body2);
        }
    })


