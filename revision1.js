console.log("Hello World");
console.log("JavaScript revision");
let a=10;
let b=5;
console.log("sum is:",a+b);
let pencilPrice=10;
let erasorPrice=5;
console.log("THe total price is:",pencilPrice+erasorPrice,"Rupees.");
let output="The total price is:"+(pencilPrice+erasorPrice)+"Rupees.";
console.log(output);
console.log(`THe total price is: ${pencilPrice+erasorPrice} Rupees.`);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(++a);
console.log(a++);
console.log(a--);
console.log(--a);

let c=10;
let d=5;
d=c;
console.log(d);

let age=16;
console.log(age>18);
console.log(age<18);
console.log(age==18);
console.log(age>=18);
console.log(age<=18);
console.log(age!=18);

console.log("before my if statement");
let age2=23;
if(age2>=18){
    console.log("you can vote");
}
console.log("after my if statement");

console.log("before my if statement");
let age3=14;
if(age3>=18){
    console.log("you can vote");
}
console.log("after my if statement");

let firstname="salony";
if(firstname="salony"){
    console.log(`welcome ${firstname}`);
}

// traffic light question 
let color="red";
if(color==="red"){
    console.log("stop!");
}
else if(color==="yellow"){
    console.log("slow down");
}
else if(color==="green"){
    console.log("go");
}
else {
    console.log("traffic light is broken");
}


// if, else if
let age4=14;
if(age>=18){
    console.log("you can vote .")
}
else if(age<18){
    console.log("you cannot vote");
}


let marks=75;
if(marks>=90){
    console.log("A+");
}
else if(marks>=80){
    console.log("A");
}
else if(marks>=70){
    console.log("B");
}
else if(marks>=60){
    console.log("C");
}
else if(marks>=50){
    console.log("D");
}
else if(marks>=40){
    console.log("E");
}
else if(marks<33){
    console.log("F");
}

// if ,else if ,else
let size="S";
if(size==="XL"){
    console.log("price is Rs.250");
}
else if(size==="L"){
    console.log("price is Rs.200");
}
else if(size==="M"){
    console.log("price is Rs.100");
}
else {
    console.log("price is Rs.50");
}

// NESTED IF-Else 
let marks1=99;
if(marks1>=33){
    console.log("pass");
    if(marks1>=80){
        console.log("Grade: O");
        // o=outstanding

    }
    else{
        console.log("Grade:A");
    }
} else{
    console.log("Better luck next time!");
}

let string="apple";
if(string[0]=='a' && string.length>3){
    console.log("given string is a good string.");
}
else{
    console.log("given string is not a good string .");
}

//Switch Statement
let day=9;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");    
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:    
        console.log("Thursday");
        break;
    case 5:    
        console.log("Friday");    
        break;
    case 6:    
        console.log("Saturday");
        break;
    case 7:    
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Day!");    
} 

// alert 
alert("this is a simple alert");
console.log("this is a simple log");
console.error("this ia a simple error");
console.warn("this is a warning msg")


// prompt
let firstName=prompt("enter first name");
let lastName=prompt("enter last name");
console.log("Welcome"," ",firstname," ",lastName,"!");

// string methods 
// str.trim()
let password=prompt("set your password");
console.log(password.trim());
// str.toUpperCase()
// str.toLowerCase()
let msg1="tina";

console.log(msg1.toLowerCase());
console.log(msg1.toUpperCase());

// indexof
let str="ILoveCoding";
console.log(str.indexOf("Love"));
console.log(str.indexOf("J"));
console.log(str.indexOf("o"));

// method chaining 
let msg2="   Hello    ";
let newMsg=msg2.trim();
console.log(newMsg);
newMsg=newMsg.toUpperCase();
console.log(newMsg);

let msg3="    hie    ";
let newMsg1=msg3.trim().toUpperCase();
console.log(newMsg1);

let msg4="help!";
console.log(msg4.trim().toUpperCase());


// slice 
let str1="ILoveCoding";
console.log(str1.slice(5));
console.log(str1.slice(1,4));
console.log(str1.slice(-1));
console.log(str1.slice(length-1));
console.log(str1.slice(4).replace('C','t'));

// replace
let str2="ILoveCoding";
console.log(str2.replace("Love","do"));
console.log(str2.replace("o","x"));

// repeat
let str3="Mango";
console.log(str3.repeat(3));

// assignment que
let num=3;
if(num%10===0){
    console.log("given number is good");
}
else {
    console.log("given number is bad");
}
