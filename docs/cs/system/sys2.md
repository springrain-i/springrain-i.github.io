# System2
!!! 提示
    本文档为计算机系统Ⅱ课程笔记,内容比系统Ⅰ详细不少,可以作为参考.

<img src="../sys2_image/CPU.png">

## 1.1 About the Class

What will be covered:

1. Learn more complex CPU design
   
2. explore the principle of Operatng System
   
3. Know not only what but also why

Course Topics:

1. Instruction Classification and Design Principle
   
2. Concept,Category,Architecture and Design of pipeline Cpu
   
3. Hazard(危害) of Pipeline CPU

4. Software/Hardware Interfaces

5. Introduction of OS

6. Interrupt

7. Process and Thread

8. Scheduling,Synchronization and Deadlock

## 1.2 Instruction Set Principles

### Basic principles:
* Compatibility(兼容)
* Versatility(多功能性)
* High efficiency
* Security
### ISA Classes:

=== "Stack Architecture"
    Operands are implicitly on the top of the stack(TOS)
    此处的`sub `,是指次栈顶元素减去栈顶元素,结果存入栈顶元素
    ```asm
    # A,B is in Memory initially
    Push A
    Push B
    Add  
    Pop C 
    ```

    <img src="../sys2_image/ISA/Stack.png">
=== "Accumulator Architecture"
    One implicit operand:the accumulator,one explicit operand: mem location
    此处`sub B`,是指累加器减去B,结果存入累加器的寄存器中
    ```asm
    Load A
    Add B
    Store C
    ```

    <img src="../sys2_image/ISA/Accum.png">
=== "General-Purpose Register Architecture(GPR)"
    Only explicit operands:registers,memory locations

    Two Classes:

    * Register-memory arch:any instruction can access memory

    * Load-store arch:only load and store instruction can access memory(RISC-V)

    <img src="../sys2_image/ISA/dif.png">

## 1.3 More about ISA

### Addresing Modes(寻址方式)
* Types:
    * constant --immediate
    * register
    * memory location - effective address

### Interpret(解释) Memory Address
* byte = 8 bits,word = 32 bits
* Byte ordering in memory:0x12345678
  * Little Endian(store least significant byte in the smallest address): 78 56 34 12 (->内存增长方向)
  * Big Endian: 12 34 56 78 
  * RISC-V使用小端
* Misaligned access needs more memory access
### Control Flow Instruction
* Four types of control flow change:
    * Conditional branches
    * Jumps
    * Procedure calls
    * Procedure returns
* Explicity specified destination address:procedure return as target is not known at compile time
* PC-relative addressing
* Dynamic address:for returns and indirect jumps with unkown target at compile time
## 1.4 RISC Architecture
* 我们需要掌握6中基本指令:R,I,S,B,U,J,自己去查手册看
* RISC-V has 32 registers,x0 is constant 0

