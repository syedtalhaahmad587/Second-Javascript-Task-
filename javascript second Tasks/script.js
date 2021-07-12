// 21 - 25 //

// var userinput = prompt("Enter your mobile phone model ")
// var update = userinput.length;
// console.log(update)



// var inputuser = prompt("Enter your City Name")
// for(var i = 0; i < inputuser.length; i++){
//    if(inputuser.slice(i,i+1) === 'n' ){
//        document.write("String:" + inputuser + "<br/>" + "index of 'n':" + i ) 
//    }
// }

// var str = 'Hello World';
// var update = str.length -1; 
// for(var i=update; i>0; i-- ){
//    if(str.slice(i,i+1) === 'l' ){
//        document.write("String:" + str + "<br/>" + "Last index of 'L':"+ i )
//        break;
//    }
// }



// var string = "Pakistan";
// document.write("string" + string + "<br/>" )
// document.write("character at index 3:"+ " " + string.slice(3,4));

// string = "Hyderabad";
// othercountry = "Islam";
// var fullcountry = string.slice(5,10);
// document.write("City:" + string + "<br/>" );
// document.write("After replacement:" +" "+ othercountry  +  fullcountry );

// var message = "Ali and Sami are best friend. They play cricket and football together";
// var update = message.split(" ");
// document.write(update + "<br/>" + "<br/>"  )
// for(var i=0; i<update.length; i++ ){
//    if(update[i].toLowerCase() === 'and'){
//        update[i] = '&'

//    }
// }
// document.write(  update  );
// var newarr = update.join('  ');
// document.write(newarr)


// var value = '472';
// var update = typeof(value);
// document.write(`Value ${value} <br/> `)
// document.write(`Type ${update} <br/>`)

// var value2 = 472;
// var update2 = typeof(value2);
// document.write(`Value ${value2}  <br/> `)
// document.write(`Type ${update2}`)


// var userinput = 'peanuts'
// var update = userinput.toUpperCase();
// document.write('User input ' + userinput + '<br/>' )
// document.write("Upper Case:" + update   )

 
// var Uniqename = 'javascript';
// var update =  Uniqename.slice(0,1);
// var newupdate = update.toUpperCase();  
// document.write('User input ' + Uniqename);
// document.write('Title case:' + newupdate + Uniqename );


// document.write("Number:" + num + "<br/>" );
 // var dot = num.split(".")
// var combinedNum = dot.join('');
// document.write("Number" + combinedNum  )
 // second Method //
// var num = 35.36;
// var update = num.toString().replace('.','');
// document.write(' Number ' + num + "<br/>" );
// document.write(' Result ' + update )

// var newArr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userinput = prompt("Welcome to ABC Bakery. What do you want  to order sir/ma'am ");
// var match = false
// for(var i=0; i<newArr.length; i++ ){
//    if(newArr[i].toLowerCase() ===  userinput   ){
//           document.write(`cookie is available at index ${newArr.length} in our bakery`)
//         match = true
//         break;  
//         }
//         else {
//             document.write("We are sorry.pastry is not available in our bakery")
//             break;
//         }

// }

// var password = prompt("Enter your Password");
// for(var i=0; i<password.length; i++ ){
//   if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
//     document.write("Entered Password: " + password + "<br/>");
//     document.write("Password can not begin with a number<br/>");
//     break;
//     }else {
//       document.write("Please enter a valid password");
//       break;
//     }
// }



// var Uniname = 'University of Karachi';
// var update = Uniname.split("")
// for(var i=0;  i<update.length; i++){
//    document.write(update[i] + '<br/>' )
// }

// var userinput = prompt("Enter your curr name");
// var update = userinput.slice(-1);
// document.write("User input: " + userinput + "<br/>" )
// document.write("Last character of input: " + update )

// var language = ["HTML", "Javascript" , "Cyper", "wordpress" , "yahoo"]
// var sameperiod = prompt("Enter a language")
// match = false

