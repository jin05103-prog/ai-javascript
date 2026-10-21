// let data1 = 10
// let data2 = 20

// console.log(data1 || true)
// console.log(true || data1)
// console.log(true && data1)
// console.log(data1 && true)

// 10 >= 11 ? (
//     console.log("a")
// ) : (
//     console.log("b")
// )

//false가 아닌데 false로 취급되는 값
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(" ")) // 공백문자도 값이다.
console.log(Boolean(0))
console.log(Boolean([]))
console.log(Boolean({}))