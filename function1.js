console.log("JS");
// let userName = 'fahad';
// // let times = 4;

// function showMessage(){
//    let userName = 'nizami';
//     let Message = 'hello' + userName;
//     alert(Message);
// }

// alert(userName);
// showMessage();
// alert( userName );


// swapping
// let value1 = 'one';
// let var2 = 'two';

// console.log('before swap in var1 :', value1 );
// console.log('before swap in var2 :', var2 );

// // swapping value
// let tempVar = var1;
// var1 = var2;
// var2 = tempVar;  

// console.log('after swap in var1 :', var1 );
// console.log('after swap in var2 :', var2 );

// console.log('02-max-variable');      

// // 1.syntax long
// function floatMaxNumber(num1,num2)
// {
//  if( num1 > num2 ){
//     return num1
// }
// else{
//     return num2
// }
// //2. short syntax
// if(num1 > num2) return num1
// else return num2

// //3. ternary syntax
// return (num1 > num2) ? num1 : num2
// }

// let checkMax1 = floatMaxNumber(10,11);
// console.log('max number from long syntax:',checkMax1);

// let checkMax2 = floatMaxNumber(10,11);
// console.log('max number from short syntax:',checkMax2);


// let checkMax3 = floatMaxNumber(1,10);
// // console.log('max number from ternary syntax:',checkMax3);

// console.log('03-landscape-portrait')

// function islandScapePortrait(width,height){
//     //ternary short syntax
//     if(width > height)
//     {
//     return 'Landscape'
//     }
//     else
//     {
//         return 'Portrait'
//     }
    
// }

// let checkWidthHeight1 = islandScapePortrait(200,400);
// console.log('Landscape&Portrait', checkWidthHeight1);

// let checkWidthHeight2 = islandScapePortrait(400,300);
// console.log('Landscape&Portrait', checkWidthHeight2);

// let checkWidthHeight3 = islandScapePortrait(700,600);
// // console.log('Landscape&Portrait', checkWidthHeight3);
// .
// function isfizzBuzz(arg){

// if ( arg % 3 === 0 && arg % 5 === 0)
// return'fizzBuzz' 

// if( arg % 3 === 0)
// return'fizz' 

// if( arg % 5 === 0)
// return'Buzz'

// if(typeof(arg) != 'number')
//     return 'no. is invalid'

// else{return 'no. is invalid'}
// }

// let check1 = isfizzBuzz(9)
// console.log('Answer:' , check1)

// let check2 = isfizzBuzz(11)
// console.log('Answer:' , check2)

// function speedLimit(arg)
// {
//     if(arg < 70){
//         return 'Speedlimit is below 70'
//     }

    // if(arg > 70){
    //     let pPoints = 0;
    //     pPoints = (arg - 70) / 5;
    //     if (pPoints >= 10){
    //         return 'Licensed Cancel'
    //     }else{
    //         return 'Speed limit Crossed by Penalty Points' + pPoints;
    //     }
    // }
    // .extrabyme
    // if (arg > 70){
    //     let pPoint = 0;
    //     pPoint = (arg - 70 ) / 5;
    //     if (pPoint >= 10 ){        
    //         return 'license cancelled'
    //     }
    //     else {return 'penalty', + pPoint;
    // }
    // }
   
// }

// let checkSpeed1 = speedLimit(50)
// console.log('Speed:' , checkSpeed1)


// let checkSpeed2 = speedLimit(120)
// console.log('Speed:' , checkSpeed2)

// console.log ('odd-even-num-loop')
// let i=0;
// function isOddEven(curLimit){
//     if ( arg % 2===0 )
//     console.log('number is even')
//     else  { console.log( 'number is odd')}

//    for ( let i=0; i<= 10; i=i++){
//     console.log(i)
//    }
// }


// console.log('7-count-truthy-falsy-values')

// const valuesArray = [0, 1, '', null, undefined, false , true];

// let truthtyCount = 0;
// let falsyCount = 0 ;

// function CountTruthyFalsy(curArray){
//     for (let value of curArray){

//         if (value) {
//             truthtyCount++;
//         }else{
//             falsyCount++;
//         }
//     }
// }

// CountTruthyFalsy(valuesArray) // call
// console.log(truthtyCount);  // call
// console.log(falsyCount);  //call



// console.log('8-object-string-properties-key')

