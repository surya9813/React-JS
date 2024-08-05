

// let email = "suryanarayan123@gmail.com";
// let password = "999999999";

// if(email === "suryanarayan123@gmail.com" && password === "9999999998"){
//     console.log("Login successfully");
// }else{
//     console.log("Login unsuccessfully");
// }

// SEE result check

// let grade = 85;

// if(grade >=90){
//     console.log("Grade:A+")
// }else if(grade >=80){
//     console.log("Grade:A")
// }else if(grade >=70){
//     console.log("Grade:B+")
// }else if(grade >=60){
//     console.log("Grade:B")
// }else if(grade >=50){
//     console.log("Grade:C+")
// }else if(grade >=40){
//     console.log("Grade:C")
// }else{
//     console.log("Failed")
// }


// Weather

// let weather = "rainy";
// if(weather === "sunny"){
//     console.log("Today is a sunny day");
// }else if(weather === "winter"){
//     console.log("Today is a winter day");
// }else if(weather === "cloudy"){
//     console.log("Today is a cloudy day");
// }else if(weather === "rainy"){
//     console.log("Today is a rainy day");
// }else{
//     console.log("Invalid Weather");
// }



//Switch

// let role = "super admin";
// switch (role) {
//     case "buyer":
//         console.log("You can only buy product");
//         break;
//     case "seller":
//         console.log("You can only sell product");
//         break;
//     case "admin":
//         console.log("You can only add product");
//         break;
//     case "super admin":
//         console.log("You can acess everythings");
//         break;
//     default:
//         console.log("Invalid Role");
// }





// let  date = new Date().getDay;
// console.log(date);

// let  date = new Date()
// console.log(date);


// switch(date){
//     case "0":
//         console.log("Today is sunday");
//         break;
//     case "1":
//         console.log("Today is monday");
//         break;
//     case "2":
//         console.log("Today is tuesday");
//         break;
//     case "3":
//         console.log("Today is wednesday");
//         break;  
//     default:
//          console.log("Invalid Role");  
// }


//status

// let status = 200;
// switch (status) {
//     case "201":
//         console.log("created");
//         break;
//     case "400":
//         console.log("bad request");
//         break;
//     case "401":
//         console.log("UnAuthorized");
//         break;
//     case "403":
//         console.log("ForBidden");
//         break;
//     // case "501":
//     //     console.log("UnAuthorized");
//     //     break;
//     // case "403":
//     //     console.log("ForBidden");
//     //     break;
//     default:
//         console.log("Invalid Role");
// }





// loop
// For Loop

// for(let i=0 ; i<=10; i++){
//     console.log("I love javascript" + i);
// }


// for(let i=1 ; i<=10; i++){
//     console.log(`2*${i} = ${2*i}`);
// }


// for(let i=0 ; i<=20; i++){
//     if(i%2 == 0){
//         console.log(`The even  Number are:${i} `);
//     }
    
// }

// for(let i=0 ; i<=20; i++){
//     if(i%2!== 0){
//         console.log(`The odd  Number are:${i}`);
//     }
    
// }


// const arr = [3,4,5,6,7]
// let sum = 0;
// for(let i=0 ; i<arr.length;i++){
//     sum += arr[i];
// }




// while loop


// let i=0 ;
// while (i<=10){
//     console.log(i);
//     i++;
// }



// Do While


// let i=0;
// do{
//     console.log("I love js");
//     i++;
// }while(i<=10);




// const arr = [4,5,6,7,8,9];
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);





//  Array

// let rom = [2,4,5,6,7,"Apple","Banana"];  //Data Structure
// console.log(rom[3]);
// console.log(rom[6]);


// const arr = [2,3,45,6,778,34,3,5,6];


// indexof
//  let outpute = arr.indexOf(3);
// console.log(outpute);

//Last indexof
// let outputee = arr.lastIndexOfindexOf(3);
// console.log(outputee);

//splice
// arr.splice(1,3);
// console.log(arr);

//slice

// let resulte = arr.slice(1,4);
// console.log(arr);



// // Length
// console.log(arr.length);

// //Push
// let result = arr.push(12);
// console.log(arr);

// //pop



// //Shift
// arr.shift();
// console.log(arr);


// //UnShift
// arr.unshift();
// console.log(arr);


// Includes
// let result = arr.includes(4);
// console.log(result);

// PUSH RA Join

// const output = ["A","B","C","D"];
// console.log(output.joint(""));

// const outputs = ["hellos","world","Javascript","is","Fun"];
// console.log(outputs.joint(""));



