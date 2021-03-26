"use strict";
describe("", function () {

    it("The first right value", function () {
        assert.strictEqual(readNumber(['abc', '123a', 'ab123', '123.3', '123']),123.3);
    });
});
describe("", function () {

    it("Change the first letter of the word to capital", function () {
        assert.strictEqual(UpperCase("getachew"),"Getachew");
    });
});
describe("", function () {

    it("Check for random integer", function () {
        assert.strictEqual(randomInteger(2,2),2)
    });
});
describe("", function () {

    it("Check for random integer", function () {
        assert.strictEqual(randomInteger(3,3),3)
    });
});
describe("", function () {

    it("Check for random integer", function () {
        assert.strictEqual(randomInteger(4,4),4)
    });
});
describe("", function () {

    it("Check for spam in the text", function () {
        assert.strictEqual(checkSpam("My viagra is cheap"),true);
    });
});
describe("", function () {

    it("Truncate the text depends on the given value", function () {
        assert.strictEqual(Truncate("Hi everyone!", 20),"Hi everyone!");
    });
});
describe("", function () {

    it("Extract the money from a string", function () {
        assert.strictEqual(extractCurrencyValue('$120')===120,true);
    });
});
describe("", function () {

    it("Find A maximal subarray", function () {
        assert.strictEqual(getMaxSubSum([2, -1, 2, 3, -9]),6);
    });
});
describe("", function () {

    it("Translate border-left-width to borderLeftWidth", function () {
        assert.strictEqual(camelize("background-color"),"backgroundColor");
    });
});