// function ShowStringProperties(curObj){
//     for (let key in curObj) {
//         if(typeof(curObj[key])=== 'string'){
//             console.log(key,':',curObj[key]);
//         }
//     }
// }

// const person = {
//     name: 'fahad',
//     age: 40,
//     height:'5.2',
//     country: 'india',
//     designation: 'UI Developer'
// }
// ShowStringProperties(person);


// console.log(9-sum-of-multiples) error*

// function SumOfMultiple(curLimit) { 
//     let SumOfMultiple = 0;
//     for (let i=0; i <= curLimit; i++){
    
//     if ( i % 3 === 0 || i % 5 === 0);{
//         console.log(i);
//     SumOfMultiple +=i;
// }

// }
// console.log(`SumOfMultiple of 3&5 upto  ${curLimit} :`,SumOfMultiple);
// }
// SumOfMultiple(10  );


//  9-print-*-

// function MultipleStar(argg){
//     for( i=0 ; i<= argg;i++){
//         // let row = 5 ;
//     let string1 = "";
//     for( j=0; j<i; j++){
//         string1 +='*';

//     }
//     string1 +='\n'
//     console.log(string1);
//     }
// }
// MultipleStar(5);



// function mulTipleVar(arg){
//     for ( i=0 ; i<=5     ; i++){
//         let  patt = " ";
//         for(j=0;j<i;j++)
//         // console.log(i);  
//         {
//            patt +='*';
//         }
//         patt +='\n'
//         console.log(patt);
//     }
// }
// mulTipleVar(5);

// JAVASCRIPT CAN CHANGE CSS AND HTML BY
// 1. INNERTEXT
// 2.INNER HTML
// 3.TEXT CONTENT


    // console.log(document.title);
    // console.log(document.URL);

// var changeText = document.getElementById('head')
// console.log('head')
// document.getElementById('head').textContent = "head";
// head.textContent='hell';
// var
// console.log(headerTile);
// headerTile.textContent = 's'

// var button = document.getElementById('button')
// console.log(button)

// function doAction (value){
//     console.getElementById('button').innerText="fahad";
// }


// var paragraph1 = document.querySelector('#paragraph');
// paragraph1
// .style.fontSize =  '200px';

// console.log(this); 
// 1.the javascript this keyword refers to the global object
// 2. it has different value depending on where it is used


// context
// var contextObj  = {
//     invokeThisObj(){
//         return this;
//     },
// };


// object in js is similar to a variable but having multiples values that values can be data(variable) or (function.)
// data member:



// var user = {
//     fName:"fahad",
//     lName: "nizami",
//     Role : "admin",
//     loginCount : 10 ,
//     isFblogin : true,
//     courseList : [],
//     buyCourse: function (courseName){
//         this.courseList.push(courseName);
//     },
//     getCourseCount: function(){
//         return `${this.fname} has enrolled for ${this.courseList.lenght}courses`
//     },

// };

// console.log(user.lname);


// promises 1.
// let myPromise = new Promise(function(resolve, reject) {
//     // "Producing Code" (May take some time)
    
//       setTimeout(()=> resolve("done"),1000);
//       setTimeout(()=> reject("sorry"),1000);
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       result => alert("resolved"),
//       error => alert(error)
//     );

// 2.
// const students = [
//   {name:"ajam" , subject:"javascript"},
//   {name:"nazam",sybject:"bootstrap"}
// ]

// function  enrollStudent(newstudent,callback){
//   setTimeout(funtion(){
//     students.push
//   }
//   )
// }

// youtub3

// let age = 17;
// let HasVoterCard = 'yes';
// if (age>=16 && HasVoterCard == 'yes'){
//     if (HasVoterCard != 'yes'){
//       alert('vote')
//     }
//     else{
//       alert('cant')
//     }
// }
//  else {
//     alert("You Can't Vote!")
// }


// if else
// let isDigit = 2;
// if (isDigit == 0){
//   document.write('true')
// } else if (isDigit == 2) {
// document.write("true1")
// }
// else {
//   document.write("false")
// }

// let input; 
// input = 1 ;

// if (input === 1){
//   document.write('continue....');
// } else if (input === 'yes'){
//   document.write('continue....');
// } else if (input === 'y'){
//   document.write('continue....')
// } else if (input === 2){
//   document.write('end...');
// } else if (input === 'no'){
//   document.write('end...');
// } else{
//   document.write('Wrong Input')
// } document   

