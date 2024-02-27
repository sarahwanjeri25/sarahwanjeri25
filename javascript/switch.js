//**Switch statement - the switch statement is used to perform differnt actions based on different conditions
//Syntax for switch statements

//**switch() {
 //          case 1 :
//                execution
//                break;
 //           case 2 :
 //                   execution
 //                   break;
 //           case 3 :
 //                   execution
 //                   break;
 //             case n:
 //                           execution
 //                           break;
 //              deafult 
 //                           execution;
 //  
 
 let day =3;
 let dayName;

 switch(day){
    case 1:
        dayName="Monday";
        break;
     case 2:
            dayName="Tuesday";
            break;
    case 3:
          dayName="Wednesday";
         break;
     case 4:
           dayName="Thursday";
           break;
     case 5:
           dayName="Friday";
           break;
     case 6:
           dayName="Saturday";
           break;
     case 7:
         dayName="Sunday";
         break;
         default:
     dayName="Invalid Day"
            
 }
 alert(dayName)

 //In this example,it prints the day name based on the value of the day.
 //If day is 1, it prints "Monday": if it's,2 "tuesday"; if it's 3 , "Wednesday";
 //otherwise "Invalid Day"