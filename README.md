# Individual-concepts---egs-and-explainations



1.  If you create multiple objects from a function constructor, each instance will designate memory for the attributes and methods. Instead of recreating the same method for every instance, all instances can access and use the same method through the prototype object. All instances can connect through thier prototype constructor through the object  "__proto__". Thus, this reduces the space for methods from n number of instances to 1(the 1 residing in prototype).
2.  classes is a more refined version or simply a syntactic sugar that masks the prototypes