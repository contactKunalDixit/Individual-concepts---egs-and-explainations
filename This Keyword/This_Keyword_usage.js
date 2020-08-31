/*
//**** Reference: https://ui.dev/this-keyword-call-apply-bind-javascript/


//*** Q: What is "This" ?
This references the object that is executing the current function.
The this keyword allows you to reuse functions with different contexts. 

Said differently, the “this” keyword allows you to decide which object should be focal when invoking a function or a method.
*/

// *** Golden Note: The first thing we'll look at is how to tell what the 'this' keyword is referencing.
// *** The only way you can tell what the 'this' keyword is referencing is by looking at where the function using the 'this' keyword was invoked.

//*** For e.g. lets say we are defining a function

// function greet (name){
        // alert(`Hello, my name is  ${name}`)
// }

// *** If we were to check at this stage what 'greet' was going to alert, we'd not be having an answer. Why?
// *** Bcoz given only the function defination, its impossible to know. In order to know what 'name' is, you'd have to look at the function invocation of function "greet". Its the exact same logic with figuring out what the "this" keyword is referencing. YOU SHOULD KNOW WHERE THE FUNCTION COMPRISING OF "THIS" HAS BEEN INVOKED IN ORDER TO GET WHAT "this" would INDICATE TO.

// ***If the container function has been invoked globally, then in browser environment, it'll indicate and relate to 'window' object.
// ***If the container function has been invoked in reference to an object, It'll indicate and relate to that object. see DEMO 1, DEMO 4, DEMO 5, DEMO 6






// If that function is a method in an object, "This" refers to that object itself

//  If that function is a regular function aka standalone function aka a function on its own (AND NOT PART OF AN OBJECT), "this" refers to global object which is the window object in the browser and global in node

// todo DEMO 1: THIS BEING USED WITHIN METHOD OF AN OBJECT 
const video = {
    title: "a",
    play() {
        console.log(this)
    }
};
video.play(); /* prints the object itself because 'this' is being used within a method"play" of the object"video", hence "this" refers to the object itself */


/* Even if a function is added later to an object and "this" is used within, it will still point out to the object it is being used within .see below*/
video.stop = function () {
    console.log(this)
}

video.stop()



// ? Now demo the usage of "this" within a pure regular standalone function

// todo DEMO 2: THIS BEING USED AS A COMMON STANDALONE REGULAR FUNCTION 

function playVideo() {
    console.log(this)
}

playVideo() /* This refers to the global object which is "Wnidow" object in browsers and global in Node */


// todo DEMO 3: THIS BEING USED IN CONSTRUCTORS
/*Creating a constructor Video*/
function Video(titleParameter) {
    this.title = titleParameter;
    console.log(this);
}

const v = new Video("the concept video")

/*The moment we use a new operator, it instantiates (creates) an empty object for us i.e.{} and "this refers to the same {},

thats why when we do "this.title", its equalvalent of saying {}.title = titleParameter and JavaScript sets "title" as a key with its value as titleParameter*/

// todo: DEMO 4: further example of "this being used :
// todo:        within a object and 
// todo:        then as an arguement for a callback function(tag)within   forEach()"

const videoDemo4 = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags: function () {
        this.tags.forEach(function (tag) {
            /* this refers to the object"videoDemo4" because we are using it within the object method */
            console.log(this, tag) /* this refers to global object - "window" because it is being used within a callback function - "function(tag)" */
        })
    }


}



// Todo DEMO 5: The below example is an extension of the above example - with arguement 'thisArg' for forEach()
const videoDemo5 = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags: function () {
        this.tags.forEach(function (tag) {
            /* this refers to the object"videoDemo4" because we are using it within the object method */
            console.log(this.title, tag) /* Since, there's an arguement that follows after the call back function in forEach(), thus "this" here refers to the arguement below */
        }, this); /* "this" refers to the "thisArg" which refers to the object videoDemo4 itself, since it is being used in a method forEach which is directly a method of Object VideoDemo4  */
    }
}

