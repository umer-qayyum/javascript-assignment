// 1-Write a logic to print the Fibonacci serious 
var a=0, x=0,y=1, sum=x+y;
a=prompt("Enter the number :");
while (sum<=a)
{
    console.log(sum);
    sum=x+y;
    x=y;
    y=sum;
}




// 2-Write a logic to find the factorial of a given a number
let number,factorial=1;
number=prompt("enter the number ");
for(var i=1;i<=number;i++){
    factorial=factorial*i;
}
console.log("Factorial of",number,"=",factorial);




// 3-Remove all the occurrences of the given character.
var str=prompt("enter string ");
for(var i=0;i<str.length;i++){
    for(var j=1;j<str.length;j++){
        if(str[i]==str[i+j]){
        console.log("string after removing same characters is ",str.split(str[i]).join(""));
}
    }

}




// 4-How will you reverse an string.
var str=prompt("enter string ");
var reverseStr=str.split("").reverse().join("");
console.log(reverseStr);




// 5-How to apply getter and setter method with the help of using object?
const a = {
    name : 'umer',
    age : 20
};
//to Get
console.log(a.name);
//to Set
 a.name=prompt(a.name+" convert into ");
console.log(a.name);




// 6-Can you print the  repeating characters from the string
var str=prompt("enter string ");
for(var i=0;i<str.length;i++){
    for(var j=1;j<str.length;j++){
        if(str[i]==str[i+j]){
    console.log(str[i]," is repeating");
}
    }
}




// 7-How would you check if the given number is integer or not?
var a=prompt("enter a number ");
var b=Number(a);
var c=Number.isInteger(b);
if(c===true){
    console.log(b , "is an integer");
}
else{
     console.log(b , "is not an integer");
}




// 8-Write an function that would you allow to call a function like this functionName(param1)(param2)
function add(a) {
    if (arguments.length == 1) {
      return function(b) { 
        return a + b;  
      };
    }
  }
  console.log(add(30)(20));