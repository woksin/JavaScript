describe("when value to be validated is null", function () {
    var validator = Dolittle.validation.range.create({ options: { min: 3, max: 10 } });
    var result = validator.validate(null);

    it("should not be valid", function () {
        expect(result).toBe(false);
    });
});