// for(i = 0; i < language; i++ ){
//     if(sameperiod === language[i] ){
//         alert("Welcome to JS Land <br> Happy Coding!")
//         match = true;
//         break
//     }
// }  
// if (match === false){
//       alert("IS not use to language")
// }

// completed tasks //

// 26-30 //



// var secret = Math.random();
// var sum = secret*6;
// var lastupdate = Math.round(sum)
// if(secret >= '1' || secret <= '6'   ){
//   document.write("Congratulate  Number is secret")
//   console.log(lastupdate)
// }
//  if (secret > '6'  ) {
//    document.write("is not use value")
// }

// var randomNum = Math.random();
// var range = randomNum*20;

// var roundedVal = Math.round(range)
// console.log({roundedVal})


// //convert into int
// var num = "52.6";
// var converted = Number(num)
// console.log(converted)

//convert into string
// var num = 52.6;
// var converted = num.toString()
// console.log({converted})

//controlling length of decimals

// var num = 52.65147824634521
// var limitDecimal = parseFloat(num).toFixed(2)
// console.log({limitDecimal})

// Math.abs(-5)


// var position = prompt("Enter your position number");
// var convert = Number(position);
// document.write("<b>number:<b/>" +" " + convert  + "<br/>" )
// console.log("convert" + convert );
// var round  =  Math.round(convert)
// document.write("<b>round of value:<b/>" +" " + round + "<br/>" )
// console.log("round" + round )
// var floor = Math.floor(convert);
// document.write("<b>floor value:<b/>" + " " + floor + "<br/>" );
// var ceil = Math.ceil(convert);
// document.write("<b>ceil value:<b/>" + " " + ceil + "<br/>" );

// var userinput = prompt("Enter your nagative number");
// var convert = Number(userinput);
// document.write("<b>number:<b/>" +" " + convert  + "<br/>" )
// console.log("convert" + convert );
// var round  =  Math.round(convert)
// document.write("<b>round of value:<b/>" +" " + round + "<br/>" )
// console.log("round" + round )
// var floor = Math.floor(convert);
// document.write("<b>floor value:<b/>" + " " + floor + "<br/>" );
// var ceil = Math.ceil(convert);
// document.write("<b>ceil value:<b/>" + " " + ceil + "<br/>" );
 

// var input = -45;
// var show = Math.abs(input);
// console.log("show" + show)
// document.write("The absolute value of"+ " " + input + " " + "is" + " "+ show);


// var dice = Math.random();
// var range = dice*6;
// var result = Math.round(range)
// document.write("random dice value:"+ " " + result + "<br/>" );
// document.write("random dice value:"+" "+ result );

// var coin = Math.random();
// var range = coin*2
// var result = Math.round(range);
//  if(result === 1 ){
//     document.write("random coin value: head");
//  }
//  else{
//    document.write("random coin value: tail");
//  }
// console.log("result" + result )
   

// var input =  Math.random()
// var range = input*100;
// var result = Math.round(range);
// document.write("random number between 1 and 100:"+ " " + result )
 

// var userinput = prompt("Enter your weight in Kilogram");
// var user = parseInt(userinput);
// document.write("a." + " " +  user + "<br/>")
// console.log("user " + user )
// document.write("b." + " " + user + "kgs" + "<br/>" );
// var user1 = parseFloat(userinput).toFixed(1);
// document.write("c." + " " +  user1 + "kgs"  + "<br/>" )
// document.write("d." + " " + user1 + "kilograms"  + "<br/>" )

// Compleleted Tasks //

// 31-34 //
// var date = new Date();
// var update = new Date("monday Feb 01 2021" )
// var result = date - update
// console.log("result" + result )
// var usersage =  prompt("Enter your date of birth");
// var date = new Date(usersage);
// console.log("date" + date );
// var rightNow = new Date();
// rightNow = rightNow.getTime()
// date = date.getTime();
// var result = rightNow - date
// result = result / (1000 *60*60*24*365 )
// console.log("result" + result )
// result = Math.floor(result);
// document.write(" you are " + result +   " year 0ld ") 


// var doomsday = new Date("June 30, 2035");
// var msToday = doomsday.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// console.log("doomsday" + doomsday );


// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
// var d = new Date("July 21, 1983 13:25:00");

 
// var theDay = rightNow.getDay();
// console.log(rightNow + "<br/>" + theDay  )

// Complelted tasks //

// 35-38 //
// function calculateAge(date) {
//     var today = new Date();
//     today = today.getTime();
//     date = date.getTime();

//     var diff = today-date;
//     var age = diff / (1000*60*60*24*365)
//     age = Math.floor(age);

//     return age;
// }

// var userDob = prompt("Enter your date of birth");
// var date = new Date(userDob);

// var userAge = calculateAge(date)
// alert("You're " + userAge + " years old");

// var fatherDob = prompt("Enter your father date of birth");
// fatherDob = new Date(fatherDob);

// var fatherAge = calculateAge(fatherDob);
// alert("Your father's age is " + fatherAge + " years");

// var motherDob = prompt("Enter your mother date of birth");
// motherDob = new Date(motherDob);

// var motherAge = calculateAge(motherDob)

// alert("Your mother's age is " + motherAge + " years");





// First Tasks //

// function currentdate(){
//     var userinputdate = new Date();
//     // var userinputdate = new Date('sat Dec 05 2015 22:18:39' );
//     document.write(   userinputdate  + " ")

// }

// currentdate();


// Second Tasks //


// function fullname(){
//     var Firstname = "Talha";
//     var Secondname = "Ahmed";
//     var Fullname = Firstname +" " + Secondname;
//     document.write("" + Fullname  )
//  }

//  fullname();



// Third Tasks //


// function  Addnumber(){

// var numberadd = prompt("Enter your  First number");
// var numberadd2 = prompt("Entere your Second number2");
// var sum = +numberadd  +  +numberadd2
//      document.write( sum  + "" )

// }

// Addnumber();

// Fourth Tasks //

// function  operation(){
// var num1 = 4;
// var operator = ('*', "/", "-","+");
// var num2 = 3;

// return  

// }

// operation();



// Fif task //
// function  counting(){
//     var start = prompt("Enter your first number");
//     var last = prompt("Enter your last number");
//     for(var i=start; i<=last; i++ ){
//         document.write("" + i + "<br/>" );

//     }
//  }
// counting();



// six tasks //
// function  rectangular(){
//    var height = 20;
//    var width = 30;
// } 
// 1st num
// 2nd num
// operator

// call function
// var result = calculator(num1, num2, operator)

// write function calculator(num1, num2, operator)
// apply condition on operator
// if(operator === "+")
// var sum = num1+num2
// return sum

// user  = "talha";

//  function  palindromes(user){
//     check =  user.split('').reverse().join('');
//    if(user === check){
//       return true
//    }
//       else   {
//          return false;
//       }
//    }  
// var result;
//    palindromes(user);    
//       if(result) {
//           document.write(resu+ "<br/>" + + " ")
//       }
//       else{
//           document.write("is not palindrome")
//       }
// console.log("palindromes" + palindromes )
// console.log("user"  + user)



// var user = 5;
// for(var i=5; i>=1; i-- ){
//     document.write(user*i    )

// }
// var result = factorial(user)
// document.write("user")

// function factorialize(num) {
//    return num;
//  }
//  factorialize(5);
// var result = 1;
// for(var i=5; i>=1; i-- ){
//    result = result*i ;

// }

// document.write("result" + result )


// var userInput = prompt("Enter any word to check whether it's palindrome or not");
// function palindrome(user){
//     var str = user.split('').reverse().join('');

//     if(user === str)
//         return true

//     else 
//         return false
// }

// var result = palindrome(userInput);
// if(result){
//     alert("This is a palindrome")
// }
// else{
//     alert("This is not a palindrome")
// }


// var userInput = prompt("Enter your number")
// function factorial(num) {
//     var result = 1;
//     for (var i = num; i >= 1; i--) {
//         result = result * i;
//     }
//     return result   
// }
// var myResult = factorial(userInput);  

// alert("The factorial of " + userInput + " is " + myResult)
// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//     }

