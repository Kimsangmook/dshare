#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "my_stack_class.h"
// #include "my_stack_class.cpp"

int main()
{
    myStack stack;
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    printf("%d\n",stack.pop());
    printf("%d\n",stack.peek());
    printf("%d\n",stack.pop());
    
    return 0;
}