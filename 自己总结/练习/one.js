function Hanshu() {
  this.x = 1
  this.print = function() {
    console.log(this.x)
  }
  this.add = function() {
    this.x++
    this.deal()
    console.log(this.x)
  }
}

var a = new Hanshu()

a.deal = function() {
  console.log('deal')
}
a.print()

console.log(process.argv)
console.log(process.argv[1])
console.log(process.argv[2])
console.log(process.argv[3])