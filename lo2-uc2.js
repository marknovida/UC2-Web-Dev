// MATH OPERATOR SHORT HAND 
var myVar = 10;
myVar = myVar + 5;
console.log(myVar);

// Addition
var myVar1 = 15;
myVar1 += 10;
console.log(myVar1);

// Subraction
var myVar2 = 55;
myVar2 -= 55;

console.log(myVar2);

// Multiply
var myVar3 = 10;
myVar3 *= 15;

console.log(myVar3);

// Divide
var myVar4 = 110;
myVar4 /= 10;
console.log(myVar4);


var myVar5 = 50;
myVar5 %= 7.5;
console.log(myVar5);

var myVar6 = 3;
//myVar6++;
++myVar6;
console.log(myVar6);


var myName = 'Mark ';
document.write(myName);
console.log(myName);
document.write(20 + ' years old');
console.log(myName + 20 + ' years old');

//Boolean
var Meat = true;
console.log(Meat);
console.log(7 == 7);
console.log(7 == 5);
console.log(7 < 10);
console.log(7 > 10);
console.log(Boolean(5));
console.log(Boolean(-0));
console.log(Boolean(0));
console.log(Boolean(1<5));
console.log(Boolean("Hello World!"));
console.log(Boolean(""));

// If Statement

var youLikeMeat = true;

if (youLikeMeat) {

    document.write("<br> Here is the mealty menu....");

}
if (7 < 10) {
    document.write("<br>This Expression is True.")
}
else {
    document.write("<br>This Expression is False.")
}

var myNum = 10;

if (myNum > 1) {
    document.write("<br>My number is greater than 10.");
}
if (myNum == 4) {
    document.write("<br>My Number is equal 10.")
} else{
    document.write("<br> My number is not equal 10")
}

// ELSE IF STATEMENTS

var myAge = 20;

if (myAge > 30){
    document.write("<br>Your age is over 30!");
} else if (myAge > 20){
    document.write(" <br>Your age is over 20");
} else if (myAge > 10){
    document.write(" <br>Your age is over 10");
} else {
    document.write("Your Age isn't over 10!")
}

// Comparison Operators

var x = 5;
console.log(x <= 5);
console.log(x >= 10);
console.log(x == 5);
console.log(x === 4);
console.log(x != 5);
console.log(x != 3);

// Logical Operators

if (myAge >= 18 && myAge <= 30){
    document.write("<br>You can come, You cool Dude!");
} else{
    document.write("<br>You ain't coming");
}

if (myAge < 18 || myAge > 30){
    document.write("<br>You ain't coming");
} else {
    document.write("<br>You can come, You cool Dude!");
}

if (myAge < 18 || myAge > 30 || myAge === 20){
    document.write("<br>You ain't coming");
} else {
    document.write("<br>You can come, You cool Dude!");
}

// While Loops

var age = 5;

while(age < 10){
    console.log("Your age is less than 10");
    age++;
}
    document.write("<br>Youre now over 10!");

// For Loops

for (age = 5; age < 10; age++){
    console.log("Your age is less than 10");
}
    document.write("<br>Youre now over 10!");

var links = document.getElementsByTagName("a");
for (i = 1; i < links.length; i++){
    console.log("This is link number " + i);
}
    document.write("<br>The Links is now looped");  