// 3 입력으로 주어진 문자열에 있는 단어들의 개수를 반환하는 countWords라는 함수를
// 작성하시오. 하나의 단어는 공백문자없이 연속으로 이어져 있는 문자들의 집합으로 정한다. 이
// 때 공백문자는 연속으로 나타날 수도 있다. 일반적인 공백문자뿐만 아니라 탭키로 작성한 문
// 자 등도 공백문자로 취급한다. 함수 사용예:
// int nWords = countWords(“Hello World. Here is the train\n”);
// printf(“%d”, nWords); //6개가 출력됨.
/**
 * Algorithm: Count word in array using stack
 * Input: array a[] 
 * Output: count_sum
 **/
//Pseudocode
// countSum <- 0
// i <- 0
// vlaue <- ""
// CREATE STACK
// WHILE i < ARRAY_LENGTH
//      CASE a[i] != value THEN
//          PUSH    
//      CASE a[i] = vaslue THEN
//           IF STACK is Empty
//              CONTINUE
//           ELSE 
//              POP ALL
//              countSum <- countSum + 1
//      i <- i + 1
// RETURN countSum

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

int countWords(const char* str);

int main(){
    int nWords = countWords("Hello World. Heare is the train  goood");
    printf("%d\n",nWords);
}
// quiz3
int countWords(const char* str)
{
    int countSum = 1;
    int i = 0;
    char value= ' ';
    Stack stack;
    StackInit(&stack);  
    while( i < strlen(str)){
        if (str[i] != value){
            push(&stack,str[i]);
            // printf("넣었습니다.\n");
        }
        else{
            if(!isEmpty(&stack)){
                do{
                    pop(&stack);
                    // printf("글자를 뺍니다.\n");
                }while(!isEmpty(&stack));

                countSum++;
            }

        }
        i++;
    }
    return countSum;
}