var Count;
(function (Count) {
    Count[Count["a"] = 0] = "a";
    Count[Count["b"] = 1] = "b";
})(Count || (Count = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function respond(recipient, message) {
    console.info(recipient, message);
}
respond(Direction.Up, Count.a);
//# sourceMappingURL=enum.js.map