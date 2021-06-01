/*
*   CallBack: is simply a function that is passed on as a parameter within another function and then its run inside a function body.
*   CallBacks can be of 2 types: Synchronous e.g. forEach(callback) and Asynchronous callbacks e.g. setTimeOut functions


*/


/*  Defining the posts Array which mimics the server data */
const posts = [             
    {title:'post One', body: "This is post One"},
    {title:'post Two', body: "This is post two"}
]


//! Defining functions 

//  Functions running in an synchronous way

// Thus, here, the createPosts took longer than getPosts and hence the last added item will not be retreived


// createPost=(post)=>{
// setTimeout(()=>{                    /*SetTimeOut() is also being used to mimic the response coming from server, we are using the setTimeOut() to have the experience of receiving delayed response */
//     posts.push(post)
// },2000)
// };
// 
// 
// 
// getPosts=()=>{
// setTimeout(()=>{
// let output = "";
// posts.forEach((post)=>{
// output +=`<li>${post.title}</li>`;
// });
// document.body.innerHTML = output;
// },1000)
// 
// }
// 
// 
// createPost({title:'post Three', body: "This is post Three"})
// getPosts()


// The above function working in an Asynchronous with callBacks


createPost=(post,callbackFunc)=>{
    setTimeout(()=>{                    /*SetTimeOut() is also being used to mimic the response coming from server, we are using the setTimeOut() to have the experience of receiving delayed response */
        posts.push(post);
        callbackFunc()  /* In this scenario, the getPost() gets called within these 2 seconds or before these 2 seconds period */
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