function buildName(firstName) {
    if (firstName === void 0) { firstName = "Will"; }
    var lastName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastName[_i - 1] = arguments[_i];
    }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams", "Sr.");
var result3 = buildName("Bob", "Adams");
var result4 = buildName(undefined, "Adams");
//# sourceMappingURL=fn-1.js.map