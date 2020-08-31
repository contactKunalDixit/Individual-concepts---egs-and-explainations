
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

Case : Getting Data from a "text file" on a local machine and bringing it in your web page/ application Asynchronously using the xhr object


// Using AJAX and xhr object to get data from a text file stored in your local machine:

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





/*

* readyStateValues is a REDUNDANT status check mechanism that was in use before xhr.onload(). On the backend, the xhr.onload() still kind of uses the same check as readyState Values:

*   0:  request not intialized  
*   1:  Server connection established
*   2:  request recieved
*   3:  processing request
*   4:  request finished and response ready: 

*   When we do xhr.onload, its being already through all the states and being finally at 4
 


*/
*/








/*

?   Other References

?   DATE: Aug 30                   /**********  JSON and AJAX Tutorial: With Real Examples 


!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
! An HTML code for the below e.g.:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROUGH BOOK</title>
</head>
<body>
<header>
    <h1>ROUGH BOOK</h1>
    <button id="btn">Fetch Info for 3 New Animals</button>
</header>
<div id="animal-info"></div>



    <script src="rough_book.js"></script>
</body>
</html>

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