var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classess;
(function (classess) {
    var human = (function () {
        function human() {
        }
        return human;
    }());
    var Car = (function () {
        function Car(engine) {
            this.engine = engine;
        }
        return Car;
    }());
    var Player = (function () {
        function Player(name) {
            this.name = name;
        }
        return Player;
    }());
    var Program = (function () {
        function Program(name) {
            this.name = name;
        }
        Program.prototype.Run = function () {
            alert("Start " + this.name);
        };
        Program.prototype.Stop = function () {
            alert("Stop " + this.name);
        };
        return Program;
    }());
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                if (value == undefined)
                    throw "Supply a name";
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.hello = function () {
            alert("Hello, " + this.name);
        };
        return Person;
    }());
    var person = new Person('Mustafa');
    person.hello();
    var program = new Program('Uber');
    program.Run();
    program.Stop();
    var Programmer = (function (_super) {
        __extends(Programmer, _super);
        function Programmer(name) {
            return _super.call(this, name) || this;
        }
        return Programmer;
    }(Person));
})(classess || (classess = {}));
