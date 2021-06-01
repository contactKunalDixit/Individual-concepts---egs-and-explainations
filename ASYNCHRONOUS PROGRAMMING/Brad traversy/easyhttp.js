/* creating a library with AJAX and xhr object*/
// * Library is a JavaScript file comprising of commonly used functions/ or constructors which can then be called and utilized to be used in the HTML file.

/* This library will be ES 5 object oriented library i.e. based on prototypes instead of classes which will be another library covered later in the course, we'll be using remaking the same linrary using Fetch API and ES 6 classes */


/* the only property this function has will be setting a new http(or xhr object) for the XMLHttpRequest()*/
/* Instead of using xhr, since this is a constructor, we'll be using    "this.http" */



function easyHTTP(){
   this.http = new XMLHttpRequest();   
  
   console.log(this)
    console.dir(this.http)
}


// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback){
this.http.open("GET",url,true)


let  self = this;   /* Using self in order to avoid using arrow function in ES5*/

this.http.onload = function(){
    if(self.http.status===200){
       callback(null,self.http.responseText);
    }else{
        callback(`Error: `+ self.http.status)
    }
}

this.http.send()
}




// Make an HTTP POST request

easyHTTP.prototype.post = function(url,data,callback){
this.http.open("POST",url,true)
this.http.setRequestHeader("Content-type","application/json")

this.http.onload = function(){
   console.log(this)
        callback(this.responseText)
   
    }



this.http.send(JSON.stringify(data))
}

// Make an HTTP PUT request

easyHTTP.prototype.put = function(url,data,callback){
    this.http.open("PUT",url,true)
    this.http.setRequestHeader("Content-type","application/json")

    this.http.onload = function(){
        console.log(this)
        callback(this.responseText)
    }
    this.http.send(JSON.stringify(data))
}

// Make an HTTP DELETE request

easyHTTP.prototype.delete = function (url,callback){
this.http.open("DELETE",url,true)
    this.http.onload = function(){
    if(this.status===200){
        callback(`Post Deleted`)
    }else{
        callback(`Error type is ${this.status}`)
    }
}
this.http.send()



}
// ***************************************************** */
// Practice


// function EasyHttp (){
//     this.http = new XMLHttpRequest()
// }
// 
// EasyHttp.prototype.get = function(url,callbackFunc){
//     this.http.open("GET",url,true)
//     console.log("this out: ",this)
// // let self = this;
//     this.http.onload =function(){
//         console.log("this before if",this)
//         if(this.status===200){
//             console.log("this inside: ",this)
//             console.log('self: ',self)
// callbackFunc(this.responseText)
//         }else{
// callbackFunc(`Error: the error type is ${this.status}` )
//         }
// 
//     }

//     this.http.send()
// }