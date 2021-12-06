let all = document.body.getElementsByTagName('*');
let allCl =[];
// for(let i =0; i<all.length; i++){
// let temp = all[i].classList;
//     for(let j =0; j<temp.length; j++){
//         if(temp[j].length>0){
//                 allCl.push(temp[j]);
//             }
//         }
//     }
// console.log(allCl);
//console.log(all);

function rec(arr){
        if(arr.children.length){
        for(let i =0; i<arr.children.length; i++){
            if(arr.children[i].className){
                allCl.push(arr.children[i].className)
            }
            rec(arr.children[i]);
        }
        }
};
rec(document.body);
console.log(allCl);