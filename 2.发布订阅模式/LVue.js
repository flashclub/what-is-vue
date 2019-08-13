// new LVue({data:...})   //数据格式：入参

class LVue {
  constructor(options) {
    this.$options = options;
    this.$data = this.$options.data;
    this.observe(this.$data);
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
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        console.log(`${key}的新值是：${val}`);
      }
    });
  }
}
