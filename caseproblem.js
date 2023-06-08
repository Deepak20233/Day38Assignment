//1)To read number and print in word
let number = prompt("enter number");

switch(number){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;   
    case 4:
        console.log("Four");
        break;        
    case 5:
        console.log("Five");
        break;        
    case 6:
        console.log("Six");
        break;        
    case 7:
        console.log("seven");
        break;        
    case 8:
        console.log("Eight");
        break;        
    case 9:
        console.log("Nine");
        break;        
    case 10:
        console.log("Ten");
        break;        
    default:
        console.log("Invalid number");
          
}


//2)To print weekday
let dayNumber = prompt("Enter day number")
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);