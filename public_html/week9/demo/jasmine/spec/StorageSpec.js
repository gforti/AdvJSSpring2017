/**
 * Created by gforti on 4/23/14.
 */

describe("StorageHandler", function() {

    var itemKey = 'StorageHandler';

    it("should be supported by this browser", function() {
        expect(StorageHandler.IS_SUPPORTED).toBeTruthy();
    });

    it("should have a storage limit greater than zero", function() {
        expect(StorageHandler.limit).toBeGreaterThan(0);
    });

    it("should have space available to store data", function() {
        var isSpaceAvial = StorageHandler.isSpaceAvail('hello',itemKey);
        expect(isSpaceAvial).toBe(true);
    });

    it("should be able to give me the space available in a measurement", function() {
        expect( StorageHandler.spaceAvail()).toBeGreaterThan(0);
    });

    it("should be able to give me the space available in a string measurement", function() {
        localStorage.clear();
        expect( StorageHandler.spaceAvailString()).toEqual(jasmine.any(String));
    });


    it("should have a storage limit less than the limit if data is stored", function() {
        localStorage.setItem(itemKey, "unit test");
        expect(StorageHandler.limit).toBeGreaterThan(StorageHandler.spaceAvail());
        localStorage.removeItem(itemKey);
    });



});


