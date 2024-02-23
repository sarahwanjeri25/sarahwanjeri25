//**Arithmetc operators - These are operators that help in doing mathematical operation */
//**Examples of arithmetic operators are:
// -> Addition (+)
// -> Subtraction (-)
// -> Division (/)
// -> Multiplication (*)
// -> Modulus (%)

let x =57;
let y = 27;
let total = x+y; //This will add the two variables
let difference = x-y; //This will subtarct the two variables
let division = x/y; //This will divide the two variables
let Multiplication = x*y; //This will multiply the two variables
let Modulus = x%y; //This will provide the reminder of the two variables

//Alice went to a bookstore and bought 3 books for Ksh120 each. She also bought 2 notebooks for Ksh30 each. If she paid with a Ksh5000 bill, how much change did she receive?
let books = 3;
let bprice = 120;
let notebooks = 2;   
let nprice = 30;
let tbill = 5000;

let tbooks = books*bprice;
let tnotebooks = notebooks*nprice;
let tcost = tbooks+tnotebooks;
let change = tbill-tcost;

alert(change);


//assignment operator(=)
/**  comparison operators are used to compare values 
// Examples of comparison operators are ...
 -> greater than (>)
 -> less than (<)
 -> greater than or equal to (>=)
 -> less than or equal to (<=)
 -> equal to (==)
 ->  not equal to (!=)
 -> strict equal to (===)
 -> not equal value and equal type (!==)
 
*/

let  p = 10;
let  q = 5 ;

alert(p>q);//greater than
alert(q<p);//less than
alert(p!=q);//not equal to
alert(p>=q);//greater than or equal to 
alert(p<=q);//less than or equal to
alert(p==q);//equal to
alert(p===q);//strict equal to

/**Types of operators
 * Arithmetic operators
 * (done above)
 * 
 * Assignment operators
 * (x+=y means x=x+y)
 * 
 * comparison operators
 * (done above)
 * 
 * increment(++) and decrement(--) operators
 * (they add and subtract one from the variable
 * when the operator is put before the variable it adds or subtracts one first, then prints out the variable.
 * when the operator is put after the variable it prints out the variable first, then adds or subtracts 1.)
 * string operators
 * (adding strings for example
 * let text1= "Good"
 * let text2= "day"
 * let text3=text1+text2
 * text3 will be "Goodday"
 * or
 * let text1= "What a very"
 * text1 += "nice day"
 * outcome will me "What a very nice day")
 * 
 * logical operators
 * (&& if both conditions are true 
 * || if one condition is true
 * ! if the condition is not true)
 * 
 * bitwise operators
 * ternary operators
 * type operators
 * TYPEOF:returns the type of operator which has bn typed either string numbeer or boolean)
 * 
 * Adding two numbers, will return the sum, but adding a number and a string will return a string:

 Example
 let x = 5 + 5;
 let y = "5" + 5;
 let z = "Hello" + 5;
 x=10
 y=55
 z=Hello5


  OPERATORS PRECEDENCE

  OPERATORS ASSOCIATIVITY
  Left to right(sums are done from the left side to the right)
  power sums are done frm right to left
  
  */
