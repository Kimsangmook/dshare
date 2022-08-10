#ifndef __MY_STACK__
#define __MY_STACK__

class myStack
{
    private:
        int top;
        int capacity;
        int *data;
        
    public:
        myStack();
        ~myStack();
        // myStack* get();
        bool is_empty();
        bool is_full();
        void push(int item);
        int pop();
        int peek();

};

myStack::myStack()
{
    top = -1;
    capacity = 1;
    data = (int *)malloc(capacity*sizeof(int));
}

myStack::~myStack()
{

}

// myStack* myStack::get()
// {
//     return this;
// }

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


#endif