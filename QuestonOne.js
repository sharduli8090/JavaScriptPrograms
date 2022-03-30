
//FUNCTION
function countOfEvenOdd(array){
//variables to store the count
var eveNo = 0;
var oddNo = 0;

for(var i=0;i<array.length;i++){
    //this block checks if the no. is even or not
    if(array[i]%2==0){
        eveNo += 1;
    }
    else{
        oddNo += 1;
    }
}

//printing the results
console.log("Count of even numbers :",eveNo);
console.log("Count of odd numbers :",oddNo);
}



//DRIVER CODE
//Number array
var array=[1,22,43,223,455,330,21,33]
countOfEvenOdd(array);