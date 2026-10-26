// 구조분해할당 (ES6) === 언패킹
const [data1, data2, data3] = new Array(3).fill(0).map((_, i) => i + 1).map((n) => n * 10)

const user = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남"
}

const {name, age, address} = user
console.log(name, age, address)