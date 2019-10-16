// * 变量的提升：
//   所有变量的申明语句，都会被提升到代码的顶部
//   赋值语句，不提升
// * 数据类型
//   原始类型：number; string; boolean,undefined, null 
//   合成类型：狭义的对象（object），array，function
  typeof [] //object
  //区分数组和对象用
  [] instanceof Array // true
  {} instanceof Array // true
  //疑难点关系如下：
  var a = 1
  function f() {}
  console.log(typeof f) //function
  console.log(a instanceof Object) //false
  console.log(f instanceof Function) // true 特殊1
  console.log(f instanceof Object) //true  特殊2
  //解释如下： 
  //由于f是Function的实例对象
  //且Function.prototype.__proto__ == Object.prototype
  //所以特殊1和特殊2都成立

  //* 布尔值
  //自动转换成false：undefined null false 0 NaN "" ''
  //自动转换成true：[],{}



