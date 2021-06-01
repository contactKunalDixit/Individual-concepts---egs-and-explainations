// * Arrow Functions aka Fat arrow Functions

/*
Benefits:   Less code and more neater
            Lexicale scope "this"


 */

//!  Function Expression - SINGLE parameters dont even need paranthesis() i.e. (msg) and msg works the same, but paranthesis are mandatory for multiple parameters (fName,lName). Thus, a good practice is to use them everytime

const sayHello = function (msg) {
    console.log(msg)
}
sayHello("Hello Hi")



//!  Arrow Function:

sayHello1 = (msg) => {
    console.log(msg)
}

sayHello("Hellloooo")


//! One line functions dont even need curly braces
// We can make the abve arrow function even more concise since it is just one action line: so we remove the curly braces. Curly braces are only needed as  awrapper cover to include multiple line of codes. if there's only one action item, then arrow functions can so it without the curly braces too.

sayHello2 = (msg) => console.log(msg)
sayHello2("jhakkad Pakku")

//! Fat arrow functions returns the function output as well WITHOUT the keyword "return"

sayHello3 = (msg) => msg; /* The arguement passed as a parameter is "returned" and the entire function can then be console.logged later as in next code*/

console.log(sayHello3("Hi"))


//! Return Object - NOTE: You could face issue while returning an object literal i.e.

const sayHelloObj = () => ({
    msg: "Hello"
})
console.log(sayHelloObj())

// *    If you dont wrap it within PARANTHESIS(), the javascript treats it as a function body instead of an object literal, and thus "returns" - "undefined" as the result - thus we need a braces wrapper around to specify to JS that this is an object literal (and NOT a function) and it works just fine.


//! Arrow functions with parameters

const sayHelloParam1 = (name) => console.log(name) /* Either we can console log it within the function and then just call the function to return the console log */
sayHelloParam1("Choobla")

const sayHelloParam2 = name => name; /* Or we can just pass on the paramater ...since fat arrow functions "returns" by default, eventually we can console log the entire function with the arguement value later as seen in the next code */
console.log(sayHelloParam2("choobla ka poopda"))


//!  Arrow functions can be used as CALLBACKS

const users = ["Kunal", "Sonal", "Amaira"]

// const nameLengths = users.map(function(name){
//     return name.length;
// })

// * SHORTER Ver */
const nameLengths = users.map((name)=>{return name.length})         
// 

//* SHORTEST Ver */                             /* Even the curly braces and return keyword gets taken away */
// const nameLengths = users.map((name)=>              
//       name.length);


console.log(nameLengths)