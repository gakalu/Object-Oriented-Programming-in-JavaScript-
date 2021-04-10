describe("Calculator", function() {
    let Calculator;
    before(function() {
      window.stub(window, "prompt")
  
      prompt.onCall(0).returns("2");
      prompt.onCall(1).returns("3");
  
      calculator = new Calculator();
      calculator.read();
    });
    
    it("the read method asks for two values using prompt and remembers them in object properties", function() {
      assert.equal(Calculator.a, 2);
      assert.equal(Calculator.b, 3);
    });
  
    it("when 2 and 3 are entered, the sum is 5", function() {
      assert.equal(Calculator.sum(), 5);
    });
  
    it("when 2 and 3 are entered, the product is 6", function() {
      assert.equal(Calculator.mul(), 6);
    });
  
    after(function() {
      prompt.restore();
    });
  });