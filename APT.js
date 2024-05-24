// var a = 12;
// var a = 13;
// var a = 14;            //variable can be re-decllared and can be updated
// console.log(a);

// let a1 = 12;
// a1 = 13;
// a1 = 14;              //variable can not be re-declared but can be updated
// console.log(a1);

// const abc = 12;       //variable can not be re-declared and updated
// console.log(abc);

// let a = null;         // null
// let b                 // undefined
// console.log(a);
// console.log(b);


                   // DATATYPES are of 7types . this are all preemptive data
            // let fullName = "fahad";        //string
            // let age = 19;                   //number
            // let petrolPrice = 106.87;
            // let isFollow = true;            //boolean         
            // let a = null;                // null
            // let b                        // undefined
            // let abc = BigInt("123") ;       //bigint
            // let xyz = Symbol('hello!')      //symbol

            // console.log(typeof(abc));
            // console.log(typeof(isFollow));

            // Non preemptive . it have only one datatype that is objects
            // const student = {
            //     fullName: "fahad",
            //     age : 19,
            //     isFollow: true,
            //     cgpa: 8.5,
            // }
            // console.log(typeof(student)); 

        
            // operators
            // 1. Arithematic
            // let a = 5;
            // let b = 2;

            // console.log("a =",a,"b =",b);
            // console.log("a + b =",a + b);
            // console.log("a - b =",a - b);
            // console.log("a * b =",a * b);
            // console.log("a / b =",a / b);
            // console.log("a % b =",a % b);            //modulus
            // console.log("a ** b =",a ** b);          //exponentiation

            // //Unary Operators
            // a++;                                   //increment one number
            // console.log(a);
            // b--;                                  //decrement one number
            // console.log(b);



            // 2.Assignment Operator
        //     let a = 5;
        //     let b = 4;

        //     console.log("a =",a,"b =",b);
        //     console.log("a += b =", a+=b);
        //     console.log("a -= b =", a-=b);
        //     console.log("a *= b =", a*=b);
        //     console.log("a /= b =", a /= b);
        //     console.log("a **= b =", a**=b);




           // 3.Comparison operator
        //    let a = "5";
        //    let b = 5;

        //    console.log("a == b is" ,a == b);
        //    console.log("a == b is" ,a != b);
        //    console.log("a == b is" ,a === b);
        //    console.log("a !== b is" ,a !== b);
        //    console.log("a < b is" ,a < b);
        //    console.log("a > b is" ,a > b);
        //    console.log("a >= b is" ,a >= b);




          // 4. Logical Operators
        // let a = 2;
        // let b = 2;

        // let cond1 = a == b;
        // let cond2 = b > a;
        // console.log("cond1 && cond2 =", cond1 && cond2);      // && logical AND
        // console.log("cond1 || cond2 =" , cond1 || cond2);     // || logical OR
        // console.log("!(a>b) =",!(a>b));                       // ! logical NOT . It returns the opposite answer




        // CONDITIONAL STATEMENTS
                // 1. if statement
                // let mode = "light";
                // if (mode === "dark") {
                //     color = "black"
                // }

                // if (mode === "light"){
                //     color = "white"
                // }
                // console.log(color);


                // 2. IF-ELSE
                // let age = 18;
                // if(age >= 21){
                //     console.log("You can enter the party!!");
                // } else {
                //     console.log("you can not enter");
                // }

        //Eg.2         // let isDigit = 12;
                // if (isDigit == 0){
                //   document.write('true')
                // } else if (isDigit == 2) {
                // document.write("true1")
                // }
                // else {
                //   document.write("false")
                // }


        //eg.3  
                // let num = 10;
                // if(num % 2 == 0){
                //     console.log(num , "num is even");
                // } else {
                //     console.log(num , "num is odd");
                // }



                // 3. else-if
                // let mode = "pink";

                // if(mode == "dark"){
                //     color = "black"
                // } else if (mode == "light"){
                //     color = "white"
                // } else {
                //     color = "pink"
                // }
                // console.log(color);


                // 4. ternary operator                      //a? "b":"c";  // b is always true and c is always false,

                // let age = 18;
                // let result =  age >= 18 ? "is adult" : "not adult";       // ? mark k baad jo is adult operand hai wo hamesha true rahega uske bad wala condition hamesha false rahge
                // console.log(result);




                // switch 


            // let number = 7;
            // switch(number){
            //     case 1:
            //     console.log("one");
            //     break;

            //     case 2:
            //     console.log("two");
            //     break;

            //     case 3:
            //     console.log("three");
            //     break;

            //     case 4:
            //     console.log("four");
            //     break;

            //     case 5:
            //     console.log("five");
            //     break;

            //     case 6:
            //     console.log("six");
            //     break;

            //     case 7:
            //     console.log("seven");
            //     break;

            //     default :
            //     console.log("wrong input");
            // }



        // practice question
        // 1.
        //    let mul = prompt("ENter a num");
        //    if(mul % 5 === 0){
        //         console.log("yes")
        //    } else {
        //     console.log("no")
        //    }
        // 2.

        // let score = prompt("Enter Your Score 0-100");

        // if(score>=0 && score<=49){
        //     console.log("Fail")
        // } else if (score>=50 && score<=59){
        //     console.log("Your Grade is E.Need to improve");
        // } else if (score>=60 && score<=69){
        //     console.log("Your Grade is D.Need to improve");
        // } else if (score>=70 && score<=79){
        //     console.log("Your Grade is C.Can be better");
        // } else if (score>=50 && score<=59){
        //     console.log("Your Grade is B.Good");
        // } else if (score>=90 && score<=99){
        //     console.log("Your Grade is A.Excellent");
        // }

        // 3.
        // let number = 11;
        // if(number % 2 == 0){
        //     console.log("the number is even" ,number);
        // } else {
        //     console.log("number is odd", number);
        // }



        // ep-3
        // LOOPS AND STRINGSS
        
        // for (let i = 1; i <=5 ; i++){             //for loop
        //     console.log("i =",i);
        // }

        // let i =1;                                //while
        // while(i<=10){
        //     console.log("fahad don",i);
        //     i++;
        // }

        // let i= 1;                                 //do while
        // do{
        //     console.log("fahad don", i);
        //     i++;
        // } while(i <=10);


        // let str = "Javascript";                     //for-of and for-in
        // let size = 0;
        // for(let value of str){
        //         console.log(value);
        //         size++;
        // }
        // console.log(size);



        // let student = {
        //         name : "Ravi",
        //         Age : 19,
        //         Cgpa : 7.5,
        //         isPass : true
        // };
        // for(let keys in student){
        //         console.log("keys =",keys, "and","values =", student[keys]);
        // }


        // practice 
        // let UserNumber = 25;                                 //by if else
        // let numberEntered = prompt("enter a number");
        // if(numberEntered == 25){
        //         console.log("Congratulation!!You ENtered The Correct Number");
        // } else {
        //         console.log("Enter Again");
        // }


        // let user = 25;                                        // while loop is used until we get the correct answer
        // let numberEntered = prompt("1-100");

        // while(numberEntered != user){
        //         numberEntered = prompt("Enter again");
        // }
        // console.log("Correct");



        // strings

        // let str = " Fahad Nizami ";
        // console.log(str.toUpperCase());

        // let str1 = "FAHAD NIZAMI";
        // console.log(str1.toLowerCase());

        // console.log(str.length);
        // console.log(str[1],str[2],str[3],str[4]);
        // console.log(str.trim());



        // template literals are specia typr of string and is used mostly for concat

        // let template = {
        //         name : 'Cello',
        //         price : 10
        // };

        // console.log(`Name of the pen is ${template.name} and its price is ${template.price} rupees`);
        // let abc = "Fahad\nnizami"      //  \n for new line and  \t for tab space
        // console.log(abc)


        // practice question
        // let userName = prompt("Enter Your Name");
        // let givenName = (`@${userName}`)
        // console.log(givenName + givenName.length);


        // episode 4

        // array

        // let array = [22,23,24,25,25];
        // console.log(typeof array);
        // console.log(array[2]);
        // let sum = array.length;
        // console.log(sum);

        // looping the array
        // for(let i =0 ; i<array.length; i++){
        //         console.log(arr[i]);
        // }

        // let cities = [ "Mumbai","Hyderabd","kolkatta","Banglore","Delhi"]
        // for(let city of cities){
        //         console.log(city);
        // }


        // practice question

        // Q. for a given array with marks of students ->[85,97,44,37,76,60].Find the average marks of the entire clas

        // let studMarks = [85,97,44,37,76,60];
        // let sum = studMarks[0] + studMarks[1] + studMarks[2] + studMarks[3] + studMarks[4] + studMarks[5] ;
        // console.log(sum);

        // let avgMarks = (`the Average Marks are`, sum /= 6);
        // console.log(avgMarks);


        //  Q. for a given array with prices of 5 items '> [250,645,300,o900,50] 
        // all iteams have an offer of 10% OFF on them. Chnage the array to store the final price
        // after applying the offer


        // let arrayy = [250,645,300,900,50]
        // let size = 0;
        // for (let val of arrayy){
        //         console.log(`the value of index `);
        //         size++;
        // }


