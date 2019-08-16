### 学前准备

参考这篇文章所属：[Vue源码阅读前必须知道javascript的基础内容](<https://juejin.im/post/5b4ad441f265da0f7d4eeb7a>)

### 1.flow类型检测

- 基础类型检测

  - bollean
  - number
  - string
  - null
  - void  --> 对应`undefined`

  用法：声明变量时使用：

  ```javascript
  let demo1:number = 1
  let demo2:string = 'a'
  demo1 = 'str'	//error
  demo2 = 5		//error
  ```

  

  

- 复杂类型检测

  - Object
  - Array
  - Function
  - 自定义Class



### 2.对象相关

当使用Object.defineProperty()创建对象时，有一些参数需要注意：

- configurable 属性是否能被删除，默认否

- enumerable 属性是否能被枚举，默认否

- value 属性值

- writable 属性是否能被改变，默认否

- get和set：不可以与value同时使用

- obj.propertyIsEnumerable('name')：判断定义的对象是否可枚举

  

- Object.precentExtensions(obj) 不能拓展可以更改和删除

  Object.isExtensible(obj)  判断是否可被拓展

  

- Object.seal(obj) 不能拓展和删除可以更改

  Object.isSealed(obj) 判断是否被密封

  

- Object.freeze(obj) 不能拓展、删除和更改

- Object.isFrozen(obj) 判断是否被冻结

### 3.DOM自定义事件

### 4.数组扩展方法

数组的这两个方法其实平时工作中也会经常用到，功能就是字面意思：每一个都符合返回`true`和只要有符合的就返回`true`

- every:

- some:

### 5.document.documentElement.getBoundingClientRect()

### 6.window.performance

### 7.Proxy

### 8.has方法

### 9.outerHTML







