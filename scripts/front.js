class test {
   b = 3;
   constructor() {
      this.a = 5;
   }
   vivod(callback){
      console.log("hello");
   }
}

animal = new test();
animal.vivod(function(){
   console.log("hello2");
})
animal.vivod();
