
/** References:
 
* * Jon Duckett: JavaScript and Jquery   
* Brad traversy : Udemy 
 
 
 * 
 * *    What is AJAX: 
 * 
 * *    AJAX allows you to request data from a server and load it without having to refresh the entire page
 * 
 * *    AJAX stands for Asynchronous Javascript and XML. Though the technologies that were in use coz of which the accronym originated has lost thier popularity coz of newer technologies that do a better job, the accronym is still being called the same.
 * 
 * *    The ability to load new content into part of a page improves the user experience because the user does not have to wait for an entire page to load if only part of it is being updated.
 * 
 * *    The summarised glimpse for  AJAX --> Data Formats --> JQUERY & AJAX
 * *    AJAX                        :allows you to request data from a server and load it without having to refresh the entire page.
 * *    DATA FORMATS                :Servers typically send back HTML, XML or JSON
 * *    JQUERY & AJAX               :JQUERY makes it easier to create AJAX requests and process the data, the server returns.
 * 
 * 
 * *    USAGE of AJAX: you wouldve experienced AJAX in following instances
 * *    *   Live Search(or autocomplete): When you type into the search bar, sometimes you will see results coming up before you have finished typing. 
* *     *   When you shop online and add items to your shopping cart, it is updated without you leaving the page, At the same time, the site may display a message confirming the item was added. So there are parallel processes getting executed.
 * *    *   Websites with user-generated content(such as twitter & Flicker) may allow you to display  your information (Such as your latest tweets or photos) on your own website. This involves collecting data from their servers.
 * *    *   If you are registering for a website, a script may check whether your userName is available before you have completed the rest of the form.
 * *    *   Sites may also use AJAX to load data behind the scenes so that they can use or show that data later on.
 * *    
 * *    DETAILED explaination for what AJAX does?
 * *    Ajax uses an asynchronous processing model. this means the user can do other things while the web browser is waiting for the data to load, speeding up the user experience.
 * *
 * *    THE REQUEST: 
* *     The browser requests info from the server. This requests could also be info that the server needs - just like a form might send data to a server.
**      Browsers implement an object called "XMLHttpRequest" to handle all Ajax requests.Once a request has been made, the browser does not wait for a response from the server.
 * *    
 * *    ON THE SERVER:
 * *    The server responds with data (usually HTML, XML, or JSON): The processing that happens on the Server after recieving request from the browser doesnt fall under preview of AJAX. Server-side tech such as ASP.net, PHP, NodeJS or Ruby can generate web pages for each user. When there is an Ajax request, the server might send the requested data back in HTML or XML or the more popular JSON format.
 * 
 * *    The Response:
 * *    The data/ content sent by the server is recieved & processed by the browser and added to the page.
 * *    When the server has finished responding to the request, the browser will fire an event (just like it can fire an event when a page has finished loading). 
 * *    This event can be used to trigger a Javascript function that will process the data and incorporate it into one part of the page( without affecting the rest of the page)
 * *    
 * *    
 * *    
 *  
* Brad Traversy: Asynchronous Javascript: AJAX and fetch API which are used to make http requests to files , APIs and services wether to your own or external services and similar 

* To Understand Asynchronous code, we'll have to understand first the meaning of synchronous code which is a regular common scenario we see where codes executes in one order i.e.

*****************************
* Synchronous Code:   

posts = loadPostsSync();
...wait till posts are fetched
...do something with posts

* doTheNextThing();           : this function cant execute until posts loaded. Thus synchrnous coding can often slow the processing as the flow in never broken and processing happens in fashionaly order i.e. one function gets executed and then the next function and then the next and so on.


***********************************
* Asynchronous Code:

loadPostsAsync(function(){
... wait till posts are fetched
... do something with posts
});

doTheNextThing(); 

* Doesnt have to wait until posts load. In Asynchronous coding, loadPostsAsync() has been modified so that now it initiates an object "xhttprequest" and starts executing  - But the process still continues on to the next statement in programming and continues execution. It does not wait for one process to get completed before starting the next.
Even if it takes some time to execute function loadPostsAsync(), its not going to stop the JS to move over and execute the next function in line i.e. function doTheNextthing(). Thus it runs way faster and appears to faster to the end user.




*   Most of the Async code you wrk with , will be part if tan API or library, which is handled by Async technologies like:

*         XMLHTTPRequest(the object xhr) & Fetch
* 
*         AJAX calls can be made through Liberaries like 
                ** jQuery(its a DOM manipulation library, though its overkill if used only for the purpose of AJAX), 
                ** Axios, SuperAgent(both these are nice light libraries to make HTTP request and you can make updates, deletes etc) 
                ** Fetch API( is part of the browser and Vanilla JavaScript and is a nice API) 
                ** Prototype (is another library)
                ** NodeHTTP : (you need nodeJS installed to run this library)
                
BT 2 cents/ Opinion: 

JQUERY: using JQuery just for AJAX requets is purely overkill. If you've been usung it already for app contruction, then you may make use of it, else vanilla JavaScript does the job wonderfully well. JQuery in itslef is a DOM manipulation library and is bloated hence, is an overkill
        
        BT prefers Fetch API because it is part of browser API and can work smoothly with Vanilla JavaScript.
        AJAX and xhr is a kind of older technologies and were popular before Fetch API came along and got well adopted.

        Axios and SuperAgent are nice superlight external libraries but then they need to be included as an external script alongwith the core vanilla javascript

        NodeHTTP: is noce in case if you are using NodeJS, else opt for options stated above


*         There are few ways to work with Async code:       CallBacks   ,   ES6 Promises    ,   Async/ Await
* 
*   XMLHttpRequest (xhr) object is:
                    API in the form of an object provided by browsers - as in because it has its own methods and properties
                    Provided by the browsers JS environment
                    Methods transfer data between client/server
                    can be used with other protocols than HTTP
                    can work with data other than XML (JSON and plain text)

    
*****   WHen we send request , this request can be to local machine or general public API like google or the github API and these APIs have to have certain permissions granted for us to be able to use them. They usually have something known as "CORS enabled" which allows the cross domain communication meaning that we can make request to thier API even if we are not on their same domain name as them. 

Some APIs do require some kind of authentication such as "O Auth"   *****




XHR Object methods and working with Text

Case 1: Getting Data from a "text file" on a local machine and bringing it in your web page/ application Asynchronously using the xhr object


// Using AJAX and xhr object to get data from a text file stored in your local machine:


// ! HTML Code:

//! **********************************************************************************
// !    <!DOCTYPE html>
// !    <html lang="en">
// !    <head>
// !    <meta charset="UTF-8">
// !    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     //! <title>ROUGH BOOK</title>
// !     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" !    integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn!    +xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" />
// !    </head>
// !    <body>
// !    
// !    <div class="container">
      //! <h1>ROUGH BOOK</h1>
// !    
       //! <button id="button">Get DATA</button>
// !    <br><br>
// !    
// !    <div id="output"></div>
// !    </div>
// !    <script src="rough_book.js"></script>
// !    
// !    </body>
// !    </html>
//! **********************************************************************************

document.getElementById("button").addEventListener("click", loadData);

function loadData() {

    // create/ instantiating an xhr object
    let xhr = new XMLHttpRequest()

    console.log(xhr)

    xhr.open("get", "Data.txt", true)
    /* argeuments required are the 
            method of request 
            URL you're making this request to 
            and boolean for wether this should be asynchronous request or not*/

    // Optional - Used for spinners and loaders so it displays something while it is fetching / loading the data
    // xhr.onprogress = function () {
    //     console.log("You can place a spinner or a loader image while the request is fetched or is processed")
    // }

    //  Now state what would you want when the server responds to your request
    // console.log(xhr.readyState)
    // xhr.onload = function () {
    //     // console.log(xhr.readyState)
    //     if (this.status === 200) {
    //         console.log(this.responseText)
    //         document.getElementById("output").innerHTML = 
    //         `<h1>${this.responseText}</h1>`;
    //     } else {
    //         xhr.onerror()
    //     }
    // }

