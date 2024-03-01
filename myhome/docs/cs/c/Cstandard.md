# varible function

### **stdio.h**

#### `printf  %d[flags][width][.prec][hil]type`

返回值：输出的字符数

***flag:***

* \- 左对齐
* \+ 在前边放+ 或 -
* (space) 正数留空
* 0 0填充

***wdith or prec:***

* number 最小字符数
* \* 下一个参数是字符数 `printf("%*d",6,123);` 即 `printf("%6d",123);`
* .number 小数点后的位数
* .* 下一个参数是小数点后的位数 

***type:***

* `printf("%dty%n",12345,&num);`  
  `printf("%d",num);`  
  此时第二个printf中num大小，即为第一个printf输出字符的个数(7)

#### `scanf: %[flag]type`

返回值：读入的项目数

***flag:***

* \* 跳过
    * `scanf("%*d%d",&num);` 先跳过一个，再读一个，如果输入123  345 那么读入345
* 数字 最大字符数
* [...] 所允许的字符
    * $GPRMC,004319.00，  
    `scanf("%*[^,],%[^,]",sTime)`那么$GPRMC是逗号前的，都跳过，‘，’也跳过，只读到了004319.00




### **math.h**

```c
double acos(double x);
double asin(double x);
double atan(double x);
double cos(double x);
double sin(double x);
double tan(double x);
double exp(double x);
double log(double x);
double log10(double x);
double pow(double x, double y);   //x为底数，y为指数
double sqrt(double x);
double ceil(double x); 返回大于或等于x的最小的整数值
double fabs(double x); 
double floor(double x); 返回小于或等于x的最大的整数值
```

### **string.h**
    
`strlen(const char *s);` 返回s的字符串长度（不包含结尾的0）

* 比较函数

    ```c
    int memcmp(const void *s1, const void *s2, size_t n);
    int strcmp(const char *s1, const char *s2);
    int strncmp(const char *s1, const char *s2, size_t n);
    //0: s1==s2
    // 1: s1>s2
    //-1: s1<s2
    ```

* 复制函数
    ```c
    void *memcpy(void *dest, const void *src, size_t n);
    void *memmove(void *dest, const void *src, size_t n);
    char *strcpy(char *dest, const char *src); 
    char *strncpy(char *dest, const char *src, size_t n);
    ```

    ```c
    char *dst = (char*)malloc(strlen(src)+1);
    strcpy(dst,src);
    ```

* 连接函数
    ```c
    char *strcat(char *dest, const char *src);
    char *strncat(char *dest, const char *src, size_t n);
    ```
* 查找函数
    ```c
    void *memchr(const void *s, int c, size_t n);
    char *strchr(const char *s, int c);
    char *strrchr(const char *s,int c); //从右边search
    char *strstr(const char *s1, const char *s2);
    char *strcasestr(const char *s1,const char * s2); //忽略大小写
    //返回NULL表示没有找
    ```

- 寻找第二个字符的操作:
            
    ```c
    char s[] = "Hello";
    char *p = strchr(s,'l');
    p = strchr(p+1,'l');
    ```
            
- 复制某个字符前的内容

    ```c
    char s[] = "Hello";
    char *p = strchr(s,'l');
    char c = *p;
    *p = '\0';
    char *t = (char*)malloc(strlen(s)+1);
    strcpy(t,s);
    printf("%s",t);
    free(t);
    *p = c;
    ```

### **stdlib.h**

随机数
    
```c
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main()
{
    srand(time(0));
    int a = rand();

    //a为随机数
}
```
* 整数算术函数
    ```c
    int abs(int n); //绝对值
    div_t div(int numer, int denom); //计算商和余，结果作为`div_t`的结构返回，这个结构包含成员`quot`和`rem`
    long labs(long n); //类似于abs，但用于长整数
    ldiv_t ldiv(long numer, long denom); //用于长整数
    ```
* 查找和排序函数
    ```c
    void *bsearch(const void *key, const void *base, size_t n, size_t size, int (*compar)(const void *, const void *));

    void qsort(void *base, size_t n, size_t size, int (*compar)(const void *, const void *));
    ```

**qsort详解**

