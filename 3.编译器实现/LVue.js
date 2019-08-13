// new LVue({data:...})   //数据格式：入参

class LVue {
  constructor(options) {
    this.$options = options;
    this.$data = this.$options.data;
    this.observe(this.$data);

    //  模拟watcher的创建

    // new Watcher()
    // this.$data.name
    // new Watcher()
    // this.$data.info.age

    new Compile(options.el,this)
  }
  observe(value) {
    //如果数据符合要求，则将数据全部进行响应化处理
    if (!value || Object.prototype.toString.call(value) !== "[object Object]") {
      return;
    }
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key]);
    });
  }
  defineReactive(obj, key, val) {
    //  数据响应化
    this.observe(val); //深度遍历
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target)
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        // console.log(`${key}的新值是：${val}`);
        dep.notify()
      }
    });
  }
}

//  Dep：用来管理watcher观察者的
class Dep {
  constructor() {
    this.deps = []; //  存放若干依赖(Watcher)
  }
  addDep(dep) {
    this.deps.push(dep);
    console.log(this.deps);
  }
  notify() {
    this.deps.forEach(dep => dep.update());
  }
}

//  Watcher
class Watcher {
  constructor() {
    Dep.target = this; //将当前watcher指向
  }
  update() {
    console.log("属性更新了");
  }
}
