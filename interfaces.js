var interfaces;
(function (interfaces) {
    var squreIt;
    squreIt = function (r) {
        if (r.h === undefined) {
            return r.w * r.w;
        }
        return r.w * r.h;
    };
    function sessionRating() {
        var _this = this;
        var rates = [];
        var addRating = function (num) {
            if (num === void 0) { num = 5; }
            rates.push(num);
        };
        var calcRating = function () {
            var total = 0;
            rates.forEach(function (val) {
                total += val;
            });
            return total / _this.rates.length;
        };
        return {
            addRating: this.addRating,
            calcRating: this.calcRating
        };
    }
})(interfaces || (interfaces = {}));
