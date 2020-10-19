// const number = [1, 9, 4, 7, 5, 10]
// let arr1 = arr.sort(function(a-b){
//     return a-b
// });
// let arr2 = arr1.filter(function(num){
//     return num%2 == 0
// });
// console.log(arr_2)

// var x = 1
// // console.log(Boolean(0))
// let x = Number(prompt(' Nhap vao 1 so x'))
// test1();
// test2();

// function test1(x) {
//     console.log(x == 0);
// }

// function test2(x) {
//     console.log(1 - x);
// }
let $no = document.getElementById('no');
let $answer = document.getElementById('answer')
    //ghi de su kien onmouseenter
$no.addEventListener('mouseenter', function() {
    $answer.classList.toggle('reverse')
});