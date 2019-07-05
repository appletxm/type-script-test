var passcode = "secret passcode";
var EmployeeNew = (function () {
    function EmployeeNew() {
    }
    EmployeeNew.prototype.fullName = function () {
        return this._fullName;
    };
    return EmployeeNew;
}());
var employee = new EmployeeNew();
//# sourceMappingURL=class-get-set copy.js.map