!!! abstract
    因为git提交时不想每次都进行繁琐的劳动而学习shell

    属于速学，质量不太好，能够满足看懂，模仿出脚本的需求即可~

# Shell语法

## 1. 注释
单行与多行注释，EOF可以用其他字符替代
```sh
# author: SpringRain-i
# time: 2024/03/01
:<<EOF
作者: 春雨
时间: 2024/03/01
EOF
```
## 2. 输出
echo命令
```sh
# 1. 输出字符串
echo "Hello"

# 2. 输出变量
read -p "输入姓名:" name
echo $name
echo "Hello,$name"
echo "Hello,${name}"

# 3. 输出换行与不换行
echo -e "Ok! \n" # -e 开启转义
echo -e "It is a test"

echo -e "Ok! \c" # -c 不换行
echo -e "It is a test"

# 4. 显示命令执行解惑，反引号
echo `date`

# 5. 原样输出字符串，不进行转义或取变量，单引号
echo '$echo\'

# 6. 显示结果定向至文件
echo "It is a test" > myFile.js
```

## 3. 输入
```sh
read -p "xx" : name # -p指定提示语

read -p "xx" -t 5 name # -t指定等待输入的秒数，计时满时，read命令返回一个非零提出状态

read -p "xx" -n3 name # -n指定输入的字符数量，超出时自动退出

read -p "xx" -s password # -s使输入的数据不显示（其实是将文本颜色调整成与背景相同的颜色），输入密码时常用
read -r -p # 在参数输入中，用'/'表示没有输入完，换行继续输入，如果希望行最后‘/’作为有效字符，或希望/n这类特殊字符生效，也应采用-r
```
读取文件:
```sh
#!/bin/bash

count=1 # 赋值语句，不能加空格
cat test.txt | while read line
do
    echo "Line $count:$line"
    count=$[ $count+1 ] #注意括号中的空格
done
exit 0

# 执行结果:
Line 1:123
Line 2:456
Line 3:runoob
```
## 4. 变量

### 4.1 定义变量
赋值:`i="springrain-i"`
注意事项:
* 变量名与等号间不能有空格，否则报错`command not found`

### 4.2 使用变量
变量外用花括号是为了帮助解释器识别变量边界
```sh
# 只读变量的值不能被改变,输出，删除
myurl = "https://springrain-i.github.io/cs/Pynote/"
readonly myurl

# 删除变量
myurl = "https://springrain-i.github.io/cs/Pynote/"
unset myurl
```
### 4.3 变量类型

运行shell时，存在三种变量:
* 局部变量
* 环境变量
* shell变量
具体类型:
* 字符串类型：
  * 单引号中的任何字符原样输出
  * 双引号中可以有变量且可出现转义字符
* 数字类型
* 布尔类型

#### 4.3.1 字符串

```sh
# 1.获取字符串长度

str = "haha"
echo ${#str} #4
echo ${#str[0]} #4

# 2.提取字符串
echo ${str:1:4}

# 3.查找字符串
# 查找字符i或o的位置(哪个先出现就计算哪个)
echo `expr index "$string" io` 
```
## 5. 运算符
## 6.条件
如果if/elif 条件和then在同一行，则需要加分号;即`if/elif 条件;then`

### 6.1 if
```sh
if 条件 # if 条件开始
then
    # 条件为真,执行
else
    # 条件为假，执行
fi # 条件结束

# 例子：

if [ $name = "lsx"]
then
    echo "hello,you"
else
    echo "hello,i"
fi

# if....elif
if 条件一
then
    # 条件一为真，执行
elif 条件二
then # 条件二为真，执行
...
else
    # 上边均为假，执行
fi
```
### 6.2 case...esac

是一个分支选择结构,两个分号(;;)表示执行结束(break)

```sh
case 值 in
    模式一)
        ...一操作...
        ;;
    模式二)
        ...二操作...
        ;;
esac
```

## 7. 循环

```sh
while 表达式
    do
        command...
    done
```

## 8. 函数

函数定义格式:
```sh
[function] funname [()]
{
    action
    [return init;]
}
```

说明
* 可以用function fun()定义，也可以直接fun()定义
* 参数返回，可以显示加return返回，如果不加，将以最后一条命令运行结果作为返回值
* 所有函数使用前必须定义,因此要放在脚本开始部分
```sh

# 在shell中，调用函数时可以向其传递参数，在函数内部，通过$n的形式或取参数的值，例如,$1表示第一个参数
funWithParam(){
    echo "第一个参数 $1"
    echo "第十一个参数 ${11}" # n>=10时要加{}
    echo "参数总数有 $# 个"
    echo "作为一个字符串输出所有参数 $*"
}
```

# 应用

## 1. git 自动化部署脚本

### 1.1 一期需求

首先执行`git status`,了解当前工作区是否有更改。做了二次确认，确认是否继续提交这些变化，如果需要在提交前对这些变化进行处理，可输入`no`结束流程。
```sh
echo "<<>温馨提示：请将该脚本放在与项目路径同级的文件中>"

# 如果当前工作区没有更改则无需继续进行
git status

# 确定是否要提交
read -r -p "是否继续提交？【Y/n】" input

case $input in
    [yY][eE][sS]|[yY])
        echo "继续提交"

        git add .
        git status

        # 输入提交说明
        read -p "请输入本次提交的备注说明" commit
        echo "<<将暂存区内容提交到本地仓库：开始>>"
        git commit -m ${commit}

        echo "<<提交到远程仓库：开始>>"
        git push

        echo "<<恭喜您，本次推送完毕！(╹ڡ╹ )>>"
    [nN][oO]|[nN])
        echo “中断提交”
        exit 1
        ;;
esac
```
