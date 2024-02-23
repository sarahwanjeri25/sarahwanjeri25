//Assignment operators
let x = 5;
let result = x+=4
alert(result)

//String operators
let text1= "Good"
let  text2= "day"
let text3 = text1+text2
alert(text3)

let text4 = text1+ " " + text2
alert(text4)

//logical operators
 let a=10
 let b =15
alert( a<b && b<a)
alert( a<b || b<a)

//IF ELSE STATEMENTS
let age= 58
if(age<=45){
    alert("you are the man")
}
else{
    alert("you are too old")
}  

let place=3
if(place==1){
    alert("You won!")
}
 else if(place==2){
    alert("You are the first runners up")
}
else if(place==3){
    alert("Better luck next time")
}










        /**CONTROL STATEMENT
         * In JavaScript, control statements are programming constructs that enable you to control the flow of execution within your code. 
         * They determine which code blocks are executed based on specified conditions or how many times certain code blocks are repeated. 
         * Control statements in JavaScript include conditional statements (like if, else, switch), loops (like for, while, do-while).
         *                     TYPES    
    *  conditional stmt          |   loop stmt
 * if|if-else|if-else-if|switch  |   for|while|do-while
 * 
 * * Statement  |syntax             |example
 * if           | if(condition){    |let a=10
 *                 execution         | if(a>15){
 *               }              |   alert(a);
 *                                  }
 * 
 * 
 * else       |if (condition)    |let a=10
 *              {execution         if(a>15)
 *              }                   {alert (a);
 *             else{ execution2      }
 *                }                  else{
 *                                   alert(notgood)
 *                                      }
 * 
 * 
 * if-else-if  | if(cond){        | let num=100
 *               execution          if(num>101){
 *               }                   alert(num);
 *               else if(cond)       }
 *               {                   else if(num==100)
 *                  execution2                 { 
 *                }                        alert(num);
 *               else                 } 
 *               {                    else
 *                execution3              {
 *               }                           alert("not num");
 *                                         }
*/



//If statement example
let num=10;

if (num<10)
{
    alert(num);
}

//if-else stmt example
let agee =17;

if(agee>=20)
{
    alert("I am an adult");
}
else{
    alert("I am still a kid");
}

//if-else-if statement example
let p = 50;

if(p<=49)
{
    alert("my number is less than or equal to 49");

}
else if(p==50)
{
    alert("my number is actually equal to 50");
}
else
{
    alert("i just have a number")

}


