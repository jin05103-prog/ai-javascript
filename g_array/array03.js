// 1. 1~10까지 누적합 구하기
const arr2 = new Array(10).fill(0).map((_, i) => i + 1)
const sum = arr2.reduce((acc, data) => acc + data)
console.log(sum)

// 2. 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경후 원본 배열을 출력
const arr1 = new Array(10).fill(0).map((_, i) => i + 1)
arr1.forEach((value, index, array) => array[index] = value > 5 ? value * 2 : value)
console.log(arr1)

// 3. 10, 20, 30, 40, 50을 배열에 담고 내림차순 정렬하기 
const arr3 = new Array(5).fill(0).map((_, i) => i + 1).map((data, i) => data * 10)
arr3.sort((a, b) => b - a)
console.log(arr3)

// 4. array의 고차 함수로 사용하여 a개수 구하기
// "abcccddeaddddadwefdaasdasdjkasdhkjw"
str = "abcccddeaddddadwefdaasdasdjkasdhkjw"
const countA = str.split("").reduce((acc, data) => data === "a" ? acc + 1 : acc, 0)
console.log(countA)

const arr4 = str.split("a")
console.log(arr4)
const aCount = arr4.length - 1
console.log(aCount)