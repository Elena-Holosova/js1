// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.forms.users;
form.onsubmit = function (e){
    e.preventDefault();
   let name =  this.name.value;
   let age = this.age.value;
   localStorage.setItem('users', JSON.stringify({name, age}));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в
//     локальному сховищі.
let f2 = document.forms.cars;
f2.onsubmit = function (e){
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let cars = {model,type, volume};
    let forms = JSON.parse(localStorage.getItem('forms'));
    if(!forms){
        forms = [];
        forms.push(cars);
        localStorage.setItem('forms', JSON.stringify(forms));
    }
    else {
        forms.push(cars);
        localStorage.setItem('forms', JSON.stringify(forms));
    }
};
