// 중요 (Array 메서드들 모두 알아야함)
// .of(초기값1, 초기값2, ...)
// 배열을 생성할 때 초기값을 넣어서 생성하는 메서드

// const arr1 = []
// const arr2 = new Array()
// const arr3 = new Array(10) // 칸 수를 알고 있을 때
// const arr4 = Array.of(10, 20)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// .fill("초기값")
// 배열의 칸수를 모두 초기값으로 채워주는 메소드
// console.log(arr3)
// new Array(5).fill(0)

// .length: 배열의 길이를 반환하는 프로퍼티
// console.log(arr2.length)
// console.log(arr3.length)

// .split(): [] - 문자열
// 구분자로 잘라서 배열로 리턴해주는 문자열의 메서드

// console.log("abcd".split(""))
// console.log("ab,cd".split(","))
// // 앞/뒤에 구분자를 이용해서 자르면 빈 문자열이 들어간다.
// console.log(",abcd".split(","))

// .join("매개변수"): string 전달된 매개변수를 기준으로 새로운 문자열로 리턴하는 메서드
// console.log([10, 20, 30].join())
// console.log([10, 20, 30].join(""))
// console.log([10, 20, 30].join("+"))

// .replace() - 문자열: 전달된 매개변수중 가장 먼저 발견된 값을 찾고, 값을 치환하여 문자열을 리턴
// console.log("승현이의 러브라인 기원 1일차".replace("1일차", "2일차"))
// console.log("꽁꽁 얼어붙은 한강위로 고양이가 고양이 고양이".replaceAll("고양이", "강아지"))

// .push()
// 기존 배열에 값을 뒤에 추가 
// const arr1 = ["홍길동", "장보고", "이순신"]
// const arr_length = arr1.push("오승현")
// console.log(arr1, arr_length)

// .concat()
// 기존의 배열에 추가 값들을 연결시켜주고 [새로운 배열]로 리턴하는 메서드
// const arr2 = [10, 20, 30]
// const arr3 = [40, 50, 60]

// const newArr2 = arr2.concat(arr3)
// const newArr3 = arr3.concat(arr2)

// console.log(newArr2)
// console.log(newArr3)


// .pop()
// 마지막 요소를 제거하고 그 값을 리턴하는 메서드
// const arr4 = [10, 20, 30]
// const last_arr4 = arr4.pop()
// console.log(arr4, last_arr4)


// .unshift()
// 맨 앞에 요소를 추가하는 함수
// .shift()
// 맨 앞에 요소를 삭제하는 함수
// const arr5 = [1, 2, 3, 4, 5]
// const newArr5Length = arr5.unshift(10)
// console.log(arr5, newArr5Length)
// const removedItem = arr5.shift()
// console.log(arr5, removedItem)

// .slice(start, end)
// start 인덱스부터 end 인덱스 전까지 복사해서 [새로운 배열]로 반환하는 메서드
// const arr6 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr6.slice(3, 5))
// console.log(arr6.slice(3))
// console.log(arr6.slice(-5))
// console.log(arr6.slice(-3, -1))

// .splice(start, deleteCount)
// .splice(start, deleteCount, ...newItem)
// start 인덱스부터 deleteCount 개수만큼 삭제하고, newItem 아이템이 있다면 삭제된 위치에 값을 대체하는 메서드
// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
// const removedItems = arr7.splice(2, 5)
// console.log(arr7, removedItems)

// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
// const removedItems = arr7.splice(2, 5, 10, 11, 12)
// console.log(arr7, removedItems)

// // 되돌릴 방법이 없음
// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
// // arr7[7] = 100
// // 되돌리기 가능
// const removedItems = arr7.splice(7, 1, 100)
// console.log(arr7, removedItems)

// .includes("찾을값"): boolean - Array, String
// === in(멤버쉽 연산자)
// 배열 또는 문자열에서 해당 값을 찾고 값이 포함되어 있따면 boolean으로 리턴하는 메서드
// const arr8 = ["일", "이", "삼", "사", "오", "육"]
// console.log(arr8.includes("응"))
// console.log(arr8.includes("삼"))
// console.log("일이삼사".includes("삼"))

// .reverse()
// 배열의 순서를 뒤빚고 반환하는 메서드
// const arr8 = ["일", "이", "삼", "사", "오", "육"]
// console.log(arr8.reverse())
// console.log(arr8)

// .sort(콜백함수)
// (a, b) => b - a : 내림차순
// (a, b) => a - b : 오름차순
const arr9 = [11, 23, 13, 74, 25, 16, 57, 28 ,19, 710]
arr9.sort((a, b) => b - a)
console.log(arr9)