//     xhr.send() /* the request is finally initiated through AJAX*/
// 
//     xhr.onerror = function () {
//         alert("Request error ...")
//     }
// 
// }

/* Case 2: Working on BT : case 2 : AJAX and JSON - SINGLE ELEMENT IN THE JSON FILE
/*


document.querySelector("#button1").addEventListener("click", loadCustomer);



function loadCustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            
            const customer = JSON.parse(this.responseText);

            const output = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        `
            document.querySelector("#customer").innerHTML = output;
        }
    }
    xhr.send()
}

*/

/* Case 2: Working on BT : case 2 : AJAX and JSON - ARRAY - Multiple ELEMENT IN THE JSON FILE */

/*
document.querySelector("#button2").addEventListener("click", loadCustomers);


function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json", true)
    xhr.onload = function () {
        if (xhr.status === 200) {

            const customers = JSON.parse(this.responseText)
            let output = "";

            
            customers.forEach(function (i) {

            output += `
            <ul>
                <li>ID: ${i.id}</li>
                <li>Name: ${i.name}</li>
                <li>Company: ${i.company}</li>
                <li>Phone: ${i.phone}</li>
                </ul>
        `
                    document.querySelector("#customers").innerHTML = output;
                }
            )
        }
    }
    xhr.send()
} */
/*

* readyStateValues is a REDUNDANT status check mechanism that was in use before xhr.onload(). On the backend, the xhr.onload() still kind of uses the same check as readyState Values:

*   0:  request not intialized  
*   1:  Server connection established
*   2:  request recieved
*   3:  processing request
*   4:  request finished and response ready: 

*   When we do xhr.onload, its being already through all the states and being finally at 4
 



*/

