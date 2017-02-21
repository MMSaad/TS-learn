var funcs;
(function (funcs) {
    var calc = function (h, w) {
        return h * w;
    };
    var cal2 = function (h, w) { return h * w; };
    var hello;
    hello = function (name) {
        console.log("Hello " + (name || "unknown"));
    };
    hello();
    hello('Mustafa');
})(funcs || (funcs = {}));
