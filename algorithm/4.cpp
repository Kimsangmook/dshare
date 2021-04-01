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

#include <iostream>
#include <string.h> 
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <vector> 
#include <bits/stdc++.h>


#define STACK_LEN 100
#define TRUE 1
#define FALSE 0

using namespace std;

//스텍

typedef char Data;

typedef struct _stack{
    Data arr[STACK_LEN];
    int top;
} Stack;           
 
void StackInit(Stack * sp){
    sp->top = -1;
}                   

int isEmpty(Stack *sp){
    if(sp->top == -1) 
        return TRUE;
    return FALSE;
}                   
 
void push(Stack *sp, Data data){
    if((sp->top)+1 >= STACK_LEN) 
    return;
    sp->arr[++(sp->top)] = data;
}
 
Data pop(Stack *sp){
    if(isEmpty(sp)) 
    return ' ';
    return sp->arr[(sp->top)--];
}
bool examinePairedParenthesis(const char* str);

int main(){
    bool k = examinePairedParenthesis("((()))");
    printf("%s\n", k == true ? "true": "false");

}

bool examinePairedParenthesis(const char* str)
{   
    bool Boolean;
    int i = 0;
    Stack stack;
    StackInit(&stack);
    char value[]= "()";
    while(i< strlen(str)){
        if(str[i]==value[0]){
            push(&stack,str[i]);
        } else if(str[i]==value[1]){
            pop(&stack);
        } 
        i++;
    }
    Boolean= isEmpty(&stack);
    return Boolean;
}