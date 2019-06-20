var defaultConfig = {
    color: 'red',
    width: 40
};
function createSqureNew(config) {
    return {
        color: config.color,
        area: config.width * config.width
    };
}
var res = createSqureNew({ color: 'green', width: 60, height: 60 });
console.info('createSqure', res);
var myApi2 = { age: 10, name: 'cat' };
var myArr = [1, 2, 3];
var myArr2 = [4, 5, 6, 7];
var myArr3 = [8, 'string', { a: 1, b: 2 }];
var myArr4 = myArr;
myArr4[3] = 9;
console.info('myArr4,', myArr4);
//# sourceMappingURL=interface-search.js.map