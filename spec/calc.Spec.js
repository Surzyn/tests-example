function add(a, b) {
  return a + b;
}

describe("test for add function", function () {
  it("passing 2 and 3 should return 5", function () {
    let result = add(2, 3);
    expect(result).toBe(5);
  });

  it("passing 3 and -10 should return -7", function () {
    expect(add(3, -10)).toBe(-7);
  });

  it("passing 1 and 'pies' should return NaN", function () {
    //celowo tutaj napisalem test ktory nie przechodzi, w wyniku czego trzeba poprawic funkcje add aby
    //zwracala popwana wartosc NaN gdy jeden z parametrow nie jest liczba
    expect(add(1, "pies")).toBe(NaN);
  });
});
