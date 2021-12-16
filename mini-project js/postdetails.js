// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let postIn = JSON.parse(localStorage.getItem('postInfo'));


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);

        for (let i =0; i<posts.length; i++){
            if(posts[i].id === postIn){
                let postInfo_Block = document.createElement('div');
                let id = document.createElement('p');
                let userID = document.createElement('p');
                let title = document.createElement('p');
                let body = document.createElement('p');

                postInfo_Block.classList.add('postInfo');
                title.classList.add('post_title');
                id.innerText = 'Id: ' + posts[i].id;
                userID.innerText = 'UserID: ' + posts[i].userId;
                title.innerText = posts[i].title;
                body.innerText = posts[i].body;

                wrap.appendChild(postInfo_Block);
                postInfo_Block.appendChild(id);
                postInfo_Block.appendChild(userID);
                postInfo_Block.appendChild(title);
                postInfo_Block.appendChild(body);


                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments =>{
                        let commentBlock = document.createElement('div');
                        wrap.appendChild(commentBlock);
                        commentBlock.classList.add('commentBlock');

                        for(let j =0; j<comments.length;j++){
                            if(postIn ===comments[j].postId){
                                let comment = document.createElement('div');
                                let name = document.createElement('p');
                                let idP = document.createElement('p');
                                let postID = document.createElement('p');
                                let email = document.createElement('p');
                                let bodyP = document.createElement('p');

                                name.innerText = comments[j].name;
                                idP.innerText = 'Id: '+ comments[j].id;
                                postID.innerText = 'PostID: ' + comments[j].postId;
                                email.innerText = 'Email: '+ comments[j].email;
                                bodyP.innerText = comments[j].body;

                                comment.classList.add('comment');
                                name.classList.add('post_name');

                                commentBlock.appendChild(comment);
                                comment.appendChild(name);
                                comment.appendChild(idP);
                                comment.appendChild(postID);
                                comment.appendChild(email);
                                comment.appendChild(bodyP);


                            }
                        }
                    })
            }


        }
    })

