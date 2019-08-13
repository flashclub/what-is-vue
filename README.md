# what-is-vue
vue源码学习路线

### 1.vue底层原理

- 1.数据响应式原理和实现

  `Object.defineProperty`数据劫持，data中的每一个数据都定义getter和setter

  初始化内容：缓存入参，观察函数`observe(value)`和数据响应化`defineReative(obj,key,value)`

### 2.实现一个vue

- 依赖收集

  `dep`订阅者，关心数据变化

  `watcher`作为观察者：在数据响应化`getter`时将dep和watcher做关联，使得当dep检测到数据更新时可以触发watcher中的方法，由于作用域是独立的，那么每次`getter`触发时都有一个新的watcher与dep

  