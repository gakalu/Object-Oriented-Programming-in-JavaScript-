"use strict";

/* global assert quiz */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.   */
describe("grades from quiz", function () {

    it("scoreStudent 10", function () {
        assert.strictEqual(quiz.scoreStudent(10), undefined);
    });
    it("scoreStudent 11", function () {
        assert.strictEqual(quiz.scoreStudent(11), undefined);
    });
    it("scoreStudent 12", function () {
        assert.strictEqual(quiz.scoreStudent(12), undefined);
    });
    it("getAverage", function () {
        assert.strictEqual(quiz.getAverage(),NaN);
    });

});
