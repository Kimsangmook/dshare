// 입력으로 주어진 숫자문자들로 구성된 문자열(str)에서 주어진 한자리 정수(digit)와
// 동일한 숫자문자가 있는 개수를 구하는 함수 countMatchedNumberLetterInString를 구현하
// 시오. 함수 원형: int countMatchedNumberLetterInString( const char *str, int digit);
// 함수 사용예:
// int count = countMatchedNumberLetterInString(“112233443311334913201234”, 4);
// // 입력으로 전달된 문자열 중에서 4라는 숫자와 동일한 ‘4’문자가 나타난 횟수를 출력
// printf(“%d”, count); // 4가 출력됨

/**
 * Algorithm: Count same value in array
 * Input: array a[] , value
 * Output: count_sum
 **/
//Pseudocode
// countSum <- 0
// i <- 0
// WHILE i < ARRAY_LENGTH
//      IF a[i] = a[value] THEN
//          countSum <- countSum + 1
//      i <- i + 1
// RETURN countSum

function countMatchedNumberLetterInString(array,value){
    var countSum = 0;
    var i = 0;
    while(i<array.length){
        if(array[i]==value){
            countSum++;
        }
        i++;
    }
    return countSum;
}

var myArray=[1,1,2,2,3,3,4,4,4,2,2,4];
var count=countMatchedNumberLetterInString(myArray,4);
console.log();
