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
var Octopus = (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
        this.newName = name;
    }
    Octopus.prototype.talk = function () {
        console.info("name is " + this.newName + ", " + this.numberOfLegs);
    };
    return Octopus;
}());
var SubOctopus = (function (_super) {
    __extends(SubOctopus, _super);
    function SubOctopus(newName, age) {
        var _this = _super.call(this, newName) || this;
        _this.age = 10;
        _this.age = age;
        return _this;
    }
    return SubOctopus;
}(Octopus));
var sub = new SubOctopus('jj', 20);
//# sourceMappingURL=class-readonly.js.map