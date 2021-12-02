
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let adrArr = [];
for(let i=0, j=0; i<users.length; i++, j++){
    adrArr[j]=users[i].address;
}
console.log(adrArr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for(let i=0; i<users.length; i++){
    let user = document.createElement('div');
    let name = document.createElement('div');
    let age = document.createElement('div');
    let status = document.createElement('div');

    name.innerText ='Name:' + users[i].name;
    age.innerText = 'Age:' + users[i].age;
    status.innerText = 'Status:' + users[i].status;


    let address = document.createElement('div');
    let city = document.createElement('div');
    let country = document.createElement('div');
    let street = document.createElement('div');
    let hnumb = document.createElement('div');

    address.innerText = 'Address:';
    city.innerText = 'City:' + users[i].address.city;
    country.innerText = 'Country:' + users[i].address.country;
    street.innerText = 'Street:' + users[i].address.street;
    hnumb.innerText = 'House number:' + users[i].address.houseNumber;


    document.body.appendChild(user);
    user.appendChild(name);
    user.appendChild(age);
    user.appendChild(status);
    user.appendChild(address);

    user.classList.add('user');

    address.appendChild(city);
    address.appendChild(country);
    address.appendChild(street);
    address.appendChild(hnumb);
}



