/*目录:
（1）Promise简单例子
（2）多个Promise按顺序执行
（3）Promise队列按顺序执行，队列可动态添加
*/

/* 
  (1): 
  说明: Promise简单例子
  resolve只能带一个参数;若想传递多个参数，可以包装成一个对象
*/ 
// function test(timeOut) {
//   return function(resolve, reject) {
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//       if (timeOut < 1) {
//         console.log('call resolve()...');
//         resolve({'one': 'ONE',
//         'two': 'TWO'});
//       }
//       else {
//         console.log('call reject()...');
//           reject('timeout in ' + timeOut + ' seconds.');
//       }
//     }, timeOut * 1000);
//   }
// }
// var timeOut = Math.random() * 2;
// var p1 = new Promise(test(timeOut));
// var p2 = p1.then(function (result) {
//   console.log('成功：' + result.one);
// });
// var p3 = p2.catch(function (reason) {
//   console.log('失败：' + reason);
// });

/* 
  (2): 
  说明: 多个Promise按顺序执行
  第一个promise执行成功后，再执行下一个，知道结束。若其中有一个promise执行失败（reject），直接执行catch;不需要在每个promise中都做catch判断，只要在最后做一个判断即可
*/ 
// function multiply(input) {
//   return new Promise(function (resolve, reject) {
//     console.log('calculating ' + input + ' x ' + input + '...');
//     setTimeout(()=> {
//       reject('乘法出错')
//     }, 500);
//   });
// }
// function add(input) {
//   return new Promise(function (resolve, reject) {
//     console.log('calculating ' + input + ' + ' + input + '...');
//       setTimeout(() => {
//         resolve(input+input)
//       }, 500);
//   });
// }
// var p = new Promise(function (resolve, reject) {
//   console.log('start new Promise...');
//   resolve(12);
// });
// p.then(add)
// .then(multiply)
// .then(function (result) {
//   console.log('Got value: ' + result);
// }).catch(function (reason) {
//   console.log('失败：' + reason);
// });



/* 
  (3): 
  说明: Promise队列按顺序执行，队列可动态添加
  多个promise的按顺序执行，不需要在每个promise中都做catch判断，只要在最后做一个判断即可
  疑问：Promise.resolve（）
*/ 

// var func1 = function(callback){
//   var a = 1
//   setTimeout(function(a){
//     console.log(a);
//     typeof(callback) !== 'function' || callback();
//   }, 1500);
// };

// var promisify = function(func){
//   return function(){
//     return new Promise(function(resolve){
//       func(resolve);
//     });
//   }
// }
// var func_arr = [promisify(func1)];
// func_arr.reduce(function(cur, next) {
//   return cur.then(next);
//   }, Promise.resolve()).then(function() {
//     console.log('job finished');
// });

/* 
  (4): 
  说明: 对比下面俩段代码
*/
//普通的最简单回调例子
// function add(input) {
//   console.log(input)
// }
// function execute(someFunction) {
//   someFunction("world");
// }
// execute(add);

//使用了promise的回调例子，.then和execute是一样的，都是函数的调用。
//参数问题： resolve的值会作为add的参数，直接传给add
// function add(input) {
//   console.log(input)
// }
// var p = new Promise(function (resolve, reject) {
//   resolve({'one': 'ONE',
//           'two': 'TWO'});
// });
// p.then(add)


/* 
  (5): 
  说明: 一个promise对象后面可以接多个then，并不是一个resolve只能接一个then
  举例说明：f3回调函数的参数，是f2函数的运行结果。
  f1().then(function () {
    return f2();
  }).then(f3);
*/
// var p = new Promise(function (resolve, reject) {
//   resolve(1);
// });
// p.then(function (data1) {
//   return data1;
// }).then((data2)=>{
//   console.log(data2)
// });
