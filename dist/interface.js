function printLabel(labeledObj) {
    console.info('printLabel:', labeledObj.label);
}
function createSqure(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
var obj = createSqure({ color: 'red', width: 10 });
var aro = [{ a: 1, b: 2 }, { c: 3, d: 4 }];
var point = { x: 1, y: 1 };
console.info('interface:', obj);
console.info(aro[0]);
var searchFunc = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.info('searchFunc:', searchFunc('12345', '45'));
//# sourceMappingURL=interface.js.map