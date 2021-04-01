/**
 * Algorithm: Sum of all odd numders
 * Input: array
 * Output: sum of all odd numders
 **/
//Pseudocode
// sum <- 0
// i <- 0
// WHILE i < ARRAY_LENGTH
//      IF i is odd THEN
//          sum <- sum + i
//      i <- i+1
// RETURN sum
function sumOdd(array){
    var sum = 0;
    var i = 0;
    while(i<array.length){
        if(array[i]%2==1){
            sum=sum+array[i];
        }
        i++;
    }
    return sum;
}

var myArray=[1,3,2,4,5,32,41];
var sum=sumOdd(myArray);
console.log(sum);