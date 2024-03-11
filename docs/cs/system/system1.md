!!! abstract
    计算机系统I的粗略笔记
    参考课堂内容与《深入理解计算机系统》
## 课堂

### Information Representation
* 值的表示:
  *$(100101.01)_2 = 1*2^5+1*2^2+1+1*2^{-2}$ 
* 进制转换:
  * Decimal-十进制 Binary-二进制 Octal-八进制 Hexadecimal-16进制
  * 转化为10进制：
    * $(100101.01)_2 = (37.25)_{10}$
    * $(3A.CH) = (59.875)_{10}$
  * 10进制转化为其他进制(自己掌握计算方法):
    * $(1350.6875)_{10} = (1000 0111)_2$
    * $()_(10) = (0.1011)_2$
    * 8->2,16->2注意技巧
  * $2^{10}$ is kilo,denoted by K
* 二进制加减乘除(其实类似十进制)

### Representation of Numeric Data

* If A, B, M satisfy A = B + K * M, then recorded as  A ≡ B(mod M), call B and A congruence modulo M.
* The machine code before and after the conversion is unchanged,but reinterpreted
* Logical operators in C alwats return 0 or 1 (&& || !) 
  * `!0x41 -> 0x00` 
  * `!0x00 -> 0x01`
* In C,int is cast to unsigned!
* Sign Extension:
  * Make k copies of sign bit
  * $ X' = x_{w-1},x_{w-1}.......x_{w-1},x_{w-2}....,x_{0} $ 
  

## Lab

### L0-1
* 启动Logisim `java -jar logisim-evolution-3.8.0-all.jar `
* wire的电气特性:
  * wire必须被有且仅有一个assign输入
  * wire可以有0到多个assign输出
### 仿真

#### verilog的宏
* define
* ifdef
* ifndef