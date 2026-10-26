// 필수* new Promise()

const promise = new Promise((reolve, reject) => {
    let check = true;
    if (check) {
        reolve("성공한 데이터");
    } else {
        reject("실패한 에러");
    }
});

promise
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => {
        console.log(err);
    });
