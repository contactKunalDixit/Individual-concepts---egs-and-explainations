/*


*   CallBack: is simply a function that is passed on as a parameter within another function and then its run inside a function body.
*   CallBacks can be of 2 types: Synchronous e.g. forEach(callback) and Asynchronous callbacks e.g. setTimeOut functions




  Defining the posts Array which mimics the server data */
/*
const posts = [             
    {title:'post One', body: "This is post One"},
    {title:'post Two', body: "This is post two"}
]


//! Defining functions 

//  Functions running in an synchronous way

// Thus, here, the createPosts took longer than getPosts and hence the last added item will not be retreived


createPost=(post)=>{
setTimeout(()=>{                    /*SetTimeOut() is also being used to mimic the response coming from server, we are using the setTimeOut() to have the experience of receiving delayed response */
/*
    posts.push(post)
},2000)
};



getPosts=()=>{
setTimeout(()=>{
let output = "";
posts.forEach((post)=>{
output +=`<li>${post.title}</li>`;
});
document.body.innerHTML = output;
},1000)

}


createPost({title:'post Three', body: "This is post Three"})
getPosts()

*/
// The above function working in an Asynchronous with callBacks

/*
createPost=(post,callbackFunc)=>{
    setTimeout(()=>{                    /*SetTimeOut() is also being used to mimic the response coming from server, we are using the setTimeOut() to have the experience of receiving delayed response 
        posts.push(post);
        callbackFunc()  /* In this scenario, the getPost() gets called within these 2 seconds / before these 2 seconds period 
    },2000)
    };
    
    
    
    getPosts=()=>{
    setTimeout(()=>{
    let output = "";
    posts.forEach((post)=>{
    output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    },1000)
    
    }
    
    
    createPost({title:'post Three', body: "This is post Three"},getPosts)
  

    //  Thus, a callback function is a function that can be passed as a parameter within another function and then can be called within the host function

    */

// ! The PROMISES are alternatives to callbacks as a technique for Asynchronous Javascript i.e. alternatives to handle asynchronous operations and they are called PROMISES because while they are handling Asynchronous operations, they can promise that they can do something when that operation is finished, And we handle a PROMISE RESPONSE with a '.then' and its there where something we'll do when the promise is complete.
/*
const posts = [{
        title: 'post One',
        body: "This is post One"
    },
    {
        title: 'post Two',
        body: "This is post two"
    }
]


function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post)

            const error = true;

            if (!error) {
                console.log(this)
                resolve()
            } else {
                reject(`Error: Something went wrong`)
            }

        }, 2000)
    })

}

function getPosts() {
    setTimeout(function () {
        let output = "";
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

createPost({
    title: "Post three",
    body: "this is a post three"
}).then(getPosts).catch(function(err){
    console.log(err)
}) */

// 
// 
// const posts = [
//     {title:"Post 1",body:"This is a post One"},
//     {title:"Post 2",body:"This is a post Two"},
//     {title:"Post 3",body:"This is a post Three"}
// 
// ]
// 
// // Create a post
// function createPost (newPost,callback){
// setTimeout(function(){
//     
// posts.push(newPost)
// const error = true;
// 
// if(){
// 
// }else{
// 
// }
// callback()
// },1000)
// }
// 
// // Get Post
// function getPosts(){
// setTimeout(function(){
// let output ="";
// posts.forEach(function(arrItem){
//     output +=`<li>${arrItem.title} </li>`;
//     document.body.innerHTML=output;
// })
// 
// },4000)
// }
// 
// createPost({title:"Post 4",body:"This is a post FOUR"},getPosts)
// // getPosts()
// 
// // 
// const posts = [{
//         title: "Post 1",
//         body: "This is a post One"
//     },
//     {
//         title: "Post 2",
//         body: "This is a post TWO"
//     },
//     {
//         title: "Post 3",
//         body: "This is a post THREE"
//     }
// ]
// 
// /*Function create a post*/
// 
// function createPost(newPost) {
//     new Promise(function (resolve, reject) {
//                 setTimeout(() => {
//                     posts.push(newPost)
// 
//                     let error = true;
//                     if (!error) {
//                         resolve()
//                     } else {
//                         reject(`Error`)
//                     }
//                 }, 3000);
//             })
// 
//             // Function getPosts
//             function getPosts() {
//                 setTimeout(() => {
//                     let output = "";
//                     posts.forEach((postItem) => {
//                         output += `<li>${postItem.title}</li>`
// 
//                     });
//                     document.body.innerHTML = output;
//                 }, 1000);
//             };
// 
//             // createPost({
//             //     title: "Post 4",
//             //     body: "This is a post FOUR"
//             // }.then(getPosts).catch(function(err){
//             //     console.log(err)
//             // })
//             // 
// 
//             createPost({
//                 title: "Post three",
//                 body: "this is a post three"
//             }.then(getPosts).catch(function(err){
//                 console.log(err)
//             })

