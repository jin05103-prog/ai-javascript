// node fs module
const file = require("fs");

// file.readFile("경로", "인코딩" "콜백함수")

// globalThis.user = null;
// file.readFile("user.json", "utf-8", (err, data) => {
//     globalThis.user = data
// });

// console.log(globalThis.user)

// JSON.parse(): JSON -> JS Object
// JSON.stringify(): JS Object -> JSON
// let user = null;
// user = file.readFileSync("user.json", "utf-8")
// userJS = JSON.parse(user)
// console.log(userJS.name)

const animal = {
    name: "치즈 고양이",
    age: 5,
    hobbies: ["할퀴기", "먹기", "자기"],
};

const animalJSON = JSON.stringify(animal);
// file.writeFile(경로, 내용, 인코딩, 콜백함수)
file.writeFile("./animal.json", animalJSON, "utf-8", (err) => {
    if (!err) console.log("출력 완료");
});
