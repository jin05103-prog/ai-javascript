// 얕은 복사와 깊은 복사

// const name1 = "승현"
// const name2 = name1
// name2 += "짱"

// const animal1 = {
//     dog: "누렁이",
//     cat: "점박이",
//     cow: "얼룩이"
// }

// const animal2 = animal1
// animal1.dog = "누렁스"

// console.log(animal1, animal2)


// 깊은 복사 (1번째)
// Object.assign(target, source)
// const animal1 = {
//     dog: "누렁이",
//     cat: "점박이",
//     cow: "얼룩이"
// }

// // static
// const animal2 = Object.assign({}, animal1)

// animal1.dog = "누렁스"

// console.log(animal1, animal2)

// 깊은 복사
// lodash
// const animal3 = {
//     dog: "누렁이",
//     cat: "점박이",
//     human: {
//         name: "이승현",
//         age: 20
//     }
// }

// const animal4 = Object.assign({}, animal3)
// animal3.human.name = "승현"

// console.log(animal3, animal4)

// 깊은 복사(1depth) - spread 문법
// const students = {
//     student1: "hobby1",
//     student2: "hobby2",
//     student3: "hobby3",
//     student4: "hobby4",
// }

// const students2 = {...students, student3: "하비3"}

// students.student1 = "하비"
// console.log(students, students2)

// 배열의 spread
const arr1 = [10, 20, 30]
const arr2 = [100, 200, 300]
const arr3 = [1, 2, 3]
const newArr = [...arr1, ...arr2, ...arr3]
console.log(newArr)

// Math
console.log(Math.min(...arr1))






