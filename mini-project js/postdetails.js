// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let postIn = JSON.parse(localStorage.getItem('postInfo'));
console.log(postIn);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
        for (let i =0; i<posts.length; i++){
            if(posts[i].id === postIn){
                //id
                //userid
                //title
                //body

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments =>{
                        for(let j =0; j<comments.length;j++){
                            if(posts[i].id ===comments[j].postId){
                                //postid
                                //id
                                //name
                                //email
                                //body
                            }
                        }
                    })
            }


        }
    })

