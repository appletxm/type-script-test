var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
var Faimer = (function (_super) {
    __extends(Faimer, _super);
    function Faimer(theName, age) {
        var _this = _super.call(this, theName) || this;
        _this.workType = 'ok';
        _this.age = age;
        return _this;
    }
    Faimer.prototype.sayHi = function () {
        console.info("hay pp " + this.name + ", " + this.age);
    };
    return Faimer;
}(Person));
var p = new Person('mm');
var f = new Faimer('kk', 30);
f.sayHi();
//# sourceMappingURL=class-protect.js.map