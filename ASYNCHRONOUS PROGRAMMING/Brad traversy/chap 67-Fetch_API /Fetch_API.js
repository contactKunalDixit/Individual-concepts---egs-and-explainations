
//  this is different technique from AJAX and XHR

// Fetch API is part of the window object(heck the window object console) and is a newer standard for dealing with HTTP request and can do everything that we do with AJAX and XMLHTTPRequest

// NOTE: Fetch returns Promises, We saw in the lecture 66 that after you recieve the result from the promise, you'd use use .then()

// * Button 1: Fetching text from a text file */ 

document.querySelector("#button1").addEventListener("click", getText)
// 
// function getText() {
//     fetch("Test Text.txt")
//         .then(function (response) {
//             return (response.text())        /* We've returned the prototype method - text() because we are dealing with a text file. Had we been dealing with a JSOn file, we wouldve RETURNED a prototype method -JSON () */
//         }).then(function (data) {           /* Data equals to the (promise response RETURNED from the previous function)*/
//             console.log(data)
//         })
//         .catch(function(err){
//             console.log(err)
//         })
// }

/*Practice repeat */

// function getText() {
//     fetch("Test Text.txt")
//         .then(function (resp) {
//             return (resp.text())
//         }).then(function (data) {
//             console.log(data)
//             document.querySelector("#output").innerHTML = data
//         })
//         .catch(function (err) {
//             console.log(err)
//         })
// 
// 
// }


/* Practice again repeat */

function handleErrors(res) {
    if (!res.ok) {
        throw new Error("Error exists")
    } else {
        return res
    }
}

document.querySelector("#button1").addEventListener("click", getText)

function getText(e) {

    fetch("Test Text.txt")
        .then(handleErrors)

.then((response)=>{return response.text()})


        // .then(function (response) {
        //    
        //     return (response.text())
        // })

        .then((data)=> 
          
            console.log(data)
        )
        .catch((err) => {
            console.log(err)
        })


}



//  * Button 2: Fetching JSON from a JSON FILE*/ 
document.querySelector("#button2").addEventListener("click", getJson)

// function getJson(){
//     fetch("post.json")
//     .then(function(resp){
//         return (resp.json())
//     }).then(function(data){
//         console.log(data)
//         let output = "";
//         data.forEach(function(post){
//             output +=`<li>${post.title}</li>`
//         })
//         document.getElementById("output").innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// 
// }

// Pratice repeat

function getJson() {

    fetch("post.json")

        .then(handleErrors)
        .then((resp)=> {

            return (resp.json())

        })

        .then((data)=> {
            console.log(data)
            let output = "";

            data.forEach( (post)=> {
                output += `<li>${post.title}</li>`
                return output;
            })
            document.querySelector("#output").innerHTML = output
        })
        .catch(()=> 
            console.log(`ERROR`)
        )

}



//  * Button 3: Fetching JSON from an API*/ 
// 
document.querySelector("#button3").addEventListener("click", getExternal)

function getExternal() {
    fetch("https://api.github.com/users")
        .then(handleErrors)

        .then((resp) =>{
            return resp.json()
        })
        .then((data)=> {
            console.log(data);
            let output = "";
            data.forEach((user)=> {
                output += `
<ul><li>${user.login} </li></ul>`

            })
            document.querySelector("#output").innerHTML = output;
        })
        .catch((err)=> {
            console.log(err)
        })


}


const arr=["a"]

arr.forEach(function(){
    'use strict'
    console.log(this)
})