//     tellTime();
    

// var a = 4;
// var b =  6;
// var operation = prompt("Enter ") ;
// function  argement(val1, val2, operator) {
//      var result = operation
//     switch(operator) {
//         case "+":
//       alert(a + b );
//       default:
//            alert("Invalid Number");
//      }
     
//     return  operator;
// }
// var result = argement(a, b, operation);
  
// Completed Tasks//

// CHAP:38-42
// // question:1

// function power(base, exponent) {
//         var result = 1;
//         if(exponent == undefined)
//             exponent = 2;
//         for(var i=1; i<=exponent; i++) {
//             result = result * base;
//         }
//         return document.write(result);
//     }
// power(3,6);

//question:2

// function year(a){
//     if (a % 4 == 0) {
//         alert("it's a leap year")
//     }else{
//         alert("it's not a leap year")
//     }
// }
// var b = year(prompt("enter year"));

//question:3

// function ValueOfS(a,b,c){
// 	S = (a + b + c) / 2;
//     return S;
// }

// function AreaOfTriangle(S,a,b,c){
// 	area = S * (S - a) * ( S - b ) * (S - c)
//     return area;
// }
// a = 10, b = 15, c = 20;
// document.write(AreaOfTriangle(ValueOfS(a,b,c),a,b,c).toFixed(3))

//question :4
// function mainFunc(){
//     var s1 = +prompt("Enter number of 1st subject: ")
//     var s2 = +prompt("Enter number of 2nd subject: ")
//     var s3 = +prompt("Enter number of 3rd subject: ")

//     total = (s1)+(s2)+(s3);

//     var avg = Avg(total)
//     percent = Percentage(total);
    
//     alert("Average: " + avg + '\n' + "Percentage: " + percent)
// }
// function Avg(total){
//     ans = +total/3;
//     return +ans.toFixed(2);
// }
// function Percentage(total){
//     var percen = (+total/300)*100;
//     return percen.toFixed(2)+"%";
// }
// mainFunc()

// question :5

// function findIndex(string,target){
//     for (var i = 0; i<= string.length; i++){
//        if (string[i] == target){
//         index = i;
//         }
//     }
//     return "Index of "+ target +" is : " + index; 
// }
// string = prompt("enter  string")
// target = prompt("enter target")
// document.write(findIndex(string,target));

// question:6

// var string = prompt("enter string");
// var vowel = ["a", "e", "i", "o", "u"];

// function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;           // take the removed character into account
//                 secondLoop--;  // string is now one character shorter
//             }

//         }
//     }
// }

// name ();
// console.log(string);

// question:7

// var string = prompt("Enter string: ");

// var li = [];

// for (var i = 0; i<=string.length-2; i++){
//     var target = string[i].toLowerCase()+string[i+1].toLowerCase();
//     switch(target){
//         case "aa" :
//             li.push("aa");
//             break;
//         case "ae" :
//             li.push("ae");
//             break;
//         case "ai" :
//             li.push("ai");
//             break;
//         case "ao" :
//             li.push("ao");
//             break;
//         case "au" :
//             li.push("au");
//             break;

//         case "ea" :
//             li.push("ea");
//             break;
//         case "ee" :
//             li.push("ee");
//             break;
//         case "ei" :
//             li.push("ei");
//             break;
//         case "eo" :
//             li.push("eo");
//             break;
//         case "eu" :
//             li.push("eu");
//             break;

//         case "ia" :
//             li.push("ia");
//             break;
//         case "ie" :
//             li.push("ie");
//             break;
//         case "ii" :
//             li.push("ii");
//             break;
//         case "io" :
//             li.push("io");
//             break;
//         case "iu" :
//             li.push("iu");
//             break;

//         case "oa" :
//             li.push("oa");
//             break;
//         case "oe" :
//             li.push("oe");
//             break;
//         case "oi" :
//             li.push("oi");
//             break;
//         case "oo" :
//             li.push("oo");
//             break;
//         case "ou" :
//             li.push("ou");
//             break;