// let arrr = [];
// let sum = 0;

// for(let i=1;i<=10;i++){
//     arr.push(i);
// }

// for(let i = 1; i<arrr.length;i++){
//     sum+=arr[i];
// }
// let result = sum*2;

// console.log(`The sum of arrr is : ${sum}`);
// console.log(`The multiply of  sum is : ${result}`);



// Object in Js 
// note oblect may be function or method

// const person = {

//     // (Properties): =(Value),
//     name: "john Doe",
//     age: 24,
//     occupation:"agriculture",
//     education:"Bsc hons",
//     ismarried:false,
//     address: {
//         street:"Dillibazzar",
//         city:"KTM",
//         country:"Nepal",
//     },

//     greet:function(){
//         console.log(`hello my name is:${this.name}.And I am ${this.age}`)
//     },
// };
// const{
//     name,age,education,occupation,ismarried,address:{street,city,country},
// } = person;
// console.log(name,age,education,occuption,ismarried,street,person.greet();)
// //  console.log(person.address.country);
//  person.greet();



// Function

// function myfun(){
//     console.log("hello function");
// }
// myfun();

// function myfun(a,b){
//     return a+b;
// }
// let rom = myfun(8,9);
// console.log(`the sum of two number is : ${rom}`);

// function myfun(radius){
//     return Math.PI*radius*radius;
// }
// let anss = myfun(5);
// console.log(`The area of circle is : ${anss}`);


// // Calculator
// function CalculateTotal(cartItems,){
// let total = 0;
// for(let i = 0;i<cartItems.length;i++){
//     total+= cartItems[i].price*cartItems[i].quantity;
// }

// total+= total*taxRate;
// return total
// }

// let cart = [
//     {name:"Dr.martin",price:8000,quantity:1},
//     {name:"Dr.Drunk",price:4000,quantity:12}
// ];

// const result = CalculateTotal(cart,0.02);
// console.log(`You fill and final payment is:${result}`);




// function myfun(){
//     let a = prompt("Enter first number?");
//     let b = prompt("Enter second number?");
//     let result = Number(a) + Number(b);
//     if(result){
//         alert(`The sum of two number is :${result}`);
//     }

// }
// myfun();


// Scoping

// three type of scope
// Globel scop
// function scop
// block scop


// Globel Scope

// var x = 90;
// let y = 90;
// const z = 90;

// function myfun(){
//     console.log(x,y,z);
// }
// myfun();

// Function Scope



// function myfun(){

//     if(true){
// var x = 90;
// let y = 90;
// const z = 90;
//     console.log(x,y,z);
//     }
// }
// myfun();




// DOM(Document Object Model)

// let result = document.getElementById("hello");
// result.innerText = "I have many Proof ";
// result.style.backgroundColor = "Red";
// result.style.color = "white";
// output.style.textAlign = "center";
// // console.log(result);


// let output = document.getElementsByClassName("myclass")[0];
// output.innerText = "I have many Proof of my stament releted";
// output.style.backgroundColor = "Blue";
// output.style.color = "white";
// output.style.textAlign = "center";

// let rom = document.getElementsByClassName("myclass")[0];
// rom[1].innerText = "I have many Proof of my stament releted";
// rom[1].style.backgroundColor = "Blue";
// rom[1].style.color = "white";
// rom[1].style.textAlign = "center";

// let rom = document.getElementsByClassName("myclass")[1];
// rom[1].innerText = "I have many Proof of my stament releted";
// rom[1].style.backgroundColor = "Blue";
// rom[1].style.color = "white";
// rom[1].style.textAlign = "center";

// let room = document.getElementsByTagName("span");
// room[1].innerText = "I have many Proof of my stament releted";
// room[1].style.backgroundColor = "Blue";
// room[1].style.color = "white";
// room[1].style.textAlign = "center";


// let z = Document.getElementByName("email");
// z.style.backgroundColor = "blue";
// z.style.color = "white";
// z.style.padding = "2vmax 4vmax";
// v.style.cursor = "pointer";
// z.style.border = "none";

// console.log(z);


// // Querry Selector

// let y = document.querySelector("#btnAdd");
// y.style.backgroundColor = "blue";
// y.style.color = "white";
// y.style.padding = "2vmax 4vmax";
// y.style.cursor = "pointer";
// y.style.border = "none";
// console.log(y);


// let display = document.createElement("h1");
// display.innerText = "This is a new element";
// document.body.prepend(



