#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "my_stack_class.h"

myStack::myStack()
{
    top = -1;
    capacity = 1;
    data = (int *)malloc(capacity*sizeof(int));
}

myStack::~myStack()
{

}

bool myStack :: is_empty()
{
    return (this->top ==-1);
}

bool myStack :: is_full()
{
    return (this->top == (this -> capacity -1));
}

void myStack :: push(int item)
{
    if(is_full()){
        this->capacity *= 2;
        this->data = (int *)realloc(this->data,this->capacity*sizeof(int));
    }

    this->data[++(this->top)]=item;

}
int myStack :: pop()
{
    if(is_empty()){
        fprintf(stderr,"스택 공백 에러\n");
        exit(1);
    }
    else return this->data[(this->top)--];
}
int myStack :: peek()
{
    if(is_empty()){
        fprintf(stderr,"스택 공백 에러\n");
        exit(1);
    }
    else return this->data[this->top];
}
