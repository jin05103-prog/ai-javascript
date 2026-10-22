// 프로토타입 -> 클래스를 만드는 이유는?
// 프로토타입
// 1. 앞 글자가 반드시 대문자로 시작해야한다.
// 2. new 뒤에 나오는 객체들을 프로토타입이라고 한다.
// 3. 공통 필드(프로퍼티)들을 같은 프로토타입에게 물려주기 위한 목적으로 사용한다.
function User(name, age, point) {
    this.name = name;
    this.age = age;
    this.point = point;
    this.intro = () => {console.log(this.name)}
}

const user1 = new User("홍길동", 20, 5000)
user1.intro()
console.log(user1)

// const user1 = {
//     name: "홍길동",
//     age: 20,
//     point: 5000,
// };
const user2 = {
    name: "장보고",
    age: 30,
    point: 10000,
};

console.log(user2)
// const user3 = {
//     name: "이순신",
//     age: 40,
//     point: 15000,
// };
