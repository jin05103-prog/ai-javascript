// for문
// 횟수를 알 때 사용하는 문장
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

const arr1 = [10, 20, 30, 40];
for(let i = 0; i < arr1.length ; i++){
    console.log(arr1[i])
}

// for ~ in 객체:
for (let i in arr1) {
    console.log(i);
}

// for ~ of 객체: 값 접근하는 반복문
for (let i of arr1) {
    console.log(i);
}
