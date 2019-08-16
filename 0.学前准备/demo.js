let obj = {}



Object.defineProperty(obj,'name',{
  value:'123',
  configurable:true,
  writable:false,
  enumerable:true  //定义name属性是否可枚举
})
// obj.name = '111'
console.log(12,obj);

// Object.preventExtensions(obj)
for (const k in obj) {  //发现：如果一个对象上没有可枚举的属性，不会进入for循环
  console.log(k,obj);
  
  if (obj.hasOwnProperty(k)) {
    const e = obj[k];
    console.log(e); //如果不设置enumerable为true，则name属性是不可枚举的，此处打印不到
  }
}

let obj2 = {age:30}

//如果在声明时直接赋值，则默认全是true
console.log(Object.getOwnPropertyDescriptor(obj2, 'age'));  
//  {value:30,writable:true,enumerable:true,configurable:true}

//  判断是否可被拓展
console.log(Object.isExtensible(obj2)); //true 


let obj3 = {hobby:'song'}