// let btn = document.querySelectorAll("button");
// // console.log(btn);
// btn[0].innerText = "HeyBtn";
// btn[0].style.color = "";white
// btn[0].style.padding = "2vmax 4vmax";
// btn[0].style.border = "none";



// let output = document.querySelectorAll("button");
// // console.log(btn);
// output[1].innerText = "HeyBtn";
// output[1].style.color = "";white
// output[1].style.padding = "2vmax 4vmax";
// output[1].style.border = "none";


// function myFun(name){
//     console.log(`Hello my name is : ${name}. and i am ${age} year old`)
// }
// myFun("Ram Shah",12);


// const meroFunc = (name,age) =>{
//     console.log(`Hello my name is : ${name}. and i am ${age} year old`)
// }
// meroFun("Ram Shah",12);


// Advance Arry Method most important topic

// let arr = [4,5,6,7,8,93,1,2];
// //find
// // const myFunc = (value , ) =>{
// //     return value >6;

// // };
// // let output =newArry.find(myFunc)


// let output = newArr.find((value,index) => value>6);
// console.log(output);

// const products = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let ans = products.find((value,index)=>value.inStock);
// console.log(ans);


// let arr = [4,5,6,7,8,9,3,1,2];
// //filter
// // const myFunc = (value , ) =>{
// //     return value >6;

// // };
// // let output =newArry.find(myFunc)


// let output = newArr.filter((value,index) => value>6);
// console.log(output);

// const products = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let ans = products.filter((value,index)=>value.inStock);
// console.log(ans);


// let arr = [4,5,6,7,8,9,3,1,2];
// //some
// // const myFunc = (value , ) =>{
// //     return value >6;

// // };
// // let output =newArry.find(myFunc)


// let outputt = newArr.some((value,index) => value>6);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.some((value,index)=>value.inStock);
// console.log(anss);

// let arr = [4,5,6,7,8,9,3,1,2];
// //every
// // const myFunc = (value , ) =>{
// //     return value >6;

// // };
// // let output =newArry.find(myFunc)


// let outputt = newArr.every((value,index) => value>6);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.every((value,index)=>value.inStock);
// console.log(anss);



// //forEach .. it doesnt return the arry
// let arr = [4,5,6,7,8,9,3,1,2];
// //forEach
// // const myFunc = (value , ) =>{
// //     return value >6;

// // };
// // let output =newArry.find(myFunc)


// let outputt = newArr.forEach((value,index) => value*2);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.forEach((value,index)=>value.name);
// console.log(anss);


// let arr = [4,5,6,7,8,9,3,1,2];

//map    ... array of an map  important topic
// const myFunc = (value , ) =>{
//     return value >6;

// };
// let output =newArry.find(myFunc)


// let outputt = newArr.map((value,index) => value*2);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.map((value,index)=>value.name);
// let display = document.createElement("h2");
// display.innerText = anss;
// document.body.prepend(display);
// // console.log(anss);



// // Reduce
// let outputt = newArr.reduce((accum , curValue) => accum + curValue);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.reduce((total, curValue)=>total + curValue.price,0);

// // let display = document.createElement("h2");
// // display.innerText = anss;
// // document.body.prepend(display);
// console.log(anss);


// // Reduce
// let outputt = newArr.reduce((accum , curValue) => accum + curValue);
// console.log(outputt);

// const productss = [
//     {id:1, name:"Dr.Martin", price:800, inStock:true},
//     {id:2, name:"Dr.Sp Dunk", price:800, inStock:false},
//     {id:3, name:"Dr.Manoj", price:800, inStock:true},
//     {id:4, name:"Dr.tin", price:800, inStock:true},
// ];

// let anss = productss.reduce((total, curValue)=>total + curValue.price);

// // let display = document.createElement("h2");
// // display.innerText = anss;
// // document.body.prepend(display);
// console.log(anss);


// Event Listner In Javascript

// let heading = document.getElementById("heading");
// let box1 = document.getElementById("box1");
// let btnClick = document.getElementById("btnClick");

// // btnClick.addEventListener("click",function()){
// //     console.log("Clicked");
// // }
// btnClick.addEventListener("click", () =>{
//     console.log("Clicked");
//     btnClick.style.color = "white";
//     btnClick.style.border = "none";
    

// });
// btnClick.addEventListener("click", () =>{
//     console.log("Clicked");
//     box1.classList.add("classBox");
    

// });

