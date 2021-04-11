"use strict";

/* global assert Student, Teacher */
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.    */
describe("test inheritance from Person", function () {

    it("student inheritance", function () {
        const john = new Student();
        john.initialize("John", 25);
        assert.strictEqual(learn("Inheritance"), "John just learned Inheritance");
    });
    it("teacher inheritance", function () {
        const bob = new Teacher();
        bob.initialize("Bob", 25);
        assert.strictEqual(teach("Physics"), "Bob is now teaching Physics");
    });

});