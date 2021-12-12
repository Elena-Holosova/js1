// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json())
.then(posts =>{
    let wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('wrap');

    for(let i =0; i<posts.length; i++){
        let post = document.createElement('div');
        let userId = document.createElement('div');
        let id = document.createElement('div');
        let title = document.createElement('h4');
        let body = document.createElement('p');

        let com = document.createElement('button');

        post.classList.add('post');
        title.classList.add('title');
        body.classList.add('par');
        com.classList.add('btn');


        userId.innerText ='User ID:' +  posts[i].userId;
        id.innerText ='Id:' + posts[i].id;
        title.innerText = posts[i].title;
        body.innerText = posts[i].body;

        com.innerText = 'Get comment';



        com.onclick = (id) =>{
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
                .then(comments => {
                    for(let j =0; j<comments.length; j++){
                        if(posts[i].id === comments[j].postId){
                            let comment = document.createElement('div');
                            let name = document.createElement('h4');
                            let email = document.createElement('div');
                            let text = document.createElement('p');


                            name.innerText = comments[j].name;
                            email.innerText = comments[j].email;
                            text.innerText = comments[j].body;


                            post.appendChild(comment);
                            comment.appendChild(name);
                            comment.appendChild(email);
                            comment.appendChild(text);

                        }
                        com.disabled = true;
                    }
                })
        }
        wrap.appendChild(post);
        post.appendChild(userId);
        post.appendChild(id);
        post.appendChild(title);
        post.appendChild(body);
        post.appendChild(com);

    }
});