define(['./a-util.js'],function(aUtil){
  //参数aUtil就是a-util.js 返回出的对象 
    return {
      printDate: function(date){
        console.log(aUtil.aGetFormatDate(date))
      }
    }
  })