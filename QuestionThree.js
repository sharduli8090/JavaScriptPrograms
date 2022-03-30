//FUNCTON

function reverseNumber(num,ans){
    
    //code to break recursion
    var temp = num/10;
    temp=Math.floor(temp)
    if(temp==0){
        ans=(ans*10)+num
        console.log("Reversed number is",ans)
        return;
    }
    
        
        var a = num%10;
        ans = (ans*10)+a;
        num = Math.floor(num/10);   
        
        //recursively calling the function
        reverseNumber(num,ans);
        return;
}

//DRIVER CODE

//number to be reversed
var number = 1234;
console.log("Number to be reversed",number);

//calling the function
var ans = number%10;
number = Math.floor(number/10);
reverseNumber(number,ans);