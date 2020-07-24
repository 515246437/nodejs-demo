/*
  箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。
*/

var a = 20;
var obj = {
    a: 10,
    b: function() {
        console.log(this.a);  
    },
    b1:this.a,
    c:{
        a:50,
        fn:function(){        
            console.log(this.a);
        }
    },
    d: () => {
        console.log(this.a);  
    },

    e: function() {
        return () => {
            console.log(this.a);
        }
    },

}
obj.b();  //10  //一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。this 指向 obj    
console.log(obj.b1);//20  this指向的就是上一级的对象。this指向window
obj.c.fn(); //50   一个函数中有this，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象c。区分下面的方法
var f=obj.c.fn;
f();  //20   this永远指向的是最后调用它的对象 虽然函数fn是被对象c所引用，但是在将fn赋值给变量f的时候并没有执行所以最终指向的是window
obj.d();  //20  箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。 this 指向window 
obj.e()();  //10  this指向obj 。如果有多级箭头函数嵌套()=> () => () => this.a this指向第一个箭头函数的上一级对象。


const obj = {
  num: 10,
 hello: function () {
  console.log(this);    // obj
  setTimeout(() => {
    console.log(this);    // obj
  });
 }    
}

const obj = {
  radius: 10,  
  diameter() {    
      return this.radius * 2    //20
  },  
  perimeter: () => 2 * Math.PI * this.radius  //NaN
}
