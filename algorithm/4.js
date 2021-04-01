// 괄호열기(‘(’), 괄호닫기(‘)’) 문자들로 구성된 문자열에서 괄호열기와 괄호닫기가 정상
// 적으로 열고 닫혀있는지를 확인하는 함수 examinePairedParenthesis를 작성하시오. 예를 들
// 어, “((()))”, “()()(())”, “(()())” 등은 정상적이며 함수 실행 결과 true를 반환하며 “(()))”, “()()(”,
// “(()(((”, “(()))(” 등은 비정상적이기 때문에 false를 반환한다.
// 함수 사용례:
// bool result = examinePairedParenthesis( “((()))” );
// printf(“%s”, result == true ? “true” : “false”); // “true”가 나옴
/**
 * Algorithm: Parenthesis check using stack
 * Input: array a[] 
 * Output: boolean
 **/
//Pseudocode
// boolean <- UNDEFINDE
// i <- 0
// CREAT STACK
// WHILE i < ARRAY_LENGTH
//      IF  "(" THEN
//          PUSH
//      ELSE IF ")" THEN
//          POP
//      i <- i + 1
// IF STACK==Empty
//     boolean <- TRUE
// ELSE
//     boolean <- FALSE
// RETURN boolean

