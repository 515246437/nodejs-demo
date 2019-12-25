class BaseContorller {
  constructor(res){
    this.res = res;
  }
  out() {
    console.log(this.res)
    return 100
  }
}

module.exports = BaseContorller;