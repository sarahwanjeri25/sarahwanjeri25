/**Loops
 * Loop statements in Javascript are programming constructs that alow you to execute a block of code repeatedly.
 * They are essential for automating repetitive tasks,iterating over arrays or objects and processing data.
 * Javascript provides several types of loop statements:
 * 
 * 1-> For loop: The loop is used when oyu know the number of iterations beforehand.
 * It consists of three parts : initialization,condition and iteration expression.
 * 
 *   syntax
 * for (initalization(let 1 = 0;); condition(<=5;);iteration){
 *             //code block to be executed}
 * 
 * 2-> While loop ; the while loop executes a block of code as long as a specified condition evaluates to true.
 * 
 *      syntax 
 *    while (condition){
 *        //code block to be  executed 
 *          }
 * 3 -> do-while loop : Similar to the while loop,but it executes the code block at least once before checking the condition.
 * 
 *     syntax
 * do {
 * //code block to be executed
 * } while(condition);
  */

//FOR LOOP EXAMPLE 
for (let i=0; i<=10; i++){
    alert(i);
}

//WHILE LOOP EXAMPLE
let num=10;
while(num<5){
    alert(num)
    i++;
}

//DO-WHILE
let x = 9;
do{
    alert(x);
}while(x<20);