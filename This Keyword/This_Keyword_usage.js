/*

Q: What is "This" ?
This references the object that is executing the current function


*/

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
function Video(titleParameter){
    this.title=titleParameter;
    console.log(this);
}

const v = new Video("the concept video")

/*The moment we use a new operator, it instantiates (creates) an empty object for us i.e.{} and "this refers to the same {},

thats why when we do "this.title", its equalvalent of saying {}.title = titleParameter and JavaScript sets "title" as a key with its value as titleParameter*/

// todo: DEMO 4: further example of "this being used :
// todo:        within a object and 
// todo:        then as an arguement for a callback function(tag)within   forEach()"

const videoDemo4 = {
title:"a",
tags:["a","b","c"],
showTags:function(){
this.tags.forEach(function(tag){ /* this refers to the object"videoDemo4" because we are using it within the object method */
    console.log(this,tag) /* this refers to global object - "window" because it is being used within a callback function - "function(tag)" */
})
}


} 



// Todo DEMO 5: The below example is an extension of the above example - with arguement 'thisArg' for forEach()
const videoDemo5 = {
    title:"a",
    tags:["a","b","c"],
    showTags:function(){
    this.tags.forEach(function(tag){ /* this refers to the object"videoDemo4" because we are using it within the object method */
        console.log(this.title,tag) /* Since, there's an arguement that follows after the call back function in forEach(), thus "this" here refers to the arguement below */
    },this); /* "this" refers to the "thisArg" which refers to the object videoDemo4 itself, since it is being used in a method forEach which is directly a method of Object VideoDemo4  */
    }
    } 

videoDemo4.showTags()




// todo DEMO 6: in case when this is being used with event listeners

let myFunc = function(){
    console.log("1",this)
}


document.querySelector("#head3").addEventListener("mousedown",myFunc)
/*Since myFunc is being used as a callback function for the object selected through id "#head3", this here refers to that object */

/* NOTE - IMPORTANT POINT TO TAKE NOTE OF */

// when we are using simple regular functions, "This" points at who called the function, thus in above stated eg: DEMO 6, this refers to the object created by document.querySelector("#head3") when its called in the DOM and thus displays that too.


//   In more simpler terms, if an object is calling a regular function, then "this" refers to that object
    // If the object is calling a fat arrow function, then "this" refers to the global object

//  For specifically arrow Functions aka fat arrow functions:
// "This" refers to its PARENT and says where were you declared?
    //  you were declared in a global scope, so the global object is what I'll point at as well

    