// btnClick.addEventListener("mouseover", () =>{
//     btnClick.style.transform = "scale(1.1)";
//     heading.innerText = "hvfasdbehb bfashgejfnhj";
//     heading.style.backgroundColor = "aqua";
//     heading.style.color = "grey";
    

// });

// window.addEventListener("contextmenu", (e) =>{
//     e.preventDefault();

    

// });

// btnClick.addEventListener("dbclick", () =>{
   
    

// });

// addEventListener("click",(e) =>{

//     console.log(e.clientX);
//     console.log(e.clientY);
// });


// let input = document.querySelector("input");

// input.addEventListener("change",() =>{
//     console.log(e);
//     console.log(e.target.value);
//     console.log("changing");
// });


//Onclick onchange onsubmit event must know.


// Math Object
// we have to learn some method in math object.

// let num = 4.7;
// let ans = Math.round(num);
// console.log(ans);

// let output = Math.random();
// console.log(output);


// let num = 9;
// let result = Math.sqrt(num);
// console.log(result);


// let base = 2;
// let extonent = 3;
// let output = Math.pow(base,extonent);
// console.log(output);


// function Subtract(a,b){
//     let result = a-b;
//     return Math.abs(result);
// }

// let output = Subtract(2,5);
// console.log(output);


// function GenerateOTP(){
//     let otp = Math.floor(10000+Math.random() * 90000);
//     return otp;
// }

// let ans = GenerateOTP();
// console.log(ans);



// let now = new Date().getFullYear();
// console.log(now);

// let noww = new Date().getMonth();
// console.log(noww);



//Set timeOut and  SetTimeInterval

// const myFun = ()=>{
//     console.log("I love JS");
// };

// // setTimeout

// setTimeout(myFun,2000);
// const myFunn = (()=>{
//     console.log("I love JS");
// },2000);

// const intervalId = setInterval(() =>{
//     console.log("I love JS");
// },1000);

// setTimeout(() =>{
//     clearInterval(intervalId);

// },5000);



// Clock using clocksetout

// function UpdateClock(){
//     const clock = document.querySelector(".clock");
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2,"0");
//     const minutes = now.getMinutes().toString().padStart(2,"0");
//     const seconds = now.getSeconds().toString().padStart(2,"0");
// console.log("HELLO");
//     clock.innerHTML = `${hours}:${minutes}:${seconds}`;

// }
//  setInterval(UpdateClock, 1000);  



// OOP in js

// function Person(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.greeting = function(){
//         let greet =`Hello my name is ${this.name}. I am ${this.age} years old . and i am from ${this.address}`
//         return greet;
//     };

// }

// const person1 = new Person("Ram Thapa" ,23 , "Dillibazzar");
// const person2 = new Person("Ram Thapa" ,23 , "Dillibazzar");
// console.log(person1,person2);


// Bank Account(Function ko Object)

// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();

//     this.deposit = function (amount){
//         this.balance+= amount;
//     };

//     this.withdraw = function (amount){
//         this.balance-= amount;
//     };


// }

// const addForm = document.querySelector("#addForm");
// const customerName = document.querySelector("#customerName");
// const balance = document.querySelector("#balance");

// let account = [];
// addForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//      let account = new BankAccount(customerName.value,+balance.value);
//      accounts.push(account);
//      console.log(accounts);
// })

// const ramAccount = new BankAccount("Ram Thapa",1000);
// const shyamAccount = new BankAccount("Shyam Bhandari",8000);
// shyamAccount.deposit(4000);
// shyamAccount.withdraw(3000);






// Array Of An Object most important Topic


// document.write("Hello World");

// function Display(){
//     for(let i=0;i<100;i++){
//         document.write(i);
//     }
// }

// Display();

// setTimeout(() =>{
//     alert("I love js");
// },4000);


// document.write("Hey Khadaka");


// CallBack


// function Sum(a,b,cb){
//     const ans = a+b;
//     cb(ans);
// }

// function Display(result){
//     const h1 = document.createElement("h1");
//     h1.innerText = `The sum of Result is : ${result}`;
//     document.body.append(h1);
// }

// Sum(4,9,Display);
// Array.array.forEach(element => {
    
// });





// let arr = [4,5,6,7,89,0,2];

// function Calculate(arr = [],let cb{
//     let ans = [];
//     for(let i=0; i< arr.length; i++){
//         const element = cb(arr[i]);
//         ans.push(element);
//     }
// });




// Promices


// new Promise((resolve,rejected)=>{
//   resolve("Promices FullFill");
// });

// res.then((param) => console.log(param )).catch((error)=>)





