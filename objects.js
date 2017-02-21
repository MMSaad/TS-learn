var objects;
(function (objects) {
    var squre = { x: 2, y: 7 };
    var points = { x: 23, y: 23 };
    var rect = {
        h: 7,
        w: 12,
        area: function () {
            return this.h * this.w;
        }
    };
    console.log(rect.area());
    var calcArea = function (rt) {
        if (rt.h === undefined) {
            return rt.w * rt.w;
        }
        return rt.w * rt.h;
    };
    console.log(calcArea({ w: 7 }));
    console.log(calcArea({ w: 9, h: 12 }));
})(objects || (objects = {}));
