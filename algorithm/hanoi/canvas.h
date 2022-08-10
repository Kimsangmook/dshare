#ifndef __MY_CANVAS__
#define __MY_CANVAS__
#include <iostream>
#include <string>

#define MAX 100

using namespace std;

class Canvas{
    private:
        string line[MAX];
        int xMax, yMax;
    public:
        Canvas(int nx = 10, int ny = 10);

};

Canvas::Canvas(int nx = 10, int ny = 10):xMax(nx),yMax(ny){

}



#endif