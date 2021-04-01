/**
 * Algorithm: Find minimum value of array
 * Input: array a[]
 * Output: minimum value of a[]
 **/
//Pseudocode
// minIndex <- 0
// i <- 0
// WHILE i < ARRAY_LENGTH
//      IF a[i] < a[minIndex] THEN
//          minIndex <- i
//      i <- i + 1
// RETURN a[minIndex]

function findMin(array){
    var minIndex = 0;
    var i = 0;
    while(i<array.length){
        if(array[i]<=array[minIndex]){
            minIndex = i;
        }
        i++;
    }
    return array[minIndex];
}

var myArray=[33,24,13,26,5,32,41];
var min=findMin(myArray);
console.log(min);
