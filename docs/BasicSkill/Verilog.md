# WSL下vscode配合verilator实现语法纠错

1. 安装vscode-verilog
2. `sudo apt-get install iverilog`安装verilator
3. 在插件的设置中,将verilog>Linting:Linter为iverilog
4. 在Verilog › Linting › Iverilog: Arguments中填入-i参数.
5. 注意,只有在保存后才会进行语法检查.

!!! note
    注意,一些错误是无法检查出的

```verilog
wire [63:0] c;
wire a;
assign c = a;
```
[参考网站](https://zhuanlan.zhihu.com/p/456446138)
无需进行该网站中的ctags的过程