// fetch 함수 연습하기!

const getDatas = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("data fetching failed");
    const datas = await response.json();
    return datas;
}

// 1. "https://jsonplaceholder.typicode.com/todos"
// completed가 false인 데이터만 가져와서 출력하기

getDatas("https://jsonplaceholder.typicode.com/todos")
    .then((todos) => todos.filter((todo) => !todo.completed))
    .then((falseTodos) =>
        falseTodos.forEach((falseTodo) => {
            console.log(falseTodo);
        }),
    )
    .catch((err) => {
        console.error(err);
    });

// 2. https://jsonplaceholder.typicode.com/comments
// email에서 id만 추출해서 id리스트로 출력하기
const emailSplit = ({email}) => email.split("@")[0]
getDatas("https://jsonplaceholder.typicode.com/comments")
    .then((comments) => 
        comments.map(emailSplit)
    )
    .then(console.log)
    .catch((err) => {
        console.error(err)
    })

// 3. https://jsonplaceholder.typicode.com/users
// name만 가져와서 모두 거꾸로 만들고 거꾸로된 names 리스트로 출력하기

getDatas("https://jsonplaceholder.typicode.com/users")
    .then((users) => users.map((user) => user.name))
    .then((names) => names.map((userName) => {
        return userName.split("").reverse().join("")
    }))
    .then((names) => console.log(names))
    .catch((err) => console.error(err))

// 4. https://jsonplaceholder.typicode.com/posts
// 20부터 35까지만 자르고, body만 가져와서 body리스트로 출력하기

getDatas("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => posts.slice(20, 36))
    .then((posts) => posts.map(({body}) => body))
    .then((bodies) => console.log(bodies))
    .catch((err) => console.error(err))
