const http = new easyHTTP();

// Get Posts

// http.get("https://jsonplaceholder.typicode.com/posts", function(err,posts){
//     if(err){
// console.log(err)
//     }else{
//         console.log(posts)
//     }
//     
// })


// 
// http.get("https://jsonplaceholder.typicode.com/posts/12", function(err,responsePosts){
//     if(responsePosts){
//         console.log(responsePosts)
//     }else{
//         console.log(err)
//     }
// })



// Create Data

const data = {
    title:"Custom Post",
    body:"This is a cutom post"
};

// Create Post
// http.post("https://jsonplaceholder.typicode.com/posts",data,function(error,post){
// if(post){
//     console.log(post)
// }else{
//     console.log(error)
// }
// })

// Update Put
// 
// http.put("https://jsonplaceholder.typicode.com/posts/5",data,function(error,put){
//     if(put){
//         console.log(put)
//     }else{
//         console.log(error)
//     }
//     })
    
// Delete Post

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err,responsePosts){
    if(responsePosts){
        console.log(responsePosts)
    }else{
        console.log(err)
    }
})