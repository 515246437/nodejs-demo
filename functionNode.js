function execute(value, someFunction) {
  
  someFunction(value+" world");
}

execute("Hello" , function(word){ console.log(word) });