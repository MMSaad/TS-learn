module classess{
  //define a class
  class human{

  }
  // define a constructor
  class Car{
    //memebers are public by default
    engine:string
    // constuctor does not include class name like other languages
    constructor (engine:string){
      this.engine = engine
    }
  }
  // define shorthad field in constructor
  class Player{
    constructor(public name:string){

    }
  }
  // define class with functions
  class Program{
    name:string
    constructor (name:string){
      this.name = name
    }
    // when we inside a class we cannot use the keyword function
    Run():void{
      alert( "Start "+this.name);
    }
    Stop():void{
      alert( "Stop "+this.name);
    }
  }
  //define class with private member and getter and setter
  class Person{
    private _name:string
    constructor (name:string){
      // set the value using the setter function name
      this.name = name
      // we cannot call the setter function as function
      //this.name(name)
    }
    get name():string{
      return this._name
    }
    set name(value:string){
      if(value == undefined) throw "Supply a name"
      this._name = value
    }
    hello():void{
      alert("Hello, "+this.name);
    }
  }

  //instantiating a class
  var person = new Person('Mustafa');
  person.hello();
  var program = new Program('Uber');
  program.Run();
  program.Stop();

  // to cast type just <TypeName>


  // Extends a Type
  // Simple add extends
  class Programmer extends Person{
    // we must have constructor calling the super class
    constructor(name:string){
      super(name)
    }
  }
}
