//  new LVue({data:{...}})
class LVue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    this.observe(this.$data);
  }
  observe(value) {
    if (!value || Object.prototype.toString.call(value) !== '[object Object]') {
      return
    }
    Object.keys(value).forEach(key=>{
      this.defineReactive(value,key,value[key])
    })
  }
  defineReactive(obj,key,value){
    this.observe(value)   //递归数据嵌套
    Object.defineProperty(obj,key,{
      get(){
        return value
      },
      set(newValue){
        if (newValue === value) {
          return 
        }
        value = newValue
        console.log(`${key}发生变化了，新值：${value}`);
      }
    })
  }
}