* `base`数组名，元素个数，数组元素所占字节（int，double），排序原则（递增，递减，奇偶交叉），在使用qsort前需要一个函数：

    ```c
    #include<stdlib.h>
    int cmp(const void *a,const void *b)
    {
        return *(int*)a - *(int*)b;
    }
    //此时表示递增，若想递减只需将a，b换位
    qsort(num,n,sizeof(int),cmp)
    ```  
    ```c
    //浮点数（double） 

    //需要注意浮点数会存在精度损失的问题，所以我们需要通过比较，来返回1或-1，以确定是增序还是降序。
    int cmp(const void *a,const void *b) {
        return *(double*)a>*(double*)b?1:-1;
    }
    ```

    ```c
    //字符
    int cmp(const void *a,const void *b) {
        return *(char*)a-*(char*)b;
    }
    ```

    ```c
    //结构体
    struct node{
        int i;
        double j;
        char k;
    };
    int cmp(const void *a,const void *b) {
        return (*(node*)a).i-(*(node*)b).i;
    }
    ```

**bsearch详解**

* `key`指向要查找的元素的指针，`base`数组名,元素个数，数组元素所占字节(int,double),比较原则，如果查找成功，该函数返回一个指向数组中匹配元素的指针，否则返回空指针

    ```c
    //比较原则：
    int cmpfunc(const void * a, const void * b)
    {
    return ( *(int*)a - *(int*)b );
    }
    ```

* 文本转换

    ```c
    double atof(const char *str); //将字符串转换为双进度浮点数
    int atoi(const char *str); //将字符串转化为整数,字符串中必须要有终止符
    long atol(const char *str); //转化为长整数
    double strtod(const char *str, char **endptr); 
    long strtol(const char *str, char **endptr, int base); //base 基数，必须介于 2 和 36（包含）之间，或者是特殊值 0。如果 base 为 0，则会根据字符串的前缀来判断进制：如果字符串以 '0x' 或 '0X' 开头，则将其视为十六进制；如果字符串以 '0' 开头，则将其视为八进制；否则将其视为十进制。base 为10时，即为十进制
    unsigned long strtoul(const char *str, char **endptr, int base);
    ```

    strtod的实例：
    ```c
    int main()
    {
    char str[30] = "20.30300 This is test";
    char *ptr;
    double ret;

    ret = strtod(str, &ptr);
    printf("数字（double）是 %lf\n", ret);
    printf("字符串部分是 |%s|", ptr);

    return(0);
    }
    ```

    ```c
    数字（double）是 20.303000
    字符串部分是 | This is test|
    ```




* 内存管理
    ```c
    void *calloc(size_t nobj, size_t size);
    void free(void *ptr);
    void *malloc(size_t size);
    void *realloc(void *ptr, size_t size);
    ```

    * malloc（动态内存）free()

        - 返回的结果是void* ,需要类型转换为所需的
        - (int*)malloc(n*sizeof(int))
        - 最后需要free
        - 申请失败则返回0，或者叫做NULL
        - free()将申请的来的空间还给系统

        ```c
        void *p;
        int i;
        p = malloc(3);
        free(p); //right
        p = &i;
        free(p); //wrong
        ```

    * calloc与malloc的区别是，calloc会将分配的内存初始化为0
        ```c
        int i, n;
        int *a;
        scanf("%d",&n);
        a = (int*)calloc(n, sizeof(int));
        for( i=0 ; i < n ; i++ ) 
        {
            scanf("%d",&a[i]);
        }
        ```

    * realloc尝试调整之前用malloc或calloc所分配的ptr所指向的内存大小。

### **ctype.h**

字符判断函数

```c
int isalnum(int c) //检查所传字符是否是字母和数字,否则返回0
int isalpha(int c) //字母
int isdigit(int c) //数字
int islower(int c)  //小写
int isupper(int c) //大写
int isspace(int c) //空白字符，判断空格，水平制表符\t,换行符\n,回车符\r,换页符\f,垂直制表符\v
int isblank(int c) //空格字符，仅判断空格，水平制表符\t
```

字符转换函数

* `int tolower(int c)`
* `int toupper(int c)`