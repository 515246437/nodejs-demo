define(['./util.js'],function(util){
  //参数util就是util.js 返回出的对象 
    var aUtil = {
      aGetFormatDate: function(date){
        return util.getFormatDate(date,2)
      }
    }
    return aUtil
  })