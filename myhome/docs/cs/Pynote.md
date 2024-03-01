## Object-Oriented Programming
* Instance attribute are found before class attributes
```py
class Account:
    interest = 0.02 # class attribute
    def __init__(self,account_holder):
        self.balance = 0
        self.holder = account_holder
    def deposit(self,amount):
        self.balance += amount
        return self.balance
    def __add__(self,other): #自定义加减法
        ...
    
    __radd__ = __add__  # 实现交换律
```
### Accessing Attributes:
* `getattr(tom_account,'balance')`
* `hsaattr(tom_account,'deposit')` 有则True，无则False
## Inheritance:
```py
class <name>(<base class>):
    <suite>
```
## @property
```py
class Link:
    empty = ()
    def __init__(self,first,rest=empty):
        self.first = first
        self.rest = rest
    @property
    def second(self):
        return self.rest.first
    
    @second.setter
    def second(self,value):
        self.rest.first = value
s = Link(3,Link(4,Link(5)))
#如果无@property
s.second()
# 4
#如果有@property
s.second
# 4
s.second = 6
s.second
# 6
```
## Else:
#### Memoization:
```py
def memo(f):
    cache = {}
    def memoized(n):
        if n not in cache:
            cache[n] = f(n)
        return cache[n]
    return memoized
```
#### Count:
```py
def count(f):
    def counted(n):
        counted.call_count += 1
        return f(n)
    counter.call_count = 0
    return counted
```
## 内置函数：
#### iter&next
* The order of items in a dictionary is the oreder in which they were added
* for 也实际上用的iter与next
* 在iter一个list时，如果同时改变了list内的元素，可能不能成功遍历list中的所有元素，可以通过copy一个新list来解决。
```py
#List
s = [3,4,5]
t = iter(s)
next(t)
# 3
next(t)
# 4
#Dic
d = {'one':1,'two':2,'three':3}
d['zero'] = 0
k = iter(d.keys()) # or iter(d)
next(k)
v = iter(d.valuse())
i = iter(d.items())
```
#### map&filter:
* `map(func,iterable)`:Only when we ask for the next element is the function applied and the result computed
```py
bcd = ['b','c','d']
m = map(lambda x : x.upper(),bcd)
next(m)
# 'B'
next(m)
# 'C'
```
* `filter(func,iterable)`: goon until True
```py
def double(x):
    print( x '->' 2*x)
    return 2*x
m = map(double,range(3,7))
f = lambda y : y >= 10
t = filter(f,m)
next(t)
#3 -> 6
#4 -> 8
#5 -> 10
10
next(t)
#6 ->12
```
#### enumrate
* `enumrate(sequnce,[strat=0])` # start是下标起始位置
```py
seasons = ['Spring','Summer']
list(enumrate(seasons))
# [(0,'Spring'),[1,'Summer']]
```
#### format 
```py
"{} {}".format("hello","world") # 按默认顺序
# 'hello world'
"{1} {0} {1}".format("hello","world")
# 'world hello world'
```
#### zip:
* zip()函数将可迭代的对象作为参数，将对象中对应的元素打包成一个个元组，然后返回由这些元组组成的列表
```py
a = [1,2,3]
b = [4,5,6]
c = [4,5,6,7,8]
zipped = zip(a,b)
lis(zipped)
[(1,4),(2,5),(3,6)]
list(zip(a,c))
[(1,4),(2,5),(3,6)]
zip(*zipped) # 与zipi相反,*zipped or 可理解为解压 即zip(*)
[(1,2,3),(4,5,6)]
```
#### reduce:
* `reduce(f,s,initial)`
  * f is a two-argument function
  * s is a sequence of values that can be the second argument 
```py
reduce(mul,[2,4,8],1)
# is equivalent to mul(mul(mul(1,2),4),8)
```
* 实现reduce的代码:
```py
# iteration
def reduce(f,s,initial):
    res = initial
    for i in s:
        res = f(i,res)
    return res
# recursion
def reduce(f,s,initial)
    if not s:
        return initial
    else:
        first,rest = s[0],s[1:]
        return reduce(f,rest,f(initial,first))
```
#### sum&max&all&any:
* sum:
```py
sum([2,3,4])
# 9
sum([2,3,4],5) # 5 is the start value,which is default 0
# 14
sum([[2,3],[4]],[])
# [2,3,4]
```
* max:
```py
max(range(10),key = lambda x : (x-4)*(x-2))
# 9 ,9 is the x make the func max
```
* all:`all(iterable)`Return True if bool(x) is True for all values x in the iterable.If the iterable is empty,return True.
* any:`nay(iterable)`Return True if bool(x) is True for any values x in the iterable.If the itarable is empty,return False.
## Assignment Name
1. python允许：`area,circ = pi*radius**2,2*pi*radius`
2. 函数定义：
    ```py
    def square(x):
        return x*x
    ```
    ```py
    def divide_exact(n,d=10):
        """当d无赋值时，默认为10"""
        return n//d,n%d
    quotient , remainder = divide_exact(2013,10)
    ```
