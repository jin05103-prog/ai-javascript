// 10월 생일자 구별하기
const students = ["오준승", "김진휘", "정우영", "채진성", "이상아", "조수민", "이예나"]

// for i in list == for(let i of list){}
for(let student of students){
    if(student === "오준승" || student === "김진휘" || student === "정우영"){
        // `${변수명}`: 템플릿 리터럴(ES6) == f""
        console.log(`${student}생일 축하합니다!🎉 당신은 사랑받기 위해 태어난 사람🎉`)
    }else if(student === "조수민"){
        console.log(`${student} 만약에 완창!`)
    }else {
        continue;
    }
}

