// - Дано натуральное число n. Выведите все числа от 1 до n.

let natNum = (n) => {
    for(let i =1; i<=n; i++){
        console.log(i);
    }
}
natNum(8);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let twoNum = (a,b) =>{
    if(a<b){
        for(let i =a; i<= b; i++){
            console.log(i);
        }
    }
    else{
        for (let i = a; i>=b; i--){
            console.log(i);
        }
    }
};

twoNum(7,3);
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let arr = [9, 8, 0, 4];
let funcReplace = (arr, k) =>{
  for(let i =0; i<arr.length; i++)  {
      if (i===k){
          temp= arr[i];
          arr[i]= arr[i+1];
          arr[i+1]=temp;

      }
  }
  return arr;
};
console.log(funcReplace(arr, 2));
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let zero = [];
let num = []
let arrMove =(...mas)=>{
    for(let i =0; i<mas.length; i++){
       if(mas[i]===0){
           zero.push(mas[i]);
       }
       else{
           num.push(mas[i]);
       }
    }
    num = num.concat(zero);
    return num;
};
console.log(arrMove(0,1,2,0,3,4, 9, 7, 0, 8));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let moveZero = (...array)=> {
    let k = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            array[k++] = array[i];
            console.log(k);
        }
    }
    for (let i = k; i < array.length; i++){
        array[i] = 0;
    }
    return array;
};

console.log(moveZero(0,1,3,0,6,0,5,0,0,8));