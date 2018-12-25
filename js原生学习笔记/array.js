/*识别数组
用来判断是否为数组，typeof只能识别出是object
*/
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr)

/*第一类：会改变原数组
1. sort，reverse
2. push.pop.shift.unshift
3. splice
*/

/*(1) sort
  数组排序
  返回本身，但是是已经经过排序操作的
  会影响原来的数组
*/
//从小到大排序
arr.sort(function (x, y) {
  if (x < y) {
      return -1;
  }
  if (x > y) {
      return 1;
  }
  return 0;
});
console.log(arr); // [1, 2, 10, 20]

/*(2) 队列堆栈操作
  1. push
  2. pop
  3. shift
  4. unshift
*/
//push
var arr = [];
arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]

//pop
var arr = ['a', 'b', 'c'];
arr.pop() // 'c'
arr // ['a', 'b']

//shift
var a = ['a', 'b', 'c'];
a.shift() // 'a'
a // ['b', 'c']

//unshift
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]


/*(3) reverse
  将数组元素的顺序颠倒排序
  返回改变后的数组
*/
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]

/*(4) splice
  删除指定元素，参数如下：
  第一个参数：删除的起始位置（0开始，包括当前元素）
  第二个元素：删除元素的个数
  第三个及以后：新增的元素
  返回被删除的元素
*/
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]


/*第二类：不会改变原数组
1. map
2. reduce
3. filter
4. slice
5. join
6. concat
7. some，every
8. indexOf，lastIndexOf
*/

/*(1）map
  对一个数组的映射，映射关系通过回调函数设置
  返回一个新的数组
  不会改变原数组
*/
function operate(x) {
  return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(operate); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);
console.log(arr);

/*(2）reduce(回调函数必须传俩个参数)
  会从头开始遍历数据，前俩个数据开始，计算完成后将解决和第三个数据再计算，直到结束
  返回的是最后的值，不是一个数组
  不会改变原数组
*/
var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function (x, y) {
  return x + y;
});
console.log(result);

/*(3) filter
  回调函数就是过滤条件
  返回一个新的数组，
  不会改变原数组
*/
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 5, 9, 15]


/*(4) slice
  用于提取数组的一部分
  参数：
  1. 没有参数：返回原数组的拷贝
  2. 一个参数：当前元素开始，到最后一个
  3. 两个参数： 截取中间的元素，包含第一个参数，但不包含第二个
  返回一个新的数组
  不会改变原数组
*/
var a = ['a', 'b', 'c'];
a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]

/*(5) join()
  将数组元素拼接起来，拼接过程中，会用参数将数组元素分割
  返回一个字符串
  不会改变原数组
*/
var a = [1, 2, 3, 4];
a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"

/*(6) concat()
  将俩个数组拼接起来
  返回拼接后的数组
  不会改变原数组
*/
['hello'].concat(['world']) // ["hello", "world"]
['hello'].concat(['world'], ['!']) // ["hello", "world", "!"]
[].concat({a: 1}, {b: 2}) // [{ a: 1 }, { b: 2 }]
[2].concat({a: 1}) // [2, {a: 1}]
[1, 2, 3].concat(4, 5, 6) // [1, 2, 3, 4, 5, 6]

/*(7) some，every
 some：判断数组中的有一个成员满足条件（返回true）即可
 every：判断数组中所有成员满足条件（返回true）
*/
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true

var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false

/*(7) indexOf，lastIndexOf
 indexOf：第一次出现的位置
 indexOf，lastIndexOf： 最后一次出现的位置
 返回对应元素出现的位置下标
 不改变原数组
*/
var a = ['a', 'b', 'c'];
a.indexOf('b') // 1
a.indexOf('y') // -1
