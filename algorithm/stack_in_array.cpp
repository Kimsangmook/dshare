#include <iostream>
#define SIZE 10
#define FALSE 0
#define TRUE 1 

typedef int Data;

typedef struct Array_Stack{
    Data array[SIZE];
    int top;
} Array_Stack;

void StackInit(Array_Stack *p){
    p->top = -1;
}

int isEmpty(Array_Stack *p){
    if(p -> top == -1)
        return TRUE;
    return FALSE;
}

void push(Array_Stack *p, Data data){
    if(++(p->top)>=SIZE)
    return;
    p->array[++(p->top)]=data;
}

Data pop(Array_Stack *p){
    if(isEmpty(p))
    return ' ';
    return p->array[(p->top)--];
}

int main(){
    Array_Stack stack;
    StackInit(&stack);
    push(&stack,1);
    push(&stack,2);
    int d=pop(&stack);
    printf("%d\n",d);
    return 0;
}

