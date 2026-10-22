// // 1. 입력받은 문자열을 뒤집어주는 함수
// // "abde" -> "edba"

// // 2. 3개의 매개변수를 전달하여 숫자의 개수 찾아주기
// // ex) 10, "a", 7
// // -> 정수 2개

// const reverseString = (str) => {
//     let arr = "";
//     const len = str.length;
//     for (let i = 0; i < len; i++) {
//         arr += str[len - (i + 1)];
//     }
//     return arr;
// };

// string = reverseString("apple");
// console.log(string);

// const countNum = (list) => {
//     let count = 0;
//     const len = list.length;
//     for (let i = 0; i < len; i++) {
//         if (typeof list[i] === "number") {
//             count++;
//         }
//     }

//     return count;
// };

// numCount = countNum([10, "a", 7]);
// console.log(numCount);

// //--------------------------------------------------------
// // 화살표 함수
// // 1. 입력받은 문자열을 뒤집어주는 함수
// // "abde" -> "edba"
// const reverse = (str) => {
//     let result = ""
//     for(let i = 0; i < str.length; i++){
//         result += str[str.length - 1 - i]
//     }
//     // for(let s of str){
//     //     console.log(s)
//     // }
//     return result
// }

// let result1 = reverse("abcd")
// console.log(result1)

// // 2. 3개의 매개변수를 전달하여 숫자의 개수 찾아주기
// // ex) 10, "a", 7
// // -> 정수 2개

// console.log(typeof("a") === "number")
// // 정수인지
// console.log(!isNaN(10))

// const getNumberCount = (data1, data2, data3) => !isNaN(data1) + !isNaN(data2) + !isNaN(data3)
// let result2 = getNumberCount(10, "a", 7)
// console.log(result2)

// const getNumberCount2 = (data1, data2, data3) => {
//     let total = 0
//     typeof(data1) === "number" && total++
//     typeof(data2) === "number" && total++
//     typeof(data3) === "number" && total++
//     return total 
// } 

// let result3 = getNumberCount2(10, "a", 7)
// console.log(result3)


// 가변 매개변수 
// ...args
// const add = (...number) => {
//     console.log(number)
// }

// add(10, 20, 30)

// default parameter
const add2 = (data1, data2 = 0) => data1 + data2
console.log(add2(10))

const init = () => 0
const add3 = (data1, data2 = init()) => data1 + data2
const add4 = (data1, data2 = (() => 0)()) => data1 + data2
console.log(add3(10))
console.log(add4(10))