videoDemo4.showTags()




// todo DEMO 6: in case when 'this' is being used with event listeners

let myFunc = function () {
    console.log("1", this)
}


document.querySelector("#head3").addEventListener("mousedown", myFunc)
/*Since myFunc is being used as a callback function for the object selected through id "#head3", this here refers to that object */

/* NOTE - IMPORTANT POINT TO TAKE NOTE OF */

// when we are using simple regular functions, "This" points at who called the function, thus in above stated eg: DEMO 6, this refers to the object created by document.querySelector("#head3") when its called in the DOM and thus displays that too.


//   In more simpler terms, if an object is calling a regular function, then "this" refers to that object
// If the object is calling a fat arrow function, then "this" refers to the global objectth

//  For specifically arrow Functions aka fat arrow functions:
// "This" refers to its PARENT and says where were you declared?
//  you were declared in a global scope, so the global object is what I'll point at as well

/*

// *** The below is in continuation to above green Notes ref - https://ui.dev/this-keyword-call-apply-bind-javascript/

// *** Now that we know the 1st step to figuring out what the "This" keyword id referencing is to look at where the function is being invoked, we need to establish 5 thumbRules: 
// *** The goal here is to look at a function defination using the "this" keyword and tell what "this" is referencing :-

// ***    1.  Implicit Binding
// ***    2.  Explicit Binding
// ***    3.  new Binding
// ***    4.  Lexical Binding
// ***    5.  window Binding  

// ***    Lets amplify the above:

// !    1.  Implicit Binding: 

// ***    The most common rule to determine what "this" would refer to. Would work 80% of the times.
// ***    Lets say we had an object that looked like this:
    const user = {
    name: "Kunal",
    age:"38",
    greet(){
            console.log(  `Hello, my name is ${this.name}`   )
    }
}
// ***    Now if you were to invoke the greet method on the user Object, you's do so using a dot notation.
// ***    user.greet()

// ***    This brings us to the key rule in the implicit binding rule. In order to figure out what the "this" keyword is referencing:
// ***   a.  look to the left of the dot when the function is invoked. there are only 2 possibilities that can exist: either there would be an object or incase of a singular indipendent function there wont be any. the keyword "this" refers to the first object that prefixes that dot.


To take it to next level, lets consider an example where we have an object inside another object. lets extend the previous object "user" to now include an object

const user = {
    name: "Kunal",
    age: "38",
    greet: function(){
        console.log(`Hi, My name is ${this.name}`)
    }, 

    mother:{
        name: "Kiran",
        age:"68",
        greetMother:function(){
            console.log(`Hi I am MOTHER, and my name is ${this.name}`)
        }
    }
}

// ***      user.greet()                        :"this" refers to the object user       bcoz thats what precedes the "."
// ***      user.mother.greetMother()           :"this" refers to the object mother     bcoz thats what precedes the "."

// *** CONCLUSION: so for 80% of the time, there will be an object to the "left of the dot" and "this" will refer/ indicate to it......but what if there is NO dot to the left as is the case with STAND ALONE FUNCTIONS. this is where EXPLICIT BINDING comes in

// ! 2)   Explicit Binding:

// ***  Now, what if instead of our greet function being a method on the user object, it was just its own standalone function.

function greet (name){
    console.log(`Hi, my Name is ${this.name}`)
}

let user = {
    name:"Kunal",
    age:"38"
}


// ***  by now, we know that in order to tell what the "this" keyword is referencing , we first have to look at where  the function is being invoked. Now, this brings up the question, how can we invoke "greet" but have it be invoked with the "this" keyword referencing the "user" object.
// ***  We just cant do user.greet() like we did before because now "user" doesnt have a greet method within.

// ***  In Javascript, EVERY FUNCTION contains a method which allows you to do exactly this and is known as "call".

// !                        .call()

// ********             "call" is a method on every function(including constructors) that allows you to invoke the function specifying in what context the              function will be invoked                                                                                         ***********

thus, we can invoke greet in the context of user by:    greet.call(user)
                                                        greet.call(user.mother)

call() is a property on EVERY FUNCTION and the first arguement you pass to it will be the context (or the focal point) in which the function is invoked. In other words, the first arguement you pass to call will be, what the "this" keyword inside the function would/should refer to .


This is the foundation of rule #2 (EXPLICIT BINDING) because we're explicitely (using .call) specifying what the "this" keyword is referencing.


// !                         apply()

Now lets modify our "greet" function just a little bit. What if we also wanted to pass in some arguements? Say along with thier name, we also wanted to output what languages they know. Something like this:

function greet(l1,l2,l3){
    console.log(`Hello, my Name is ${this.name} and I know ${l1}, ${l2} and ${l3} .`)
};

user={
    name:"Kunal",
    age:"38"
};

languages=["Javascript","Python","PHP"];

// **** Now to pass arguements to a function being invoked with .call(), you pass them in one by one after you specify the FIRST arguement which is the "CONTEXT"

// *** Either we can do it like this using call() i.e. passing them one by one after the first arguement which is the context
greet.call(user,languages[0],languages[1],languages[2])


// *** OR by using apply():
greet.apply(user,languages)

// *** The above method apply() saves you the trouble of passing arguement one by one from the single array, but rather allows you to pass the whole single array as second arguement and javascript would spread those out for us. NOTE that the first arguement still is the CONTEXT.

// *** Thus, Explicit binding allows us to use both .call as well as .apply which both allow you to invole a function, specifying what the "this" keyword is goigng to be referencing inside of that function.


// !                        bind()


The last part of this rule(Explicit binding) is the .bind

.bind() is exactly same as .call() but INSTEAD of immidiately invoking the function, it'll return a new function that you can invoke at a later time. SO if we look at the same e.g. we've been analysing:

   
function greet(l1,l2,l3){
    console.log(`Hi, My name is ${this.name} and I know ${l1}, ${l2}, ${l3}`)
}

user = {
    name:"Kunal",
    age:"38"
}

languages = ["JavaScript","Python","PHP"]

let LateCall =  greet.call(user,languages[0],languages[1],languages[2])    : will still run the function immidiately


let laterCall = greet.bind(user)    : will store the functionality and run the function when its called 

// laterCall()



// ! 3)   new Binding:

// **** The third rule for figuring out what the "this" keyword is referencing is called the "new" Binding.
// **** as we know, whenevr we invoke a function(or a constructor) with the "new" keyword, the javascript instantiates a new Object, which can then be reached out through the keyword "this". 
// **** Thus when a new object is instantiated through the keyword "new", the keyword "this" refers to that new object itself

let User = function(nme,age){
this.Name = nme;
this.Age = age
}

let user = new User("Kunal","38")



// !    4)  Lexical Binding: only applicable with arrow aka fat arrow function: to be analysed later

// !    5)  window Binding: If a stand alone function gets called without any context (Object), then the "this" there refers to the window Object.




// !    Thus...GOLDEN RULE in summary:

// !    1.  Look to where the function was invoked.
// !    2.  Is there an object to the left of the dot? If so, that’s what the “this” keyword is referencing. If not, continue to #3.
// !    3.  Was the function invoked with “call”, “apply”, or “bind”? If so, it’ll explicitly state what the “this” keyword is referencing. If not, continue to #4.
// !    4.  Was the function invoked using the “new” keyword? If so, the “this” keyword is referencing the newly created object that was made by the JavaScript interpreter. If not, continue to #5.
// !    5.  Is “this” inside of an arrow function? If so, its reference may be found lexically in the enclosing (parent) scope. If not, continue to #6.
// !    6.  Are you in “strict mode”? If yes, the “this” keyword is undefined. If not, continue to #7.
// !    7.  JavaScript is weird. “this” is referencing the “window” object.








