//Q3 
"use strict";
let Person = function() {
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
}
    let Teacher = function() {
        this.teach = function(subject){
            console.log(this.name + " is now teaching " + subject);
        }
    }
    let Student = function() {
        this.learn = function(subject){
        console.log(this.name + " is now learning " + subject);
        }
    }
// TODO: create the class Teacher and a method teach

Teacher.prototype = new Person();
let him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

Student.prototype = new Person();
let her = new Student();
her.initialize("Getachew", 30);
her.learn("Inheritance");
