#include <iostream>

typedef struct NODE{
    int data;          //데이터를 저장할 변수
    struct NODE* next; //다음 노드의 주소를 저장할 자기참조 구조체포인터 변수
} NODE;

int main(){
    char d;
    NODE* head = (NODE*)malloc(sizeof(NODE));//NODE구조체 크기만큼 할당, 반환되는 주솟값을 포인터형으로 형변환
    head->next=NULL;
    
    NODE* node1=(NODE*)malloc(sizeof(NODE));
    node1->data = 10;
    node1->next=head->next;
    head->next = node1;
    
    NODE* node2=(NODE*)malloc(sizeof(NODE));
    node2->data = 20;
    node2->next=head->next;
    head->next = node2;

    NODE head1;
    head1.next=NULL;
    
    NODE node3;
    node3.data=30;
    node3.next=head1.next;
    head->next=&node3;
    


}