// * 闭包的作用：
//   1.在函数外部获取函数内的变量
//   2.让这些变量始终保持在内存中

//闭包最简单例子，函数f2就是闭包
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}
var result = f1();
result(); // 999

//作用：变量始终保持在内存中的例子
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7

//作用：封装对象的私有属性和私有方法

function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }
  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}
var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
     