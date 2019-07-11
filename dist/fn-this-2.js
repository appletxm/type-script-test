var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (event) {
        this.info = event.timeStamp;
    };
    return Handler;
}());
var uiElement;
var handler = new Handler();
//# sourceMappingURL=fn-this-2.js.map