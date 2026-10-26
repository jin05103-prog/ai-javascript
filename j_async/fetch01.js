// fetch api
// axis api

// fetch("경로")
// fetch("경로", "옵션")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(console.log)