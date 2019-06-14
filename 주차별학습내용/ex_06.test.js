describe("# Koans - About Functions", () => {
  it("1. should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });
  
  it("2. should use lexical scoping to synthesise functions", function () {
    const addMaker = a => b => a + b;
    var add3 = addMaker(3);
    var add5 = addMaker(5);
    expect(add3(10) + add5(10)).toBe(28);
  });
  
  it("3. should know internal variables override outer variables", function () {
    var message = "Outer";
    function getMessage() {
      return message;
    }
    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
  });
});
