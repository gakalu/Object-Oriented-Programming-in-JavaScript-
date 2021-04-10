describe("calculator", function() {
    let calculator;
    before(function() {
      sinon.stub(window, "prompt")
  
      prompt.onCall(0).returns("2");
      prompt.onCall(1).returns("3");
  
      calculator = new Calculator();
      calculator.read();
    });
    
    it("the read method asks for two values using prompt and remembers them in object properties", function() {
      assert.equal(calculator.a, 2);
      assert.equal(calculator.b, 3);
    });
  
    it("when 2 and 3 are entered, the sum is 5", function() {
      assert.equal(calculator.sum(), 5);
    });
  
    it("when 2 and 3 are entered, the product is 6", function() {
      assert.equal(calculator.mul(), 6);
    });
  
    after(function() {
      prompt.restore();
    });
  });
  describe("Accumulator", function() {

    beforeEach(function() {
      sinon.stub(window, "prompt")
    });
  
    afterEach(function() {
      prompt.restore();
    });
  
    it("initial value is the argument of the constructor", function() {
      let accumulator = new Accumulator(1);
  
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 0, the value is 1", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("0");
      accumulator.read();
      assert.equal(accumulator.value, 1);
    });
  
    it("after reading 1, the value is 2", function() {
      let accumulator = new Accumulator(1);
      prompt.returns("1");
      accumulator.read();
      assert.equal(accumulator.value, 2);
    });
  });

