const got = require('got');
 //Calling Valid URL with Async/Await
(async () => {
    try {
        const response = await got('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.statusCode);
    } catch (error) {
        console.log("In Error Async/Await : ", error.response.statusCode);
    }
})();
//Calling Invalid URL with Async/Await
(async () => {
    try {
        const response = await got('https://jsonplaceholder.typicode.com/todosss/1');
        console.log(response.statusCode);
    } catch (error) {
        console.log("In Error Async/Await : ", error.response.statusCode);
    }
})();

// //Calling Invalid URL with Promises
(function prom2() {
    got('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.statusCode)
        return got('https://jsonplaceholder.typicode.com/todossss/1')
    })
    .then( res => console.log(res.statusCode))
    .catch(e => console.log("In Error Promises : ", e.response.statusCode))
}())