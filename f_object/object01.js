// 객체의 생성
// 프로토타입 -> Object
// 참조 레퍼런스 타입

// 객체 생성자 문법
const user = new Object(); // new -> 힙에 올라감
//객체 리터럴 문법
const user2 = {};

const user3 = {
    name: "진성",
    age: 50 / 2,
    address: "잠실"
}

// .접근법
console.log(user3.name)

// 대괄호 접근법([]): 변수를 사용하고 싶을 때 사용하는 접근법
for(let i in user3){
    console.log(i)
    console.log(user3[i])
}
    