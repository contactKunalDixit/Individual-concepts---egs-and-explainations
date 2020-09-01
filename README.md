# Individual-concepts---egs-and-explainations

<!-- Classes Vs Prototypes -->

1.  If you create multiple objects from a function constructor, each instance will designate memory for the attributes and methods. Instead of recreating the same method for every instance, all instances can access and use the same method through the prototype object. All instances can connect through thier prototype constructor through the object  "__proto__". Thus, this reduces the memory space for methods from n number of instances to 1(the 1 residing in prototype).
2.  classes is a more refined version or simply a syntactic sugar that masks the prototypes 

3.  DRY coding: DRY Coding: dont repeat yourself. If the need is to have multiple objects using the same methods and properties.

4.  Inheritance in ES5 : refers to prototypal inheritance through Object.create() or Object.setPrototypeOf(newConstructor, ParentConstructor.prototype)
    
    Inheritance in ES6 : refers to sub classes inheriting from parent classes through extend()



<!-- Call(); apply(); bind() -->







<!-- "This" Keyword -->









<!-- ASYNCHRONOUS PROGRAMING -->

Methods and properties used:

let xhr = new XMLHttpRequest() : Instantiates the xhr object
xhr.open("get","url",true) : opens a request
xhr.onprogress(): for loaders and spinners (optional)
xhr.onload() : stating what should JS do when the response is recieved from servers
xhr.responseText: gets you the response of your request
xhr.onerror()
xhr.send() : Initiates the request



NOTE: You can do a validation check through online resources like JSON validator
