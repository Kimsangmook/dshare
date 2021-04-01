// 공백 문자가 포함된 문자열을 입력변수로 받아 문자열내 모든 공백문자들을 %20 문
// 자열로 변환하는 함수 convertString 함수를 구현하시오. 이때 입력으로 전달받은 문자열에
// 할당된 문자열의 크기로 새로 변환될 문자열을 모두 포함할 수 있을만큼 크다고 가정한다.
// 함수 원형: void convertString(char* input);
// 사용례:
// char input[100] = “Hello World. Nice to Meet you.”;
// convertString(input);
// printf(“%s\n”, input);
// 결과: Hello%20World.%20Nice%20to%20Meet%20%20%20you.

/**
 * Algorithm: Replace spaces in %
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

#include <iostream>
#include <string.h> 
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <vector> 
#include <bits/stdc++.h>

using namespace std;


void convertString(char* input); // quiz5

int main(){
    char input[] ="Hello World. Nice to Meet you.";
    convertString(input);
    printf("%s",input);

    return 0; 
}

void convertString(char* input)
{
    int i = 0;
    char value= ' ';
    char *data= "%";
    // printf("%s\n",input);
    while(i<strlen(input)){
        if (input[i] == value){
            // printf("공백있습니다\n");
            input[i]=*data;
        }
        i++;
    }
}
