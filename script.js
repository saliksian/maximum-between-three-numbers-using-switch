let number1 = 100;
let number2 = 70;
let number3 = 10;

switch (true) {
    case ((number1>number2)&&(number1>number3)):
        console.log("Maximum number is:"+ number1);
        
        break;
    case ((number2>number1)&&(number2>number3)):
        console.log("Maximum number is:"+ number2);
        
        break;
    case ((number3>number1)&&(number3>number1)):
        console.log("Maximum number is:"+ number3);
        
        break;
    case (number1==number2):
        console.log("Numbers are equal!");
        break;
}