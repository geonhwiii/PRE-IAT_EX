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

describe("# Koans - About Objects", () => {
  describe("1. Properties", () => {
    var meglomaniac;

    beforeEach(() => {
      meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("1-1. should confirm objects are collections of properties", () => {
      expect(meglomaniac.mastermind).toBe("Joker");
    });

    it("1-2. should confirm that properties are case sensitive", () => {
      expect(meglomaniac.henchwoman).toBe("Harley");
      expect(meglomaniac.henchWoman).toBe(undefined);
    });

    it("1-3. should confirm that when a function is attached to an object, 'this' refers to the object", function () {
      var currentDate = new Date()
      var currentYear = (currentDate.getFullYear());
      var meglomaniac = {
        mastermind: "James Wood",
        henchman: "Adam West",
        birthYear: 1970,
        calculateAge: function () {
          return currentYear - this.birthYear;
        }
      };
  
      expect(currentYear).toBe(2019);
      expect(meglomaniac.calculateAge()).toBe(49);
    });

    it("1-4. should know properties that are functions act like methods", function () {
      var meglomaniac = {
        mastermind : "Brain",
        henchman: "Pinky",
        battleCry: function (noOfBrains) {
          return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
        }
      };
  
      var battleCry = meglomaniac.battleCry(4);
      expect("They are Pinky and the Brain Brain Brain Brain Brain").toMatch(battleCry);
    });

    it("1-5. should know that properties can be added and deleted", function () {
      var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };
  
      expect("secretary" in meglomaniac).toBe(false);
  
      meglomaniac.secretary = "Agent Smith";
      expect("secretary" in meglomaniac).toBe(true);
  
      delete meglomaniac.henchman;
      expect("henchman" in meglomaniac).toBe(false);
    });
  
  
    it("1-6. should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }
  
      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";
  
      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe('red');
  
      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };
  
      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
    });
  });
})

describe("# Koans - About Mutability", function() {

  it("1. should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("2. should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("3. should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John");
  });

  it("4. should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe("John");
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });

});