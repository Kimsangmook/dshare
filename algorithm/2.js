// 입력으로 주어진 문자열에서 중복해서 나타나는 문자를 제거하는 함수
// excludeRedundantLetters를 작성하시오. 이때 입력으로 받은 문자열은 함수 실행후 중복된
// 문자들이 제거된 결과가 될 것이다. 예를 들어, “Hello World” 라는 문자열은 “Helo Wrd”로
// 바뀐다. 함수 사용예:
// char data[100] { “Hello World” };
// excludeRedundantLetters( data );
// printf(“%s”, data); // “Helo Wrd” 가 출력

/**
 * Algorithm: Delete duplicate characters in array
 * Input: array a[] 
 * Output: array a[]
 **/
// Pseudocode
// value <- null
// k <- 0
// i <- 0
// WHILE i < ARRAY_LENGTH
//      value <- array[i]
//      k <- i + 1
//      WHILE k < ARRAY_LENGTH
//      IF  array[k] == value THEN
//         ERASE array[k]
//      k <- k+1
// i <- i + 1

