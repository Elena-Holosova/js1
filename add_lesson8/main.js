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
        console.log(arr.classList);
        for(let i =0; i<arr.length; i++){
            if(arr[i].classList.length>0){
                rec(arr[i]);
            }

        }

};
rec(all);