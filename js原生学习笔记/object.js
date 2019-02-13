
/* 
  * 1.Object有两种类型的方法： 本身的方法和实例方法
    原因是Object既是是一个对象，也是一个构造函数
  * 2.任何对象都有自己的原型对象，不是只有用构造方法new出来的对象才有
  * 3.通过var obj = new Object()的写法生成新对象，与字面量的写法var obj = {}是等价的。
  * 4.所有对象的原型最终都是 Object.prototype。 
  * 5.所有对象都有constructor属性，即使是字面量定义的也有（见特别3）
  * 6.可以理解为构造函数是有Function这个对象new出来的
  * 7.由于Object对象也是构造函数，因此它也是由Function这个对象new出来的（见特别1）
  * 8.由于Function是构造函数，因此他有自己的prototype属性，且是一个对象（见特别2）
  * 9.每个函数都有prototype属性，指向一个对象。普通函数也有，只是一般没有用
*/

  //对象之间的关系可以总结如下：
  var a = {
    name: "a"
  }
  function People(name) {
    this.name = name;
  }
  console.log(a.__proto__ == Object.prototype)
  console.log(a.constructor == Object) //特别3
  console.log(People.constructor == Function) //特别3
  console.log(People.prototype.constructor == People) 
  console.log(People.prototype.__proto__ == Object.prototype) 
  console.log(Date.prototype.__proto__ == Object.prototype) 
  console.log(Date.constructor == Function) 
  console.log(Date.__proto__ == Function.prototype) 
  console.log(Object.prototype.__proto__ == null) 
  console.log(Object.__proto__ == Function.prototype)  //特别1
  console.log(Object.prototype == Function.prototype.__proto__) //特别2





//1.静态方法 Object.keys()
var obj = {
  p1: 123,
  p2: 456
};
Object.keys(obj) // ["p1", "p2"]

//2.实例方法 Object.prototype.hasOwnProperty()
var obj = {
  p: 123
};
obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false



