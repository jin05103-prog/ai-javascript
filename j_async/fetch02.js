// 필수

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas = await response.json()
    return datas
}

getUsers()
    .then((users) => {console.log(users)})
    .catch((err) => {console.log(err)})
    