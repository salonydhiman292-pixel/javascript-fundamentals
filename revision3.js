console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");

// this will come from fori
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

for(let i=0;i<6;i++){
    console.log("1");
    console.log(i);
} 
for(let i=10;i>=0;i--){
     console.log("1");
     console.log(i);
}
// print odd number (1 to 15)
for(let i=1;i<=15;i+=2){
    console.log(i);
}
for(let i=15;i>=0;i-=2){
    console.log(i);
}

// print even number(2 to 10)
for(let i=0;i<=10;i+=2){
    console.log(i);
}
for(let i=10;i>=0;i-=2){
    console.log(i);
}

// table of 5 
for(let i=0;i<=50;i+=5){
    console.log(i);
}

// table of n 
// let n=prompt("write your number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }

// Nested Loops
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

// while loop 
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// mini game of Favourite movie 
// const favMovie="avatar";
// let guess=prompt("guess my favourite movie");

// while((guess!=favMovie) && (guess!="quit")){
//     guess=prompt("wrong guess.please try again");

// }
// if(guess==favMovie){
//     console.log("CONGRATS!");
// }
// else{
//     console.log("you quit");
// }

// use of break
let k=0;
while(k<=5){
    if(k==3){
        break;
    }
    console.log(k);
    k++;
}


// const favMovie1="avatar";
// let guess1=prompt("guess my favourite movie");

// while((guess1!=favMovie1)){

// if(guess1=="quit"){
//     console.log("you quit");
//     break;
// }
//     guess1=prompt("wrong guess.please try again");

// }
// if(guess1==favMovie1){
//     console.log("CONGRATS!");
// }


// loops with arrays 
let fruits1=["mango","apple","banana","litchi","orange"];
for(let i=0;i<fruits1.length;i++){
    console.log(i,fruits1[i]);
}
for(let i=fruits1.length-1;i>=0;i--){
    console.log(i,fruits1[i]);
}

// Nested loops with Arrays
 let heroes1=[["ironman","spiderman","thor"],["superman","wonder women","flash"]];
 for(let i=0;i<heroes1.length;i++){
    console.log(`list #${i}`);
    for(let j=0;j<heroes1[i].length;j++){
       console.log(heroes1[i][j]);
    }
 }

//  for of loop
let fruits2=["mango","apple","banana","litchi","orange"];
for(fruit of fruits2){
    console.log(fruit);
}

for(let char of "ComputerSCienceEng"){
    console.log(char);
}

// nested for of loop
let heroes2=[["ironman","spiderman","thor"],["superman","wonder women","flash"]];
for(list of heroes2){
    for(hero of list){
        console.log(hero);
    }
}