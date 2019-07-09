console.log(this)
    function Dog(){
      var a = 1;
      this.age = 19;
      this.b = (a) => {
        return a*a
      }
      var c = (a) => {
        return a*a
      }
      console.log(age);
      console.log(this)
    }

    // Dog();
    var d = new Dog()
