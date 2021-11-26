// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1new = str1.toUpperCase();
let str2new = str2.toUpperCase();
let str3new = str3.toUpperCase();
console.log(str1new);
console.log(str2new);
console.log(str3new);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1new.toLowerCase());
console.log(str2new.toLowerCase());
console.log(str3new.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
console.log(str4.trim());

//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Каждый охотник желает знать';
let stringToarray = (str) =>{
    let arr = str.split(" ");
    return arr;
};
console.log(stringToarray(str)); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let string = 'Каждый охотник желает знать';
    let delete_characters = (string,length)=>{
        let st = string.substring(0, length);
        return st;
    };
console.log(delete_characters(string, 9));

///або

let striNew = "";
let del_char =(string,length) =>{
    for(let i =0; i<length & i<string.length; i++){
       striNew += string[i];
    }

    return striNew;
};

console.log(del_char(string, 5));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//При цьому всі символи рядка необхідно перевести у верхній регістр.
    let string3 = "HTML JavaScript PHP";
    let insert_dash = (string3)=>{
        let strNew = "";
        for (i = 0; i < string3.length; i++) {
            if(string3[i].includes(" ")){

                strNew+= "-";
            }
            else{
                strNew += string3[i].toUpperCase();
            };
        }
        return strNew;
    };
    console.log(insert_dash(string3));


//або
let s = string3.toUpperCase();
let ins_dash = (st) =>{
    stNew = st.split(' ').join('-')

    return stNew;
};

console.log(ins_dash(s));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній

let firstSymtoUpperC = (str5) =>{
    let i =0;
    let newStr = str5[i].toUpperCase() + str5.slice(1);
    return newStr;
};
console.log(firstSymtoUpperC('hello world'));
//

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let temp = "";
let capitalize = (str6) =>{
    for(let i = 0; i<str6.length; i++){
        if(str6[i-1] === " " || i===0){
            temp += str6[i].toUpperCase();
        }
        else {
            temp += str6[i];
        }
    }

    return temp;
};

console.log(capitalize('hello world nice to meet you'));