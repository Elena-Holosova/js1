// Сумма цифр числа
// // Дано натуральное число N. Вычислите сумму его цифр.
// //     При решении этой задачи нельзя использовать строки,
// //     массивы ну и циклы

function sum(number) {
    if (number == 0) {
        return 0;
    } else {
        var last_num = number % 10;
        var left_num = Math.floor(number / 10);
        return last_num + sum(left_num);
    }
};
console.log(sum(1111));


function newSum(num){

}