// var a ="majid";
// var b =2;
// document.write(a,b);



// var a =2;
// var b =3;
// console.log(a*b)

// var a =2;
// var b =3;
// alert(a+b)

// var a ="majid";
// var b ="shahid";
// // document.write(a,b)
// document.write(a+" "+b)


//NAN is called NOT A NUMBER

// var a=3;
// var b="majid"
// document.write(a*b)

// STRING OR INTERGER
//  var a ="I am srting " ;
//  document.write(a +"<br>");


//  var b = 3 

//  document.write("number is interger like b " + b )

// line breake 


// document.write("majid shahid"+"<br>" +"umar zahid");


// var num = 90;
// var popularNumber = num + 200;
// document.write(popularNumber)



// PER INCREMENT
// var  a =1;
// var b =++a;
// document.write(b)

// POST INCREMENT

// var a =10;
// var b = 1;
// var c = b + ++a 
// document.write(c)



// PER decrement

// var a =10;
// var b=--a;
// document.write(b)

// Post decrement

// var a =10;
// var b = 1;
// var c = b + --a 
// document.write(c)



// var a =10;
// var  b = ++a + ++a + a-- + a++ + --a;
// document.write(b)


//prompt
// for string 
// var a =prompt("enter your value")
// document.write(a)
//   for interger 
// var a =+prompt("enter your number");
// var b =+prompt("enter your second Number");
// document.write(a+b)


// if else statement

// var a =prompt("enter your name");
// if (a=="majid"){
//     alert("ok")
// }else{
//     alert("sorry")
// }



// var a =prompt("enter your number");     (== chack value)
// if (a==2){
//     document.write("ok")
// }else{
//     document.write("sorry")
// }

//  var a =+prompt("enter your number");  //( === is chack type and value)
// if (a===2){
//     document.write("ok")
// }else{
//     document.write("sorry")
// }



// var a =prompt("enter your name ");
// if (a== "majid"){
//     document.write("welcome  majid")
// }else if (a== "umar"){
//     document.write("welcome umar")
// }
// else{
//     document.write("sorry")
// }

//array

// var a =["majid","shahid","bilal","umar","chachu"];
// document.write(a[1])



//  ADDING AND DELETING ARRAY VALUE

// var name1=["majid","umar"];        // deleting value in last of array
// name1.pop();
// document.write(name1)                    


// var name1=["majid","shahid" ,"umar"];  // adding value in last of array
// name1.push("zahid");
// document.write(name1)
// deleting value in last of array;

//  var a =["majid","shahid"]  ;    // deleting value in start of array
//  a.shift();
//  document.write(a)


// var a =["majid","shahid"];         // adding value in start of array
// a.unshift("umar");
// document.write(a)




// slice copy index in one are and paste another array
// var a =["majid","shahid","umar"];
// var b =a.slice(0,2);
// document.write(b);


// splice  first value (starting number) second number (kha tk delet krna hai ) third ("jo b value dani hai ");


// var a =["majid ","umar ","bilal",];
// a.splice(1,0,"shahid")
// document.write(a)


//    for loop

//         var a=+prompt("enter your value");
//         var i;
//         for (i=1;i<=10;i++){
// document.write(  a +"x"+i+"=" + a*i +"<br>")
//         }

// for (var i=0;i<=2000;i++){
//     console.log(i)
// }


// var names=99;
// var num =7;
// if (names <=100&&num==3){
//     alert("Ok")
// }else{
//     alert("not")
// }


// to lower case

// var b = prompt("enter your name ");
// var a =b.toLowerCase();
// if (a=="majid"){
//     alert("majid is here")
// }else{
//     alert(a +" is not here")
// }

//    to UPPER CASE

// var a =prompt("enter your name")
// var b=a.toUpperCase();
// if (b == "UMAR"){
//     alert("umar is here")
// }else{
//     alert("enter name is not right")
// }



//  lenght of array

// var a =["majid","shahid","uamr","bilal"];
// var b = a.length;
// console.log(b)

//   length of string 

// var a = "majid";
// var b = a.length;
// console.log(b)

//  indexof of array


// var a = ["majid", "shahid", "umar", "bilal"];
// var b = a.indexOf("umar");
// console.log(b)

//  indexof of string

// var a = "majid";
// var b = a.indexOf("d");
// console.log(b)



// last indexof
            // last ma jo a hai wo konsa index pr hai wo pta krna hai 
// var a = "sadad";
// var   b =a.lastIndexOf("a");
// console.log(b)


// var a =["majid","shahid","uamr","majid","zahid","bilal"];
// var b  =a.lastIndexOf("majid");
// var c = a.indexOf("shahid");
// console.log(b,c)


// practice

// var city =["karachi","islamabad","lahore","peshawar"];
// var input =prompt("enter your city name ");
// input = input.toLowerCase();
// for (var  i=0;i<city.length;i++){
//     if (input ==  city [i]){
//         alert ("city is found")
//     }else {
//         alert ("city is not found")
//     }
  
// }
    //   replace 
    // first one word
// var a ="this is the world war 2";
// var b =a.replace("world","duniya")
// console.log(a);
// console.log(b)
    //    all word is this var
// var a = "this is the blue color and background color is also blue";
// var b = a.replace(/blue/g,"black")
// console.log(a)
// console.log(b)



    // MATH EXPRESION
            //  Math.round
    // var a =1.3;
    // var b =1.7;
    // var round =Math.round(a);
    // var round2 =Math.round(b);

    // console.log(round,round2)
                //  Math.cail   forword number lay ga
    //   var a = 5.1
    //   var ceil=Math.ceil(a);
    //   console.log(ceil)
                //  Math.floor   backword number lay ga 
// var a=5.9;
// var floor =Math.floor(a);
// console.log(floor)
        //   MATH RENDOM
        // var a= Math.random();
        // console.log(a)




    //   head tail Game


    // var player1=prompt("Enter your name ","HEAD");
    // var player2=prompt("Enter your name ","TAIL");
   
    // var a = Math.random();
    // var num =Math.ceil(a*2);
    // if (num ==1){
    //     document.write( player1+" is win")
    // }else {
    //     document.write(player2+" is win")
    // }
 
            

//  var new1 = new Date()
// console.log(new1)
//  var a = new1.splice(0,3)
//  console.log(a);


     // this function is used

    //  toDateString()
    //  getDate()
    //  getFullYear()
    //  getMonth()
    //  getDay()
    //  getHours()
    //  getMinutes()
    //  getSeconds()
    //  getMilliseconds()
    //  var a =setDate('apr 2,1900');
//        var b = a.getHours()
// console.log(b)
