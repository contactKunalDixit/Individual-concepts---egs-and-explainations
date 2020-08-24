// YouTube - Steve Griffith 

/* JavaScript - Creating objects with Classes 
*   Creating objects with Classes VS creating objects through prototypes
*   Since Javascript is not a Class-based language
*   what is happening behind the class syntax ?


Javascript didnt organically had classes since its not a class based language but rather its a prototype based language. 
Prototype based language means that when you create an object, it automatically gets a prototype and if there's a property or a method that doesnt exist in the object, javascript will go in the protoype and look for that property or method
*/


//  ToDo  Case Observation: 
/*
 * ******  Creating a class and using "extend" function on a class to create another class. Extend only works within the classes.

 * ******  Creating objects through class constructors
*/


// Remember , a class is also primarily constructor function

// let PersonC = class{
//     constructor(nm,id){
//         this.name=nm;
//         this.id=id;
//     }
//     getDetails(){
//         return `Hi ${this.name}, your ID is ${this.id}`
//     }
// };

// let bob=new PersonC("Bob",123)

// // console.log(bob.getDetails(),",", bob.name)
// // console.log(PersonC.prototype)


// /*Creating a new class EmployeeC from an old class PersonC using extend */


// /*Extends make a connection between the 2 classes prototypes, so whatever is within PersonC can be inherited by EmployeeC. Eventually through this, the EmployeeC prototype links to PersonC prototype. 

// /* Super function works like call but only within the constructor of a class and no where else */
// let EmployeeC = class extends PersonC{  
// constructor(nm,id,salary){
//     super(nm,id);               
//     this.salary=salary;
// }
// // *    For any property and method, the javascript will search for it in EmployeeC, then if unable to find, will go to its prototype, then eventually will search for the same in prototype of PersonC and so on. That's how the chain works upwards

// employeeInfo(){         /*Exist on the prototype of EmployeeC */
//     return `Hi ${this.name}, your ID is ${this.id} and salary is ${this.salary}`
// }
// }

// // let Kunal = new EmployeeC("Kunal",123,850000)
// // console.log(Kunal.employeeInfo())
// // console.log(Kunal.getDetails())
// // console.log(bob.employeeInfo())



// // ? How to achieve the same with the plain old javascript i.e. NOT through classes but through Constructor functions

// //  ToDo  Case Observation: 
// /*
//  * ******  Creating a constructor function and using call, associsting prototypes through'.' and setProtoypeof() to extend it to another function. Extend only works within the class's contructor .

//  * ******  Creating objects through function constructors
// */

// let PersonP = function (nm,id){
    
//         this.name=nm;
//         this.id=id;
//     }

//     // storing a method "getDetails" in PersonP>prototype
//     PersonP.prototype.getDetails = function (){
//         return `Hi ${this.name}, your ID is ${this.id}`
//     }

//     let fred = new PersonP("fred",321)
//     // ? Whenever you are passing a keyword "new", the system considers as a request for a new instance for a counstructor that follows, in this case "PersonP".


//     console.log(fred)
//     console.log(fred.getDetails())


//     let EmployeeP = function(nm,id,salary){
//         PersonP.call(this,nm,id)
//         // ? through call(), we are borrowing methods and properties from constructor "PersonP" and using them in "EmployeeP"
//         // ! In Javascript, the method call() 1st parameter would always be "this" i.e. which object would you like to context to for calling the method call(). In this case it will be the object instance that will be created through EmployeeP which eventually shall also inherit the properties of name and id from the constructor "PersonP"
//         this.salary=salary /* The salary property is exclusively EmployeeP's property */
//     }

//     // * Extend alternative available within constructor functions
    
//     // * As seen above, Extend()can be used to connect 2 classes prototypes, a similar feat within function constructors can be achieved through Object.setPrototypeOf()

//     // Object.setPrototype(what is the object(on which the prototype be connected), what is the prototype)

//     Object.setPrototypeOf(EmployeeP,PersonP.prototype)  /*Extends alternative in constructor function*/

//     EmployeeP.prototype.employeeInfo=function(){
//         return `Hi ${this.name}, your ID is ${this.id} and salary is ${this.salary}`
//     }

//     console.log(typeof(PersonC))



    // ************************

    /* Fresh start */

    /* OPTION A: Prototype BASED APPROACH */

    // Step1: Making a constructor and adding a prototype
    let ManP = function(fname,lname,id){
        this.firstName = fname;
        this.lastName = lname;
        this.id = id;
    }



    //Step2  The above is just a function(constructor) and not an object so we'll have to add a prototype section and then further add a method

    ManP.prototype.getMessage = function(){
        return `Hi ${this.firstName}, your ID is ${this.id}`
    }



    

    

// Step 3: creating another constructor function by calling methods of another function: using resources of one function for another function through a method call()

let WomanP = function(firstName,lastName,id,age){
    ManP.call(this,firstName,lastName,id)
    this.age = age;
}

//  Step 4: Since WomanP is also a function(constructor), we need to create a prototype or in this case ,associate ManP constructor's methods to WomanP prototype.
// Object.create() creates a new object, using an existing object as the prototype of the new object. 

// alernative to this is: 
// Object.setPrototypeOf(WomanP, ManP.prototype)

WomanP.prototype = Object.create(ManP.prototype)

// Step5: Add a specific method exclusive to WomanP constructor prototype

WomanP.prototype.GreetWoman = function(){
    `This is a Woman specific message for the fellow Women`
}
let kunalManP = new ManP("Kunal","Dixit",123);
    let sonalWomanP= new WomanP("Sonal","Dixit","456",35)

    console.log(kunalManP)
    console.log(sonalWomanP)

// ****************
    /* OPTION B: CLASS BASED APPROACH */

    // create a class and then a sub class

    // step1: Create a class constructor

let ManC = class{
    constructor(firstName,lastName,id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    getMessage(){
        return `Hi ${this.firstName}, your ID is ${this.id}`
    }
}



// step 2: creating another class using an existing class through extend()
// super() keyword is used to access and call the parent class constructor
// For explaination of super(), refer prior comments up sections

let WomanC = class extends ManC{
    constructor(firstName,lastName,id,age){
    super(firstName,lastName,id);
    this.age =age
}
greetingWoman(){
    return `This is a woman specific message`
}

static addNos(x,y){
    return x+y
}
}
let kunalManC = new ManC("Kunal","Dixit",123)
let sonalWomanC = new WomanC("Sonal","Dixit",456,"35")

console.log(kunalManC)
console.log(sonalWomanC)
console.log(WomanC.addNos(4,7))





