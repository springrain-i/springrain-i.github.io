# OOP

## Introduce

### Buzzwords
1. encapsulation 封装 
2. inheritance 继承
3. polymorphism 多态
4. overriding 覆盖 区别$\rightarrow$overwrite 改写
5. interface 界面,接口
6. cohesion 内聚(内部完整)
7. coupling 耦合: 两个东西间互相关联的程度 OOP在coupling越弱越好
8. Collection Classes 容器
9. template 模板
10. responsibility-driven design 责任驱动设计

### Introduce
```c
#include <iostream>
using namespace std;    // using directive,指如果没有找到变量，就去std中找
int main() {
    int age;
    cin >> age;
    cout << "Hello, World!" << endl; //这里的<<是运算符,相当于 a+b,最后再返回一个cout变量
    return 0;
}
```
### Format output
```c
#include <iomanip>
cout << setw(10) << setprecision(2)  << 3.1415926 << endl; // setw(10)表示占10个字符, setprecision(2)表示保留两位小数
```

## String

### initialize
```c
#include <string>
string s1 = "hello";
string s2("bye");
string s3{"see see"}; // c++11才有
getline(cin, s1); //Read a whole line
string s4 = s1 + s2; // s4 = "hellobye"
string s5(s4, 3, 4); // s5 = "lobe"
cout << s4.length() << endl;
cout << s5.substr(2,5) << endl; //pos, len


s1.find(s2); //返回s2在s1中的位置(index),如果没找到返回-1
```
!!! note
    1. Every thing is a an object in C++.

### Alter string
```c
#include <string>
insert(size_t pos, const string& str); // insert str at pos
erase(size_t pos, size_t len); // erase len characters from pos
append(const string& str); // append str to the end
replace(size_t pos, size_t len, const string& str); // replace len characters from pos with str
```

Search String:`size_t find(const string& str, size_t pos = 0) const;`

## Container\Collection(容器)

!!! note
    Collection is an object that can store an arbitrary number of other objects

### vector
```cpp
#include <vector>
int main(){
    vector<int> v;
    for(int i = 0;i < 10; i++){
        v.push_back(i);
    } 
    cout << v.size() << endl; //10 元素数目
    cout << v.capacity() << endl; //16 容量
    for(int i = 0;i < v.size;i++){
        cout << v[i] << endl;
        cout << v.at[i] << endl;
    }
}
    vector<int>::iterator it;
    for(it = v.begin(); it < v.end();it++){
        cout << *it << endl;
    }
    v.resize(5); //v.size() = 5
```

Two ways to use vector:
* Preallocate
```cpp
vector<int> v(100);
v[80] = 1;
v[200] = 1; //wrong
//但是如果push_back,还是会使capacity增加
```
* Grow tail
```cpp
vector<int> v;
while(cin >> i){
    v.push_back(i);
}
```
!!! note
    Vector is a generic class

### List
```cpp
#include <list>
x.push_back(item);
x.push_front(item);
x.pop_back();
x.pop_front();
x.erase(pos1,pos2); //删除pos1到pos2之间的元素
x.insert(pos, item); //在pos位置插入item
list<int>::iterator it;
for(it = x.begin(); it != x.end(); it++){
    cout << *it << endl;
} //注意,这里必须是!=,而不是<,因为list的地址不连续,而vector是可以的 
```

### Map
```cpp
#include <map>
#include <string>
map<string, int> price;
price["apple"] = 10;
map.count(key); //返回key的个数
map<string, int> m{{"cpu",10},{"gpu",20}};
```

### Iterators
```cpp
#include<string>
#include<list>
list<string>::iterator it;
list<string> s;
it = s.begin(); //指向第一个元素
it = s.end(); //指向最后一个元素的下一个位置
s--; //此时指向最后一个元素
*s = "hello" //修改元素
```

```cpp
#include <algorithm>
#include <list>
list<int> L;
vector<int> V;
copy(L.begin,L.end,V.begin); //将L中的元素复制到V中
for(int i = 0;i <= 5;i++){
    L.push_back(i);
}
copy(L.begin(),L.end(),ostream_iterator<int>(cout,","));
cout << endl;; //0,1,2,3,4,5,
```

For each:是一种只读循环,即相当于每次循环先进行了`entry = entries[i]`的赋值
```cpp
int arr[] = {1,2,3,4,5};
for(int i : arr) cout << i << endl;
//C11:
vector<int> vec={1,2,3,4,5};
for(auto i : vec) cout << i << endl; //auto自动推断类型

map<stirng,string> entries;
for(auto entry : entries){ .....} //此时entry的类型是pair<string,string>
```
### Typedef
```cpp
using PB = map<string,list<string>>;
//等价于
typedef map<string,list<string>> PB;

```

### Pitfalls
```cpp
vector<int> v;
v[100] = 1; //wrong
if(foo["bob"]==1) //wrong,会silently created entry "bob"
//Don't use count() on list<>, it's O(n), use find or empty

//-------------
list<int> L;
list<int>::iterator it;
it = L.begin();
L.erase(it);
++it; //wrong, it is invalid now
//right way:
it = L.erase(it); //返回下一个元素的位置
//--------------
```

## Class

### resolver "::"
```cpp
struct S{
    int a;
    void f();
}

void S::f(){
    ::f(); //Would be recursive otherwise;
    ::a++; //Select the global a
    a--; //The a at class scope
}

int main(){
    S s;
    s.a = 1;
    s.f();
}
```
As a matter of fact,There is a hidden parameter:`this`
```cpp
void S::f(S *this){....};
```

