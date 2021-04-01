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


#include <iostream>
#include <string.h> 
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <vector> 
#include <bits/stdc++.h>

using namespace std;

void excludeRedundantLetters( char *str ); // quiz2 함수

int main()
{   
    char data[100]="Hellow world\n" ;
    printf("%s",data);
    excludeRedundantLetters( data );
    printf("%s",data);

    return 0;
}

// void excludeRedundantLetters( char *str )
// {
//     char value;
//     int k = 0;
//     int i = 0;
//     while ( i <strlen(str)){
//         value = str[i];
//         printf("%c\n",value);
//         k = i +1;
//         printf("%d\n",k);
//         while ( k < strlen(str)){
//             if( str[k]==value){
//                 printf("%c",value);
//                 printf("!!!!!!\n");
//             }
//             k++;
//         }

//         i++;
//     }
// }
void excludeRedundantLetters(char *str) {
    vector<bool> used(1 << CHAR_BIT);
    char* q = str;
    printf("for문전 %s\n",q);
    for (unsigned char* p = (unsigned char*)str; *p != NULL; ++p) {
        printf("%s\n",p);
        if (!used[*p]) {
            printf("%d\n",used[*p]);
            *q++ = *p;
            used[*p] = true; 
        }
    }
    printf("for문끝 %s\n",q);
    *q = NULL;
}
