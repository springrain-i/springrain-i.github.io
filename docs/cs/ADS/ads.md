2024 / 9 / 13

## AVL Tree and Splay Tree 

!!! abstract
    本节课约定空树的高度定义为-1

### AVL Trees
!!! 目的
    保持树的高度平衡，使得树的高度为$O(\log n)$, 并且AVL树的搜索、插入和删除操作的时间复杂度为$O(\log n)$.

!!! Definition
    Empty tree is **height balanced**. And T is height balanced iff $T_L$  and  $T_R$ is height balanced and $|h_L - h_R| <= 1$

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
    **Zig-Zag:**先左转X,再右转X **Zig-Zig**:先右转P,再右转X
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

---

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
    <img src="../image/RedBlack_Tree/RedBlackTree.png">
    !!! Definition
        * The black-height of a node is the number of black nodes on the path from the node to a leaf, not counting the node itself.Denoted by bh(x).
        * A red-black tree with N internal nodes(不包含哨兵) has height at most $2\log(N+1)$

=== "Insert"
    <img src="../image/RedBlack_Tree/Insert.png">

    * **Concrete process:** Case1(Iterative) -> Case2 -> Case3 ->End
    时间复杂度为$O(\log N)$
=== "Delete"
    此处的PPT并没有那么清晰,建议看wyy的ADS讲义
    <img src="../image/RedBlack_Tree/Delete1.png">
    <img src="../image/RedBlack_Tree/Delete2.png">


### B+ Tree

=== "Definition"
    <img src="../image/B+Tree/Definition.png">

=== "Insertion"

    <img src="../image/B+Tree/Insertion1.png">
    <img src="../image/B+Tree/Insertion2.png">

=== "pseudo code"
    <img src="../image/B+Tree/pseudo.png">

## Inverted File Index
此处建议将PPT看一下,对应时间为2024/9/29
=== "Definition"
    <img src="../image/Inverted_File_Index/Definition.png">

=== "Index Generator"
    <img src="../image/Inverted_File_Index/Generator.png">
    <img src="../image/Inverted_File_Index/Generator2.png">

=== "Precision and Recall   "
    Precision(精准率): 所有返回的文档中,正确文档的比例
    Recall(召回率): 所有正确文档中,返回的文档的比例
    <img src="../image/Inverted_File_Index/Precision_Recall.png">
## Leftist Heaps and Skew Heaps

### Leftist Heaps
=== "Definition"
    <img src="../image/Leftist_Heaps/Definition.png">
=== "Merge"
    <img src="../image/Leftist_Heaps/Merge.png">
    **pseudo Code:**
    <img src="../image/Leftist_Heaps/MergeCode.png">
    <img src="../image/Leftist_Heaps/MergeIterative.png">
    

!!! Note
    * A leftist tree with **r** nodes on the right path must have at least $2^r-1$ nodes.So the Leftis tree of N nodes has a right path containing at most $\log (N+1)$ nodes.

### Skew Heaps

=== "Definition"
    <img src="../image/SkewHeaps/Definition.png">
=== "Insertion"
    <img src="../image/SkewHeaps/Insertion.png">
=== "Advantage"
    <img src="../image/SkewHeaps/Advantage.png">
=== "Amortized Analysis"
    人话:一个节点p的右子树节点数大于左子树,则p为heavy
    <img src="../image/SkewHeaps/Amortized.png">
    <img src="../image/SkewHeaps/Amortized1.png">
    
## Binomial Queues(二项队列)
* 构建一个堆的时间复杂度为$O(N)$

=== "Definition"
    <img src="../image/Binomial_Queues/Definition.png">
=== "Use"
    <img src="../image/Binomial_Queues/use.png">
=== "Merge"
    <img src="../image/Binomial_Queues/merge.png">
    <img src="../image/Binomial_Queues/MergeCode.png">
    <img src="../image/Binomial_Queues/MergeCode1.png">
=== "Insert"
    结论:从空的树开始,均摊代价为$O(1)$
    <img src="../image/Binomial_Queues/insert.png">
=== "DeleteMin"
    <img src="../image/Binomial_Queues/DeleteMin.png">
    <img src="../image/Binomial_Queues/DeleteMinCode.png">
=== "Implementation"
    注意:这个连接顺序是按照树高由大到小的
    但是也要注意到,根节点的值是最小的
    <img src="../image/Binomial_Queues/Implementation.png">
=== "Struct"
    <img src="../image/Binomial_Queues/Struct.png">


## Backtracking

### 八皇后
八皇后问题较为简单,直接跳过
### The Turnpike Reconstruction Problem

=== "Instruction"
    <img src="../image/Backtracking/Turnpike.png">
=== "Pseudo"
    <img src="../image/Backtracking/Turnpike1.png">
    <img src="../image/Backtracking/Turnpike2.png">

### $\alpha - \beta$
缺少图片,具体为10/25,但无回放
## Divide and Conquer

=== "Definition"
    <img src="../image/DivideConquer/Definition.png">
=== "Substitution Method"
    当猜的比较松时,会出错
    <img src="../image/DivideConquer/Substitution.png">
    <img src="../image/DivideConquer/Substitution1.png">
=== "Recursion-tree method"
    可以猜的不那么严谨,再用Substitution来证明   
    <img src="../image/DivideConquer/RecursionTree.png">
=== "Master method"
    <img src="../image/DivideConquer/Master.png">
    <img src="../image/DivideConquer/Master1.png">
    <img src="../image/DivideConquer/Master2.png">