//         case "ua" :
//             li.push("ua");
//             break;
//         case "ue" :
//             li.push("ue");
//             break;
//         case "ui" :
//             li.push("ui");
//             break;
//         case "uo" :
//             li.push("uo");
//             break;
//         case "uu" :
//             li.push("uu");
//             break;
//     }
// }
// document.write(`There are ${li.length}  Vowel Succession in ${string} <br> <br>`);
// for (let i = 0; i <= li.length-1; i++ ){
//     document.write(`Vowels in succession: ${li[i]} <br>`);
// }

//question:8
// var distance_In_Km = Number(prompt("Enter distance between two cities in kilometers."));
// document.write(`The distance between two cities in Kilometers is ${distance_In_Km} km<br>`)
// function distanceInMeters() {
//     var convertedDistane = distance_In_Km * 1000;
//     document.write("The distance between two cities in Meters is " + convertedDistane + " m<br>")
// }
// function distanceInFeet() {
//     var convertedDistane = distance_In_Km * 3280.84;
//     document.write("The distance between two cities in Feet is " + convertedDistane + " ft<br>")
// }
// function distanceInInches() {
//     var convertedDistane = distance_In_Km * 39370.1;
//     document.write("The distance between two cities in Inches is " + convertedDistane + " inch<br>")
// }
// function distanceInCentimeters() {
//     var convertedDistane = distance_In_Km * 100000;
//     document.write("The distance between two cities in Centimeters is " + convertedDistane + " cm<br>")
// }
// distanceInMeters();
// distanceInFeet();
// distanceInInches();
// distanceInCentimeters();

//question:9

// var workers_worked_in_Hours = prompt("Enter No. Of Hours.");
// var overtime_pay_per_Hour = 12;
// var total_Overtime;
// var pay_of_total_Overtime;
// if (workers_worked_in_Hours > 40) {
//     total_Overtime = workers_worked_in_Hours - 40;
//     pay_of_total_Overtime = total_Overtime * overtime_pay_per_Hour;
//     document.write(`You work extra ${total_Overtime} hours of overtime so your total overtime pay is
//      ${pay_of_total_Overtime} rupees. `)
// }
// else if (workers_worked_in_Hours == 40 ){
//     document.write(`You will have not given any overtime charges because your work time is
//      equal to 40 Hours.`)

// }else{
//     document.write(`You will have not given any overtime charges because your work time is less than 40 hours`)
// }

//question:10

// var cashier_Amount = Number(prompt("Enter your Amount."));
// var No_of_100_Notes = 0;
// var No_of_50_Notes = 0;
// var No_of_10_Notes = 0;

// var calculation = cashier_Amount / 100;
// var No_of_100_Notes_in_Int = Math.floor(calculation);
// var subtract_in_Cashier_Amount = No_of_100_Notes_in_Int * 100;
// cashier_Amount -= subtract_in_Cashier_Amount
// No_of_100_Notes = No_of_100_Notes_in_Int;

// calculation = cashier_Amount / 50;
// var No_of_50_Notes_in_Int = Math.floor(calculation);
// var subtract_in_Cashier_Amount = No_of_50_Notes_in_Int * 50;
// cashier_Amount -= subtract_in_Cashier_Amount
// No_of_50_Notes = No_of_50_Notes_in_Int;

// calculation = cashier_Amount / 10;
// var No_of_10_Notes_in_Int = Math.floor(calculation);
// No_of_10_Notes = No_of_10_Notes_in_Int;
// document.write(`You will have  ${No_of_100_Notes}  hundred notes   ${No_of_50_Notes} fifty notes and 
//  ${No_of_10_Notes}  ten notes.`);

// function expandLoris(){
//     var expand = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quia exercitationem! Temporibusminus molestias quisquam.Ab labore in neque incidunt dicta, laudantium facilis magnam quibusdam! Laudantium ipsam eos assumenda dolore!"
//     document.getElementById("lorem").innerHTML = expand;
// }

// function addTodo(){
//     var todo_item = document.getElementById("todo-item");
//     console.log(todo_item.value)
//     var table_tab = document.getElementById("table")
// }
