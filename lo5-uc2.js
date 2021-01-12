// Changing css style
var title = document.getElementById("page-title");
title.setAttribute("style", "position:relative;");
title.setAttribute("style", "left:10px;");
title.setAttribute("style", "position:relative;", "left:10px;");
title.style.left= "10px";
title.style.top= "10px";
title.style.color= "red";
title.style.backgroundColor= "black";

//Adding Elements to the DOM
var mar = document.createElement("li");
var newA = document.createElement("a");
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
menu.appendChild(mar);
menu.appendChild(newA);
newA.innerHTML= "Blog";
menu.insertBefore(mar, menu.getElementsByTagName("li")[0]);

//Removing Elements from the DOM
var parent = document.getElementById("main-nav").getElementsByTagName("ul"[0]);
var child = parent.getElementsByTagName("li"[0]);
parent.removeChild(child);
parent.appendChild(removed);

//Introduction in Javascript Events
alert("hey");
var title = document.getElementById("page-title");
title.onclick = function(){
    alert("You Clicked Me");
}
title.onmouseover = function(){
    alert("You Hovered your mouse over me");
}
addEventListener();

//The onClick Event
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML = "Show Less";
    }else{
        content.className = "open";
        button.innerHTML = "Show Less";
    }
}
//Window onLoad Event
function setUpEvents(){
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function(){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML = "Show Less";
    }else{
        content.className = "open";
        button.innerHTML = "Show Less";
    }
    };
}
window.onload = function(){
    setUpEvents();
};

//Javascript Timers

var colorChanger = document.getElementById("color-changer");
var color = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColor(){
    if (counter >= color.length){
        counter = 0;
    }

    colorChanger.style.background = color[counter];
    counter++;
}
    var myTimer = setInterval(changecolor, 3000);
    colorChanger.onclick = function(){
        clearInterval(myTimer);
        colorChanger.innerHTML = "time stopped";
    }
//  Accessing Form Elements

var myForm = document.forms.myForm;
console.log(myForm.name.value); 
console.log(myForm.color.value); 
console.log(myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid black";
    }
); 

//VERY Simple Form Validation

var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML = "Please Enter Name";
        return false;
    }   else {
        message.innerHTML = "";
        return true;
    }
}
// JavaScript Libraries

var myPara2 = $("content p:last-child");

myPara2.addClass("test");
myPara2.removeClass("test");
myPara2.fadeOut();
myPara2.fadeIn();
myPara2.css({position: "relative", color:"red"});
myPara2.animate({left:"50px"})