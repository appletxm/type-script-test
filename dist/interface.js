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
console.info('interface:', obj);
var point = { x: 1, y: 1 };
//# sourceMappingURL=interface.js.map