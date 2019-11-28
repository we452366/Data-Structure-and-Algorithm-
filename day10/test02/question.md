## 情境描述
实现一个基于class和Tag的简单的css选择器
```
    <div>
        <div class="content">
            <table>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </table>
        </div>
    </div>
```
实现函数function select(node,expr){}，使用select(tree,'.content tr td')选择