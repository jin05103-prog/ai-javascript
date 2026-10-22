// 동물 프로토타입
// 이름, 나이, 걷기, 먹기, 짖기
// 동물 3마리 생성

// this 바인딩
// const Animal = () => {} // ※화살표 함수 안됨
// function Animal(name, age){
//     this.name = name
//     this.age = age
//     this.walk = () => console.log("걷기")
//     this.eat = (food) => console.log(`${food}를 먹습니다.`)
//     this.canSpeak = () => console.log("우리집 개는 짖지만 안물어요.")
// }

// const animal1 = new Animal("누렁이", 3)
// const animal2 = new Animal("얼룩이", 10)

// animal1.eat("개껌")
// animal2.eat("사료")

// function Animal2(name){
//     this.name = name
//     this.test1 = function(){console.log(this.name)}
//     this.test2 = () => {console.log(this.name)}
// }

// const test = new Animal2("치즈")
// test.test1()
// test.test2()