3. 赋值顺序：
   ```py
   a = 1
   b = 2
   b,a = a+b,b
   """result is a = 2,b = 3"""
   ```
   Execution rule for assignment statements:
   1. Evaluate all expressions to the right of = from left to right
   2. Bind all names to the left of = to the resulting values in the current frame

4. Logical Operators
   * python中任何非0，非空的值均为true
   1. <left> and <right>:
      1. Evaluate the subexpression <left>
      2. If the result is a false value v,then the expression evaluates to v
      3. Otherwise,the expression evaluates to the value of the subexpression <right>
    So `2 and 3` would evaluate to 3
    2. <left> or <right>
       1. Evaluate the subexpression <left>
       2. If the result is true valuea v,then the expression evaluates to v
       3. Otherwise,the expression evaluates to the value of the subexpression <right>
    3. not <x>:
        * x为True，返回False，反之易得

---
## Function 
### Lambda Expressions:
   * evaluate to functions
   ```py
   s = lambda x : x * x
   s(12)
   # 144

   def compose(f,g):
        return lambda x : f(g(x))
    # : 可视为return
    # 与下边写法等价：
    # 函数返回函数:

   def compose(f,g):
        def h(x):
            return f(g(x))
        return h
   ```
---
### Function Currying
  * Transforming a multi-argument function into a single-argument,higher- order function
   ```py
    curry2 = lambda f : lambda x : lambda y : f(x,y)
    curry2(add)(2)(5)
    # 7
   ```
---
### Self Reference

```py
def print_sums(x):
    print(x)
    def sums(y):
        return print_sums(x+y)
    return sums
print_sums(1)(3)(5)
```

---
### Function Decorators:

```py
def trace(fn):
    def wrapped(x):
        print("yes")
        return fn(x)
    return wrapped
@trace
def triple(x):
    return x*3
#等价于↓
def triple(x):
    return x*3
triple = trace(triple)
```

---
* 函数方程：
```py
def search(f):
    x = 0
    while True:
        if f(x):
            return x
        x += 1
def suqare(x):
    return x * x
def inverse(f):
    """Return g(y) such that g(f(x)) -> x"""
    return lambda y:search(lambda x: f(x) == y)
```
---
* \*args
```py
def printed(f):
def print_and_return(*args):
    result = f(*args)
    print('Result:',result)
    return result
return print_and_return

printed_pow = printed(pow)
printed_pow(2,8)
# Result:256
# 256
```
---
### Recurison:
* Inverse Cascade:
```py
"""want:
1
12
123
1234
123
12
1
"""
def inverse_cascade(n):
    grow(n)
    print(n)
    shrink(n)
def f_then_g(f,g,n):
    if n:
        f(n)
        g(n)
grow = lambda n : f_then_g(grow,print,n//10)
shrink = lambda n : f_then_g(print,shrink,n//10)
```
---
## Exception:
### assert(断言)
* assert statements raise an exception of type AssertionError

```py
# assert <expression>,<string>
assert 3 > 2,'is true' # nothing happen
assert 2 > 3,'is false' # 报错，''内为报错显示的信息
# 应用：
def area_square(r):
    assert r > 0,'A length much be positive'
    return r*r
```

### raise:

```py
# raise <expression>
# <expression> must evaluate to subclass of BaseException or an instance of one
raise TypeError('Bad argument')
raise NameError('lalala')
```

### Try Statement:
* Try statement handle exceptions

```py
try:
    x = 1/0
except ZeroDivisionError as e:
    print('handing a',type(e))
    x = 0
```

```py
def invert(x):
    y = 1/x
    print('Never if x is 0')
    return y
def invert_safe(x):
    try:
        return invert(x)
    except ZeroDivisionError as e:
        print('Handled',e)
        return 0
invert_safe(1/0)
# 先operand,报错,所以func还没有来得及called
inverttttttt_safe(1/0)
# 此时报错是NameError,应该是先确认函数存在，再执行operand，最后再执行operator
```