// !  CHUCK NORRIS JOKES PROJECT - BRAD TRAVERSY - Asynchronous AJAX

// ! HTML CODE:
/*
!<!DOCTYPE html>
!<html lang="en">
!  <head>
!    <meta charset="UTF-8" />
!    <meta name="viewport" content="width=device-width, !initial-scale=1.0" />
!    <title>ROUGH BOOK</title>
!    <link
!      rel="stylesheet"
!      href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/!skeleton.css"
!      integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/!Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ=="
!      crossorigin="anonymous"
!    />
!  </head>
!
!  <body>
!    <div class="container">
!      <h1>Chuck Norris Joke Generator</h1>
!      <form>
!        <div>
!          <label for="number">Number of Jokes</label>
!          <input type="number" id="number" />
!        </div>
!        <div>
!          <button class="get-jokes">Get jokes</button>
!        </div>
!      </form>
!      <ul class="jokes"></ul>
!    </div>
!    <script src="rough_book.js"></script>
!  </body>
!</html>
*/

// @ JAVASCRIPT=====================

// document.querySelector(".get-jokes").addEventListener("click", getJokes)
// 
// function getJokes(e) {
// 
    // const number = document.querySelector("input[type=number]").value;
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
// 
// 
    // xhr.onload = function () {
        // if (this.status === 200) {
            // const response = JSON.parse(this.responseText);
            // console.log(response);
            // let output = "";
            // if (response.type === "success") {
                // response.value.forEach(function (i) {
                    // output += `<li>${i.joke}</li>`;
                // });
// 
// 
                // ! Always be watchful of how API sends the response...it could be different formats. for E.g. like in here, the jokes is an array in key"value"; whereas in other APIs, it could be formatted differently...SO BE WATCHFULL 
            // } else {
                // output += `<li>Something went wrong!!</li>`;
// 
            // }
            // document.querySelector(".jokes").innerHTML = output;
        // }
    // }
// 
    // xhr.send()
    // console.log(number)
// 
    // e.preventDefault()
