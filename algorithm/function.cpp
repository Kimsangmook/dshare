#include <stdio.h>
#include <stdlib.h>
#include <string.h>


void convert(int a);
int convert2();
void swap(int *x, int *y);
void swap(int x, int y);


int main()
{
    int a=100;
    int b =10;
    convert(a);
    printf("%d\n",a);
    // a=convert2();
    // printf("%d\n",a);
    swap(&a,&b);

    return 0;
}

void convert(int a)
{
    printf("%d\n",a);
    a=10;
    printf("%d\n",a);
}

int convert2()
{
    return 10;
}
// void swap(int x, int y)
// {
//     int temp;
//     temp = x;
//     x = y;
//     y = temp;
// }

void swap(int *x, int *y)
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}