### Initialize
上边的例子中是在创建对象后再对对象内的变量进行赋值,而下边是在创建对象时就对对象内的变量进行赋值
```cpp
struct Point{
    int x = 0;
    int y = 0; //inplace init
    Point(int x,int y); //constructor 构造函数
    void init(int x,int y);
    void print() const;
    void move(int dx,int dy);
}
Point::Point(int x,int y){
    this->x = x;
    this->y = y;
}
Point a(0,0); //a.x = 0, a.y = 0 ,创建对象时会自动调用构造函数
a.init(1,2);
a.move(2,2);
a.print();
```
Init list:
```cpp
struct Point{
    int x = 0;
    int y = 0;
    Point(int xx,int yy): x(xx),y(yy);
}
```
在C++11中,还可以直接设置默认值:
```cpp
struct Point{
    int x = 0;
    int y = f();
    int f(){return 0+x;}
}
```

### Destructor
谁先被构造,谁后被析构(逆序)
```cpp
struct Y{
    ~Y(); //没有参数,没有返回类型,自动会被调用
}

Y::~Y(){
    cout << "Y destructed" << endl;
}
```
## Inside Object
### Public,Private
!!! note
    Public means all member declarations that follow are available to everyone
    Private ....
    An object can access private member of another object of the same class
```cpp
struct B{
private:
    char j;
    float f;
public:
    int i;
    void func();
    void ff(B* p);
};

void B::func(){
    ...
}

int main(){
    B b;
    b.i = 1; //OK,i is public
    //b.j = "1"; //wrong, private
    //b.f = 1.0; //wrong, private
}
```
### Friend(友元)
!!! note
    Friend is a way to explicitly grant access to a function that isn't a member of the structure

```cpp
struct Y{
    void f(X*);
};

struct X {
    private:
        int i;
    public:
        friend void g(x*, int i) //Global friend
        friend void Y::f(X*) //Struct member
        friend struct Z; //Entire struct
}

void g(X* x, int i){
    x->i = i;   //此时就可以直接访问X的私有变量
}
```

!!! Class vs Struct
    Class defaults to private;Struct defaults to public
    C++中的class和struct是等价的,只是默认的访问权限不同

* Fields(字段): Member variables
* 全局变量在main函数之前构造,在main函数之后析构
* 要尽可能避免使用全局变量
### Static

Static local variable: Value is remembered for entire program
```cpp
void f(){
    static int i = 0; //实际上,他就是一个全局变量,只是他的作用域只在f()中,也仅定义一次
    i++;
    cout << i << endl; //1,2,3,4,5
}
```

!!! note
    对于全局变量or静态变量,他的空间是在程序开始时就分配好的,而不是在函数调用时分配
Static member variable:
    * Global to all class member function
    * Initialized once,at tile scope


Static member variable:你在其中一个对象中修改了这个变量,那么同一个类的其他对象中的这个变量也会被修改.
实际上这些对象访问的是同一个变量



|      |scope|lifetime|
|:------:|:-----:|:--------:|
|Member|in class| object|
|Static Member|in class|global|

!!! note
    Class 内的变量和函数都是声明

```cpp
//如果.h里有静态变量,则在.cpp中要重新定义一次
//.h文件
class StatMem{
public:

    static int m_h;
    int m_w;
}
//.cpp文件

int StatMem::m_h; 


int main(){

}
```


Static member function:
静态成员函数没有this指针,只能访问静态成员变量

To use static members:
```cpp
<class name>::<static member>
<obejct variable>.<static member>

```
### Reference
!!! note
    Reference is a new way to manipulate objects in C++

```cpp
char c; //a character
char *p = &c; //a pointer to a character
char &r = c; //a reference to a character 此处的&是引用符号,可以裂理解为c的别名,即r和c是同一个东西

void f(int &r){
    r = 1;
}

int main(){
    int i = 0;
    f(i);
    cout << i << endl; //1
}
```

!!! Restrictions
    No references to references
    No pointers to references
    No arrays of references
    Reference to pointer is ok

#### Left Value vs Right Value:
* Left value can be simply regarded as value that can be used at the left of assignment
    * Variable,reference
    * Result of operator `*, [] , . ,->`
* Right value are values can be used at the right hand of the assignment
    * Literal
    * Expression

left-value reference:

right-value reference:

```cpp
void fun(int &lref){
    cout << "l-value reference" << endl;
}

void fun(int &&rref){
    cout << "r-value reference" << endl;
}

int main(){
    int a = 10;
    fun(a); //l-value reference
    fun(10); //r-value reference
}
```

### const
```cpp
void fun(const int &clref){
    cout << "const l-value reference" << endl;
}
```
Such a func can accept right-value when there is no func takes right-value

```cpp
const int class_size = 1;
int finalGrade[class_size]; //ok
int x;
cin >> x;
const int size = x;
int grades[size]; //wrong


char * const p = "abc"; // p is const
*p = 'c'; //error
p++; //error
const char *p = "abc "; //(*p) is const
*p = 'b'; //error


int *ip;
const int ci = 3;
ip = &ci; //error
```

#### Const objects
该对象的成员变量都是const

```cpp

int Data::get_day() const{
    //此时就无法修改成员变量,也不能带哦用non-const func
}
```

