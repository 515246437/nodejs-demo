
// console.log(Object.getPrototypeOf({d:'s'}) === Object.prototype)

var a = {
  name: "ddd"
}
function Animal(name) {
  this.name = name;
}

// console.log(Animal.constructor == Function) //true
console.log(Date.constructor == Function) //true
// var a = new Object()
// console.log(Date.prototype.__proto__ == Object.prototype)
// console.log(Object.constructor)
// console.log(Animal.__proto__)
// console.log(Function.prototype)
// console.log(Animal.__proto__ == Function.prototype) 


// function Animal(name) {
//   this.name = name;
// }
// console.log(Animal.prototype.__proto__ == Object.prototype) //

// Animal.a = 'sss'
// console.log(Animal)
// var a =new Animal('fff')
// console.log(a)
// console.log(Animal.hasOwnProperty('name'))
// Animal.prototype.color = 'white';
// Animal.prototype.walk = function () {
//   console.log(this.name + ' is walking');
// };

// console.log(Object)
// console.log(Object.prototype)

// console.log(Object.getPrototypeOf(Animal.prototype) == Object.prototype)

