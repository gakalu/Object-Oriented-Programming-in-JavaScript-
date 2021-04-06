"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.   */

describe("fix function that loses 'this'", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234"), "John failed to log in");
    });

});

describe("Partial application for login", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar"), undefined);
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "1234"), undefined);
    });

});