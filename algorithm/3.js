// 3 입력으로 주어진 문자열에 있는 단어들의 개수를 반환하는 countWords라는 함수를
// 작성하시오. 하나의 단어는 공백문자없이 연속으로 이어져 있는 문자들의 집합으로 정한다. 이
// 때 공백문자는 연속으로 나타날 수도 있다. 일반적인 공백문자뿐만 아니라 탭키로 작성한 문
// 자 등도 공백문자로 취급한다. 함수 사용예:
// int nWords = countWords(“Hello World. Here is the train\n”);
// printf(“%d”, nWords); //6개가 출력됨.
/**
 * Algorithm: Count word in array
 * Input: array a[] 
 * Output: count_sum
 **/
//Pseudocode
// countSum <- 0
// i <- 0
// WHILE i < ARRAY_LENGTH
//      IF a[i] = a[value] THEN
//          countSum <- countSum + 1
//      
//      i <- i + 1
// RETURN countSum