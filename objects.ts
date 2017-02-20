module objects{
  // Objects
var squre = {x:2,y:7};
var points : Object = { x:23,y:23};
// define objects with functions
var rect = {
  h:7,
  w:12,
  area:function(){
    return this.h * this.w;
  }
}
console.log(rect.area());
//Optional parameters
var calcArea = function(rt:{w:number,h?:number}){
  if(rt.h === undefined){
    return rt.w * rt.w;
  }
  return rt.w * rt.h;
}
console.log(calcArea({ w:7}));
console.log(calcArea({w:9,h:12}));

}
