describe("when validating with empty string", function () {
    var validator = Dolittle.validation.notNull.create({ options: {} });
    var result = validator.validate("");

    it("should be valid", function () {
        expect(result).toBe(true);
    });
});