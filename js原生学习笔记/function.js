//只要是和function相关的都可以记录在这里

/* 
  (1): Hello world
  说明: 匿名函数写法,直接将函数作为参数传入,实现回调
  回调方法"function(word){console.log(word)"总是在execute执行后执行
  具体场景:暂缺
*/ 
// function execute(value, someFunction) {
//   setTimeout(function(){
//     someFunction(value+" world");
//   }, 1500);
// }
// execute("Hello" , function(word){ console.log(word) });




/* 
  (2): Hello world
  说明: 和(1)完全等价
  唯一的区别是将匿名函数变为函数名为fun1的函数
  这里的execute("Hello" , fun1),需特别注意,这里传入的应该是函数名,或者函数本身;而不能写成execute("Hello" , fun1('some string'))
  原因是传入的就不是函数了,直接执行了fun1这个函数,完全错误的写法
*/

//正确的写法
  // function fun1(word) {
  //   console.log(word)
  // }
  // function execute(value, someFunction) {
  //   setTimeout(function(){
  //     someFunction(value+" world");
  //   }, 1500);
  // }
  // execute("Hello" , fun1);

//错误的写法
  // function fun1(word) {
  //   console.log(word)
  // }
  // function execute(value, someFunction) {
  //   setTimeout(function(){
  //     someFunction(value+" world");
  //   }, 1500);
  // }
  // execute("Hello" , fun1('test'));
 
/* 
  (3): Hello world zhang
  说明: 和(1)完全等价
  fun1执行后返回了一个函数,所以execute传入参数fun1('Hello')
  这样多包了一层之后,能针对不同需求,传入多个不同的fun1参数
*/

//写法1 Hello world zhang
// function fun1(para1) {
//   return function(para2) {
//     console.log(para2 + para1)
//   }
// }
// function execute(value, someFunction) {
//   setTimeout(function(){
//     someFunction(value + " world");
//   }, 1500);
// };
// execute("Hello" , fun1(' zhang'));

//写法2 zhang Hello world
// function fun1(para1) {
//   return function(para2) {
//     console.log(para2 + para1)
//   }
// }
// function execute(value, someFunction) {
//   setTimeout(function(){
//     someFunction(value + " world")('zhang');
//   }, 1500);
// };
// execute("Hello" , fun1);








