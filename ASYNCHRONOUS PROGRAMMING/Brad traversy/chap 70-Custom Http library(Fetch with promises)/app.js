const http = new EasyHTTP


// Get Users

// http.get("https://jsonplaceholder.typicode.com/posts")

const users = http.get("https://jsonplaceholder.typicode.com/posts")

console.log(users)