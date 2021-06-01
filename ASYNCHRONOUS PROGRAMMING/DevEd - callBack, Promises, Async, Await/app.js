/* AJAX: Asynchronous JavaScript and XML 

AJAX allows us to make these requests to get the data from the server at the background.
This data gets transfered in JSON or XML format but JSON is more popular and widely accepted.
We receive the data from servers in JSON
We parse it which converts it into javaScript usable objects and then
We can make use of that or display it onScreen


*/

// * Synchronous Code Example - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 
// function otherFunc(){
//     console.log("We are in another funct")
//     console.log("do some Stuff")
// }
// 
// 
// console.log("start")
// otherFunc()
// 
// console.log("End")

/* Now by default as is the nature of JAvaScript, it'll read the code line by line i.e. SYNCHRONOUSLY and builds up the callstack accordingly.

A callstack is way for JavaScript to keep a track of your execution context.
Now in the above scenario, javaScript starts reading the line one by one:

1.  So it reads that right at the start some function named 'otherFunc' has been defined and moves over (Since it is just a defination and not Invocation) 
2.  Reads & Invokes the first function - console log("Start") and executes it and REMOVES it from callStack
3.  Invokes the otherFunc() and goes on to read and gets instructions on what it needs to do within the function. Follows it and concludes the function and REMOVES it from callStack
4.  Moves to the  last function - console.log("End") and REMOVES it from CallStack.

*/

// * Asynchronous Code Example - - - - - - - - - - - - - - - - - - - - - - - - - - 

// console.log("Start")
// 
// setTimeout(()=>{
//     console.log("This is ASYNCHRONOUS e.g.")
//     console.log("Some more Stuff")
// },2000)
// 
// console.log("End")


/* The function setTimeOut() or the event listeners are good example of elements that support Asynchronous approach in JS

The above setTimeOut() function takes itself out of the main callStack and places itself in webAPI virtual section and its the Browser which keeps a track of this function's execution while the rest of the the flow runs normally in the main callStack.

The Result: /Start
            /End
            /This is ASYNCHRONOUS e.g.
            /Some more Stuff

WHen the setTimeOut() function has been concluded, The browser brings itself back to the main callStack and projects the results.

The Same behaviour is depicted by the call Events like "click" and others because they are also placed within the webAPI by browser and thus allow the rest of the code to follow normal flow execution and the browser only invokes the function within the addEventListener when the user initiates the event by click. that is the time when the browser brings it to the main callStack.

Fetch is also Asynchronous in nature because it keeps on executing behind the scene while the rest of the execution in mainStack follows its normal course


Now, all the functions we've discussed have the pattern of having callBack functions meaning each of these functions call Back another function within when invoked.

for E.g. setTimeOut() is a function initself but calls back another function 
()=>{
    console.log("This is ASYNCHRONOUS e.g.")
    console.log("Some more Stuff")
}

Now same is the case when we are fetching the data from the servers. We'd like the main callStack to continue its execution of the program while the Fetch fetches the data from the servers behind the curtains, And displays only when the data has been accumilated.

Asynchronous coding will make use of callBack functions but not all callBacks are Asynchronous. for e.g. forEach also uses callBack function but then entire code runs in a SYNCHRONOUS manner and NOT Asynchrnously.

*/


// console.log("Start")
// 
// const items = [1,2,3,4,5]
// 
// items.forEach((item)=>{
//     console.log(item)
// })
// console.log("End")


//  * THUS, as seen above, NOT all callBacks functions would execute ASYNCHRONOUSLY. The above e.g. demos that even despite using a callback function, the code executes in a SYNCHRONOUS manner.




/*

let loginUser = (email,password,callback)=>{
    setTimeout(()=>{
        console.log("This is mimicing the response from the server and NOW we have the DATA")
        callback({userEmail:email,userPassword:password});
    },5000);
}

console.log("Start")
const user = loginUser("kunalDixit1982@gmail.com",12345,(user)=>{
console.log(user)
})

// console.log(user)

console.log("End")

*/