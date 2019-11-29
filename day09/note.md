## 树

### 树的相关概念
- 根节点(root):树的顶端
- 子节点(children):直接连到另一个节点的节点
- 父节点(parent):和子节点相反
- 相邻(兄弟)节点(siblings):拥有同一个父节点的节点
- 后代节点(descendant):从一个节点重复处理(父到子)得到的所有节点
- 祖先节点(ancestor):从一个节点重复处理从子到父得到的所有节点
- 叶子节点(leaf):没有子节点的节点
- 分支(branch):至少有1个子节点的节点
- 度(degree):一个节点的子节点数
- 边(edge):两个节点的连接
- 路径(path):连接一个节点和它的某个后代的所有节点和边
- 深度(depth):从根节点到某个节点的边的数量
- 节点高度(height of node):一个节点和它后代叶子节点的最长路径
- 森林(forest):多个不相交树组成的集合

### 树的算法和前端
- DOM
- 选择器
- JSON
- 虚拟DOM(React/Vue/Angular)
- 文本查找和输入提示

### 树的递归表示
```
    class Tree{
        constructor(v,children){
            this.v=v;
            this.children=children || null
        }
    }
```

### 树的遍历
```
    function tree_transverse(tree,ord=0,callback){
        let transversed=false;
        if(!tree.children){
            callback(tree.v)
            return;
        }
        tree.children.forEach((child,i)=>{
            if(i===ord){
                transversed=true;
                callback(tree.v)
            }
            tree_transverse(child,ord,callback)
        })
        !transversed && callback(tree.v)
    }
```
生成器版
```
    function* tree_transverse(tree,ord=0){
        let transversed=false;
        if(!tree.children){
            yield tree;
            return;
        }
        for(let i=0;i<tree.children.length;i++){
            if(i===ord){
                transversed=true;
                yield tree;
            }
            yield *tree_transverse(tree.children[i],ord)
        }
        if(!transversed){
            yield tree;
        }
    }
```

### 树的查找
```
    function find(tree,prediction){
        return [...tree_transverse(tree)].find(prediction)
    }
```

### 树的路径
```
    function* tree_transverse(node,path=[]){
        yield {node,path};
        if(node.children){
            for(let i=0;i<node.children.length;i++){
                yield tree_transverse(node.children[i],[...path,i])
            }
        }
    }
```
路径查找
```
    function find_path(v){
        for(let {tree,path} of v){
            if(tree.v === v){
                return path
            }
        }
    }
```
根据路径反查
```
    function find_by_path(tree,path){
        return path.length === 0 ? tree
        : find_by_path(tree.children[path[0]],path.slice(1))
    }
```

### 面试题
- test01:实现一个选择器
- test02:实现一个基于class和Tag的简单css选择器
- test03:实现一个二叉树
- test04:树的最长同值路径
- test05:实现一个全排列