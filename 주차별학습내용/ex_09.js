/* repeatString - recursion */
describe("1. repeatString - recursion", () => {
  const repeatString = (string, num) => {
    return num === 0 ? "" : num === 1 ? string : (string += repeatString(string, num - 1))
  };
  it("1-1. repeatString('code', 3) => 'codecodecode'", () => {
    expect(repeatString('code', 3)).toBe('codecodecode');
  });
  it("1-2. repeatString('기러기', 3) => '기러기기러기기러기'", () => {
    expect(repeatString('기러기', 3)).toBe('기러기'.repeat(3));
  });
  it("1-3. repeatString('what', 0) => ''", () => {
    expect(repeatString("what", 0)).toBe("");
  });
})



/* modulo - recursion */
describe("2. modulo - recursion", () => {
  function modulo(num1, num2) {
    if (num1 === 0) return 0;
    if (num2 === 0) return NaN;
    if (num1 < 0) return -modulo(-num1, num2) 
    if (num2 < 0) return modulo(num1, -num2)
    if (num1 < num2) return num1;
    return modulo(num1 - num2, num2)
  }
  // 0. 0 % 4 === 0
  // 1. 25 % 0 === NaN
  // 2. 25 % 4 === 21 % 4 === 17 % 4 === 13 % 4
  // 3. -25 % 4 === -(25 % 4)
  // 4. -25 % -4 === -(25 % 4)
  // 5. 25 % -4 === 25 % 4 

  // 6. 4 % -3 === 1

  it("2-1. 25 % 4 === 1 ", () => {
    expect(modulo(25, 4)).toBe(1);
  }),

  it("2-2. 1 % 2 === 1 ", () => {
    expect(modulo(1, 2)).toBe(1);
  }),

  it("2-3. 2 % 3 === 2 ", () => {
    expect(modulo(2, 3)).toBe(2);
  }),

  it("2-4. 12 % 5 === 2 ", () => {
    expect(modulo(12, 5)).toBe(2);
  }),

  it("2-5. 4 % -3 === 1 ", () => {
    expect(modulo(4, -3)).toBe(1);
  }),

  it("2-6. 12 % 5 === 2 ", () => {
    expect(modulo(12, 5)).toBe(2);
  }),

  it("2-7. -4 % 3 === -1 ", () => {
    expect(modulo(-4, 3)).toBe(-1);
  }),

  it("2-8. 4 % 4 === 0 ", () => {
    expect(modulo(4, 4)).toBe(0);
  }),

  it("2-9. -4 % 2 === 0 ", () => {
    expect(modulo(-4, 2)).toBe(-0);
  })
});