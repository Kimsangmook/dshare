/*별찍기
* 
*
*/
#include <iostream>

int main()
{
    for( int i = 0; i <5; i++){
        for( int j = 5; j > i; j--){
        printf(" ");
        }
        // for( int j = 0; j <i; j++){
        // printf("&");
        // }
        for( int k= i-j; )
        printf("*");
        printf("\n");
    }
    return 0;
}