// }
// 
// * NOTE: Some API would give you freedom to place as much request as you'd like, but then there are some others which'll require you to authenticate/ register your app with them in order to use them..(mosstly financial)
// 
//  * SOme others like github API may allow you restricted access. i.e. you can place 100 request per hour but if you'd like more, then you need to register which will give you an API key which has to be included in your URL and then you can do unlimited request.
// 


// !    ++++++++++++++++++++++++++++++++++++++++++++++++++
//BT -  NEW TOPIC: REST APIs & HTTP Requests

/*

API : stands for application program interface 

Its a very broad term and can denote a provision for any two softwares to talk to each other.
Fridge has APIs, Microphones can have APIs and cars have APIs and Internet of things works on the API concept in general.

But in here, we are refering to Web APIs

In more tecnical terms, its a contract provided by one software to another and uts a structured request and a structured response.

Benefits of REST APIs:

1.  Representational State Transfer
2.  Architectural style for designing networked applications
3.  Relies on a stateless, client-server protocol, alomost always HTTP
4.  Treats server objects as resources that can be created, read and modified and destroyed.
5.  Can be used by virtually any programming language
6.  All APIs have their own rules and structures.

API is the messanger and REST lets us use HTTP requests to format that message.

REST API takes multiple types of HTTP requests like "GET", "POST" etc and we can make our own custom AJAX library to make these requests easier.

Different kind of REST API requests:

1.  GET:        Retrieve data from a specified reource
2.  POST:       Submit data to be processed to a specified resource.e.g. add a post to the database or add a user details through a user submitted form.
3.  PUT:        Update a specified resource that's already exists on the server.
4.  DELETE:     Delete a specified resource

 ? With POST, PUT and DELETE, you send the data alongwith your request to the server. That's obvious because the server needs to know the content they should update along with the requests like"POSTS" or "PUT" or "Delete".

Apart form the above 4 mentioned API requests types, there can be:

5.  HEAD:   Same as "GET" but does not return a body but just the header
6.  OPTIONS:    Returns the supported HTTP methods of that specific server, or API
7.  PATCH:      Update partial resources (Similar to PUT)



Now, when you have some kind of API wether its your own or its external, you will be dealing with the term "endPoints" which are basically the URL addresses you'll be dealing with to do certain things. 

End points can look like below:

GET     https://someurl.com/api/users
POST    https://someurl.com/api/users
GET     https://someurl.com/api/users/1         - Get single user
PUT     https://someurl.com/api/users/1         - Update user
DELETE  https://someurl.com/api/users/1


You may observe that the URL address is the same in all the above cases, its just that the request types are different.


*/


/*
New Topic:           Callback function: 

A call back function is a function which is passed as a parameter to another function and then is made use of within that function. e.g. the forEach functions we've used are callback function and is not asynchronous that is it does stop the processing of another process.

setTimeOut takes out a callback function which is Asynchronous


Demo  - using callbacks in Synchronous way

const posts = [{title:"Post One", body:"This is post one"},
{title:"Post Two", body:"This is post two"}] // the array has been created to mimic the server JSON response


function createPost(i){
setTimeout(function(){
    posts.push(i);
},2000)
}

function getPosts(){
setTimeout(function(){
let output = "";
posts.forEach(function(i){
output +=   `<li>${i.title}</li>`
});
document.body.innerHTML = output;
},1000)
}

/* The functions are being passed without callback in synchronous manner . i.e. one after the other*/ 
// 
// createPost({title:"post Three",body:"This is post three"});

// getPosts()
// 



// Demo using callback in Asynchronous way

// const posts = [{title:"Post One", body:"This is post one"},
// {title:"Post Two", body:"This is post two"}] // the array has been created to mimic the server JSON response
// 
// 
// function createPost(i,callback){
// setTimeout(function(){
//     posts.push(i);
//     callback();
// },2000)
// }
// 
// function getPosts(){
// setTimeout(function(){
// let output = "";
// posts.forEach(function(i){
// output +=   `<li>${i.title}</li>`
// });
// document.body.innerHTML = output;
// },1000)
// }
// 
// 
// createPost({title:"post Three",body:"This is post three"},getPosts);





