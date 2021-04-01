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
//      IF a[i] = value THEN
//          countSum <- countSum + 1
//      i <- i + 1
// RETURN countSum

#include <iostream>
#include <string.h> 
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
using namespace std;

int countMatchedNumberLetterInString( const char *str, int digit); // quz1 함수
void my_itoa(int n, char *st); // 숫자 -> 문자로 변환하는 함수

int main()
{   
    int count = countMatchedNumberLetterInString( "1122334433113349132012344", 4);
    cout << count << endl;

    return 0;
}

int countMatchedNumberLetterInString( const char *str, int digit)
{
    int countSum = 0;
    int i = 0;
    char value[10];
    my_itoa(digit,value);
    while ( i < strlen(str)){
        if(str[i]==value[0]){
            countSum++;
        }
        i++;
    }
    return countSum;
}

void my_itoa(int n, char *str)       //input int char
{
    int count, i;                   
    count = (int)(log10(n)+1);
    for(i=count-1;i>=0;i--)
    {
        str[i]=(n%10)+'0';          //into char
        n=n/10;

    }
    str[count]='\0';                // end \0
}

 