// switch(input){
//   case 1: //if input === 1
//   document.write("continue....");
//   break;

//   case 2:
//     document.write("continue...");
//     break;

//   case 3:
//     document.write("continue....");
//     break;

//   case "yes":
//     document.write("discontinue");
//     break;

//   case "no":
//     document.write('discontinue....');
//     break;

//   default:
//     document.write('wrong input')

// }

// let counter = 1;              //while
// while(counter<=10){
//   document.write('fahad');
//   counter=counter-1;
// }
// document.write(         'fahad')



// let counter1 = 1;
// let sum = 0;   // logic isme yh hai ki koi bole ki 100 maise even numbers jodo jisme hoga yeh (2+4+6.....) odd number consider nhi karega
// while(counter1<=8){
//   if(counter1 % 2 == 0 ) {
//     sum = sum + counter1;
//   }
//   counter1++;
// }
// document.write(sum);

// let count = 1;
// let sum = 0;
// while(count <= 8) {
//     if(count % 2 == 0){
//          sum = sum + count ;
//     }
//     count++;
// }
// document.write(sum)

// let count = 0;
// let sum= 0;

// syntax
// do{
//  statement
// } while();

// do{                                             //do while
//     document.write('fahad_hacker');
//     count++;
// } while(count<=0);


// for(count=1;count<=10;count++){               //forloop
//     document.write('fahad ');
// }


// for(let counter = 1;counter<=10;counter++){                   //nested for loop
//     // if(counter == 5){
//     //     document.write('5');
//     //     break;
//     // } else if(counter == 1){
//     //     continue;
//     // } 
//     document.write(counter)
//     document.write('<br>')

//     for(let counter2=1;counter2<2;counter2++){             //1 nested loop

//         if(counter==3){
//             break;
//         }

//         document.write('Fahad');
//         document.write('<br>')
//     }

//     for(let counter3=1;counter3<2;counter3++){            //2 nested loop
//         document.write('A');
//         document.write('<br>')
//     }
// }


// 3 functions of popups

// 1.ALERT
// alert('hello')

// 2.PROMPT
// let age = prompt('enter age', 20);
// if(age != null){
//     document.write(`Your Age is ${age}`);
// }else{
//     document.write('Blank age');
// }


// 3. CONFIRM
// let age = confirm('-are you sure? you want to delete');
// if(age){
//     document.write('deleted');
// } else{
//     document.write('not deleted')
// }


// TYPE CONVERSIONS
// 1.String()
// 2.Number()
// 3.Boolean()

// 1.
// let c = 22;
// console.log(typeof c);
// let c2 = String(c);
// console.log(typeof c2);

// let c2 = 

// 2
// let check = "hello";
// document.write(typeof check);

// let check2 = Number(check);
// document.write(typeof check2);

// 3
// let check = 0;        //0 and "" ispe sirf false convert hoga baki sab true
// console.log(typeof check);
// let check1 =  Boolean(check);
// console.log(check1);
// console.log(typeof check1);


// let str1 = "This is a javascript Tutorial."             //string operations
// console.log(typeof str1)

// let str2 = str1.toLocaleUpperCase()
// let str3 = str1.replace("javascript","best")
// console.log(str3)

// ARRAY
// let arr1 = ["Maths", " Science","Geography","History"];
// document.write(typeof arr1 );  
// document.write('<br>')  

// arr1.shift();           // first element will be deleted
// arr1.pop();            // last elemnt will be deleted
// arr1.unshift()         // add a elemnt in start of array
// arr1.splice(2,2)          // selects elements with the range and also takes the folowing elements
// document.write(arr1);

// let arr2 = arr1.join('-');
// document.write(arr2 );        // for adding a - or anything between the elements


// let subjects = ["Maths", " Science","Geography","History"];
// let check = subjects.length
// console.log(check)                                                  // usind this ${} template literal for addings arrays
// let subject2 = ["algebra","biology"]
// console.log(`The subjects are ${subjects} and ${subject2}`)



// let array1 = [
//     ["fahad","muddasir"],                              //fetching elements from multiple arrays
//     ["muzzamil","ali"],
//     ["hasnain"]
// ]
// console.log(array1[1][1])
