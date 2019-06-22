function getCounter() {
    var counter = function (start) {
        console.info('fun:', start);
    };
    counter.interval = 1000;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
//# sourceMappingURL=interface-mixn.js.map