/*


/* Next chapter - brad traversy - Custome HTTP Library (AJAX with callbacks) */







// ?   Other References

// ?   DATE: Aug 30                   /**********  JSON and AJAX Tutorial: With Real Examples 

/*
!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
! An HTML code for the below e.g.:

!   <!DOCTYPE html>
!   <html lang="en">
!   <head>
!       <meta charset="UTF-8">
!       <meta name="viewport" content="width=device-width, initial-scale=1.0">
!       <title>ROUGH BOOK</title>
!   </head>
!   <body>
!   <header>
!       <h1>ROUGH BOOK</h1>
!       <button id="btn">Fetch Info for 3 New Animals</button>
!   </header>
!   <div id="animal-info"></div>
!   
!   
!   
!       <script src="rough_book.js"></script>
!   </body>
!   </html>
!   
!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++










?       This is an JSON data (string) in an array format


? A simple e.g. of a JSON object consisting of an array as one of the key values

?        let myObj={
?        "name": "Kunal",
?        "age":"38",
?       "species":"Homo-Sapiens",
?        "hobbies":["Coding", "Guitar Playing","Driving"]
?        }

?        let thePets = [
?        {
?                   "name":"MeowsAlot",
?                   "species":"cat",
?                   "favFood":"tuna"
?        },
?        {
?                   "name":"Barky",
?                   "species":"dog",
?                   "favFood":"carrot"
?        }
?        ]



?           
?           Webrowsers have a builtin tool: XMLHttpRequest : this object helps us establish the connection with the deired  URL and then helps us send or recieve the data.
?           
?           
?           let pageCounter = 1;
?           let animalContainer = document.getElementById("animal-info")
?           let btn = document.getElementById("btn").addEventListener("click", function (e) {
?           
?             let ourRequest = new XMLHttpRequest(); /*Instantiating a new Object 
?                console.log(typeof ourRequest)
?                console.log(ourRequest)
?                
?            
?                ourRequest.open("GET", `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`)
?                ourRequest.onload = function () {
?                    let ourData = ourRequest.responseText;
?                    console.log(ourRequest.status)
?                    console.log(ourRequest.responseText)
?                    console.log(typeof ourData)
?                    let ourDataJS = JSON.parse(ourData)
?                    console.log(typeof ourDataJS)
?                    console.log(ourDataJS[0])
?            renderHTML(ourDataJS)
?            
?            
?            
?                }
?            console.log(e)
?            
?                ourRequest.send()
?            
?                pageCounter++
?                if(pageCounter>3){
?                    document.getElementById("btn").remove()
?                }
?            })
?            
?            
?            
?            let renderHTML = function(obj){
?                let htmlString = "";
?            
?                for (i=0;i<obj.length;i++){
?                    htmlString += `<p> ${obj[i].name} is a ${obj[i].species} and likes to eat `;
?                    
?                    
?                        for(ii=0;ii<obj[i].foods.likes.length;ii++){
?            
?            if(ii===0){
?                htmlString += obj[i].foods.likes[ii] 
?            }else{
?                htmlString += ` and ${obj[i].foods.likes[ii]}`
?            }
?                        }
?            
?            htmlString += ` and DISLIKES to eat `;
?            for(iii=0;iii<obj[i].foods.dislikes.length;iii++){
?            if (iii===0){
?                htmlString +=obj[i].foods.dislikes[iii]
?            }else{
?                htmlString +=` and ${obj[i].foods.dislikes[iii]}`
?            }
?            }
?               
?                   htmlString += `.</p>`
?                }
?            
?            animalContainer.insertAdjacentHTML("beforeend",htmlString)
?            }
?            
?           
?           


*/

// !    - - - - - - -  DEV ED   - - - - - - - - - 

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