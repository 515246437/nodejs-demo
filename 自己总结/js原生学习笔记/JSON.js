/*对JSON错误的理解：只有用{}括起来的才是JSON，这只是JSON的一种类型
JSON类型和格式规定：
１．原始类型：字符串，数值（只能是十进制），布尔值和null
２．复合类型：数组，对象（不能是函数，正则表达式对象，日期对象）
３．字符串必须使用双引号表示，不能使用单引号
４．对象的键名必须用双引号括起来

合法的JSON：
["one", "two", "three"]
{ "one": 1, "two": 2, "three": 3 }
{"names": ["张三", "李四"] }
[ { "name": "张三"}, {"name": "李四"} ]
特别注意: null，空数组和空对象都是合法的

不合法的JSON：
{ name: "张三", 'age': 32 }  // 属性名必须使用双引号
[32, 64, 128, 0xFFF] // 不能使用十六进制值
{ "name": "张三", "age": undefined } // 不能使用 undefined
{ "name": "张三",
  "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
  "getName": function () {
      return this.name;
  }
} // 属性值不能使用函数和日期对象
*/
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true

JSON.stringify(false) // "false"
JSON.stringify('false') // "\"false\""

// 之所以要这样规定，是因为为了区分里面到底是布尔值false还是字符串false

// console.log(JSON.parse('"false"')===JSON.parse( "\"false\"")) //true
// console.log(JSON.parse("[\"1\",\"2\",\"3\"]"))
// JSON.stringify("[\"xxx\",\"xxx\",\"xxx\"]")
console.log(JSON.stringify([ '1', '2', '3' ])==="[\"1\",\"2\",\"3\"]") //true



