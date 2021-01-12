// Introductio of Objects

var Car= [];
Car[0] = "BMW";
Car[1] = "180km/h";
Car[2] = "6th Stroke";
Car[3] = "Sport Fuel";
Car[4] = "$100,000";
console.log(Car.length);
console.log(Car.sort());
console.log(Car.toString());
console.log(Car.reverse());

// Creating Object

var myCar = new Object();
myCar.maxSpeed = 180;
myCar.driver = "Mark";
myCar.drive = function() {
    console.log("Now Driving");
}
myCar.drive();

var myCar2 = {
    maxSpeed : 180,
    driver : "Mark",
    drive : function(speed, time) {
    console.log(speed * time);},
    test1: function(){
        console.log(this);
    }
}
    
    console.log(myCar2.maxSpeed);
    myCar2.drive(180, .5);

// This Keyword

var myCar3 = {
    maxSpeed: 180,
    driver: "Mark",
    drive: function(speed, time) {
    console.log(speed * time);},
    test: function(){
        console.log(this);
    },
    logDriver: function(){
        console.log("Name of the driver is " + this.driver)},
    logSpeed: function(){
        console.log("Speed of the car is " + this.maxSpeed + " Km/h");
    }
}   
    console.log(myCar3.maxSpeed);
   
    myCar3.drive(180, .5);  
    myCar2.test1();
    myCar3.test();
    myCar3.logDriver();
    myCar3.logSpeed();

// Constructor Functions

var Car1 = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time)};
    this.logDriver = function(){
        console.log("Name of the driver is " + this.driver)};
    this.logSpeed = function(){
        console.log("Speed of the car is " + this.maxSpeed + " Km/h"
        )};
    }            
var myCar5 = new Car1 (160, "Markiee");
var myCar6 = new Car1 (160, "Anthony");
var myCar7 = new Car1 (160, "Mark");
var myCar8 = new Car1 (160, "Markiee");

myCar5.drive(30,5);
myCar5.logDriver();
myCar5.logSpeed();
myCar6.drive(30,5);
myCar6.logDriver();
myCar6.logSpeed();
myCar7.drive(30,5);
myCar7.logDriver();
myCar7.logSpeed();
myCar8.drive(30,5);
myCar8.logDriver();
myCar8.logSpeed();

//The Date Object
var myDate = new Date();
console.log(myDate);

var Birthday = new Date(2000, 10, 18, 11, 20, 35);
var Birthday1 = new Date(2000, 10, 18, 11, 20, 35);
console.log("My Birthday is " + Birthday);
console.log("The Date and time today is " + myDate);

console.log(Birthday.getMonth());
console.log(Birthday.getDate());
console.log(Birthday.getFullYear());
console.log(Birthday.getDay());
console.log(Birthday.getTime());

if (Birthday.getTime == Birthday1.getTime){
    console.log("Birthdays are equal");
} else {
    console.log("Birthdays are not equal");
}
0
//Traversing the DOM

console.log(document.getElementsByClassName("content"));
var myContent = document.getElementsByClassName("content");
var h2 = myContent[0].getElementsByTagName("h2");
console.log(document.getElementsByClassName("content"));
console.log(h2);
//h2[0].innerHTML = "UC2 LESSON 4 ASSIGNMENT  JAVA";
console.log(h2);
console.log(document.getElementById("page-title"));

//Changing Page Content

var myBody = document.getElementsByTagName("body");
console.log(myBody);
console.log(myBody[0].innerHTML);
myBody[0].innerHTML = "<h2>Hello World!</h2>";

//Changing Element Attributes

var link = document.getElementById("id_num");
console.log(link);  
link.getAttribute("class");
link.setAttribute("class", "col s12");
link.className;
link.className = "cute";
link.style