const posts = [{
        title: "Title 1",
        body: "This is title One"
    },
    {
        title: "Title 2",
        body: "This is title Two"
    },
    {
        title: "Title 3",
        body: "This is title Three"
    }
]

// Function Create Post 

/* Using a Promise function : when doing so, 
1.  we create a new Constructor Promise and pass in a function with two parameters (again functions in this case). We pass in two functions resolve and reject. Resolve is what we'll like to call when have success i.e. we are done with what we are doing and reject is in case of an error that we want to throw.     */
// 
// createPost = (post) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             posts.push(post)
//             const error = false
//             if (!error) {
//                 resolve()
//             } else {
//                 reject(`Error: Something went wrong`)
//             }
// 
// 
//         }, 1000)
//     })
// }
// //Function Get Posts
// getPosts = () => {
// 
//     setTimeout(() => {
//         let output = "";
//         posts.forEach((item) => {
//             output += `${item.title} : ${item.body}</br> `
//         })
//         document.body.innerHTML = output;
//     }, 3000);
// }
// 
// createPost({
//         title: "newTitle4",
//         body: "This is a NEW Title 4"
//     })
//     .then(getPosts).then(alert("Hi")).catch(function (error) {
//         console.log(error)
//     })



createPost = (post) => {
   return  new Promise(function (resolve,reject){

    setTimeout(() => {
        posts.push(post)
        const error = true;
        if (!error){
            resolve()
            
        }else{
            reject("ERROR ERROR")
        }

    }, 1000)
   })
        
    }

//Function Get Posts
getPosts = () => {

    setTimeout(() => {
        let output = "";
        posts.forEach((item) => {
            output += `${item.title} : ${item.body}</br> `
        })
        document.body.innerHTML = output;
    }, 3000);
}

createPost({
        title: "newTitle4",
        body: "This is a NEW Title 4"
    }).then(getPosts).catch(function(err){
        let output ="";
        output+=output+err;
        document.body.innerHTML = output;
    })
    

    // ! Notice: that the reject() message that we defined erlier is passed on to .catch() and you use the data however you'd like from there

    /*
    
    Question: .then vs .catch question
1
Han · Lecture 66 · 2 years ago
Hello, I'm a little confused about how .catch functions so would appreciate someone to weigh in here.

I understand .then(myFunction) because it's like passing in an argument function as a callback when the Promise resolves.

But why does .catch(err => console.log(err)) need an argument if err is never defined? 

Basically, i'm wondering why for .then it's a value that we pass in, but then for .catch it's a value that comes back?




Answer : We can pass a value in our resolve

   resolve('Promise resolved');
and get that value in our .then

testPromise().then(function(msg){
    console.log(msg)
})
Similarly for error also we can pass in a value in reject

reject('Error occured')
and get that in .catch

.catch(function(err){
    console.log(err)
})
Browser will show an additional error in console also.*/