System.register(["./m-a.js", "./m-b.js"], function (exports_1, context_1) {
    "use strict";
    var m_a_js_1, m_b_js_1, my, myName, decLiteral, list, stringList, x, user, Color, c, notSure;
    var __moduleName = context_1 && context_1.id;
    function hello(compiler) {
        console.log("Hello from ...." + compiler, decLiteral, list, m_a_js_1["default"], m_b_js_1["default"]);
    }
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
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
            stringList = ['1111', '333', '222'];
            x = ['111', 10];
            console.info(stringList);
            user = { firstName: "Jane", lastName: "User" };
            console.info(greeter(user));
            hello("TypeScript");
            (function (Color) {
                Color[Color["Red"] = 1] = "Red";
                Color[Color["Green"] = 2] = "Green";
                Color[Color["Blue"] = 3] = "Blue";
            })(Color || (Color = {}));
            c = Color.Blue;
            console.info(c);
            notSure = 4;
            notSure = "1234567 string";
            notSure = 123;
        }
    };
});
//# sourceMappingURL=test.js.map