# bristlegrass
前端常用工具方法集合

### 安装
```javascript
npm i bristlegrass 
```
### 使用

```javascript
const bt = require('bristlegrass')

bt._number.getRandomNum(2)
```

*说明：具体方法的说明信息可以参考 src/modules下的文件 * 

## _number 数字类型数据算法集合
``` getRandomNum ``` 
> 获取15位以内的随机数

## _string 字符串类型数据算法集合
``` getParamByUrl ``` 
> 获取url中的参数

## _array 数组操作算法集合
``` removeDistinct ``` 
> 数组去重

## _object 对象操作算法集合
``` deepCopy ``` 
> 引用类型深拷贝

``` getSingle ``` 
> 生成单例

## _function 方法相关操作
``` debounce ``` 
> 函数防抖

``` throttle ``` 
> 函数节流

## _tree 树结构数据操作算法集合
``` convertToTreeData ``` 
> 对象数组转换成多叉树

``` convertTreeToFlatData ``` 
> 多叉树转换成对象数组

``` createTreeByClone ``` 
> 从多叉树创建另一个多叉树数据

## _dom html文档操作相关方法集合
``` getParentsByDeep ``` 
> 找元素的第n级父元素

``` hasChildren ``` 
> 判断元素有没有子元素

## _sort 排序算法集合
``` insertSort ``` 
> 插入排序

``` bubbleSort ``` 
> 冒泡排序

``` quickSort ``` 
> 快速排序

## _regexp 正则表达式集合
``` contactWay ``` 
> 手机号和固话

``` mobile ``` 
> 手机号(包含港澳台)

``` phone ``` 
> 固定电话

``` intOrTwoDecimal ``` 
> 匹配整数或者最多两位小数的数字

``` personID ``` 
> 身份证号码

``` remark ``` 
> 中英文数字，常用的标点符号验证

``` emoji ``` 
> 表情符号

``` email ``` 
> 邮箱

## _global 通用方法集合
``` getType ``` 
> 获取数据类型


