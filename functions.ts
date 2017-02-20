module funcs {
  // normal declaration
  var calc = function(h:number,w:number){
    return h*w;
  }
  // shorthand declaration
  var cal2 = (h:number,w:number) => h*w


  // define function signature
  var hello : (name? :string) => void
  // define the function it self
  hello = function(name?:string) {
    // using the || to add default value if name if null
    console.log("Hello "+(name || "unknown"));
  }
  hello();
  hello('Mustafa');
  
}
