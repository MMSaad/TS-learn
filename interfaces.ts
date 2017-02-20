module interfaces {
    // define an interface for object
    interface rect {
        w: number,
        h?: number
    }
    var squreIt: (r: rect) => number;
    squreIt = function(r: rect) {
        if (r.h === undefined) {
            return r.w * r.w;
        }
        return r.w * r.h;
    }
    // define an interface for function
    interface RateManagement{
      addRating:(num:number) => void,
      calcRating:()=>number
    }

    function sessionRating():RateManagement {
      var rates:number[]=[];
      //why should add =>
      var addRating = (num:number=5)=>{
        rates.push(num);
      };
      var calcRating = () => {
        var total = 0;
        //new JS foreach 
        rates.forEach(function(val){
          total += val;
        });
        // for(var i=0;i<this.rates.length;i++){
        //   total += this.rates[i];
        // }
        return total / this.rates.length;
      };
      return{
        addRating:this.addRating,
        calcRating:this.calcRating
      }
    }
}
