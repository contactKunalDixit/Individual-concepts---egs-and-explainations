// const ajax = (method, url, callback, errCb) => {
//     const request = new XMLHttpRequest();
// 
//     request.addEventListener("load", e => {
//         if (e.target.status >= 400) {
//             errCb(e.target.responseText)
//         } else {
//             callback(e.target.responseText)
//         }
//     });
//     request.open(method, url)
//     request.send()
// }
// 
// 
// ajax("GET", "/api/endpoint", (data) => {
//     console.log("SUCCESS", data)
// }, (error) => {
//     console.log("Error:", error)
// })

// * The node way slightly differs in a way that you just pass ONE call back with (success,error) 2 parameters like below */


const ajax = (method, url, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("load", e => {
        if (e.target.status >= 400) {
            callback(null,e.target.responseText);
        } else {
            callback(e.target.responseText,null);
        }
    });
    request.open(method, url)
    request.send()
}


ajax("GET", "/api/endpoint", (error,data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})