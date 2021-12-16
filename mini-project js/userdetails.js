// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

let info = JSON.parse(localStorage.getItem('id'));

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{

            let wrap = document.createElement('div');
            wrap.classList.add('wrap');
            document.body.appendChild(wrap);
            for(let i =0; i<users.length; i++){
                if(users[i].id === info){
                let block = document.createElement('div');
                let username = document.createElement('h2');

                let persinfo = document.createElement('h4');

                let pinfo = document.createElement('div');
                let id = document.createElement('p');
                let name = document.createElement('p');
                let username2 = document.createElement('p');
                let email = document.createElement('p');
                let phone = document.createElement('p');
                let web = document.createElement('p');

                let addr = document.createElement('h4');

                let address = document.createElement('div');
                let street = document.createElement('p');
                let suite = document.createElement('p');
                let city = document.createElement('p');
                let zipcode = document.createElement('p');
                let geo = document.createElement('p');

                let comp = document.createElement('h4');

                let company = document.createElement('div');
                let c_name = document.createElement('p');
                let catchPh = document.createElement('p');
                let bs = document.createElement('p');
                let btn_wrap = document.createElement('div');
                let postOfCur = document.createElement('button');



                username.innerText = users[i].username;
                persinfo.innerText = 'Personal Information';

                id.innerText ='ID:' + users[i].id;
                name.innerText='Name:' + users[i].name;
                username2.innerText ='Username:' + users[i].username;
                email.innerText ='Email:' + users[i].email;
                phone.innerText ='Phone:' + users[i].phone;
                web.innerText ='Website:' + users[i].website;

                addr.innerText = 'Address';

                street.innerText= 'Street:' + users[i].address.street;
                suite.innerText = 'Suite:' + users[i].address.suite;
                city.innerText = 'City:' + users[i].address.city;
                zipcode.innerText = 'Zipcode:' + users[i].address.zipcode;
                geo.innerText = 'Geo:'+ users[i].address.geo.lat + '; ' + users[i].address.geo.lng;

                comp.innerText = 'Company';
                c_name.innerText ='Name:' + users[i].company.name;
                catchPh.innerText = 'Catch phrase:' + users[i].company.catchPhrase;
                bs.innerText = 'Bs:' + users[i].company.bs;

                postOfCur.innerText = 'Post of Current User';

                block.classList.add('block');
                pinfo.classList.add('pinfo');
                address.classList.add('address');
                company.classList.add('company');
                postOfCur.classList.add('postOfCur');
                btn_wrap.classList.add('btn_wrap')

                wrap.appendChild(block);
                block.appendChild(username);
                block.appendChild(persinfo);
                block.appendChild(pinfo);
                block.appendChild(addr);
                block.appendChild(address);
                block.appendChild(comp);
                block.appendChild(company);

                block.appendChild(btn_wrap);
                btn_wrap.appendChild(postOfCur);


                pinfo.appendChild(id);
                pinfo.appendChild(name);
                pinfo.appendChild(username2);
                pinfo.appendChild(email);
                pinfo.appendChild(phone);
                pinfo.appendChild(web);

                address.appendChild(street);
                address.appendChild(street);
                address.appendChild(suite);
                address.appendChild(city);
                address.appendChild(zipcode);
                address.appendChild(geo);

                company.appendChild(c_name);
                company.appendChild(catchPh);
                company.appendChild(bs);


                    postOfCur.onclick = function (){
                        fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(response => response.json())
                            .then(posts =>{
                                let postsblock = document.createElement('div');
                                wrap.appendChild(postsblock);
                                postsblock.classList.add('postsblock');
                                for(let j=0; j<posts.length; j++){
                                    if(info ===posts[j].userId){

                                        let post = document.createElement('div');

                                        let title = document.createElement('p');
                                        let link = document.createElement('button');


                                        post.classList.add('post');
                                        link.classList.add('link');

                                        title.innerText = posts[j].title;
                                        link.innerText = 'Get more info about this post';



                                        postsblock.appendChild(post);

                                        post.appendChild(title);
                                        post.appendChild(link);

                                        link.onclick = function(){
                                            document.location='postdetails.html';
                                            let postInfo = JSON.parse(localStorage.getItem('postInfo'));
                                            postInfo = posts[j].id;
                                            localStorage.setItem('postInfo', JSON.stringify(postInfo));
                                        }

                                    }
                                }

                            })
                    }


            }

            }
        });

