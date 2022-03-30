//FUNCTION
function findMinMax(array){
    
    //variables to store max and min numbers
    var maximum = array[0];
    var minimum = array[0];
    
    
    for(var i=1;i<array.length;i++){
        //updates the maximum variable
        if(array[i]>maximum){
            maximum = array[i];
        }
        //updates the minimum variable
         if(array[i]<minimum){
            minimum = array[i];
        }
    }
    
    //prints the results
    console.log("Minimum element in the array is",minimum)
    console.log("Maximum element in the array is",maximum)
}


//DRIVER CODE

//number array
var array=[22,44,223,6567,21,889,918,12,098]
findMinMax(array);
