## 数据结构

- 什么是数据结构
> 数据结构是一种组织和存储数据的方式，让数据可以更方便地被获取和修改。数据结构包括：数据的集合、数据之间的关系和应用在数据上的方法和操作。

- 什么是ADT
> 抽象数据类型(Abstract Data Type)是对数据的一种抽象描述，是一种数学上的约束，是从数据使用者的角度去看数据类型。ADT是数据结构的抽象，数据结构是ADT的底层实现。

### 链表

#### 常见应用
- web浏览器历史管理
- 底层内存管理
- 实现哈希表
- 文件系统



### 堆栈

#### 常见应用
- 程序的递归
- graham扫描寻找凸图形
- 搜索单调矩阵
- 聚类分析中最邻近分类算法(KNN)

#### 堆栈的性质
- 两个操作push/pop
- LIFO

### 队列

#### 常见应用
- 用于实现缓冲区
- 用于实现广度优先搜索
- 实现优先级队列
- 动画库

#### 队列的性质
- 两个操作enqueue/dequeue
- FIFO

### 散列(哈希表)

#### 常见应用
- 用于实现字典(switch/map)
- 用于实现集合(Set)
- 分布式应用(一致性哈希:Redis)

### 树

#### 常见应用
- 二叉树(排序/搜索)
- 游戏里的对话树
- 聚类分析中用到的dendrogram
- 用于切割二维空间的BSP树(游戏地图生成/碰撞检测)
- Trie树(字典查找)
- dom结构(文本对象模型)

### 图

#### 常见应用
- 柯尼斯堡七桥问题
- 最短路径问题(寻找A->F的最短路径)
- 社交网络
- 哈斯图可视化集合
- 四色定理