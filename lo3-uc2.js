// Break & Continue
for (i = 0; i < 10; i++){

    if(i === 5 || i === 3){
        continue;
    }
    console.log(i);

    if(i === 7){
        break;
    }
}
console.log('I have broken out of the loop');

// Loops Practical Example
var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){
    
    links[i].className = "link-" + i;
}

// Function

function getAverage (a,b){
    var average = (a + b) / 2;
    return average;
    console.log(average);
}
var myResult = getAverage(7,12);
console.log ("Your Average is " + myResult);

// Variable Scope
function getAverage (a,b){ 
    var average = (a + b) / 2; //Local Variable
    return average;
    console.log(average);
}
var myResult = getAverage(7,12); //Global Variable

function logResult(){
    console.log ("Your Average is " + myResult + " inside the function");
}
logResult();

// Working with numnbers

var a = 5;
var b = 5;

console.log(a + b);

var c = "5";
var d = 5;

console.log(c + d);
console.log(typeof (c + d));

console.log(Math.round(7.8));
console.log(Math.floor(7.9));
console.log(Math.ceil(7.2));
console.log(Math.max(7,5, 6, 9));
console.log(Math.PI);

// NaN

var e = "7";
var f = 5;

console.log(e * f);


var g = "5";
var h = 5;

if (isNaN(g)){
    console.log("That int even a number, thickie");
} else {
    console.log("Meaning of life is " + (g * h));
}

// Double Negative
var i = "hello";
var m = 5;

if (!isNaN(i)){

    console.log("Meaning of life is " + (i * m));
} else{
    console.log("That int even a number, thickie");

}

// String

var myString = 'I\'m "using" string javascript';
console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));

if (myString.indexOf("javascript") === -1){

    console.log("The word javascript is not in the string");
} else {
    console.log("The word javascript is in the string " + myString.indexOf("javascript"));

}

var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2);
console.log(string1.toLowerCase === string2.toLowerCase);
console.log(string1 < string2);

// Splitting & Slicing String

var str = "Hello, World";
var str2 = str.slice(2,9);
console.log(str2);
var str3 = str.slice(2);
console.log(str3);
var tags = "cornbeef, san marino, meet loaf, tuna";
console.log(tags);

var tagsArray = tags.split(",");
console.log(tagsArray);

//ARRAYS

var myArray = [];
myArray[0] = 25;
myArray[1] = 35;
myArray[2] = true;
myArray[3] = "hello";
console.log(myArray);

var myArray1 = [15,25,"cute",true];
console.log(myArray1);

console.log(myArray1.length);
console.log(myArray1.sort());
console.log(myArray1.reverse());