// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (string, n) =>{
    let ans = [];
    for(let i =0; i< string.length; i+=n){
        ans.push(string.substr(i,n));
    }
    return ans;
};
console.log(cutString('переохлаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//

let validat = (str) =>{
    let count_at = 0;
    let count_dot = 0;
    let at = 0;
    let dot =0;
    let s1 = "";
    let s2= "";

    let val =0;
    let nval =0;
    for(let i =0; i<str.length; i++){
        if(str[i] === '@'){
           count_at++;
           at=i;

            if(count_at === 1){
                val++;
            }
            else {
                nval++;
            }
        }
    }

    for(let j =0; j<at; j++){
        s1+=str[j];
    }
    for(let k =at+1; k<str.length; k++){
        s2+=str[k];

    }
    for(let r=0; r<s1.length; r++){
        if(s1[r] === '.' || s1[r] === '?'||s1[r] === '/' ){
            nval++;
        }
        else{
            val++;
        }
    }
    for(let t=0; t<s2.length; t++){
        if(s2[t] === '.'){
            count_dot++;
            dot = t;
            if(count_dot === 1){
                val++;
            }
            else {
                nval++;
            }
        }
    }
    let dom_length = 0;
    dom_length =dot;

    if( dom_length>=2){
        val++;
    }
    else{
        nval++;
    }

    if (nval===0){
        console.log('EMAIL is VALID');
    }
    else{
        console.log('email is NOT VALID');
    }

    console.log(val);
    console.log(nval);
    };
validat('someemail@gmail.com');
validat('someeMAIL@gmail.com');
validat('someeMAIL@i.ua');
validat('some.email@gmail.com');

// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let ar = [];
let sortArr = (array)=>{
    ar.push(coursesArray.sort((a,b) => b.modules.length - a.modules.length));
    return ar;
};
console.log(sortArr(coursesArray));


//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let funCount = (str, stringsearch) =>{

}
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'