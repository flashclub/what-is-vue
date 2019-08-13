// new Compile(el,vm)

class Compile {
  constructor(el, vm) {
    // 要遍历的宿主节点 #app
    this.$el = document.querySelector(el);
    this.$vm = vm;
    //  编译
    if (this.$el) {
      // 转换内部内容为片段
      this.$fragment = this.node2Fragment(this.$el);
      // 执行编译
      console.dir(this.$fragment);
      
      this.compile(this.$fragment);
      // 将编译完的html结果添加至$el
      this.$el.appendChild(this.$fragment);
    }
  }
  compile(el) {
    const childNode = el.childNodes;
    if (childNode.length <= 0) {
      return;
    }
    Array.from(childNode).forEach(node => {
      if (this.isElement(node)) {
        // 元素
        console.log("检测到是元素", node, node.nodeName);
      } else if (this.isInterpolation(node)) {
        // 文本
        console.log("检测到是文本", node, node.textContent);
        // node.textContent = '123'
        this.compileText(node);
      }
      this.compile(node);
    });
    console.dir(el);
    
  }
  compileText(node) {
    console.log(RegExp.$1, this.$vm.$data[RegExp.$1]);
    node.textContent = this.$vm.$data[RegExp.$1];
  }
  isElement(node) {
    return node.nodeType === 1;
  }
  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }
  // 将宿主元素中的代码片段拿出来遍历，这样做比较高效
  node2Fragment(el) {
    const frag = document.createDocumentFragment();
    //  将el中所有子元素搬运到frag中
    let child;

    while ((child = el.firstChild)) {
      frag.appendChild(child);
    }
    return frag;
  }
}