// ..........................................................................................................................................................




        // APT LECTURES 

                                // LECTURE 1. Variables and Datatypes

        // variables are conatiners for data

        // Varialble Rules
        // 1.variables are case sensitive; "a" & "A" is different.
        // 2.Only letters, digits,underscore(_) amd $ is allowed.(not even space)
        // 3.Only a letter,underscore(_) or $ should be 1st character.
        // 4.reserved words cannot be variables names.

        // Variables
        // var a = 12;
        // var a = 13;
        // var a = 14;            //variable can be re-decllared and can be updated.A global scope variable.
        // console.log(a);

        // let a1 = 12;
        // a1 = 13;
        // a1 = 14;              //variable can not be re-declared but can be updated.A globa block scope variable.
        // console.log(a1);

        // const abc = 12;       //variable can not be re-declared and updated.A globa block scope variable.
        // console.log(abc);



        // Datatypes
        // Preemptive datatypes(7)
        // fullName = "fahad";             //String
        // price = 99.99;                  //number
        // x = null;                       // null(a special keyword denoting a null value)
        // y = undefined;                  // undefined (a top-level property whose value is not defined)
        // isFollow = true;                //boolean
        // bigNumber = BigInt(200);          // bigint
        // newSymbol = Symbol("hello!");   //symbol

        // console.log(typeof(newSymbol));
        // console.log(bigNumber);

        // Non preemptive . it have only one datatype that is objects
        //     const student = {
        //         fullName: "fahad",
        //         age : 19,
        //         isFollow: true,
        //         cgpa: 8.5,
        //     }
        //     console.log(typeof(student)); 
        //     console.log(student["age"]-1);
        //     console.log(student.age+1);       //this are 2 ways to change or update info in an object and also we can see info eg student.name will show fahad

        
        // lets practice
        // 1.create a const object called "product" to store information shown in the picture(it is a pen image)
        // const product = {
        //         penName : "Parker Jotter Standard",
        //         penColour : "black silver",
        //         penPrice : "$3.00",
        //         rating : 4
        // };
        // console.log(typeof product);

        // 2.create a const object called "product" to store information shown in the picture(it is an instagram image)
        // const profile = {
        //         userName : "@fahad_nizzz",
        //         isFollow :true,
        //         followers : 150 , 
        //         following : 150
        // };
        // console.log(typeof profile["userName"]);

        



        // LECTURE-2 
        // Operators


        // 1.Arithmetic operator
        // let a = 5;
        // let b = 2;
        // console.log("a =",a ,"& b =",b );
        // console.log("a + b =" , a + b );
        // console.log("a - b =" , a - b );
        // console.log("a * b =" , a * b );
        // console.log("a / b =" , a / b );
        // console.log("a % b =" , a % b );    //Modulus (gives remainder)
        // console.log("a ** b =" , a ** b );  // Exponentiation



        // 2.Unary Operator

        // a++(post)  a--(post) pehele purani value batauga phir new value batauga - ya plus karuga
        // ++a(pre)   --a(pre)   pehele - ya + karuga

                // a = a + 1;
                // console.log("a++ =" , a++);
                // console.log(a);

                // console.log("++a =" , ++a);
                // console.log(a);

                // console.log("a-- =" , a--);
                // console.log(a);

        
        
        // 3.Assignment Operators
        // let a = 3;
        // let b = 4;
        
        // a += 4;              //a = a + 1
        // a -= 1;              //a = a - 1
        // a *= 2;              //a = a * 2
        // a /= 3;              //a = a / 3
        // a %= 3;              // remainder of division
        // a **= 3;             // exponentiation 3 x 3 x 3.
        // console.log(a);


        // 4.Comparision Operators
        // a = 3;  
        // b = 2;
        // console.log(a == b);   //its only checks value but not datatype 
        // console.log(a != b);    
        // console.log(a === b);  // this checks both value and datatypes
        // console.log(a !== b);  //this also checks datyatpes and value  
        // console.log(a >= b);   
        // console.log(a < b);  



        // 5.Logical Operators
        // a = 6;                           
        // b = 5;
        // let cond1 =  a === 6;           
        // let cond2 =  a < b;
        // console.log("cond1 && cond2 =", cond1 && cond2);  //&&      //it checks if both conditions is correct then only it will give true else false.
        // console.log("cond1 || cond2 =", cond1 || cond2);  //||      //it checks if one conditions is correct it will give true . an both false then it will give false
        // console.log("cond1 ! cond2 =" , !(a<b));          //!       //it makes the answer opposite






                                        // Conditional Statements
        // 1.IF
        // let mode = "black"
        // if(mode === "dark"){
        //         console.log("black");
        // }
        // if(mode === "light"){
        //         console.log("white");
        // }
        // console.log(mode)


        // 2.If-ELse
        // let age = 17;
        // if(age >= 18){
        //         console.log("You can vote");
        // } else {
        //         console.log("You cannot vote");
        // }

        // let number = 5;
        // if( number%2 === 0){                               // number is divided by 2 to get the remainder as zero
        //         console.log(number,"is even");
        // } else {
        //         console.log(number,"is odd");
        // }



        // 3.else-if
        // Syntax
        // if(condition){

        // }else if (condition){
                // statemnt
        // }else {
                // statement 
        // }

        // example
        // let choice = 3;
        // if(choice === 1){
        //         console.log("Blue");
        // } else if (choice === 2){
        //         console.log("green");
        // } else {
        //         console.log("black");
        // }



        // 4. Ternary Operator
        // syntax
        // condition? true outpur : false output;

        // let age  = 5;

        // let result = age >= 18?"Adult":" Not adult";
        // console.log(result);


        // lets practice 
        // Q1.get user to input a numbwer using prompt("Enter a number").check if the number is divisible by 5.
        // let num = prompt("Enter a number");
        // if(num %5 === 0){
        //         console.log(num,"is divisible by 5");
        // } else {
        //         console.log(num,"is not divisible by 5");
        // }


        // Q2.Write a code which can give grades to students according to their scores.
        // let score = 95;
        // if(score >=90 && score <=100){
        //         console.log("A Grade");
        // } else if(score >=70 && score <=89){
        //         console.log("B Grade");
        // } else if(score >=55 && score <=69){
        //         console.log("C Grade");
        // }else if(score >=35 && score <=54){
        //         console.log("B Grade");
        // }else {
        //         console.log("Fail");
        // }


        // switch 


        // let number = 7;
        // switch(number){
        //     case 1:
        //     console.log("one");
        //     break;
        //     case 2:
        //     console.log("two");
        //     break;
        //     case 3:
        //     console.log("three");
        //     break;
        //     case 4:
        //     console.log("four");
        //     break;
        //     case 5:
        //     console.log("five");
        //     break;
        //     case 6:
        //     console.log("six");
        //     break;
        //     case 7:
        //     console.log("seven");
        //     break;
        //     default :
        //     console.log("wrong input");
        // }


        

        //Lecture-03  LOOPS
        // loops are used to executte a piece of code again and again


        // 1.for-loop
        // syntax
        // for(initialise statement;stopping condition;updation){
                // statement 

                
        // for (i =1;i<=5; i++){
        //         console.log("fahad" );
        // }


        // // example.2 calculate sum 1 tot 15
        // let sum = 0;
        // for(i = 1;i<=5;i++){
        //         sum = sum + i;
        // }
        // console.log(sum);


        // example.2 calculate sum 1 tot n
        // let sum = 0;
        // let n = 15;
        // for( let i = 1;i <= n;i++){
        //         sum = sum + i;
        // }
        // console.log(sum);


        // 2. Infinite loops : A loop that never ends
        // for( let i = 1;i >= 0;i++){
        //                 console.log("a")             dont run it will freeze laptop.
        //         }



        // 3.while loop
        // syntax
        // while(condition ){
                // statement
        // }
        // jo b while loop kar sakta wo for loop bhi kar sakta aur jo for loop b kar sakta wo while loop b kar sakta

        
        //eg:
        // let i = 1;
        // while(i<=5){
        //         console.log("fahad =",i);
        //         i++;
        // }



        // 3.Do-while
        // let i = 2;
        // do{
        //         console.log("fahad",i);
        //         i++;
        // }while(i<=5)



        //special loops are for-of and for-in
        // 4.For-of loop
        // let str = "Fahad Nizami";
        // let size = 0;
        // for (const i of str) {
        //         console.log("i =",i);
        //         size++;
        // }
        // console.log("size/length =",size)



        // 5.Forin
        // it  gives all the keys as output in an object using forin loop
        // let student = {
        //         name : "fahad",
        //         age : 20, 
        //         cgpa : 9,
        //         isFollow : true
        // };
        // for (const keys in student) {
        //         // console.log(keys);
        //         // also we can show values
        //         console.log("keys =",keys," values =",student[keys]);
        // }



        // practive questions 
        // Q-1. print all even numbers from 0 to 100

        for(let number = 0;number<=100;number++){
                if(number %2 === 0)
                        {
                                console.log("number is even",number);
                        }
        }





