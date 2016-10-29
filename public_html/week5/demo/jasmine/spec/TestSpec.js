
describe("reverseString", function() {
    
    it("should take a string and reverse it", function() {
        expect( reverseString('hello') ).toEqual('olleh');
    });
    
    it("should return the value given if not a typeof String", function() {
        expect( reverseString(null) ).toBe(null);
        expect( reverseString(0) ).toEqual(0);
    });

});


describe("getMaxOfArray", function() {
    
    it("should take an array of numbers and return the highest value", function() {
        expect( getMaxOfArray([1,2,3]) ).toEqual(3);
        expect( getMaxOfArray([1,2,3]) ).toBeGreaterThan(0);
    });
    
    it("should return the value given if not a typeof Array", function() {
        expect( getMaxOfArray(null) ).toBe(null);
        expect( getMaxOfArray(0) ).toEqual(0);
    });
    
    it("should return NaN If at least one of the arguments cannot be converted to a number.", function() {
        expect( getMaxOfArray(['a','b','c']) ).toEqual(NaN);
    });

});