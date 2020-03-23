// STEP 1

// var num = 1; //numeric literal expression 

// var y = "Who?"; //string literal expression

// var IlikeIt = true; //boolean literal expression

// STEP 2

// var firstName; //Camel Casing 
// var lastName; //Camel Casing 
// var strAdrss; // Hungarian Notation for string
// var strCity;//Camel Casing and Hungarian Notation for string
// var strState;//Camel Casing and Hungarian Notation for string
// var numZipCode; //Camel Casing and Hungarian Notation fur number
// var strYouAge; //Camel Casing and Hungarian Notation for string
// var strReferralSource;//Camel Casing and Hungarian Notation for string
// var boolMayWeContactYou; //Camel Casing Hungarian Notation for boolean


// STEP 3. 3 methods for declaring and assigning values to variables

// //Method 1 
// var zCode;
// var zCode = 92109;

// //Method 2

// var zCode = 92109, firstName = 'Diana', uAge = 35.5;

// //Method 3
// var  mayWeContactYou = true;



// STEP 4. 
   
        // //    I like to eat apples when it is sunny and not raining.
        // //    Console displas: The sentence has xx characters

        var myString = "I like to eat apples when it is sunny and not raining";
        var sent = "The sentence has";
        var char = "characters";
           console.log(sent, myString.length, char);

       
 // STEP 5. 

//  var one;
//  var two;
//  var three;

//  var one = 1 + "b"; // add a number and a string and use console.log to display the coerced result
//  console.log(one);

//  var two = true;  // add a Boolean and a string and display the coerced result. 
//  console.log("Ocean is wonderful? t/f: " + two);

//  var three = Math.random() + 1; //apply some sort of mathematical function on a number and display the coerced result.
//  console.log(three);

 // STEP 6. //Create 2 variables and show how you would insert the results of the variables directly to a web page (which method do you know that can help to accomplish this?

        // var name  = prompt ("Hi! What is your name?");
        // var vacation = prompt("What is your favorit place to vacation?")
        
        //  document.write("Nice to meet you, " + name + "! I love to spend my vacation in " +vacation + " too!") 

   
 // STEP 7.  
/*is the following string literal valid? If not, how would you fix it?
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
log(someString);*/

// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// console.log(someString); 

// added \ and 'console'



 // STEP 8. What is the minimum amount of code you would need to store and capture a user entered name? (think of a built in function to accomplish this)

//  var name  = prompt ("ENTER YOUR NAME");

 // STEP 9. // Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, and object.

//  console.log(typeof 15);
//  // expected output "number"
 
//  console.log(typeof 'sunshine');
//  // expected output "string"
 
//  console.log(typeof true);
//  // expected output "boolean"
 
//  console.log(typeof {x:1, y:2});
//  // expected output
 

 // STEP 10. 
 
 //  alert("Hello " + "Dina Tikhonovskova" + ", welcome to the 644 class!");  
 
 //STEP 11. Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

//  var name = "Dina Tikhonovskova";
//  alert("Hello " + name + ", welcome to the 644 class!");  

 // STEP 12. Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
 
//  var name = "Dina Tikhonovskova";
//  var course = JavaScript;
//  var JavaScript = ", welcome to the 644 class!";
//  var Hi = "Hello ";

//  alert(Hi + name + JavaScript);  

 //STEP 13. Rework the above string so that a line break is added right before the word “Welcome”

//  var name = "Dina Tikhonovskova";
//  alert("Hello Dina Tikhonovskova.\nWelcome to the 644 class!"); 

 // STEP 14. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

//  var name = prompt("Enter your name");
//  var course = JavaScript;
//  var JavaScript = ", welcome to the 644 class!";
//  var Hi = "Hello ";
 
//  alert(Hi + name + JavaScript);  

//STEP 15. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

//  var name = prompt("Enter your name");
//  var course  = prompt("Enter class number");

//  var JavaScript = ", welcome to the class ";
//  var Hi = "Hello ";
 
//  alert(Hi + name + JavaScript + course);  

//STEP 16. Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window.

// var x = 10, 
//     y = 20;

// console.log (x+y);



//STEP 17. Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

// var x = 20;
// x = x+20;

// console.log (x);

//STEP 18. Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

// var x = 20;
//  x = x*5;

// console.log (x);



//STEP 19. Declare a variable called x and assign it a value of 8, next use code to increment the value by 1, show the new value of x in the console.
 


// var x = 8;

// ++x;
// console.log (x);

//STEP 20. Create an array containing abbreviations for the first 6 months of the year.

// var sixMonths = [ "January",'February','March', 'April', 'May', 'June'];
