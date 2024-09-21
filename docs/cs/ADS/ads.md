2024 / 9 / 13

## AVL Tree and Splay Tree 

!!! abstract
    本节课约定空树的高度定义为-1

### AVL Trees
!!! 目的
    保持树的高度平衡，使得树的高度为$O(\log n)$, 并且AVL树的搜索、插入和删除操作的时间复杂度为$O(\log n)$.

!!! Definition
    Empty tree is **height balanced**. And T is height balanced iff $T_L$  and  $T_R$ is height balanced and $|h_L - h_R <= 1|$

    **Balance factor(BF) **= $h_L - h_R$ .In AVL trees, BF is either -1, 0, 1

    $n_h$ is the minimum number of nodes in a height balanced tree of height h. Then h = $O(\log n)$. So the time complexity of insertion and search is $O(\log n)$


=== "Rotation"
    <img src="../image/AVL_Tree/Rotation.png">

=== "LL,RR"
    只需要转一次,注意是Aug在转
    <img src="../image/AVL_Tree/LL.png">

=== "LR,RL"
    需要转两次,注意是Mar先左转,再右转
    <img src="../image/AVL_Tree/LR.png">

=== "n_h的计算"
    <img src="../image/AVL_Tree/n_h.png">

### Splay Trees 
!!! 目的
    Any M consecutive operations starting from an empty tree take at most $O(M\log n)$ time

$T_amortized = O(\log n)$

=== "Rotation"
    <img src="../image/SplayTree/SplayTree.png">

=== "Delete"
    <img src="../image/SplayTree/Del.png">

### Amortized Analysis(均摊分析)
均摊分析与概率无关

=== "Aggregate analysis(聚合分析)"
    a sequence of n operations takes **worst-case** time $T(n)$ in total, then the amortized time per operation is $T(n)/n$
=== "Accounting method(核算法)"
    When an operation's **amortized cost** exceeds its **actual cost**, the difference is assigned to specific objects in the data structure as **credit**. This credit can be used to pay for later operations.
=== "Potential method(势能法)" 
    For example:
    <img src="../image/Amortized/PotentialMethod.png">

#### 对Splay Tree进行使能法的分析:
定义:
<img src="../image/Amortized/Def.png">

!!! 公式
    $T_{amortized} = O(\log N)$

    If $a+b <= c$ then $\log a + \log b <= 2\log c - 2$

<img src="../image/Amortized/Analyse.png">

具体过程:
Zig-zig中,补充了一个$R_1(X)$,这样子$R_2(G)+R_1(X) <= 2R_2(X) - 2$.($R_2(G)$有儿子C,D.$R_1(X)$有儿子A,B,而$R_2(X)$有A,B,C,D,所以可以用这个等式),此时消去了常数,便可以直接将原本的$R_2(P)放大为R_2(X)$,便可得到最终结果.

然后将Zig, Zig-zag的常数外的部分放大三倍,便可得到最终结果.

**Theorem:** The amortized time to splay a tree with root T at node X is at most $3(R(T)-R(X))+1 = O(\log n)$ 

## Red-Black Trees and B+ Tree

### Red-Black Trees
=== "Definition"
    第四点定义是因为红黑树中存在哨兵,所有的叶子都会再指向哨兵,所以哨兵成为了最终的叶子(黑色)
    <img src="../image/B+Tree/RedBlackTree.png">
    !!! Definition
        * The black-height of a node is the number of black nodes on the path from the node to a leaf, not counting the node itself.Denoted by bh(x).
        * A red-black tree with N internal nodes(不包含哨兵) has height at most $2\log(N+1)$

=== "Insert"
    <img src="../image/B+Tree/Insert.png">

    * **Concrete process:** Case1(Iterative) -> Case2 -> Case3 ->End
    时间复杂度为$O(\log N)$
=== "Delete"
    <img src="../image/B+Tree/Delete1.png">
    <img src="../image/B+Tree/Delete2.png">


### B+ Tree

<img src="../image/B+Tree/B+Tree/Definition.png">