---
## Container type:
### List:

* `s[:-1]` 从字符串第一个字符开始取，取到倒数第一个字符前为止
* `s[::-1]` 相当于reverse
* append & extend : append将参数当作一个元素增加到末尾，extend将参数作为一个列表扩展末尾

```py
s = [2,3]
t = [5,6]
s.append(t)
# s->[2,3,[5,6]] 
```

* slice assignment
  * can remove elements from a list by assigning [] to a slice

```py
s = [2,3]
t = [5,6]
s[0:0] = t
# s-> 5,6,2,3
s[3:] = t
# s->5,6,2,5,6
s = [2,3]
t = [5,6]
s[:1] = []
# s -> [3]
t[0:2] = []
# t ->[]
```

* pop:remove & return the last element
```py
s = [2,3]
t = [5,6]
t = s.pop()
#s -> [2]
#t -> 3
```

* remove:remove the first element equal to the argument
```py
t.remove(5)
#t -> [6]
```

* addition & slicing create a new lists containing existing elements

```py
a = s + [t]
b = a[1:]
a[1] = 9
#a -> 2,9,[5,6]
b[1][1] = 0
#b -> 3,[5,0]
#t -> [5,0]
#a -> [2,9,[5,0]]
```

```py
pairs = [[1,2],[2,2],[3,2],[4,4]]
same_count = 0
for x,y in pairs:
    if x == y:
        same_count += 1

odds = [1,3,5,7,9]
[x+1 for x in odds]
#[2,4,6,8,10]
[x for x in odds if 25 % x == 0]
#[1,5]
# 找约数：
def divisors(n):
    return [1] + [x for x in range(2,x) if n%x == 0]
```

---
### Dictionaries:
* 通过关键字确认值
* lists and dictionaries can't be keys
* unordered
```py
num = {'I':1,'V':5,'X':10}
num['X']
# 10
num.keys() # 显示所有关键字keys
num.values() # 显示所有值
num.items() # 显示关键字和值
num.get('X',0) # 0 is default
# 10
num.get('X-ray',0)
# 0
'X' in num
# True
num['O'] = 20 # 添加
{x:x*x for x in range(10)}
# {0:0,1:1,2:4..........}
```
---
### Tuples(元组):
* 元组和列表类似，不过元组的元素不能修改
* 可以用作字典中的关键字
```py
tup1 = () # 空元组
tup2 = (50,) #仅有一个元素时需要在元素后添加逗号
tuple([3,4,5])
# (3,4,5)
```
* An immutable sequence may still change if it contains a mutable value as an element
```py
s = ([1,2],3)
s[0][0] = 3
```
---
### sets:
* Duplicate elements are removed on construction
* 
```py
s = {'one','two','three','four','four'}
s
# {'one','two','three','four'}
s.union({'one','five'}) #增添元素
s.intersection({'six','five','four','three'}) #交集
# {'three','four'}
s
# {'one','two','three','four'}
# 并不改变s自身
```
### String
* Singe_quoted and double_quoted strings are equivalent
* triple_quoted string can span multiple lines
```py
'I am string!'
"I've got an apostrophe"
"""ha
ha
ha"""
s = 'Hello'
s.upper()
s.lower()
s.swapcase()
# 'hELLO'
```
---
## Generators:
* When a generator function is called,it returns a generator that iterate over its yields
```py
def plus_minus(x):
    yield x
    yield -x
t = plus_minus(3)
next(t)
# 3
next(t)
# -3
```
* `yield from`
```py
def a_then_b(a,b):
    yield from a
    yield from b
list(a_then_b([3,4],[5,6]))
# [3,4,5,6]
def countdown(k):
    if k > 0:
        yield k
        yield from countdown(k-1)
```
---
## Environment Diagrams:
* Every expression is evaluated in the contxt of an environment
* A name evaluates to the value bound to that name in the earliest frame of the current environment in which that name is found
* The parent of a func is the frame in which it was defined
* The parent of a frame is the parent of the function called
---
## Debug
### UnboundLocalError:
> https://www.runoob.com/w3cnote/python-unboundlocalerror.html
* 在内部函数修改同名全局变量之前调用变量名称，则引发错误
* 内部函数，不修改全局变量，可以访问全局变量
* 内部函数，修改同名全局变量，则python会认为它是一个局部变量