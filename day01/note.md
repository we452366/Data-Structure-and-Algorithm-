## 算法的衡量

### 算法依赖的模型

- 我们假定CPU会顺序的执行所有的指令，而内存随机访问的代价是相同的
    - 整数的变量赋值 消耗1个cpu运算单位
    - 字符串的赋值，类似于数组赋值 每个字符消耗1个cpu运算单位
    - 对象的赋值 创建对象的成本+1次索引+1次赋值
    - '+'、'-'、'*'、'/'、'%' 这些cpu提供的指令 可以认为是消耗1个cpu运算单位
    - 更加复杂的需要引用库等的数学操作，除非指令集上提供了响应的操作，否则不能认为是消耗1个cpu运算单位，但通常运算都在常数级别
    - 逻辑运算 消耗1个cpu运算单位

### 前端提高算法性能的意义

- 流畅问题：为了保证动画的流畅进行，每一帧动画我们只有(1000/60)ms=16ms时间来执行其他计算过程。播放动画的同时我们可能还在请求数据、改变DOM结构、响应事件。（从某种意义上来说服务端轻松的多，因为他们的接口程序通常只需要在100ms内完成执行）
- 老旧机型：前端还有大量机型需要适配，这些机型可能性能没有那么好（比如化为荣耀4a，Android 5.1），在这台机器上亲测一个未经优化设计50多张页面的路由算法执行时间为500ms。如果算法设计失误，在一台机器上执行的算法可能会在另一台机器上产生雪崩效果

### 线性时间的算法

- 举例：
```
    function find(arr,value){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===value){
                return value
            }
        }
        return null
    }
```
- 分析：
```
    最坏的情况：
        第2行 i=0执行了1次；i<arr.length执行了N+1次；i++执行了N次 2N+2
        第3行 比较操作执行了N次 N
        第4行 执行0次 0
        第7行 执行1次 1
    最坏情况下，用时 T=2N+2+N+1=3N+3
```

### 大数定理

> 在随机事件的大量重复出现中，往往呈现几乎必然的规律，这个规律就是大数定理。比如：抛硬币，次数多了之后（比如1万次），正面朝上和反面朝上的数量会趋同

### 复杂度的表示方法

|小写|大写|发音|表示|
|:-|:-:|:-:|-:|
|o|O|ou|渐进上界|
|θ|Θ|theta|渐进紧密界|
|ω|Ω|omega|渐进下界|

> 算法通常执行时间是一个区域，算法的执行时间，空间消耗，会随着输入规模的变化而变化，我们用下面的术语来描述着中变化的关系：O 表示渐进上界；Θ 表示渐进紧密界；Ω 表示渐进下界；

![time.jpg](https://github.com/we452366/Data-Structure-and-Algorithm-/blob/master/day01/img/timg.jpg)

### 复杂度分析举例

> 循环不变式：每次循环结束，存在一个已经排序的列表和一个未排序的列表，存在一个变量j，指向下一个未排序的数字

```
    function insert_sort(A){
        for(
            let j=1;                    // 1
            j<A.length;                 // N
            j++){                       // N-1
            const key=A[j];             // N-1
            let i=j-1;                  // N-1
            while(i>=0 && A[i]>key){    // Mk
                A[i+1]=A[i];            // Mk-1
                i--;                    // Mk-1
            }
            A[i+1]=key                  // N-1
        }
    }
```

### 递归结构的分析方法

> 算法分析：最好 O(N);最坏 O(N^2);平均 O(N^2)

### Divide&Conquer 分治策略

> 分：将问题分成子问题，子问题规模变小但问题不变
> 治：递归解决子问题，子问题的子问题，当子问题足够小，就直接解决
> 合：合并子问题的解

代表：归并排序、快速排序

- 归并排序：

```
    const SENTINEL=Number.MAX_SAFE_INTEGER;

    function divide(p,r){
        return Math.floor((p+r)/2)
    }

    function conquer(A,p,q,r){
        const A1=A.slice(p,q);
        const A2=A.slice(q,r);

        A1.push(SENTINEL);
        A2.push(SENTINEL);

        for(let k=p,i=0,j=0;k<r;k++){
            A[k]=A1[i]<A2[i]?A1[i++]:A2[j++]
        }
    }

    function merge_sort(A,p=0,r){
        r=r || A.length;
        if(r-p===1){return}
        if(r-p===2){
            if(A[p]>A[r-1]){
                [A[p],A[r-1]]=[A[r-1],A[p]]
            }
            return
        }

        const q=divide(p,r);
        console.log('divide:'+q);
        merge_sort(A,p,q)
        merge_sort(A,q,r)
        conquer(A,p,q,r)
    }
```

> divide的时间复杂度：1+2+2^2+2^3+...+2^log(2,N)=1*(1-2^log(2,N+1))/(1-2)=N+1-1=N O(N)
> conquer的时间复杂度：N*(log(2,N)) O(NlgN)
> divide&conquer策略的合并排序 O(NlgN)

- 快速排序：

```
    // i指向最后一个小于支点的数字，j指向未确认的下一个数字 初始值 i=-1,j=0
    function swap(A,i,j){
        [A[i],A[j]]=[A[j],A[i]];
    }

    function divide(A,p,r){
        const x=A[r-1];
        let i=p-1;
        for(let j=p;j<r-1;j++){
            if(A[j]<x){
                i++;
                swap(A,i,j);
            }
        }
        swap(A,i+1,r-1);
        return i+1;
    }

    function quick_sort(A,p=0,r){
        r = typeof r !== 'undefined' ? r : A.length'
        if(p<r-1){
            const q=divide(A,p,r);
            quick_sort(A,p,q);
            quick_sort(A,q+1,r)
        }
    }
```
快速排序没有conquer，只是一层一层去divide

> divide的时间复杂度：最坏情况下O(N^2)，如全部倒序反向 最好情况下O(NlgN) 平均时间复杂度O(N)

### 面试题
- test01:100w数据随机打乱和排序算法
- test02:大型系统的路由匹配算法