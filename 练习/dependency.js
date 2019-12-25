define(['dependency'], function(){
  var name = 'Byron';
  function printName(){
      console.log(name);
  }

  return {
      printName: printName
  };
});