var my = true;
var myName = "123456";
function hello(compiler) {
    console.log("Hello from ...." + compiler);
}
var Person = (function () {
    function Person() {
    }
    Person.prototype.construct = function () {
    };
    Person.prototype.showName = function () {
        console.info(".........");
    };
    return Person;
}());
hello("TypeScript");
//# sourceMappingURL=test.js.map