System.register(["./m-a.js", "./m-b.js"], function (exports_1, context_1) {
    "use strict";
    var m_a_js_1, m_b_js_1, my, myName, decLiteral, list, Person;
    var __moduleName = context_1 && context_1.id;
    function hello(compiler) {
        console.log("Hello from ...." + compiler, decLiteral, list, m_a_js_1["default"], m_b_js_1["default"]);
    }
    return {
        setters: [
            function (m_a_js_1_1) {
                m_a_js_1 = m_a_js_1_1;
            },
            function (m_b_js_1_1) {
                m_b_js_1 = m_b_js_1_1;
            }
        ],
        execute: function () {
            my = true;
            myName = "123456";
            decLiteral = 6;
            list = [1, 2, 3];
            Person = (function () {
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
        }
    };
});
//# sourceMappingURL=test.js.map