#include <iostream>
#define FALSE 0
#define TRUE 1 

typedef struct LinkedList_Stack{
    char data;
    struct LinkedList_Stack* link;
} LinkedList_Stack;

LinkedList_Stack* top;

int isEmpty() {
    if(top == NULL){
        printf("Stack is Empty\n");
        return TRUE;
    }
    return FALSE;
}

void push(char data){
    LinkedList_Stack* newnode = (LinkedList_Stack*)malloc(sizeof(LinkedList_Stack));

    newnode->data=data; // 새로운 노드의 데이터에 값을 저장
    newnode->link=top; //현재 탑을 연결
    top=newnode; // 탑을 변경
}

char pop(){
    if(!isEmpty()){//비어있지 않을 경우
        LinkedList_Stack* temp = top;//temp포인터 변수를 선언해 맨 위 노드의 주소값을 저장
        char data = temp->data;//data 변수를 새로 선언하여 맨 위 노드의 데이터 저장
        top = temp -> link; //top 포인터에 2번째 노드의 주소값 저장
        free(temp);
        return data;
    }
}
void printStack(){
    if(!isEmpty()){
        LinkedList_Stack* temp = top;
        while(temp){
            printf("데이터:%c\n",temp->data);
            printf("링크:%d\n",temp->link);
            temp= temp->link;
        }
        printf("\n");
    }
}

int main()
{

    push('a');
    push('b');
    push('c');
    printStack();
    return 0;
}
